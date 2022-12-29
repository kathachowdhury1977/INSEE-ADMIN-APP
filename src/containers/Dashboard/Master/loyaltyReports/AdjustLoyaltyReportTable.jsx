import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { Grid } from "@mui/material";
import { RenderCellExpand } from "../../../../components/datagridtooltip/DataGridToolTip";
import { AutoCompleteSearchNew } from "../../../../components/SearchBox/AutoCompleteSearchNew";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { AutoCompleteSearch } from "../../../../components/SearchBox/AutoCompleteSearch";
import {
  DataFormat,
  DATE_FORMAT,
  millisecondsToStringDate,
} from "../../../../_helpers/commonFunctions";
import { FireExtinguisherRounded } from "@mui/icons-material";
import Axios from "axios";
import { API_URL_ADMIN, API_URL_LMS } from "../../../../Constant/index";
import ExportPopup from "../../../../components/exportPopup/ExportPopup";
// import DataGridProMUI from "../../../../../components/DataGrid/DataGridProMUI";
import DataGridProMUI from "../../../../components/DataGrid/DataGridProMUI";
import { convertToCurrencyFormat } from "../../../../_helpers";
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

const CUSTOMER_NUMBER = "Customer Number";
const SUB_DEALER_NUMBER = "Sub Dealer Number";
const BILLING_NUMBER = "Billing Number";
const PRODUCT_NUMBER = "Product Number";

