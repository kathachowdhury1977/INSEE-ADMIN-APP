import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./SubDealerRelation.scss";
import { API_URL_ADMIN } from "../../../../Constant/index";
import Controls from "../Controls";
import { RenderCellExpand } from "../../../../components/datagridtooltip/DataGridToolTip";
import ExportPopup from "../../../../components/exportPopup/ExportPopup";
import Popup from "../../../../components/Popup/Popup";
import AddEditSubDealer from "./addEditSubDealer/AddEditSubDealer";
import DelSubDealer from "./delSubDealer/DeleteSubDealer";
import { getSubDealerRelationUnderSoldToAction } from "../../../../_actions/dealer.action";
import Axios from "axios";
import DataGridProMUI from "../../../../components/DataGrid/DataGridProMUI";
import { DataFormat } from "../../../../_helpers";

export const SubDealerRelation = () => {
  const location = useLocation();
  const { accountName } = location.state;
  const { soldtoNumber } = location.state;
  const [openPopup, setOpenPopup] = useState(false);
  const [openEditPermissionPopup, setOpenEditPermissionPopup] = useState(null);
  const [openDeleteContactPopup, setOpenDeleteContactPopup] = useState(null);
  const [openExportPopup, setOpenExportPopup] = useState(null);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [recordForDelete, setRecordForDelete] = useState({});
  const [headerName, setHeaderName] = useState("Add Contact");
  const [rows, setRows] = useState([]);
  const Domhistory = useHistory();
  const [tableData, setTableData] = useState([]);
  const [pageSize, setPageSize] = useState(25);
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
  const dispatch = useDispatch();
  const SubDealerRelationUnderSoldToState = useSelector(
    (state) => state.SubDealerRelationUnderSoldTo
  );
  // heading of the exported file
  const ExpFilecolHeadings = [
    [
      "No.",
      "Mark Delete",
      "Sub Dealer Number",
      "Sub Dealer Name (EN)",
      "Sub Dealer Name (TH)",
      "Relationship With Sub Dealer",
    ],
  ];
  // feilds which are required in the export file and order of the feilds
  const ExpFilecolKeys = [
    "index",
    "markDelete",
    "subdealerNumber",
    "subdealerNameEN",
    "subdealerNameTH",
    "relationStatus",
  ];

  useEffect(() => {
    dispatch(getSubDealerRelationUnderSoldToAction(accountName));
  }, []);
  useEffect(() => {
    if (!openPopup && !openDeleteContactPopup && !openEditPermissionPopup) {
      dispatch(getSubDealerRelationUnderSoldToAction(accountName));
    }
  }, [openPopup, openDeleteContactPopup]);

  React.useEffect(() => {
    const filterData =
      SubDealerRelationUnderSoldToState &&
      SubDealerRelationUnderSoldToState.SubDealerRelationUnderSoldToList &&
      SubDealerRelationUnderSoldToState.SubDealerRelationUnderSoldToList.data &&
      SubDealerRelationUnderSoldToState.SubDealerRelationUnderSoldToList.data
        .length > 0 &&
      SubDealerRelationUnderSoldToState.SubDealerRelationUnderSoldToList.data.map(
        (e, i) => ({ ...e, index: i + 1, id: i + 1 })
      );
    setTableData(filterData);
  }, [SubDealerRelationUnderSoldToState]);

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
          setHeaderName("Edit: No." + params.row.index);
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
      field: "index",
      headerName: "No.",
      headerAlign: "center",
      align: "center",
      width: 50,
    },
    {
      field: "markDelete",
      headerName: "Mark Delete",
      align: "center",
      renderCell: (markDelete) => {
        return (
          <div className="MarkDelChkBox">
            <Controls.Checkbox value={markDelete.row.markDelete} />
          </div>
        );
      },
    },
    {
      field: "subdealerNumber",
      headerName: "Sub Dealer Number",
      headerAlign: "center",
      align: "center",
      width: 200,
      renderCell: RenderCellExpand,
      renderCell: ({ row }) => {
        const redirectToContact = (e) => {
          e.preventDefault();
          Domhistory.push(
            "/SubDealerManagement?subDelearNumber=" +
              row.subdealerNumber +
              "&subDelearName=" +
              row.subdealerNameEN
          );
        };
        return (
          <a href="#" onClick={redirectToContact}>
            {row.subdealerNumber ? DataFormat(row.subdealerNumber) : ""}
          </a>
        );
      },
    },
    {
      field: "subdealerNameEN",
      headerName: "Sub Dealer Name (EN)",
      headerAlign: "center",
      width: 200,
      renderCell: RenderCellExpand,
    },
    {
      field: "subdealerNameTH",
      headerName: "Sub Dealer Name (TH)",
      headerAlign: "center",
      width: 200,
      renderCell: RenderCellExpand,
    },
    {
      field: "relationStatus",
      headerName: "Relationship With Sub Dealer",
      headerAlign: "center",
      align: "center",
      width: 250,
    },
  ];

  return (
    <>
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
              setHeaderName("Add Sub Dealer");
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          >
            ADD SUB DEALER
          </Button>
        </div>
      </div>
      <div className="DealerDataGridContainer">
        <DataGridProMUI
          rows={tableData ? tableData : []}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          columns={columns}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          getRowId={(r) => r.subdealerNumber}
          ExpFilecolHeadings={ExpFilecolHeadings}
          ExpFilecolKeys={ExpFilecolKeys}
          ExportDateFormatIndexes={[]}
          ExportFileName={"SubDealerRelationUnderSoldTO_" + accountName}
          loading={SubDealerRelationUnderSoldToState.loading}
        />
      </div>
      <Popup
        title={headerName}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AddEditSubDealer
          setOpenPopup={setOpenPopup}
          recordForEdit={recordForEdit}
        />
      </Popup>
      <Popup
        title={""}
        openPopup={openDeleteContactPopup}
        setOpenPopup={setOpenDeleteContactPopup}
      >
        <DelSubDealer
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
    </>
  );
};
