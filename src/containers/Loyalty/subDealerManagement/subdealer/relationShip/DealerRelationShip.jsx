import React, { useState } from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import {
//   DataGrid,
//   GridToolbarContainer,
//   GridToolbarColumnsButton,
//   GridToolbarQuickFilter,
//   GridToolbarExport,
//   GridToolbarDensitySelector,
// } from "@mui/x-data-grid";

import { RenderCellExpand } from "../../../../../components/datagridtooltip/DataGridToolTip";
import Popup from "../../../../../components/Popup/Popup";
import AddDealer from "./AddDealer";
import DeleteDealer from "./DeleteDealer";
import "./dealerRelationShip.scss";
import ExportPopup from "../../../../../components/exportPopup/ExportPopup";
import { getDealerRetationShipListAction } from "../../../../../_actions/subDealer.action";
import "../contact/Contact";
import Controls from "../Controls";
import { API_URL_ADMIN } from "../../../../../Constant/index";
import { DataFormat } from "../../../../../_helpers/commonFunctions";
import DataGridProMUI from "../../../../../components/DataGrid/DataGridProMUI";
const rows = [
  {
    id: 1,
    markForDelete: true,
    dealerNumber: "14566356",
    dealerNameEN: "Wiangsima Co., Ltd. Engineering Construction and Supply",
    dealerNameTH: "บจก.เวียงสิมา เอ็นจิเนียร์ริ่ง คอนสตรัคชั่น แอนด์ ซัพพลาย",
    relationshipWithDealer: "Active",
  },
  {
    id: 2,
    markForDelete: true,
    dealerNumber: "1754874",
    dealerNameEN: "Pichet Wang Thep Anuchao",
    dealerNameTH: "พิเชษฐ์หวังเทพอนุเคราะห",
    relationshipWithDealer: "Active",
  },
  {
    id: 3,
    markForDelete: true,
    dealerNumber: "1565387863",
    dealerNameEN: "Phichet",
    dealerNameTH: "พิเชษฐ์ห",
    relationshipWithDealer: "Inactive",
  },
];

const DealerRelationShip = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [isAddEdit, setIsAddEdit] = useState(false);
  const [isdelete, setIsdelete] = useState(false);
  const [openDeleteContactPopup, setOpenDeleteContactPopup] = useState(null);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [recordForDelete, setRecordForDelete] = useState(null);
  const [headerName, setHeaderName] = useState("Add Contact");
  const [tableData, setTableData] = useState([]);
  const [pageSize, setPageSize] = useState(25);
  const Domhistory = useHistory();
  const dealerListWithRelationship = useSelector(
    (state) => state.dealerListWithRelationship
  );
  const [openExportPopup, setOpenExportPopup] = useState(null);
  const [exportState, setExportState] = useState({
    btnName: "EXPORT",
    linkToDownload: null,
  });
  // let [searchParams, setSearchParams] = useSearchParams();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const subdealerNumber = params.get("subDelearNumber");
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    message: "",
    severity: "",
    open: false,
  });
  const excelDataTransformConfig = { markDelete: { true: "Yes", false: "No" } };
  const ExpFilecolHeadings = [
    [
      "No",
      "Mark Delete",
      "Dealer Number",
      "Dealer Name (EN)",
      "Dealer Name (TH)",
      "Relationship with Dealer",
    ],
  ];
  const ExpFilecolKeys = [
    "index",
    "markDelete",
    "soldToNumber",
    "soldToNameEN",
    "soldToNameTH",
    "relationStatus",
  ];

  const columns = [
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      renderCell: (params) => {
        const onEditClick = (e) => {
          if (params.row.deleted) {
            return false;
          }
          setHeaderName(`Edit No.${params.row.id}`);
          setRecordForEdit(params.row);
          setOpenPopup(true);
          setIsAddEdit(false);
        };
        const onDeleteClick = (e) => {
          if (params.row.deleted) {
            return false;
          }
          setRecordForDelete(params.row);
          setOpenDeleteContactPopup(true);
          setIsdelete(false);
          setState({ open: false, severity: "", message: "" });
        };
        return (
          <div className="Action">
            {params.row.deleted !== true && (
              <>
                <EditIcon className="EditIcon" onClick={onEditClick} />
                <DeleteIcon className="DeleteIcon" onClick={onDeleteClick} />
              </>
            )}
          </div>
        );
      },
    },
    {
      field: "index",
      headerName: "No.",
      headerAlign: "center",
      align: "center",
      width: "50",
    },
    {
      field: "markDelete",
      headerName: "Mark Delete",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <div className="MarkDelChkBox">
            <Controls.Checkbox value={row.markDelete} />
          </div>
        );
      },
    },
    {
      field: "soldToNumber",
      headerName: "Dealer Number",
      align: "center",
      headerAlign: "center",
      width: 140,
      renderCell: ({ row }) => {
        const redirectToContact = (
          e,
          soldtoNumber = row.soldToNameEN,
          accountName = row.soldToNumber
        ) => {
          e.preventDefault();
          Domhistory.push("/ExternalMangamentDetailList", {
            accountName,
            soldtoNumber,
          });
        };
        return (
          <a href="#" onClick={redirectToContact}>
            {row.soldToNumber ? DataFormat(row.soldToNumber) : ""}
          </a>
        );
      },
    },

    {
      field: "soldToNameEN",
      headerName: "Dealer Name (EN)",
      headerAlign: "center",
      width: 200,
      renderCell: RenderCellExpand,
    },
    {
      field: "soldToNameTH",
      headerName: "Dealer Name (TH)",
      headerAlign: "center",
      width: 200,
      renderCell: RenderCellExpand,
    },
    {
      field: "relationStatus",
      headerName: "Relationship with Dealer",
      headerAlign: "center",
      align: "center",
      width: 170,
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
  //           Export
  //         </Button>
  //         <GridToolbarQuickFilter />
  //       </div>
  //     </GridToolbarContainer>
  //   );
  // };

  // const onExportClick = () => {
  //   setExportState({ btnName: "Exporting..." });
  //   const requestOptions = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
  //     },
  //   };
  //   Axios.get(
  //     API_URL_ADMIN +
  //       `retailer/exportSoldToRelationUnderSubDealer?subDealerNumber=` +
  //       subdealerNumber
  //   )
  //     .then((response) => {
  //       setOpenExportPopup(true);
  //       setExportState({ btnName: "EXPORT", linkToDownload: response.data });
  //     })
  //     .catch((error) => {
  //       setExportState({ btnName: "EXPORT" });
  //     });
  // };

  React.useEffect(() => {
    dispatch(getDealerRetationShipListAction(subdealerNumber));
  }, []);
  React.useEffect(() => {
    if (isAddEdit === true && openPopup === false)
      dispatch(getDealerRetationShipListAction(subdealerNumber));
  }, [isAddEdit, openPopup]);

  React.useEffect(() => {
    if (isdelete === true && openDeleteContactPopup === false)
      dispatch(getDealerRetationShipListAction(subdealerNumber));
  }, [isdelete, openDeleteContactPopup]);

  React.useEffect(() => {
    const filterData =
      dealerListWithRelationship &&
      dealerListWithRelationship.dealerRelationList &&
      dealerListWithRelationship.dealerRelationList.data &&
      dealerListWithRelationship.dealerRelationList.data.length > 0 &&
      dealerListWithRelationship.dealerRelationList.data.map((e, i) => ({
        ...e,
        index: i + 1,
        id: i + 1,
        relationStatus:
          e.relationStatus.charAt(0).toUpperCase() + e.relationStatus.slice(1),
        subdealerNumber: subdealerNumber,
      }));
    setTableData(filterData);
  }, [dealerListWithRelationship]);
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
      <div className="ContactContainer alignTableRowPerPage">
        <div className="AddAndSearch">
          <Button
            variant="contained"
            className="AddContactBtn"
            onClick={() => {
              setHeaderName("Add Dealer");
              setOpenPopup(true);
              setRecordForEdit(null);
              setIsAddEdit(false);
            }}
          >
            ADD DEALER
          </Button>
        </div>
      </div>
      <div className="ContactDataGridContainer">
        <DataGridProMUI
          rows={tableData ? tableData : []}
          columns={columns}
          // components={{
          //   Toolbar: CustomToolbar,
          // }}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          // rowsPerPageOptions={[25, 50, 75, 100]}
          // componentsProps={{
          //   toolbar: {
          //     showQuickFilter: true,
          //     quickFilterProps: { debounceMs: 500 },
          //   },
          // }}
          ExpFilecolHeadings={ExpFilecolHeadings}
          ExpFilecolKeys={ExpFilecolKeys}
          excelDataTransformConfig={excelDataTransformConfig}
          ExportDateFormatIndexes={[]}
          ExportFileName={"Dealer_list_with_relationship" + subdealerNumber}
          loading={dealerListWithRelationship.loading}
        />
      </div>
      {/* popup is a reusable custom dialog component */}
      <Popup
        title={headerName}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        maxWidth={"xs"}
        p={3}
      >
        <AddDealer
          setOpenPopup={setOpenPopup}
          recordForEdit={recordForEdit}
          setIsAddEdit={setIsAddEdit}
          subdealerNumber={subdealerNumber}
        />
      </Popup>

      <Popup
        title={""}
        openPopup={openDeleteContactPopup}
        setOpenPopup={setOpenDeleteContactPopup}
      >
        <DeleteDealer
          openPopup={openDeleteContactPopup}
          setOpenPopup={setOpenDeleteContactPopup}
          recordForDelete={recordForDelete}
          setState={setState}
          setIsdelete={setIsdelete}
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

export default DealerRelationShip;
