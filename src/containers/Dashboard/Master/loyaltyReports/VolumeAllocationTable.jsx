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
import { AutoCompleteSearch } from "../../../../components/SearchBox/AutoCompleteSearch";
import { AutoCompleteSearchNew } from "../../../../components/SearchBox/AutoCompleteSearchNew";
import {
  DataFormat,
  DATE_FORMAT,
  millisecondsToStringDate,
} from "../../../../_helpers/commonFunctions";
import Axios from "axios";
import { API_URL_LMS, API_URL_ADMIN } from "../../../../Constant/index";
import ExportPopup from "../../../../components/exportPopup/ExportPopup";
import { RenderCellExpand } from "../../../../components/datagridtooltip/DataGridToolTip";
import DataGridProMUI from "../../../../components/DataGrid/DataGridProMUI";
import {
  convertToCurrencyFormat,
  convertToCurrencyFormatQuantaty,
  handleZero,
} from "../../../../_helpers";
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

export default function DealerActivityPointTable(props) {
  const classes = useStyles();
  // OPTIONS FOR COMPANY

  const COMPANY_LIST = [
    { code: "All", description: "All" },
    { code: "SCCC", description: "SCCC" },
    { code: "CONWOOD", description: "CONWOOD" },
  ];

  // OPTIONS FOR ACTIVITY TYPE
  const ALLOCATION_TYPE_LIST = [
    { code: "All", description: "All" },
    { code: "Auto", description: "Auto Allocated" },
    { code: "Manual", description: "Manual Allocated" },
  ];
  const DATE_ONE_YEAR_BACK = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1)
  );
  const INITIAL_STATE = {
    company: "All",
    allocationType: "All",
    startDate: DATE_ONE_YEAR_BACK,
    endDate: new Date(),
    dealerNumber: "",
    subDealerNumber: "",
    billingNumber: "",
    productNumber: "",
  };

  let [filterObj, setFilterObj] = useState(INITIAL_STATE);
  const [filteredData, setFilteredData] = useState([]);
  const [dealerNumer, setDealerNumer] = useState([]);
  const [subDealerNumber, setSubDealerNumber] = useState([]);
  const [billingNumber, setBillingNumber] = useState([]);
  const [productNumber, setProductNumber] = useState([]);
  const [resetCount, setCount] = useState(0);
  const [filterErr, setFilterErr] = useState({});
  const [pageSize, setPageSize] = useState(25);
  const [gridData, setGridData] = useState([]);
  const excelFormating = [
    { expirationDate: "date" },
    { creationDate: "date" },
    { billingDate: "date" },
  ];
  const ExpFilecolHeadings = [
    [
      "Company",
      "Dealer Number",
      "Dealer Name",
      "Sub Dealer Number",
      "Sub Dealer Name",
      "Billing Number",
      "Billing Date",
      "Product Number",
      "Product Name",
      "Billing Month",
      "Billing Year",
      "Allocated",
      "Point Received",
      "Expiration Date",
      "Create Date",
      "Allocation Type",
    ],
  ];
  const ExpFilecolKeys = [
    "company",
    "customerId",
    "customerName",
    "subDealerId",
    "subDealerName",
    "billingNumber",
    "billingDate",
    "productCode",
    "productName",
    "billingMonth",
    "billingYear",
    "selectedQuantity",
    "pointsReceived",
    "expirationDate",
    "creationDate",
    "allocationType",
  ];

  const clearAll = () => {
    setFilterObj(INITIAL_STATE);
    setCount((current) => current + 1);
    setFilteredData([]);
    setFilterErr({});
    setValues(INITIAL_STATE);
  };

  const [selectedValue, setSelectedValue] = React.useState(null);
  // Export Excel
  const [exportState, setExportState] = useState({
    btnName: "EXPORT",
    linkToDownload: null,
  });
  const [openExportPopup, setOpenExportPopup] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  const onExportClick = () => {
    setExportState({ btnName: "EXPORTING..." });
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    Axios.get(
      API_URL_LMS +
        `admin/exportVolumeAllocateTransactions?fromDate=${
          filterObj.startDate
            ? moment(filterObj.startDate).format("DD-MM-YYYY")
            : null
        }&toDate=${
          filterObj.endDate
            ? moment(filterObj.endDate).format("DD-MM-YYYY")
            : null
        }&allocationType=${filterObj.allocationType}&dealerNumber=${
          // filterObj.dealerNumber ? filterObj.dealerNumber : null
          values.dealerNumber ? values.dealerNumber : null
        }&subDealerNumber=${
          // filterObj.subDealerNumber ? filterObj.subDealerNumber : null
          values.subDealerNumber ? values.subDealerNumber : null
        }&company=${
          filterObj.company === "All" ? null : filterObj.company
        }&billingNumber=${
          // filterObj.billingNumber ? filterObj.billingNumber : null
          values.billingNumber ? values.billingNumber : null
        }&productNumber=${
          // filterObj.productNumber ? filterObj.productNumber : null,
          values.productNumber ? values.productNumber : null
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

  const getPointsFormattedValue = (number = 0) => {
    return Intl.NumberFormat("en-US").format(Number(number).toFixed(2));
  };

  // For Test purpose
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  // This Row value will come from backend leter

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
    return Object.values(temp).every((eachFieldErr) => eachFieldErr == "");
  };

  // useform is a reusable component for forms
  // for single controll real time validation of form pass true as 2nd parameter and validate function as 3rd parameter
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
          `admin/volumeAllocateTransactions?fromDate=${
            filterObj.startDate
              ? moment(filterObj.startDate).format("DD-MM-YYYY")
              : null
          }&toDate=${
            filterObj.endDate
              ? moment(filterObj.endDate).format("DD-MM-YYYY")
              : null
          }&allocationType=${filterObj.allocationType}&dealerNumber=${
            // filterObj.dealerNumber ? handleZero(filterObj.dealerNumber) : null
            values.dealerNumber ? values.dealerNumber : null
          }&subDealerNumber=${
            // filterObj.subDealerNumber ? filterObj.subDealerNumber : null
            values.subDealerNumber ? values.subDealerNumber : null
          }&company=${
            filterObj.company === "All" ? null : filterObj.company
          }&billingNumber=${
            // filterObj.billingNumber ? filterObj.billingNumber : null
            values.billingNumber ? values.billingNumber : null
          }&productNumber=${
            // filterObj.productNumber ? filterObj.productNumber : null
            values.productNumber ? values.productNumber : null
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
  const columns = [
    {
      field: "company",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Company",
    },
    {
      field: "customerId",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Dealer Number",
      renderCell: ({ row }) => {
        return <div>{row.customerId ? row.customerId : ""}</div>;
      },
    },
    {
      field: "customerName",
      headerAlign: "center",
      align: "left",
      width: 150,
      headerName: "Dealer Name",
      renderCell: RenderCellExpand,
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
      field: "billingMonth",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Billing Month",
      renderCell: ({ row }) => {
        // return <div>{moment(row.billingMonth).format("MMMM")}</div>;
        return (
          <div>
            {row.billingMonth ? moment(row.billingMonth).format("MM") : null}
          </div>
        );
      },
    },
    {
      field: "billingYear",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Billing Year",
    },
    {
      field: "selectedQuantity",
      headerAlign: "center",
      align: "right",
      width: 150,
      headerName: "Allocated",
      renderCell: ({ row }) => {
        return (
          <div>
            {row.selectedQuantity
              ? convertToCurrencyFormatQuantaty(row.selectedQuantity)
              : null}
          </div>
        );
      },
    },
    {
      field: "pointsReceived",
      headerAlign: "center",
      align: "right",
      width: 150,
      headerName: "Point Received",
      renderCell: ({ row }) => {
        return (
          <div>
            {row.pointsReceived
              ? convertToCurrencyFormat(row.pointsReceived)
              : ""}
          </div>
        );
      },
    },
    {
      field: "expirationDate",
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
      field: "creationDate",
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
      field: "allocationType",
      headerAlign: "center",
      align: "center",
      width: 150,
      headerName: "Allocation Type",
    },
  ];

  React.useEffect(() => {
    const gridData =
      filteredData &&
      filteredData.map((item, index) => {
        return {
          ...item,
          // billingDateStr : millisecondsToStringDate(item.billingDate,DATE_FORMAT),
          // expireDateStr : millisecondsToStringDate(item.expirationDate,DATE_FORMAT),
          // creationDateStr : millisecondsToStringDate(item.creationDate,DATE_FORMAT)
          // createDateInMileSecond: new Date(item.createDateInMileSecond),
          expirationDate:
            item.expirationDate != null ? new Date(item.expirationDate) : "",
          creationDate:
            item.creationDate != null ? new Date(item.creationDate) : "",
          billingDate:
            item.billingDate != null ? new Date(item.billingDate) : "",
          billingNumber: item.billingNumber != null ? +item.billingNumber : "",
          subDealerId: item.subDealerId != null ? +item.subDealerId : "",
        };
      });
    setGridData(gridData);
  }, [filteredData]);

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarDensitySelector />
        <div className="ExportAndSearchContainer">
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={onExportClick}
          >
            {exportState.btnName}
          </Button>
        </div>
      </GridToolbarContainer>
    );
  };

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
                <Grid item sm={5} md={2} xs={12} className="SelectRightPadding">
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
                  <Controls.Input
                    name="subDealerNumber"
                    label={SUB_DEALER_NUMBER}
                    value={values.subDealerNumber}
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
                <Grid item sm={5} md={2} xs={12} className="SelectRightPadding">
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

                <Grid item sm={5} md={2} xs={12} className="SelectRightPadding">
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
                    size="small"
                    className="outlineButton"
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
                rows={gridData}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                loading={showLoading || props.loading}
                // components={{
                //   Toolbar: CustomToolbar,
                // }}
                // componentsProps={{
                //   toolbar: {
                //     showQuickFilter: true,
                //     quickFilterProps: { debounceMs: 500 },
                //   },
                // }}
                // components={{
                //   ...(window.innerWidth > 400 && { Toolbar: CustomToolbar }),
                // }}
                // localeText={{
                //   noRowsLabel: "No reports",
                // }}
                // pageSize={20}
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
                ExportFileName={"volumn_allocation_report"}
              />
            </div>
          </div>
        </Paper>
      </div>
    </>
  );
}
