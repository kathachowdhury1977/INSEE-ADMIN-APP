import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { Grid } from "@mui/material";
import { useForm, Form } from "../../../../components/Form/FormComponent";
import Controls from "../../../Loyalty/subDealerManagement/subdealer/Controls";
import { RenderCellExpand } from "../../../../components/datagridtooltip/DataGridToolTip";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { AutoCompleteSearchNew } from "../../../../components/SearchBox/AutoCompleteSearchNew";
import {
  DataFormat,
  DATE_FORMAT,
  millisecondsToStringDate,
} from "../../../../_helpers/commonFunctions";
import Axios from "axios";
import { API_URL_LMS, API_URL_ADMIN } from "../../../../Constant/index";
import ExportPopup from "../../../../components/exportPopup/ExportPopup";
import DataGridProMUI from "../../../../components/DataGrid/DataGridProMUI";
import {
  convertToCurrencyFormat,
  convertToCurrencyFormatQuantaty,
  handleZero,
} from "../../../../_helpers";

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

export default function SubDealerActivityTable(props) {
  const classes = useStyles();

  const COMPANY_LIST = [
    { code: "All", description: "All" },
    { code: "SCCC", description: "SCCC" },
    { code: "CONWOOD", description: "CONWOOD" },
  ];

  const ALLOCATION_TYPE_LIST = [
    { code: "All", description: "All" },
    { code: "Auto", description: "Auto Allocated" },
    { code: "Manual", description: "Manual Allocated" },
  ];
  const ACTIVITY_TYPE_LIST = [
    { code: "All", description: "All" },
    { code: "Redemption", description: "Redemption" },
    { code: "Point Collection", description: "Point Collection" },
    { code: "Point Deduction", description: "Point Deduction" },
    { code: "Bonus", description: "Bonus" },
  ];

  const DATE_ONE_YEAR_BACK = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1)
  );
  const INITIAL_STATE = {
    company: "All",
    allocationType: "All",
    activityType: "All",
    startDate: DATE_ONE_YEAR_BACK,
    endDate: new Date(),
    dealerNumber: "",
    subDealerNumber: "",
    billingNumber: "",
    productNumber: "",
  };

  let [filterObj, setFilterObj] = useState(INITIAL_STATE);
  const [filteredData, setFilteredData] = useState([]);
  const [resetCount, setCount] = useState(0);
  const [dealerNumer, setDealerNumer] = useState([]);
  const [subDealerNumber, setSubDealerNumber] = useState([]);
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

  const [selectedValue, setSelectedValue] = React.useState(null);
  const excelFormating = [
    { billingDate: "date" },
    { expiryDate: "date" },
    { createDateInMileSecond: "date" },
  ];
  const ExpFilecolHeadings = [
    [
      "Company",
      "Activity Type",
      "Sub Dealer Number",
      "Sub Dealer Name",
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
      "Allocation Type",
    ],
  ];
  const ExpFilecolKeys = [
    "company",
    "activityType",
    "subDealerId",
    "subDealerName",
    "dealerNumber",
    "dealerName",
    "billingNumber",
    "billingDate",
    "productCode",
    "productName",
    "quantity(Units)",
    "totalPoints",
    "expiryDate",
    "createDateInMileSecond",
    "remarks",
    "allocationType",
  ];

  // Export Excel
  const [openExportPopup, setOpenExportPopup] = useState(null);
  const [exportState, setExportState] = useState({
    btnName: "EXPORT",
    linkToDownload: null,
  });
  console.log("filterObj", filterObj);

  // let rows = [
  //   {
  //     id: 1,
  //     company: "CONWOOD",
  //     allocationType: "Manual Allocated",
  //     activityType: "Point Collection",
  //     dealerNumber: 13223,
  //     dealerName: "Ananda",
  //     subDealerNumber: 34545454,
  //     subDealerName: "jhon",
  //     remarks: "testing",
  //     "quantity(Units)": getQuantityFormattedValue("2345678.09876"),
  //     billingNumber: 454545,
  //     billingDate: "2024-02-02T07:50:04.410Z",
  //     productNumber: "000000000088520000",
  //     productName: "Clinker type I in Bulk (Trading)",
  //     pointReceived: getPointsFormattedValue("56789.0000"),
  //     expiryDate: "2024-02-02T07:50:04.410Z",
  //     createdDate: "2022-08-27T11:33:00.000Z",
  //     allocated: true,
  //   },
  //   {
  //     id: 2,
  //     company: "SCCC",
  //     allocationType: "Auto Allocated",
  //     activityType: "Point Collection",
  //     dealerNumber: 3567,
  //     dealerName: "Kamal",
  //     subDealerNumber: 34545454,
  //     subDealerName: "jhon",
  //     remarks: "testing",
  //     "quantity(Units)": getQuantityFormattedValue("7890"),
  //     billingNumber: 4454545,
  //     billingDate: "2024-02-02T07:50:04.410Z",
  //     productNumber: "000000000088529898",
  //     productName: "Clinker new name",
  //     pointReceived: getPointsFormattedValue("987.098"),
  //     expiryDate: "2024-02-02T07:50:04.410Z",
  //     createdDate: "2023-02-02T07:50:04.410Z",
  //     allocated: false,
  //   },
  //   {
  //     id: 3,
  //     company: "CONWOOD",
  //     allocationType: "Manual Allocated",
  //     activityType: "Point Deduction",
  //     dealerNumber: 13223,
  //     dealerName: "Ananda",
  //     subDealerNumber: 34545454,
  //     subDealerName: "jhon",
  //     remarks: "testing",
  //     "quantity(Units)": getQuantityFormattedValue("00000.456"),
  //     billingNumber: 444434,
  //     billingDate: "2024-02-02T07:50:04.410Z",
  //     productNumber: "000000000088520000",
  //     productName: "Clinker type I in Bulk (Trading)",
  //     pointReceived: getPointsFormattedValue("456.567"),
  //     expiryDate: "2024-02-02T07:50:04.410Z",
  //     createdDate: "2022-08-27T11:33:00.000Z",
  //     allocated: true,
  //   },
  //   {
  //     id: 4,
  //     company: "CONWOOD",
  //     allocationType: "Manual Allocated",
  //     activityType: "Point Collection",
  //     dealerNumber: 13223,
  //     dealerName: "Ananda",
  //     subDealerNumber: 34545454,
  //     subDealerName: "jhon",
  //     remarks: "testing",
  //     "quantity(Units)": getQuantityFormattedValue("34567"),
  //     billingNumber: 454545,
  //     billingDate: "2024-02-02T07:50:04.410Z",
  //     productNumber: "000000000088520000",
  //     productName: "Clinker type I in Bulk (Trading)",
  //     pointReceived: getPointsFormattedValue("67.098765"),
  //     expiryDate: "2024-02-02T07:50:04.410Z",
  //     createdDate: "2022-08-27T11:33:00.000Z",
  //     allocated: true,
  //   },

  //   {
  //     id: 5,
  //     company: "CONWOOD",
  //     allocationType: "Manual Allocated",
  //     activityType: "Point Collection",
  //     dealerNumber: 13223,
  //     dealerName: "Ananda",
  //     subDealerNumber: 34545454,
  //     subDealerName: "jhon",
  //     remarks: "testing",
  //     "quantity(Units)": getQuantityFormattedValue("456789"),
  //     billingNumber: 454545,
  //     billingDate: "2024-02-02T07:50:04.410Z",
  //     productNumber: "000000000088520000",
  //     productName: "Clinker type I in Bulk (Trading)",
  //     pointReceived: getPointsFormattedValue("0987.567"),
  //     expiryDate: "2024-02-02T07:50:04.410Z",
  //     createdDate: "2022-08-27T11:33:00.000Z",
  //     allocated: true,
  //   },
  // ];

  const filterOnChange = (e) => {
    setFilterErr({});
    setFilterObj({ ...filterObj, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};
    if ("endDate" in filterObj && filterObj.endDate != null) {
      temp.startDate =
        filterObj.startDate > filterObj.endDate
          ? "Create Date From Should be lesser than Create Date TO"
          : "";
    }
    setFilterErr({ ...temp });
    return Object.values(temp).every((eachFieldErr) => eachFieldErr === "");
  };

  const { values, setValues, handleInputChange, errors, setErrors } = useForm(
    // INITIAL_FORM_VALUES,
    INITIAL_STATE,
    true,
    validate
  );

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
        setSubDealerNumber(subDealerSearchData);
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

  // This Function call on search button click
  // const onFilterSearch = () => {
  //   // check object empty or not
  //   let isEmptyObj = !Object.keys(filterObj).length;
  //   if (isEmptyObj) return 0;

  //   // check object empty or not
  //   const existFilter = removeObjectEmpty(filterObj);
  //   isEmptyObj = !Object.keys(existFilter).length;
  //   if (isEmptyObj) return 0;

  //   // Apply Filter and set row to show list
  //   let filterRows = rows;
  //   if (existFilter.company) {
  //     filterRows = rows.filter((item) => item.company === existFilter.company);
  //   }

  //   if (existFilter.activityType) {
  //     filterRows = filterRows.filter(
  //       (item) => item.activityType === existFilter.activityType
  //     );
  //   }

  //   if (existFilter.allocationType) {
  //     filterRows = filterRows.filter(
  //       (item) => item.allocationType === existFilter.allocationType
  //     );
  //   }

  //   if (existFilter.dealerNumber) {
  //     filterRows = filterRows.filter(
  //       (item) => item.dealerNumber === Number(existFilter.dealerNumber)
  //     );
  //   }

  //   if (existFilter.billingNumber) {
  //     filterRows = filterRows.filter(
  //       (item) => item.billingNumber === Number(existFilter.billingNumber)
  //     );
  //   }

  //   if (existFilter.productNumber) {
  //     filterRows = filterRows.filter(
  //       (item) => item.productNumber === existFilter.productNumber
  //     );
  //   }

  //   if (existFilter.startDate && existFilter.endDate) {
  //     filterRows = filterRows.filter(function (item) {
  //       var itemTime = getDateTime(dateFormater(new Date(item.createdDate)));
  //       var from = getDateTime(dateFormater(new Date(existFilter.startDate)));
  //       var to = getDateTime(dateFormater(new Date(existFilter.endDate)));
  //       return itemTime >= from && itemTime <= to;
  //     });
  //   }
  //   setFilteredData(filterRows);
  // };
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
          `admin/activityPointsTransactions?isDealer=${false}&fromDate=${
            filterObj.startDate
              ? moment(filterObj.startDate).format("DD-MM-YYYY").trim()
              : null
          }&toDate=${
            filterObj.endDate
              ? moment(filterObj.endDate).format("DD-MM-YYYY").trim()
              : null
          }&allocationType=${filterObj.allocationType.trim()}
          &dealerNumber=${
            // filterObj.dealerNumber
            //   ? handleZero(filterObj.dealerNumber).trim()
            //   : null
            values.dealerNumber ? values.dealerNumber : null
          }&subDealerNumber=${
            values.subDealerNumber ? values.subDealerNumber : null
            // filterObj.subDealerNumber.trim() || null
          }&company=${
            filterObj.company === "All" ? null : filterObj.company.trim()
          }&activityType=${
            filterObj.activityType === "All"
              ? null
              : String(filterObj.activityType).trim()
          }&billingNumber=${
            // filterObj.billingNumber.trim() || null
            values.billingNumber ? values.billingNumber : null
          }&productNumber=${
            // filterObj.productNumber.trim() || null
            values.productNumber ? values.productNumber : null
          }&isDealer=${false}`,
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
      field: "subDealerId",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Sub Dealer Number",
      renderCell: ({ row }) => {
        return <div>{row.subDealerId ? DataFormat(row.subDealerId) : ""}</div>;
      },
    },
    {
      field: "subDealerName",
      headerAlign: "center",
      align: "left",
      width: 150,
      headerName: "Sub Dealer Name",
      renderCell: RenderCellExpand,
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
    },
    {
      field: "productName",
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
      field: "expiryDate",
      headerAlign: "center",
      align: "center",
      width: 130,
      headerName: "Expiration Date",
      type: "date",
      valueFormatter: (row) => {
        return row.value && row.value !== null
          ? moment(new Date(row.value)).format("DD-MM-yyyy")
          : "";
      },
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
    {
      field: "allocationType",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Allocation Type",
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
          // billingDateStr: millisecondsToStringDate(
          //   item.billingDate,
          //   DATE_FORMAT
          // ),
          // expireDateStr: millisecondsToStringDate(item.npm s, DATE_FORMAT),
          billingDate:
            item.billingDate != null ? new Date(item.billingDate) : "",
          expiryDate: item.expiryDate != null ? new Date(item.expiryDate) : "",
          createDateInMileSecond:
            item.createDateInMileSecond != null
              ? new Date(item.createDateInMileSecond)
              : "",
          productName: item.productName != null ? item.productName : "",
          company: item.company != null ? item.company : "",
          activityType: item.activityType != null ? item.activityType : "",
          remarks: item.remarks != null ? item.remarks : "",
          subDealerName: item.subDealerName != null ? item.subDealerName : "",
          accountNumber: item.accountNumber != null ? item.accountNumber : "",
          accountName: item.accountName != null ? item.accountName : "",
          billingNumber: item.billingNumber != null ? +item.billingNumber : "",
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
            <div className="pCalFormControll">
              <Grid container spacing={2} columns={12}>
                <Grid item sm={6} md={2} xs={12} className="SelectRightPadding">
                  <Controls.Select
                    name="company"
                    label="Company"
                    value={filterObj && filterObj.company}
                    onChange={filterOnChange}
                    optionCode="code"
                    optionLabel="description"
                    options={COMPANY_LIST}
                    minWidth="100%"
                  />
                </Grid>

                <Grid item sm={6} md={2} xs={12} className="SelectRightPadding">
                  <Controls.Select
                    name="activityType"
                    label="Activity Type"
                    value={filterObj && filterObj.activityType}
                    onChange={filterOnChange}
                    optionCode="code"
                    optionLabel="description"
                    options={ACTIVITY_TYPE_LIST}
                    minWidth="100%"
                  />
                </Grid>

                <Grid item sm={6} md={2} xs={12} className="AutoComplete">
                  <Controls.Input
                    name="subDealerNumber"
                    label={SUB_DEALER_NUMBER}
                    value={values.subDealerNumber}
                    onChange={handleInputChange}
                    size="small"
                    variant="standard"
                  />
                  {/* <AutoCompleteSearchNew
                    setSelectedValue={setSelectedValue}
                    inputLabel={SUB_DEALER_NUMBER}
                    name="subDealerNumber"
                    autoSelectFn={autoSelectFn}
                    resetCount={resetCount}
                    OPTIONS_TO_OBJECT={
                      Array.isArray(subDealerNumber) ? subDealerNumber : []
                    }
                    INITIAL_VALUE={filterObj.subDealerNumber}
                    forcePopupIcon={false}
                    callSmartApiFn={(e) => getSubdealer(e)}
                    isSmartSearch={true}
                  /> */}
                </Grid>

                <Grid item sm={6} md={2} xs={12} className="AutoComplete">
                  <Controls.Input
                    name="dealerNumber"
                    label={DEALER_NUMBER}
                    value={values.dealerNumber}
                    onChange={handleInputChange}
                    size="small"
                    variant="standard"
                  />
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
                </Grid>

                <Grid item sm={6} md={2} xs={12} className="AutoComplete">
                  <Controls.Input
                    name="billingNumber"
                    label={BILLING_NUMBER}
                    value={values.billingNumber}
                    onChange={handleInputChange}
                    size="small"
                    variant="standard"
                  />
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
                </Grid>

                <Grid item sm={6} md={2} xs={12} className="AutoComplete">
                  <Controls.Input
                    name="productNumber"
                    label={PRODUCT_NUMBER}
                    value={values.productNumber}
                    onChange={handleInputChange}
                    size="small"
                    variant="standard"
                  />
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
                </Grid>

                <Grid item sm={6} md={2} xs={12} className="SelectRightPadding">
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
                <Grid item sm={6} md={2} xs={12} className="SelectRightPadding">
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

                <Grid item sm={6} md={2} xs={12}>
                  <Controls.Select
                    name="allocationType"
                    label="Allocation Type"
                    value={filterObj && filterObj.allocationType}
                    onChange={filterOnChange}
                    optionCode="code"
                    optionLabel="description"
                    options={ALLOCATION_TYPE_LIST}
                    minWidth="100%"
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
                //   ...(window.innerWidth > 400 && { Toolbar: CustomToolbar }),
                // }}
                localeText={{
                  noRowsLabel: "No reports",
                }}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                loading={showLoading}
                // rowsPerPageOptions={[20, 40, 60, 80, 100]}
                // componentsProps={{
                //   pagination: {
                //     labelRowsPerPage: "Reports Per Page",
                //   },
                // }}
                ExpFilecolHeadings={ExpFilecolHeadings}
                excelFormating={excelFormating}
                ExpFilecolKeys={ExpFilecolKeys}
                // excelDataTransformConfig={excelDataTransformConfig}
                // ExportDateFormatIndexes={[10]}
                ExportFileName={"subdealer_activity_point_report"}
              />
            </div>
          </div>
        </Paper>
      </div>
    </>
  );
}
