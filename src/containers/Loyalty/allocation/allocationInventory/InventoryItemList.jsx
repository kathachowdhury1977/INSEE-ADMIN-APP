import React, { useState } from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Axios from "axios";
import moment from "moment";
import Controls from "../../subDealerManagement/subdealer/Controls";
import { useDispatch, useSelector } from "react-redux";
import {
  convertToCurrencyFormat,
  convertToCurrencyFormatQuantaty,
  DataFormat,
} from "../../../../_helpers";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

import { RenderCellExpand } from "../../../../components/datagridtooltip/DataGridToolTip";
import Popup from "../../../../components/Popup/Popup";
import ItemEdit from "./ItemEdit";
import ExportPopup from "../../../../components/exportPopup/ExportPopup";
import { getDealerRetationShipListAction } from "../../../../_actions/subDealer.action";

import { API_URL_ADMIN, API_URL_LMS } from "../../../../Constant/index";
import DataGridProMUI from "../../../../components/DataGrid/DataGridProMUI";

const AllocationInventoryList = (props) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [isAddEdit, setIsAddEdit] = useState(false);
  const [isdelete, setIsdelete] = useState(false);
  const [openDeleteContactPopup, setOpenDeleteContactPopup] = useState(null);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [recordForDelete, setRecordForDelete] = useState(null);
  const [headerName, setHeaderName] = useState("Add Contact");
  const [loading, setLoading]=React.useState(false)
  const [tableData, setTableData] = useState([]);
  const { dataTable } = props;
  const dealerListWithRelationship = useSelector(
    (state) => state.dealerListWithRelationship
  );
  const [openExportPopup, setOpenExportPopup] = useState(null);
  const [pageSize, setPageSize] = React.useState(25);
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
  const excelDataTransformConfig = {
    isMarkDelete: { true: "Yes", false: "No" },
    isautoallocation: { true: "Yes", false: "No" },
    ismanaualallocation: { true: "Yes", false: "No" },
  };

  const getproductDetails = () => {   
    setLoading(true)
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };  
    Axios.get(API_URL_LMS+`loyalty/inventory-item?productCode=${props.itemDetails.productCode}&customerId=${props.itemDetails.customerId}&billingMonths=${props.itemDetails.billingMonth}&billingYear=${props.itemDetails.billingYear}&expiryDate=${props.itemDetails.expirationDate}`,requestOptions)
      .then((response) => {
        setLoading(false)
          if(response.data.status===200)
          {
            setTableData(response.data.data)   

          }else{
            setTableData([])
          }
        
      })
      .catch((error) => {
        
      });
    }

  
  React.useEffect(() => {
getproductDetails()
  }, []);

  const ExpFilecolHeadings = [
    [
      "Sub Dealer Number",
      "Sub Dealer Name",
      "Product Number",
      "Product Name",
      "Allocated Quantity",
      "Points",
      "Auto Allocated",
      "Manual Allocated",
      "Mark Delete",
      "Created By",
    ],
  ];
  const ExpFilecolKeys = [
    "subDealerId",
    "subDealerName",
    "productCode",
    "productName",
    "autoAllocated",
    "pointsReceived",
    "isautoallocation",
    "ismanaualallocation",
    "isMarkDelete",
    "createdBy",
  ];

  const columns = [
    {
      field: "actions",
      headerName: "Actions",
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        const onEditClick = (e) => {
          setHeaderName(`Edit`);
          setRecordForEdit(params.row);
          setOpenPopup(true);
          setIsAddEdit(false);
          props.setIsAddEdit(false);
        };
        return (
          <>
            {params.row.autoAllocation === false && (
              <div className="Action">
                <EditIcon className="EditIcon" onClick={onEditClick} />
              </div>
            )}
          </>
        );
      },
    },
    {
      field: "subDealerId",
      headerName: "Sub Dealer Number",
      headerAlign: "center",
      align: "center",
      width: 200,
    },
    {
      field: "subDealerName",
      headerName: "Sub Dealer Name",
      headerAlign: "center",
      align: "left",
      align: "left",
      width: 200,
      // renderCell: RenderCellExpand,
    },
    {
      field: "productCode",
      headerName: "Product Number",
      headerAlign: "center",
      align: "center",
      width: 200,
      renderCell: ({ row }) => {
        return <>{row.productCode ? DataFormat(row.productCode) : ""}</>;
      },
    },
    {
      field: "productName",
      headerName: "Product Name",
      headerAlign: "center",
      align: "left",
      width: 250,
      renderCell: RenderCellExpand,
    },
    {
      field: "autoAllocated",
      headerName: "Allocated Quantity",
      headerAlign: "center",
      align: "right",
      width: 150,
      renderCell: ({ row }) => {
        return <div>{row.autoAllocation == true? convertToCurrencyFormatQuantaty(row.autoAllocated) : convertToCurrencyFormatQuantaty(row.manuallyAllocated)}</div>;
      },
    },
    {
      field: "pointsReceived",
      headerName: "Points",
      headerAlign: "center",
      align: "right",
      width: 150,
      renderCell: ({ row }) => {
        return <div>{row.pointsReceived ? convertToCurrencyFormat(row.pointsReceived) : null}</div>;
      },
    },
    {
      field: "isautoallocation",
      headerName: "Auto Allocated",
      headerAlign: "center",
      align: "center",
      width: 150,
      renderCell: ({ row }) => {
        return (
          <div className="MarkDelChkBox">
              <Controls.Checkbox
                value={row.autoAllocation === true ? true : false}
              />
          </div>
        );
      },
    },
    {
      field: "ismanaualallocation",
      headerName: "Manual Allocated",
      headerAlign: "center",
      align: "center",
      width: 150,
      renderCell: ({ row }) => {
        return (
          <div className="MarkDelChkBox">
              <Controls.Checkbox
                value={row.autoAllocation === false ? true : false}
              />
          </div>
        );
      },
    },
    {
      field: "isMarkDelete",
      headerName: "Mark Delete",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <div className="MarkDelChkBox">
              <Controls.Checkbox
                value={
                  row.isMarkDelete === "true"
                    ? true
                    : false
                }
              />
          </div>
        );
      },
    },
    {
      field: "createdBy",
      headerName: "Created By",
      headerAlign: "center",
      align: "left",
      renderCell: RenderCellExpand
    },
  ];

  React.useEffect(() => {
    if (isAddEdit === true && openPopup === false){
      getproductDetails()
    }
  }, [isAddEdit, openPopup]);

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

      <div
        className="ContactDataGridContainer"
        style={{ marginTop: "20px", height: "350px" }}
      >
        <DataGridProMUI
          rows={tableData ? tableData : []}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          ExpFilecolHeadings={ExpFilecolHeadings}
          ExpFilecolKeys={ExpFilecolKeys}
          excelDataTransformConfig={excelDataTransformConfig}
          ExportFileName={"cc_allocation_inventory_item"}
          loading={loading}
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
        <ItemEdit
          setIsAddEdit={setIsAddEdit}
          setOpenPopup={setOpenPopup}
          productId={props.productId}
          recordForEdit={recordForEdit}
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

export default AllocationInventoryList;