export default function DealerActivityPointTable(props) {
  const classes = useStyles();
  // OPTIONS FOR CUSTOMER
  const CUSTOMER_LIST = ["Dealer", "Sub Dealer"];

  // OPTIONS FOR ACTIVITY TYPE
  const ACTIVITY_TYPE_LIST = ["Bonus", "Point Deduction"];
  const DATE_ONE_YEAR_BACK = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1)
  );
  const INITIAL_STATE = {
    activityType: "",
    customerType: "",
    startDate: DATE_ONE_YEAR_BACK,
    endDate: new Date(),
    customerNumber: "",
  };

  let [filterObj, setFilterObj] = useState(INITIAL_STATE);
  const [filteredData, setFilteredData] = useState([]);
  const [customerNumber, setCustomerNumber] = useState([]);
  const [resetCount, setCount] = useState(0);
  const [customerTypeErr, setCustomerTypeErr] = useState(false);
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
    { expireDate: "date" },
    { createDateInMileSecond: "date" },
  ];
  const ExpFilecolHeadings = [
    [
      "Activity Type",
      "Type of Customer",
      "Customer Number",
      "Customer Name",
      "Point Received",
      "Expiration Date",
      "Create Date",
      "Remarks",
    ],
  ];
  const ExpFilecolKeys = [
    "activityType",
    "customerType",
    "customerNumber",
    "customerName",
    "point",
    "expireDate",
    "createDateInMileSecond",
    "remarks",
  ];

  const [selectedValue, setSelectedValue] = React.useState(null);
  console.log(selectedValue);

  // Export Excel
  const [exportState, setExportState] = useState({
    btnName: "EXPORT",
    linkToDownload: null,
  });

  const [openExportPopup, setOpenExportPopup] = useState(null);

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
  useEffect(() => {
    setCustomerTypeErr(false);
    setCustomerNumber([]);
    setFilterObj({ ...filterObj, customerNumber: "" });
  }, [filterObj.customerType]);
  const onExportClick = () => {
    setExportState({ btnName: "Exporting..." });
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    Axios.get(
      API_URL_LMS +
        `/admin/exportManualAdjustLoyalty?fromDate=${
          filterObj.startDate
            ? moment(filterObj.startDate).format("DD-MM-YYYY")
            : null
        }&toDate=${
          filterObj.endDate
            ? moment(filterObj.endDate).format("DD-MM-YYYY")
            : null
        }&activityType=${
          filterObj.activityType ? filterObj.activityType : null
        }&customerType=${
          filterObj.customerType ? filterObj.customerType : null
        }&customerNumber=${
          filterObj.customerNumber ? filterObj.customerNumber : null
        }`,
      requestOptions
    )
      .then((response) => {
        setOpenExportPopup(true);
        setExportState({ btnName: "EXPORT", linkToDownload: response.data });
      })
      .catch((error) => {
        setExportState({ btnName: "EXPORT" });
      });
  };

  // For Test purpose
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const filterOnChange = (e) => {
    setFilterErr({});
    setFilterObj({ ...filterObj, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};
    if ("endDate" in filterObj && filterObj.endDate != null) {
      temp.startDate =
        filterObj.startDate > filterObj.endDate
          ? "Start date Should be lesser than end date"
          : "";
    }
    setFilterErr({ ...temp });
    return Object.values(temp).every((eachFieldErr) => eachFieldErr == "");
  };

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
      Axios.get(
        API_URL_LMS +
          `/admin/manualAdjustLoyalty?fromDate=${
            filterObj.startDate
              ? moment(filterObj.startDate).format("DD-MM-YYYY")
              : null
          }&toDate=${
            filterObj.endDate
              ? moment(filterObj.endDate).format("DD-MM-YYYY")
              : null
          }&activityType=${
            filterObj.activityType ? filterObj.activityType : null
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

  // function for auto select that is pass into the AutoSelectSearch Components
  function autoSelectFn(selected, name) {
    setFilterObj({
      ...filterObj,
      [name]: selected && selected.value ? selected.value : "",
    });
    // setFilterObj({ ...filterObj, [selected.name]: selected.value });
  }

  // useform is a reusable component for forms
  // for single controll real time validation of form pass true as 2nd parameter and validate function as 3rd parameter
  const { values, setValues, handleInputChange, errors, setErrors } = useForm(
    INITIAL_STATE,
    true,
    validate
  );

  const columns = [
    {
      field: "activityType",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Activity Type",
    },
    {
      field: "customerType",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Type of Customer",
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
      field: "customerName",
      headerAlign: "center",
      align: "left",
      width: 150,
      headerName: "Customer Name",
      renderCell: RenderCellExpand,
    },
    {
      field: "point",
      headerAlign: "center",
      align: "right",
      width: 150,
      headerName: "Point Received",
      renderCell: ({ row }) => {
        return <div>{convertToCurrencyFormat(row.point)}</div>;
      },
    },
    {
      field: "expireDateStr",
      headerAlign: "center",
      align: "center",
      width: 130,
      headerName: "Expiration Date",
      // renderCell: ({ row }) => {
      //   return <div>{moment(row.expiryDate).format("DD-MM-yyyy")}</div>;
      // },
    },
    {
      field: "createDateInMileSecond",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Create Date",
      type: "date",
      valueFormatter: (row) => {
        return row.value && row.value !== null
          ? moment(new Date(row.value)).format("DD-MM-yyyy")
          : "";
      },
    },
    {
      field: "remarks",
      headerAlign: "center",
      align: "left",
      width: 150,
      headerName: "Remarks",
      renderCell: RenderCellExpand,
    },
  ];

  // const CustomToolbar = () => {
  //   return (
  //     <GridToolbarContainer>
  //       <GridToolbarColumnsButton />
  //       <GridToolbarDensitySelector />
  //       <div className="ExportAndSearchContainer">
  //         <Button
  //           variant="outlined"
  //           startIcon={<DownloadIcon />}
  //           onClick={onExportClick}
  //         >
  //           {exportState.btnName}
  //         </Button>
  //       </div>
  //     </GridToolbarContainer>
  //   );
  // };

  React.useEffect(() => {
    const gridData =
      filteredData &&
      filteredData.map((item, index) => {
        return {
          ...item,
          expireDateStr: millisecondsToStringDate(item.expireDate, DATE_FORMAT),
          // creationDateStr : millisecondsToStringDate(item.createDateInMileSecond,DATE_FORMAT)
          createDateInMileSecond:
            item.createDateInMileSecond != null
              ? new Date(item.createDateInMileSecond)
              : "",
        };
      });
    setGridData(gridData);
  }, [filteredData]);

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
          <div className="myFirstT mt-1">
            {/* Filter And Searching Components here */}

            <div className="pCalFormControll">
              <Grid container spacing={2} columns={10}>
                <Grid item sm={5} md={3} xs={12} className="SelectRightPadding">
                  <Controls.Select
                    name="activityType"
                    label="Activity Type"
                    value={filterObj && filterObj.activityType}
                    onChange={filterOnChange}
                    options={ACTIVITY_TYPE_LIST}
                    minWidth="100%"
                    showSelect
                  />
                </Grid>

                <Grid item sm={5} md={3} xs={12} className="SelectRightPadding">
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

                <Grid item sm={5} md={2} xs={12} className="AutoComplete">
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

                <Grid item sm={5} md={3} xs={12} className="SelectRightPadding">
                  <Controls.DatePicker
                    name="startDate"
                    label="Create Date From"
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
                <Grid item sm={5} md={3} xs={12} className="SelectRightPadding">
                  <Controls.DatePicker
                    name="endDate"
                    label="Create Date To"
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
                    CLEAR ALL
                  </Button>
                </Grid>
              </Grid>
            </div>

            <div className="DataGridContainer">
              <DataGridProMUI
                rows={gridData ? gridData : []}
                columns={columns}
                localeText={{
                  noRowsLabel: "No reports",
                }}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                ExpFilecolHeadings={ExpFilecolHeadings}
                excelFormating={excelFormating}
                ExpFilecolKeys={ExpFilecolKeys}
                ExportFileName={"adjust_loyalty_report"}
                loading={showLoading}
              />
            </div>
          </div>
        </Paper>
      </div>
    </>
  );
}
