import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Axios from "axios";
// import {
//   DataGrid,
//   GridToolbarContainer,
//   GridToolbarColumnsButton,
//   GridToolbarQuickFilter,
//   GridToolbarDensitySelector,
// } from "@mui/x-data-grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import "./LoyaltyTransaction.scss";
import Controls from "../Controls";
import { useLocation } from "react-router-dom";
import Popup from "../../../../components/Popup/Popup";
import { API_URL_LMS } from "../../../../Constant/index";
import DeleteContact from "./deleteLylTrans/DeleteLoyaltyTransaction";
import AddAdjustLoyalty from "./addadjustloyalty/AddAdjustLoyalty";
import { RenderCellExpand } from "../../../../components/datagridtooltip/DataGridToolTip";
import { getSubdealerLoyaltyTransactionAction } from "../../../../_actions/loyaltyPoint.actions";
import ExportPopup from "../../../../components/exportPopup/ExportPopup";
import {
  convertToCurrencyFormat,
  convertToCurrencyFormatQuantaty,
  DataFormat,
  millisecondsToStringDate,
  DATE_FORMAT,
} from "../../../../_helpers/commonFunctions";
import DataGridProMUI from "../../../../components/DataGrid/DataGridProMUI";

const POSITION_SELECT_VALUES = [
  "Point Collection",
  "Point Deduction",
  "Redemption",
  "Bonus",
];

