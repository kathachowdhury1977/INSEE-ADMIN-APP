import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@mui/material/Button";
import {
  Grid,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
} from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import moment from "moment";
import { RenderCellExpand } from "../../../../components/datagridtooltip/DataGridToolTip";
import Axios from "axios";
import { API_URL_LMS, API_URL_ADMIN } from "../../../../Constant/index";
import ExportPopup from "../../../../components/exportPopup/ExportPopup";
import { AutoCompleteSearchNew } from "../../../../components/SearchBox/AutoCompleteSearchNew";
import {
  DataFormat,
  DATE_FORMAT,
  millisecondsToStringDate,
  convertToCurrencyFormat,
} from "../../../../_helpers/commonFunctions";
import "./DealerAndSubdealerPoints.scss";
import DataGridProMUI from "../../../../components/DataGrid/DataGridProMUI";
import Controls from "./Controls";
import { useForm, Form } from "../../../../components/Form/FormComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  container: {
    maxHeight: "calc(90vh - 210px)",
  },

  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

const DEALER_NUMBER = "Dealer Number";
const SUB_DEALER_NUMBER = "Sub Dealer Number";
const BILLING_NUMBER = "Billing Number";
const PRODUCT_NUMBER = "Product Number";

const DealerAndSubdealerPoints = (props) => {
  const classes = useStyles();
  // OPTIONS FOR COMPANY
  const CUSTOMER_TYPE_LIST = ["Dealer", "Sub Dealer"];
  const DATE_ONE_YEAR_BACK = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1)
  );
  const INITIAL_STATE = {
    activityType: "",
    customerType: "",
    startDate: DATE_ONE_YEAR_BACK,
    endDate: new Date(),
    customerNumber: "",
    markDelete: [],
  };
  const names = ["Active", "Inactive"];
  // OPTIONS FOR CUSTOMER
  const CUSTOMER_LIST = ["Dealer", "Sub Dealer"];
  let [filterObj, setFilterObj] = useState(INITIAL_STATE);
  const [exportState, setExportState] = useState({
    btnName: "EXPORT",
    linkToDownload: null,
  });
  const [customerTypeErr, setCustomerTypeErr] = useState(false);
  const [openExportPopup, setOpenExportPopup] = useState(null);
  const [customerNumber, setCustomerNumber] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [resetCount, setCount] = useState(0);
  const [filterErr, setFilterErr] = useState({});
  const [pageSize, setPageSize] = useState(25);
  const [gridData, setGridData] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const clearAll = () => {
    setFilterObj(INITIAL_STATE);
    setCount((current) => current + 1);
    setFilteredData([]);
    setFilterErr({});
    setValues(INITIAL_STATE);
  };

  const excelFormating = [
    { accountCreatedDate: "date" },
    { lastPointsCreatedDate: "date" },
  ];
  const ExpFilecolHeadings = [
    [
      "Type Of Customer",
      "Group Company",
      "Sales District",
      "Customer Number",
      "Customer Name (EN)",
      "Customer Name (TH)",
      "Total Points",
      "TAX Number",
      "Mark Delete",
      "Account Created Date",
      "Last Point Created Date",
    ],
  ];
  const ExpFilecolKeys = [
    "customerType",
    "companyGroup",
    "salesDistrict",
    "customerNumber",
    "customerNameEN",
    "customerNameTH",
    "totalPoints",
    "taxNumber",
    "markDelete",
    "accountCreatedDate",
    "lastPointsCreatedDate",
  ];
  const [selectedValue, setSelectedValue] = React.useState(null);
  const rows = [];
  const CUSTOMER_NUMBER = "Customer Number";
  const filterOnChange = (e) => {
    setFilterErr({});
    setFilterObj({ ...filterObj, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};
    if ("endDate" in filterObj && filterObj.endDate != null) {
      temp.startDate =
        filterObj.startDate > filterObj.endDate
          ? "Created Date From Should be lesser than Created Date To"
          : "";
    }
    setFilterErr({ ...temp });
    return Object.values(temp).every((eachFieldErr) => eachFieldErr == "");
  };

  // useform is a reusable component for forms
  // for single controll real time validation of form pass true as 2nd parameter and validate function as 3rd parameter
  const { values, setValues, handleInputChange, errors, setErrors } = useForm(
    INITIAL_STATE,
    true,
    validate
  );

  // This Function call on search button click
  const onFilterSearch = () => {
    if (validate()) {
      const requestOptions = {
        headers: {
          "Content-Type": "application/json",
          "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
        },
      };
      setShowLoading(true);
      // /admin/dealerSubdealerPointsReport?customerType=Sub%20Dealer&fromDate=01-01-2022&isMarkDelete=false&toDate=31-12-2022%22
      Axios.get(
        API_URL_LMS +
          `/admin/dealerSubdealerPointsReport?fromDate=${
            filterObj.startDate
              ? moment(filterObj.startDate).format("DD-MM-YYYY")
              : null
          }&toDate=${
            filterObj.endDate
              ? moment(filterObj.endDate).format("DD-MM-YYYY")
              : null
          }&isMarkDelete=${
            filterObj.markDelete ? filterObj.markDelete : false
          }&customerType=${
            filterObj.customerType ? filterObj.customerType : null
          }&customerNumber=${
            // filterObj.customerNumber ? filterObj.customerNumber : null
            values.customerNumber ? values.customerNumber : null
          }`,
        requestOptions
      )
        .then((response) => {
          setShowLoading(false);
          setFilteredData(
            response.data && response.data.data ? response.data.data : []
          );
        })
        .catch((error) => {
          setShowLoading(false);
          // setExportState({ btnName: "EXPORT" });
        });
    }
  };

  const MultipleSelectCheckmarks = () => {
    const [markDelete, setmarkDelete] = useState([]);
    const handleChange = (event) => {
      const {
        target: { name, value },
      } = event;
      let selectedMenus = [...filterObj[name]];
      if (selectedMenus.findIndex((item) => item === value) > -1) {
        selectedMenus = selectedMenus.filter((item) => item !== value);
      } else {
        selectedMenus.push(value);
      }

      setFilterObj({ ...filterObj, [name]: [...selectedMenus] });
    };

    return (
      <div>
        <FormControl sx={{ minWidth: "100%" }}>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple={false}
            value={filterObj.markDelete}
            onChange={handleChange}
            input={<Controls.Select label="Mark Delete" />}
            renderValue={(selected) => selected.join(", ")}
            name={"markDelete"}
          >
            <MenuItem value="">-Select-</MenuItem>
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={filterObj.markDelete.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  };

  // function for auto select that is pass into the AutoSelectSearch Components
  function autoSelectFn(selected, name) {
    setFilterObj({
      ...filterObj,
      [name]: selected && selected.value ? selected.value : "",
    });
    // setFilterObj({ ...filterObj, [selected.name]: selected.value });
  }

  const columns = [
    {
      field: "customerType",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Type Of Customer",
    },
    {
      field: "companyGroup",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Group Company",
    },
    {
      field: "salesDistrict",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Sales District",
      // renderCell: RenderCellExpand,
    },
    {
      field: "customerNumber",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Customer Number",
      renderCell: ({ row }) => {
        return (
          <div>{row.customerNumber ? DataFormat(row.customerNumber) : ""}</div>
        );
      },
    },
    {
      field: "customerNameEN",
      headerAlign: "center",
      align: "left",
      width: 190,
      headerName: "Customer Name (EN)",
      renderCell: RenderCellExpand,
    },
    {
      field: "customerNameTH",
      headerAlign: "center",
      align: "left",
      width: 190,
      headerName: "Customer Name (TH)",
      renderCell: RenderCellExpand,
    },
    {
      field: "totalPoints",
      headerAlign: "center",
      align: "right",
      width: 130,
      headerName: "Total Point",
      renderCell: ({ row }) => {
        return (
          <div>
            {row.totalPoints
              ? convertToCurrencyFormat(row.totalPoints)
              : convertToCurrencyFormat(0)}
          </div>
        );
      },
    },
    {
      field: "taxNumber",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "TAX Number",
    },
    {
      field: "markDelete",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Mark Delete",
      renderCell: ({ row }) => {
        return (
          <div className="MarkDelChkBox">
            <Controls.Checkbox value={row.markDelete} />
          </div>
        );
      },
    },
    {
      field: "accountCreatedDate",
      headerAlign: "center",
      align: "center",
      width: 230,
      headerName: "Account Created Date",
      type: "date",
      valueFormatter: (row) => {
        return row.value && row.value !== null
          ? moment(new Date(row.value)).format("DD-MM-yyyy")
          : "";
      },
    },
    {
      field: "lastPointsCreatedDate",
      headerAlign: "center",
      align: "center",
      width: 230,
      headerName: "Last Point Created Date",
      type: "date",
      valueFormatter: (row) => {
        return row.value && row.value !== null
          ? moment(new Date(row.value)).format("DD-MM-yyyy")
          : "";
      },
    },
  ];

  React.useEffect(() => {
    const gridData =
      filteredData &&
      filteredData.map((item, index) => {
        return {
          ...item,
          // lastPointsCreatedDateStr: millisecondsToStringDate(
          //   item.lastPointsCreatedDate,
          //   DATE_FORMAT
          // ),
          // accountCreatedDateStr: millisecondsToStringDate(
          //   item.accountCreatedDate,
          //   DATE_FORMAT
          // ),
          lastPointsCreatedDate:
            item.lastPointsCreatedDate != null
              ? new Date(item.lastPointsCreatedDate)
              : "",
          accountCreatedDate:
            item.accountCreatedDate != null
              ? new Date(item.accountCreatedDate)
              : "",
        };
      });
    setGridData(gridData);
  }, [filteredData]);

  const getCustomerNumber = (e) => {
    setCustomerTypeErr(false);
    if (filterObj.customerType === "") {
      setCustomerTypeErr(true);
    }
    if (filterObj.customerType === "Dealer" && e && e.length > 0) {
      getdealer(e);
    }
    if (filterObj.customerType === "Sub Dealer" && e && e.length > 0) {
      getSubdealer(e);
    }
  };

  const getdealer = (e) => {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    Axios.get(
      API_URL_ADMIN + `search/dealerNumberSearch?searchText=${e}`,
      requestOptions
    )
      .then((response) => {
        const dealerSearchDataData =
          response.data &&
          response.data.data &&
          response.data.data.length &&
          response.data.data.map((dealerItem) => {
            return {
              label: dealerItem,
              value: dealerItem,
            };
          });
        setCustomerNumber(dealerSearchDataData);
      })
      .catch((error) => {});
  };

  const getSubdealer = (e) => {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    Axios.get(
      API_URL_ADMIN + `search/subdealerNumberSearch?searchText=${e}`,
      requestOptions
    )
      .then((response) => {
        const subDealerSearchData =
          response.data &&
          response.data.data &&
          response.data.data.length &&
          response.data.data.map((dealerItem) => {
            return {
              label: dealerItem,
              value: dealerItem,
            };
          });
        setCustomerNumber(subDealerSearchData);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    setCustomerTypeErr(false);
    setCustomerNumber([]);
    setFilterObj({ ...filterObj, customerNumber: "" });
  }, [filterObj.customerType]);

  return (
    <>
      <div className={classes.root}>
        <ExportPopup
          title={""}
          openPopup={openExportPopup}
          setOpenExportPopup={setOpenExportPopup}
          linkToDownload={exportState.linkToDownload}
        />
        <Paper className={classes.paper}>
          <div className="myFirstT">
            {/* Filter And Searching Components here */}

            <div className="pCalFormControll">
              <Grid container spacing={2} columns={10}>
                <Grid item sm={5} md={3} xs={12}>
                  {/* <Controls.Select
                    name="typeOfCustomer"
                    label="Type Of Customer"
                    value={filterObj && filterObj.activityType}
                    onChange={filterOnChange}
                    minWidth="100%"
                  /> */}
                  <Controls.Select
                    name="customerType"
                    label="Type of customer"
                    value={filterObj && filterObj.customerType}
                    onChange={filterOnChange}
                    options={CUSTOMER_LIST}
                    minWidth="100%"
                    showSelect
                  />
                </Grid>

                <Grid item sx={{ marginTop: "-6px" }} sm={5} md={3} xs={12}>
                  {/* <AutoCompleteSearchNew
                    setSelectedValue={setSelectedValue}
                    inputLabel={CUSTOMER_NUMBER}
                    name="customerNumber"
                    autoSelectFn={autoSelectFn}
                    resetCount={resetCount}
                    OPTIONS_TO_OBJECT={
                      Array.isArray(customerNumber) ? customerNumber : []
                    }
                    INITIAL_VALUE={
                      filterObj.customerNumber ? filterObj.customerNumber : ""
                    }
                    forcePopupIcon={false}
                    callSmartApiFn={(e) => getCustomerNumber(e)}
                    isSmartSearch={true}
                    error={customerTypeErr ? "Please select customer type" : ""}
                  /> */}
                  <Controls.Input
                    name="customerNumber"
                    label={CUSTOMER_NUMBER}
                    value={values.customerNumber}
                    onChange={handleInputChange}
                    size="small"
                    variant="standard"
                  />
                </Grid>

                <Grid item sm={5} md={3} xs={12} className="AutoComplete">
                  <MultipleSelectCheckmarks />
                </Grid>

                <Grid item sm={5} md={3} xs={12}>
                  <Controls.DatePicker
                    name="startDate"
                    label="Last Point Created Date From"
                    value={
                      filterObj && filterObj.startDate
                        ? filterObj.startDate
                        : DATE_ONE_YEAR_BACK
                    }
                    maxDate={new Date()}
                    onChange={filterOnChange}
                    style={{ width: "100%" }}
                    error={filterErr.startDate}
                  />
                </Grid>
                <Grid item sm={5} md={3} xs={12}>
                  <Controls.DatePicker
                    name="endDate"
                    label="Last Point Created Date To"
                    maxDate={new Date()}
                    value={
                      filterObj && filterObj.endDate
                        ? filterObj.endDate
                        : new Date()
                    }
                    onChange={filterOnChange}
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item md xs display="flex" justifyContent="flex-end">
                  <Button
                    variant="contained"
                    className="btncolor"
                    size="small"
                    sx={{ m: 1 }}
                    onClick={onFilterSearch}
                  >
                    Search
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="outlineButton"
                    size="small"
                    sx={{ m: 1 }}
                    onClick={clearAll}
                  >
                    Clear All
                  </Button>
                </Grid>
              </Grid>
            </div>

            <div className="DataGridContainer">
              <DataGridProMUI
                rows={gridData ? gridData : []}
                columns={columns}
                // components={{
                //   Toolbar: CustomToolbar,
                // }}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                pageSize={pageSize}
                ExpFilecolHeadings={ExpFilecolHeadings}
                excelFormating={excelFormating}
                ExpFilecolKeys={ExpFilecolKeys}
                // excelDataTransformConfig={excelDataTransformConfig}
                // ExportDateFormatIndexes={[10]}
                ExportFileName={"dealer_and_subdealer_points_report"}
                loading={showLoading}
              />
            </div>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default DealerAndSubdealerPoints;
