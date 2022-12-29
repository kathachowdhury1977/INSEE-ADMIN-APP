import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { Grid } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import {
  DataFormat,
  DATE_FORMAT,
  millisecondsToStringDate,
  handleZero,
} from "../../../../_helpers/commonFunctions";

import {
  convertToCurrencyFormat,
  convertToCurrencyFormatQuantaty,
} from "../../../../_helpers";
import Controls from "./Controls";
import Axios from "axios";
import { API_URL_ADMIN, API_URL_LMS } from "../../../../Constant/index";
import ExportPopup from "../../../../components/exportPopup/ExportPopup";
import { RenderCellExpand } from "../../../../components/datagridtooltip/DataGridToolTip";
import DataGridProMUI from "../../../../components/DataGrid/DataGridProMUI";
import { validate } from "@material-ui/pickers";
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
const BILLING_NUMBER = "Billing Number";
const PRODUCT_NUMBER = "Product Number";

export default function DealerActivityPointTable(props) {
  const classes = useStyles();

  // OPTIONS FOR COMPANY
  const COMPANY_LIST = ["SCCC", "CONWOOD"];

  // OPTIONS FOR ACTIVITY TYPE
  const ACTIVE_TYPE_LIST = [
    "Point Collection",
    "Point Deduction",
    "Redemption",
    "Bonus",
  ];
  const DATE_ONE_YEAR_BACK = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1)
  );

  const INITIAL_STATE = {
    company: null,
    activityType: null,
    startDate: DATE_ONE_YEAR_BACK,
    endDate: new Date(),
    dealerNumber: "",
    billingNumber: "",
    productNumber: "",
  };

  const [filterObj, setFilterObj] = useState(INITIAL_STATE);
  const [filteredData, setFilteredData] = useState([]);
  const [resetCount, setCount] = useState(0);
  const [dealerNumer, setDealerNumer] = useState([]);
  const [billingNumber, setBillingNumber] = useState([]);
  const [productNumber, setProductNumber] = useState([]);
  const [pageSize, setPageSize] = useState(25);
  const [gridData, setGridData] = useState([]);
  const [filterErr, setFilterErr] = useState({});
  const [showLoading, setShowLoading] = useState(false);

  const clearAll = () => {
    setFilterObj(INITIAL_STATE);
    setCount((current) => current + 1);
    setFilteredData([]);
    setFilterErr({});
    setValues(INITIAL_STATE);
  };

  const excelFormating = [
    { billingDate: "date" },
    { expiryDate: "date" },
    { createDateInMileSecond: "date" },
  ];

  const ExpFilecolHeadings = [
    [
      "Company",
      "Activity Type",
      "Dealer Number",
      "Dealer Name",
      "Billing Number",
      "Billing Date",
      "Product Number",
      "Product Name",
      "Quantity (Units)",
      "Point Received",
      "Expiration Date",
      "Create Date",
      "Remarks",
    ],
  ];
  const ExpFilecolKeys = [
    "company",
    "activityType",
    "accountNumber",
    "accountName",
    "billingNumber",
    "billingDate",
    "productCode",
    "productName",
    "quantity",
    "totalPoints",
    "expiryDate",
    "createDateInMileSecond",
    "remarks",
  ];

  const [selectedValue, setSelectedValue] = React.useState(null);
  // Export Excel
  const [exportState, setExportState] = useState({
    btnName: "EXPORT",
    linkToDownload: null,
  });
  const [openExportPopup, setOpenExportPopup] = useState(null);

  const filterOnChange = (e) => {
    setFilterErr({});
    setFilterObj({ ...filterObj, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};
    if ("endDate" in filterObj && filterObj.endDate !== null) {
      temp.startDate =
        filterObj.startDate > filterObj.endDate
          ? "Create Date From Should be lesser than Create Date TO"
          : "";
    }
    setFilterErr({ ...temp });
    return Object.values(temp).every((eachFieldErr) => eachFieldErr === "");
  };

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
          `admin/activityPointsTransactions?isDealer=${true}&fromDate=${
            filterObj.startDate
              ? moment(filterObj.startDate).format("DD-MM-YYYY")
              : null
          }&toDate=${
            filterObj.endDate
              ? moment(filterObj.endDate).format("DD-MM-YYYY")
              : null
          }&company=${filterObj.company === "All" ? null : filterObj.company}
          &activityType=${
            filterObj.activityType === "All" ? null : filterObj.activityType
          }&dealerNumber=${
            // filterObj.dealerNumber ? handleZero(filterObj.dealerNumber) : null
            values.dealerNumber ? values.dealerNumber : null
          }
          &billingNumber=${
            // filterObj.billingNumber ? filterObj.billingNumber : null
            values.billingNumber ? values.billingNumber : null
          }&productNumber=${
            // filterObj.productNumber ? filterObj.productNumber : null
            values.productNumber ? values.productNumber : null
          }&isDealer=${true}`,
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
          console.log(error);
          // setExportState({ btnName: "EXPORT" });
        });
    }
  };

  function autoSelectFn(selected, name) {
    setFilterObj({
      ...filterObj,
      [name]: selected && selected.value ? selected.value : "",
    });
    // setFilterObj({ ...filterObj, [selected.name]: selected.value });
  }

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
        setDealerNumer(dealerSearchDataData);
      })
      .catch((error) => {});
  };

  const getBillingNumber = (e) => {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };

    Axios.get(
      API_URL_LMS + `admin/billingNumberSearch?searchText=${e}`,
      requestOptions
    )
      .then((response) => {
        const billingData =
          response.data &&
          response.data.data &&
          response.data.data.length &&
          response.data.data.map((dealerItem) => {
            return {
              label: dealerItem,
              value: dealerItem,
            };
          });
        setBillingNumber(billingData);
      })
      .catch((error) => {});
  };

  const getProductNumber = (e) => {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    // /lms/admin/productNumberSearch/searchText=
    Axios.get(
      API_URL_LMS + `admin/productNumberSearch?searchText=${e}`,
      requestOptions
    )
      .then((response) => {
        const productData =
          response.data &&
          response.data.data &&
          response.data.data.length &&
          response.data.data.map((dealerItem) => {
            return {
              label: dealerItem,
              value: dealerItem,
            };
          });
        setProductNumber(productData);
      })
      .catch((error) => {});
  };

  const columns = [
    {
      field: "company",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Company",
    },
    {
      field: "activityType",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Activity Type",
    },
    {
      field: "accountNumber",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Dealer Number",
      renderCell: ({ row }) => {
        return (
          <div>{row.accountNumber ? DataFormat(row.accountNumber) : ""}</div>
        );
      },
    },
    {
      field: "accountName",
      headerAlign: "center",
      align: "left",
      width: 150,
      headerName: "Dealer Name",
      renderCell: RenderCellExpand,
    },
    {
      field: "billingNumber",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Billing Number",
    },
    {
      field: "billingDate",
      headerAlign: "center",
      align: "center",
      width: 100,
      headerName: "Billing Date",
      type: "date",
      valueFormatter: (row) => {
        return row.value && row.value !== null
          ? moment(new Date(row.value)).format("DD-MM-yyyy")
          : "";
      },
    },
    {
      field: "productCode",
      headerAlign: "center",
      align: "center",
      width: 200,
      headerName: "Product Number",
      renderCell: ({ row }) => {
        return <div>{row.productCode ? DataFormat(row.productCode) : ""}</div>;
      },
    },
    {
      field: "productNameEN",
      headerAlign: "center",
      align: "left",
      width: 200,
      headerName: "Product Name",
      renderCell: RenderCellExpand,
    },
    {
      field: "quantity",
      headerAlign: "center",
      align: "right",
      width: 130,
      headerName: "Quantity (Units)",
      renderCell: ({ row }) => {
        return (
          <div>
            {row.quantity ? convertToCurrencyFormatQuantaty(row.quantity) : ""}
          </div>
        );
      },
    },
    {
      field: "totalPoints",
      headerAlign: "center",
      align: "right",
      width: 150,
      headerName: "Point Received",
      renderCell: ({ row }) => {
        return (
          <div>
            {row.totalPoints ? convertToCurrencyFormat(row.totalPoints) : ""}
          </div>
        );
      },
    },
    {
      field: "expireDateStr",
      headerAlign: "center",
      align: "center",
      width: 130,
      headerName: "Expiration Date",
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

  // useform is a reusable component for forms
  // for single controll real time validation of form pass true as 2nd parameter and validate function as 3rd parameter
  const { values, setValues, handleInputChange, errors, setErrors } = useForm(
    // INITIAL_FORM_VALUES,
    INITIAL_STATE,
    true,
    validate
  );

  React.useEffect(() => {
    const gridData =
      filteredData &&
      filteredData.map((item, index) => {
        return {
          ...item,
          // billingDateStr: millisecondsToStringDate(
          //   item.billingDate,
          //   DATE_FORMAT
          // ),
          // expireDateStr: millisecondsToStringDate(item.expireDate, DATE_FORMAT),
          // createDateInMileSecondStr: millisecondsToStringDate(
          //   item.createDateInMileSecond,
          //   DATE_FORMAT
          // ),
          billingDate:
            item.billingDate != null ? new Date(item.billingDate) : "",
          createDateInMileSecond:
            item.createDateInMileSecond != null
              ? new Date(item.createDateInMileSecond)
              : "",
          productName: item.productName != null ? item.productName : "",
          billingNumber: item.billingNumber != null ? +item.billingNumber : "",
        };
      });
    setGridData(gridData);
  }, [filteredData]);

  return (
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
              <Grid item sm={5} md={2} xs={12} className="SelectRightPadding">
                <Controls.Select
                  name="company"
                  label="Company"
                  value={filterObj && filterObj.company}
                  onChange={filterOnChange}
                  options={COMPANY_LIST}
                  minWidth="100%"
                />
              </Grid>
              <Grid item sm={5} md={2} xs={12} className="SelectRightPadding">
                <Controls.Select
                  name="activityType"
                  label="Activity Type"
                  value={filterObj && filterObj.activityType}
                  onChange={filterOnChange}
                  options={ACTIVE_TYPE_LIST}
                  minWidth="100%"
                />
              </Grid>
              <Grid item sm={5} md={2} xs={12} className="AutoComplete">
                {/* <AutoCompleteSearchNew
                  setSelectedValue={setSelectedValue}
                  inputLabel={DEALER_NUMBER}
                  name="dealerNumber"
                  autoSelectFn={autoSelectFn}
                  resetCount={resetCount}
                  OPTIONS_TO_OBJECT={
                    Array.isArray(dealerNumer) ? dealerNumer : []
                  }
                  INITIAL_VALUE={filterObj.dealerNumber}
                  forcePopupIcon={false}
                  callSmartApiFn={(e) => getdealer(e)}
                  isSmartSearch={true}
                /> */}
                <Controls.Input
                  name="dealerNumber"
                  label={DEALER_NUMBER}
                  value={values.dealerNumber}
                  onChange={handleInputChange}
                  size="small"
                  variant="standard"
                />
              </Grid>
              <Grid item sm={5} md={2} xs={12} className="AutoComplete">
                {/* <AutoCompleteSearchNew
                  setSelectedValue={setSelectedValue}
                  inputLabel={BILLING_NUMBER}
                  name="billingNumber"
                  autoSelectFn={autoSelectFn}
                  resetCount={resetCount}
                  OPTIONS_TO_OBJECT={
                    Array.isArray(billingNumber) ? billingNumber : []
                  }
                  INITIAL_VALUE={filterObj.billingNumber}
                  forcePopupIcon={false}
                  callSmartApiFn={(e) => getBillingNumber(e)}
                  isSmartSearch={true}
                /> */}
                <Controls.Input
                  name="billingNumber"
                  label={BILLING_NUMBER}
                  value={values.billingNumber}
                  onChange={handleInputChange}
                  size="small"
                  variant="standard"
                />
              </Grid>

              <Grid item sm={5} md={2} xs={12} className="AutoComplete">
                {/* <AutoCompleteSearchNew
                  setSelectedValue={setSelectedValue}
                  inputLabel={PRODUCT_NUMBER}
                  name="productNumber"
                  autoSelectFn={autoSelectFn}
                  resetCount={resetCount}
                  OPTIONS_TO_OBJECT={
                    Array.isArray(productNumber) ? productNumber : []
                  }
                  INITIAL_VALUE={filterObj.productNumber}
                  forcePopupIcon={false}
                  callSmartApiFn={(e) => getProductNumber(e)}
                  isSmartSearch={true}
                /> */}
                <Controls.Input
                  name="productNumber"
                  label={PRODUCT_NUMBER}
                  value={values.productNumber}
                  onChange={handleInputChange}
                  size="small"
                  variant="standard"
                />
              </Grid>

              <Grid item sm={5} md={2} xs={12} className="SelectRightPadding">
                <Controls.DatePicker
                  name="startDate"
                  label="Create Date From"
                  value={
                    filterObj.startDate
                      ? filterObj.startDate
                      : DATE_ONE_YEAR_BACK
                  }
                  maxDate={new Date()}
                  onChange={filterOnChange}
                  style={{ width: "100%" }}
                  error={filterErr.startDate}
                />
              </Grid>
              <Grid
                item
                sm={5}
                md={2}
                xs={12}
                sx={{ pr: 1 }}
                className="SelectRightPadding"
              >
                <Controls.DatePicker
                  name="endDate"
                  label="Create Date To"
                  maxDate={new Date()}
                  value={filterObj.endDate ? filterObj.endDate : new Date()}
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
              rows={gridData}
              columns={columns}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              pageSize={pageSize}
              // rowsPerPageOptions={[20, 40, 60, 80, 100]}
              excelFormating={excelFormating}
              ExpFilecolKeys={ExpFilecolKeys}
              ExpFilecolHeadings={ExpFilecolHeadings}
              ExportFileName={"dealer_activity_point"}
              loading={showLoading}
            />
          </div>
        </div>
      </Paper>
    </div>
  );
}
