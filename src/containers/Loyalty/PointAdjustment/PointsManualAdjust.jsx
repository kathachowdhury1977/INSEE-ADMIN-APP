import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Controls from "./Controls";
import "./PointsManualAdjust.scss";
import { useForm, Form } from "../../../components/Form/FormComponent";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import UploadIcon from "@mui/icons-material/Upload";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import DeleteManualAdjust from "./deleteManualAdjust/DeleteManualAdjust";
import UploadBulkData from "./uploadBulkData/UploadBulkData";
import Popup from "../../../components/Popup/Popup";
import defaultImg from "../../../assets/img/defaultImg.jpg";
import AddEditPointManualAdjust from "./addEditPointManualAdjust/AddEditPointManualAdjust";
import { API_URL_ADMIN, API_URL_LMS } from "../../../Constant/index";
import Axios from "axios";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { RenderCellExpand } from "../../../components/datagridtooltip/DataGridToolTip";
import { getLoyaltyPointsManualAdjustAction } from "../../../_actions/loyaltyPoint.actions";
import ExportPopup from "../../../components/exportPopup/ExportPopup";
import DataGridProMUI from "../../../components/DataGrid/DataGridProMUI";
import {
  convertToCurrencyFormat,
  convertToCurrencyFormatQuantaty,
  DataFormat,
  millisecondsToStringDate,
  DATE_FORMAT,
} from "../../../_helpers/commonFunctions";

const POSITION_SELECT_VALUES = ["Point Deduction", "Bonus"];