const LoyaltyTransaction = (props) => {
  const location = useLocation();
  // dealernumber=accountName,dealerName=soldtoNumber
  const { accountName } = location.state;
  const { soldtoNumber } = location.state;
  const [openPopup, setOpenPopup] = useState(false);
  const [filterValues, setFilterValues] = useState({
    createdDateFrom: null,
    createdDateTo: null,
    activityType: "",
    disableFilters: false,
  });
  const [filterErr, setFilterErr] = useState({});
  const [openDeleteContactPopup, setOpenDeleteContactPopup] = useState(null);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [recordForDelete, setRecordForDelete] = useState(null);
  const [headerName, setHeaderName] = useState("Add Contact");
  const [state, setState] = React.useState({
    message: "Deleted Successfully!!!!",
    severity: "success",
    open: false,
  });
  const [tableData, setTableData] = useState([]);
  const [pageSize, setPageSize] = useState(25);
  const dispatch = useDispatch();
  const getLoyaltyTrans = useSelector(
    (state) => state.getSubdealerLoyaltyTransaction
  );
  const [openExportPopup, setOpenExportPopup] = useState(null);
  const [exportState, setExportState] = useState({
    btnName: "EXPORT",
    linkToDownload: null,
  });
  const [cardData, setCardData] = useState({ totalPoints: "", expPoints: [] });
  const excelFormating = [
    { billingDate: "date" },
    { createDate: "date" },
    { expireDate: "date" },
  ];
  // heading of the exported file
  const ExpFilecolHeadings = [
    [
      "No.",
      "Activity Type",
      "Billing Number",
      "Billing Date",
      "Create Date",
      "Product Number",
      "Product Name",
      "Quantity (Units)",
      "Total Points",
      "Expire Date",
      "Remarks",
      "Create By",
    ],
  ];
  // feilds which are required in the export file and order of the feilds
  const ExpFilecolKeys = [
    "index",
    "activityType",
    "billingNumber",
    "billingDate",
    "createDate",
    "productID",
    "productName",
    "quantity",
    "totalPoints",
    "expireDate",
    "remarks",
    "createdBy",
  ];

  const clearFilters = () => {
    setFilterValues({
      createdDateFrom: null,
      createdDateTo: null,
      activityType: "",
      disableFilters: false,
    });
  };

  useEffect(() => {
    dispatch(
      getSubdealerLoyaltyTransactionAction(filterValues, accountName, true)
    );
    getCardData();
  }, []);

  useEffect(() => {
    const filterData =
      getLoyaltyTrans &&
      getLoyaltyTrans.getSubdealerLoyaltyTransactionList &&
      getLoyaltyTrans.getSubdealerLoyaltyTransactionList.data &&
      getLoyaltyTrans.getSubdealerLoyaltyTransactionList.data.length > 0 &&
      getLoyaltyTrans.getSubdealerLoyaltyTransactionList.data.map((e, i) => ({
        ...e,
        index: i + 1,
        // billingDateString: millisecondsToStringDate(e.billingDate, DATE_FORMAT),
        billingDate: e.billingDate != null ? new Date(e.billingDate) : "",
        // createDateString: millisecondsToStringDate(e.createDate, DATE_FORMAT),
        createDate: e.createDate != null ? new Date(e.createDate) : "",
        expireDateString: millisecondsToStringDate(e.expireDate, DATE_FORMAT),
        // billingDateString: new Date(e.billingDate),
        productID: e.productNumber ? DataFormat(e.productNumber) : "",
      }));
    setTableData(filterData);
  }, [getLoyaltyTrans]);

  const columns = [
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      renderCell: ({ row }) => {
        const onEditClick = (e) => {
          let selectedObj = row;
          setHeaderName("Edit No." + row.index);
          setRecordForEdit(selectedObj);
          setOpenPopup(true);
        };
        const onDeleteClick = (e) => {
          let selectedObj = row;
          setRecordForDelete(selectedObj);
          setOpenDeleteContactPopup(true);
        };
        return (
          <>
            {row.activityType == "Bonus" ||
            row.activityType == "Point Deduction" ? (
              <div className="Action">
                <EditIcon className="EditIcon" onClick={onEditClick} />
                <DeleteIcon className="DeleteIcon" onClick={onDeleteClick} />
              </div>
            ) : null}
          </>
        );
      },
    },
    {
      field: "index",
      headerName: "No.",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "activityType",
      headerName: "Activity Type",
      headerAlign: "center",
      align: "center",
      width: 200,
    },
    {
      field: "billingNumber",
      headerName: "Billing Number",
      align: "center",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "billingDate",
      headerName: "Billing Date",
      align: "center",
      headerAlign: "center",
      width: 150,
      type: "date",
      valueFormatter: (row) => {
        return row.value && row.value !== null
          ? moment(new Date(row.value)).format("DD-MM-yyyy")
          : "";
      },
    },
    {
      field: "createDate",
      headerName: "Create Date",
      align: "center",
      headerAlign: "center",
      width: 150,
      type: "date",
      valueFormatter: (row) => {
        return row.value && row.value !== null
          ? moment(new Date(row.value)).format("DD-MM-yyyy")
          : "";
      },
    },
    {
      field: "productNumber",
      headerName: "Product Number",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return <>{row.productNumber ? DataFormat(row.productNumber) : ""}</>;
      },
    },
    {
      field: "productName",
      headerName: "Product Name",
      width: 150,
      headerAlign: "center",
      renderCell: RenderCellExpand,
    },
    {
      field: "quantity",
      headerName: "Quantity (Units)",
      headerAlign: "center",
      align: "right",
      width: 150,
      renderCell: ({ row }) => {
        return (
          <div>
            {row.quantity
              ? convertToCurrencyFormatQuantaty(row.quantity)
              : null}
          </div>
        );
      },
    },
    {
      field: "totalPoints",
      headerName: "Points",
      align: "right",
      headerAlign: "center",
      renderCell: ({ row }) => {
        return (
          <div>
            {row.totalPoints
              ? row.activityType === "Point Deduction"
                ? // ? "-" + convertToCurrencyFormat(row.totalPoints)
                  convertToCurrencyFormat(row.totalPoints)
                : convertToCurrencyFormat(row.totalPoints)
              : null}
          </div>
        );
      },
    },
    {
      field: "expireDateString",
      headerName: "Expiration Date",
      align: "center",
      headerAlign: "center",
      width: 200,
      // renderCell: ({ row }) => {
      //   return (
      //     <div>
      //       {row.expireDate
      //         ? moment(parseInt(row.expireDate)).format("DD-MM-yyyy")
      //         : ""}
      //     </div>
      //   );
      // },
    },
    {
      field: "remarks",
      headerName: "Remarks",
      headerAlign: "center",
      align: "left",
      width: 200,
      renderCell: RenderCellExpand,
    },
    {
      field: "createdBy",
      headerName: "Create By",
      align: "left",
      width: 200,
      headerAlign: "center",
    },
  ];

  const handleFilterChange = (e) => {
    setFilterErr({});
    const { name, value } = e.target;
    setFilterValues({
      ...filterValues,
      [name]: value,
    });
  };

  // on change of the filter need to call the apis
  const handleFilterSubmit = () => {
    if (validate())
      dispatch(
        getSubdealerLoyaltyTransactionAction(filterValues, accountName, true)
      );
  };

  const getCardData = () => {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    Axios.get(
      API_URL_LMS + "myPoints/points?accountNumber=" + accountName,
      requestOptions
    )
      .then((response) => {
        if (response.data.status == 200) {
          setCardData({
            totalPoints: response.data.data.totalAvailablePoints,
            expPoints: response.data.data.expiringPoints,
          });
        }
      })
      .catch((error) => {});
  };

  useEffect(() => {
    handleFilterSubmit();
  }, [
    filterValues.createdDateFrom,
    filterValues.createdDateTo,
    filterValues.activityType,
  ]);

  // to refresh the data on successfull del or update or add
  useEffect(() => {
    if (!openPopup && !openDeleteContactPopup) {
      dispatch(
        getSubdealerLoyaltyTransactionAction(filterValues, accountName, true)
      );
      getCardData();
    }
  }, [openPopup, openDeleteContactPopup]);

  const validate = () => {
    let temp = {};
    if ("createdDateTo" in filterValues && filterValues.createdDateTo != null) {
      temp.createdDateFrom =
        filterValues.createdDateFrom > filterValues.createdDateTo
          ? "From date Should be lesser than to date"
          : "";
    }
    setFilterErr({ ...temp });
    return Object.values(temp).every((eachFieldErr) => eachFieldErr == "");
  };

  return (
    <div className="LoyaltyTransactionContainer">
      <div className="PointsContainer">
        {cardData.totalPoints ? (
          <Card sx={{}} className="PointsCard">
            <CardContent>
              <Typography
                sx={{ fontSize: 14, textAlign: "center" }}
                color="text.secondary"
              >
                {"Total Points"}
                <h3>
                  {/* {cardData.totalPoints.key
                    ? Intl.NumberFormat("en-us").format(cardData.totalPoints.key).toFixed(2)
                    : parseFloat(0).toFixed(2)} */}
                  {convertToCurrencyFormat(cardData.totalPoints.key)}
                </h3>
                {cardData.totalPoints.value
                  ? "on " + cardData.totalPoints.value
                  : null}
              </Typography>
            </CardContent>
          </Card>
        ) : null}

        {cardData.expPoints.map((eachItem) => (
          <Card sx={{}} className="PointsCard">
            <CardContent>
              <Typography
                sx={{
                  fontSize: 14,
                  textAlign: "center",
                }}
                color="text.secondary"
              >
                {"Expiring"}
                <h3>{convertToCurrencyFormat(eachItem.key)}</h3>
                {"on " + eachItem.value}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="DateFilterContainer">
        <div className="DatePickerContainer">
          <Controls.DatePicker
            name="createdDateFrom"
            label="Created Date From"
            maxDate={filterValues.createdDateTo || new Date()}
            value={filterValues.createdDateFrom}
            onChange={handleFilterChange}
            disable={filterValues.disableFilters}
            error={filterErr.createdDateFrom}
          />
        </div>
        <div className="DatePickerContainer">
          <Controls.DatePicker
            name="createdDateTo"
            label="Created Date To"
            maxDate={new Date()}
            value={filterValues.createdDateTo}
            onChange={handleFilterChange}
            disable={filterValues.disableFilters}
          />
        </div>
        <div className="ActivityType">
          <Controls.Select
            name="activityType"
            label="ActivityType"
            disable={filterValues.disableFilters}
            value={filterValues.activityType}
            onChange={handleFilterChange}
            options={POSITION_SELECT_VALUES}
            showSelect
          />
        </div>
        <div className="ClearBtn">
          <Button onClick={clearFilters}>CLEAR ALL</Button>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={state.open}
        autoHideDuration={6000}
        key={"topright"}
      >
        <Alert
          severity={state.severity}
          sx={{ width: "100%" }}
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => {
                setState({ open: false });
              }}
            >
              Close
            </Button>
          }
        >
          {state.message}
        </Alert>
      </Snackbar>
      <div className="ContactContainer">
        <div className="AddAndSearch">
          <Button
            variant="contained"
            className="AddContactBtn"
            onClick={() => {
              setHeaderName("Add Adjust Loyalty");
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          >
            ADD ADJUST LOYALTY
          </Button>
        </div>
      </div>
      <div className="DataGridContainer">
        <DataGridProMUI
          rows={tableData ? tableData : []}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          ExpFilecolHeadings={ExpFilecolHeadings}
          ExpFilecolKeys={ExpFilecolKeys}
          ExportDateFormatIndexes={[3, 4, 9]}
          excelFormating={excelFormating}
          ExportFileName={"DealerLoyaltyTransaction_" + accountName}
          loading={getLoyaltyTrans.loading}
        />
      </div>

      {/* popup is a reusable custom dialog component */}
      <Popup
        title={headerName}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AddAdjustLoyalty
          setOpenPopup={setOpenPopup}
          recordForEdit={recordForEdit}
        />
      </Popup>
      <Popup
        title={""}
        openPopup={openDeleteContactPopup}
        setOpenPopup={setOpenDeleteContactPopup}
      >
        <DeleteContact
          openPopup={openDeleteContactPopup}
          setOpenPopup={setOpenDeleteContactPopup}
          recordForDelete={recordForDelete}
          setState={setState}
        />
      </Popup>
      <ExportPopup
        title={""}
        openPopup={openExportPopup}
        setOpenExportPopup={setOpenExportPopup}
        linkToDownload={exportState.linkToDownload}
      />
    </div>
  );
};

export default LoyaltyTransaction;