const PointsManualAdjust = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openEditPermissionPopup, setOpenEditPermissionPopup] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [openDeleteContactPopup, setOpenDeleteContactPopup] = useState(null);
  const [openExportPopup, setOpenExportPopup] = useState(null);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [recordForDelete, setRecordForDelete] = useState({});
  const [pageSize, setPageSize] = useState(25);
  const [recordForEditPermission, setRecordForEditPermission] = useState(null);
  const [headerName, setHeaderName] = useState("Add Adjust Loyalty");
  const [rows, setRows] = useState([]);
  const [state, setState] = React.useState({
    message: "Deleted Successfully!!!!",
    severity: "success",
    open: false,
    editPermissionHdr: "",
  });
  const [exportState, setExportState] = useState({
    btnName: "EXPORT",
    linkToDownload: null,
  });
  const [openUpldPopUp, setOpenUpldPopUp] = useState(false);
  const [filterValues, setFilterValues] = useState({
    createdDateFrom: null,
    createdDateTo: null,
    activityType: "",
    disableFilters: false,
  });
  const [filterErr, setFilterErr] = useState({});
  const [uploadState, setUploadState] = useState({});
  const dispatch = useDispatch();
  const getLoyaltyPointsManual = useSelector(
    (state) => state.getLoyaltyPointsManualAdjust
  );
  const excelFormating = [{ createDate: "date" }, { expireDate: "date" }];
  // heading of the exported file
  const ExpFilecolHeadings = [
    [
      "Type Of Customer",
      "Customer Number",
      "Customer Name",
      "Activity Type",
      "Value",
      "Create Date",
      "Expiry Date",
      "Remarks",
    ],
  ];
  // feilds which are required in the export file and order of the feilds
  const ExpFilecolKeys = [
    "customerType",
    "customerNumber",
    "customerName",
    "activityType",
    "point",
    "createDate",
    "expireDate",
    "remarks",
  ];

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarDensitySelector />
        <div className="ExportAndSearchContainer">
          <Button
            variant="outlined"
            startIcon={<UploadIcon />}
            onClick={onUploadClick}
          >
            {"Upload"}
          </Button>
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={onExportClick}
          >
            {exportState.btnName}
          </Button>
          <GridToolbarQuickFilter />
        </div>
      </GridToolbarContainer>
    );
  };

  const handleFilterChange = (e) => {
    setFilterErr({});
    const { name, value } = e.target;
    setFilterValues({
      ...filterValues,
      [name]: value,
    });
  };

  const clearFilter = (e) => {
    setFilterValues({
      createdDateFrom: null,
      createdDateTo: null,
      activityType: "",
      disableFilters: false,
    });
  };

  // to dispatch the action on change of the dates and activity type
  const handleFilterSubmit = () => {
    if (validate()) {
      setFilterValues({ ...filterValues, disableFilters: true });
      dispatch(getLoyaltyPointsManualAdjustAction(filterValues));
      setFilterValues({ ...filterValues, disableFilters: false });
    }
  };

  // to fetch data onload of the page
  useEffect(() => {
    dispatch(getLoyaltyPointsManualAdjustAction(filterValues));
  }, []);

  // to refresh the data on successfull del or update or add
  useEffect(() => {
    if (!openPopup && !openDeleteContactPopup && !openUpldPopUp) {
      dispatch(getLoyaltyPointsManualAdjustAction(filterValues));
    }
  }, [openPopup, openDeleteContactPopup, openUpldPopUp]);

  // to get the data on chnage of the date and activity type
  useEffect(() => {
    handleFilterSubmit();
  }, [
    filterValues.createdDateFrom,
    filterValues.createdDateTo,
    filterValues.activityType,
  ]);

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

  const onUploadClick = () => {
    setOpenUpldPopUp(true);
  };

  const onExportClick = () => {
    setExportState({ btnName: "Exporting..." });
    const requestOptions = {
      headers: {
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    Axios.get(API_URL_LMS + `loyalty/export-manual-adjust`, requestOptions)
      .then((response) => {
        setOpenExportPopup(true);
        setExportState({ btnName: "EXPORT", linkToDownload: response.data });
      })
      .catch((error) => {
        setExportState({ btnName: "EXPORT" });
      });
  };

  useEffect(() => {
    const filterData =
      getLoyaltyPointsManual &&
      getLoyaltyPointsManual.getLoyaltyPointsManualAdjustList &&
      getLoyaltyPointsManual.getLoyaltyPointsManualAdjustList.data &&
      getLoyaltyPointsManual.getLoyaltyPointsManualAdjustList.data.length > 0 &&
      getLoyaltyPointsManual.getLoyaltyPointsManualAdjustList.data.map(
        (e, i) => ({
          ...e,
          index: i + 1,
          // createDateString: millisecondsToStringDate(e.createDate, DATE_FORMAT),
          // expireDateString: millisecondsToStringDate(e.expireDate, DATE_FORMAT),
          createDate: e.createDate != null ? new Date(e.createDate) : "",
          expireDate: e.expireDate != null ? new Date(e.expireDate) : "",
        })
      );
    setTableData(filterData);
  }, [getLoyaltyPointsManual]);

  const columns = [
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      renderCell: (params) => {
        const findSelectedObj = () => {
          const api = params.api;
          const selectedRow = {};
          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) =>
                (selectedRow[c.field] = params.getValue(params.id, c.field))
            );
          const selectedObject = rows.find(
            (item) => item.userName == selectedRow.userName
          );
          return selectedObject;
        };
        const onEditClick = (e) => {
          let selectedObj = params.row;
          setHeaderName("Edit Adjust Loyalty");
          setRecordForEdit(selectedObj);
          setOpenPopup(true);
        };
        const onDeleteClick = (e) => {
          let selectedObj = params.row;
          setRecordForDelete(selectedObj);
          setOpenDeleteContactPopup(true);
        };
        return (
          <>
            {params.row.deleted ? null : (
              <div className="Action">
                <EditIcon
                  className="EditIcon"
                  onClick={onEditClick}
                  sx={{ cursor: "pointer" }}
                />
                <DeleteIcon
                  className="DeleteIcon"
                  onClick={onDeleteClick}
                  sx={{ cursor: "pointer" }}
                />
              </div>
            )}
          </>
        );
      },
    },
    {
      field: "customerType",
      headerName: "Type Of Customer",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "customerNumber",
      headerName: "Customer Number",
      headerAlign: "center",
      width: 150,
      align: "center",
      renderCell: ({ row }) => {
        return <>{row.customerNumber ? DataFormat(row.customerNumber) : ""}</>;
      },
    },
    {
      field: "customerName",
      headerName: "Customer Name",
      headerAlign: "center",
      width: 200,
      renderCell: RenderCellExpand,
    },
    {
      field: "activityType",
      headerName: "Activity Type",
      headerAlign: "center",
      align: "left",
      width: 200,
    },
    {
      field: "point",
      headerName: "Value",
      headerAlign: "center",
      align: "right",
      width: 150,
      renderCell: ({ row }) => {
        return (
          <div>
            {row.point
              ? row.activityType == "Point Deduction"
                ? convertToCurrencyFormat(row.point)
                : convertToCurrencyFormat(row.point)
              : null}
          </div>
        );
      },
    },
    {
      field: "createDate",
      headerName: "Create Date",
      headerAlign: "center",
      align: "center",
      width: 120,
      // renderCell: ({ row }) => {
      //   // to format the data and display
      //   var pattern = /(\d{2})\-(\d{2})\-(\d{4})/;
      //   return (
      //     <div>
      //       {row.createDate && row.createDate!==null
      //         ? moment(new Date(row.createDate)).format("DD-MM-yyyy")
      //         : null}
      //     </div>
      //   );
      // },
      type: "date",
      valueFormatter: (row) => {
        return row.value && row.value !== null
          ? moment(new Date(row.value)).format("DD-MM-yyyy")
          : "";
      },
    },
    {
      field: "expireDate",
      headerName: "Expiry Date",
      headerAlign: "center",
      align: "center",
      width: 120,
      // renderCell: ({ row }) => {
      //   let pattern = /(\d{2})\-(\d{2})\-(\d{4})/;
      //   return (
      //     <div>
      //       {row.expireDate
      //         ? moment(new Date(row.expireDate)).format("DD-MM-yyyy")
      //         : null}
      //     </div>
      //   );
      // },
      type: "date",
      valueFormatter: (row) => {
        return row.value && row.value !== null
          ? moment(new Date(row.value)).format("DD-MM-yyyy")
          : "";
      },
    },
    {
      field: "remarks",
      headerName: "Remarks",
      headerAlign: "center",
      width: 200,
      align: "left",
      renderCell: RenderCellExpand,
    },
  ];

  return (
    <>
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
            // showSelect
          />
        </div>
        <div className="ClearBtn">
          <Button onClick={clearFilter}>CLEAR ALL</Button>
        </div>
      </div>
      <div>
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
        <div className="PointManualAdjustContainer">
          <div className="PointManualAdjustAddAndSearch">
            <Button
              variant="contained"
              className="PointManualAdjustAddContactBtn"
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
        <div className="PointManualAdjustDataGridContainer">
          <DataGridProMUI
            rows={tableData ? tableData : []}
            columns={columns}
            enableUpload={onUploadClick}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            ExpFilecolHeadings={ExpFilecolHeadings}
            ExpFilecolKeys={ExpFilecolKeys}
            ExportDateFormatIndexes={[5, 6]}
            excelFormating={excelFormating}
            ExportFileName={"PointManualAdjust"}
            loading={getLoyaltyPointsManual.loading}
          />
        </div>
        {/* popup is a reusable custom dialog component, pt pb pr pl are padding props*/}
        <Popup
          title={headerName}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          width={"50%"}
          height={"55%"}
        >
          <AddEditPointManualAdjust
            setOpenPopup={setOpenPopup}
            recordForEdit={recordForEdit}
          />
        </Popup>
        <Popup
          title={""}
          openPopup={openDeleteContactPopup}
          setOpenPopup={setOpenDeleteContactPopup}
        >
          <DeleteManualAdjust
            openPopup={openDeleteContactPopup}
            setOpenPopup={setOpenDeleteContactPopup}
            recordForDelete={recordForDelete}
            setState={setState}
          />
        </Popup>
        <Popup
          title={""}
          openPopup={openUpldPopUp}
          setOpenPopup={setOpenUpldPopUp}
        >
          <UploadBulkData
            openPopup={openUpldPopUp}
            setOpenPopup={setOpenUpldPopUp}
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
    </>
  );
};

export default PointsManualAdjust;
