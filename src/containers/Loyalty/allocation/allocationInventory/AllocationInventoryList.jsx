import React, { useState } from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  convertToCurrencyFormatQuantaty,
  millisecondsToStringDate,
  DATE_FORMAT,
} from "../../../../_helpers";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { RenderCellExpand } from "../../../../components/datagridtooltip/DataGridToolTip";
import Popup from "../../../../components/Popup/Popup";
import AllocationInventoryEdit from "./AllocationInventoryEdit";
import ExportPopup from "../../../../components/exportPopup/ExportPopup";
import { getAllocationInventoryListAction } from "../../../../_actions/subDealer.action";
import { DataFormat } from "../../../../_helpers/commonFunctions";
import { API_URL_LMS } from "../../../../Constant/index";
import DataGridProMUI from "../../../../components/DataGrid/DataGridProMUI";
import { SignalCellularNull } from "@mui/icons-material";


const AllocationInventoryList = (props) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [isAddEdit, setIsAddEdit] = useState(false);
  const [isdelete, setIsdelete] = useState(false);
  const [openDeleteContactPopup, setOpenDeleteContactPopup] = useState(null);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [recordForDelete, setRecordForDelete] = useState(null);
  const [headerName, setHeaderName] = useState("Add Contact");
  const [tableData, setTableData] = useState([]);
  const allocatioInventory = useSelector((state) => state.allocatioInventory);
  const [openExportPopup, setOpenExportPopup] = useState(null);
  const [gridData, setGridData] = useState([]);
  const [pageSize, setPageSize] = React.useState(25);
  const history = useHistory();
  const [exportState, setExportState] = useState({
    btnName: "EXPORT",
    linkToDownload: null,
  });
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const subdealerNumber = params.get("subDelearNumber");
  const customerNo = props.soldtoNumber;
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    message: "",
    severity: "",
    open: false,
  });

  const excelFormating = [
    { expirationDate: "date" }
  ];
  const ExpFilecolHeadings = [
    [
      "Allocation Inventory Item", 
      "Company",
      "Billing Year",
      "Billing Month",
      "Product Number",
      "Product Name",
      "Billing Qty",
      "Remaining Qty",
      "Auto Allocated",
      "Manual Allocated",
      "Sum Allocated ",
      "Expiration Date",
    ],
  ];
  const ExpFilecolKeys = [
    "inventoryCode",
    "company",
    "billingYear",
    "billingMonth",
    "productCode",
    "productName",
    "billingQty",
    "remainingQty",
    "autoAllocated",
    "manuallyAllocated",
    "sumAllocated",
    "expirationDate",   
  ];

  const columns = [
    {
      field: "actions",
      headerName: "Actions",
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        const onEditClick = (e) => {
          setHeaderName(
            `Allocation Inventory Item ${params.row.inventoryCode}`
          );
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
            <EditIcon className="EditIcon" onClick={onEditClick} />
          </div>
        );
      },
    },
    {
      field: "allocationInventoryItem",
      headerName: "Allocation Inventory Item",
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => {
        const redirectToDetails = () => {
          history.push("/allocationInventory", { row });
        };
        return (
          <div
            onClick={redirectToDetails}
            style={{ color: "#007bff", cursor: "pointer" }}
          >
            {row.allocationInventoryItem}
          </div>
          );
      },
      width: 250
    },
    {
      field: "company",
      headerName: "Company",
      headerAlign: "center",
      align: "center",
      width: 180,
    },
    {
      field: "billingYear",
      headerName: "Billing Year",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "billingMonth",
      headerName: "Billing Month",
      headerAlign: "center",
      align: "center",
      width: 150,
      renderCell: ({ row }) => {
        return (
          <div>
            {row.billingMonth && row.billingMonth.length === 1
              ? "0" + row.billingMonth
              : row.billingMonth}
          </div>
        );
      },
    },
    {
      field: "productCode",
      headerName: "Product Number",
      headerAlign: "center",
      align: "center",
      width: 150,
      renderCell: RenderCellExpand,
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
      field: "billingQty",
      headerName: "Billing Qty",
      headerAlign: "center",
      align: "right",
      renderCell: ({ row }) => {
        return <div>{row.billingQty ? convertToCurrencyFormatQuantaty(row.billingQty) : null}</div>;
      },
    },
    {
      field: "remainingQty",
      headerName: "Remaining Qty",
      headerAlign: "center",
      align: "right",
      width: 150,
      renderCell: ({ row }) => {
        return <div>{convertToCurrencyFormatQuantaty(row.remainingQty)}</div>;
      },
    },
    {
      field: "autoAllocated",
      headerName: "Auto Allocated",
      headerAlign: "center",
      align: "right",
      width: 150,
      renderCell: ({ row }) => {
        return <div>{convertToCurrencyFormatQuantaty(row.autoAllocated)}</div>;
      },
    },
    {
      field: "manuallyAllocated",
      headerName: "Manual Allocated",
      headerAlign: "center",
      align: "right",
      width: 150,
      renderCell: ({ row }) => {
        return <div>{convertToCurrencyFormatQuantaty(row.manuallyAllocated)}</div>;
      },
    },
    {
      field: "sumAllocated",
      headerName: "Sum Allocated ",
      headerAlign: "center",
      align: "right",
      width: 150,
      renderCell: ({ row }) => {
        return <div>{convertToCurrencyFormatQuantaty(row.sumAllocated)}</div>;
      },
    },
    {
      field: "expireDateString",
      headerName: "Expiration Date",
      width: 150,
      headerAlign: "center",
      align: "center",
      // renderCell: ({ row }) => {
      //   return (
      //     <div>
      //       {/* {row.expirationDate
      //         ? moment(row.expirationDate).format("DD-MM-yyyy")
      //         : ""} */}
      //       {millisecondsToStringDate(row.expirationDate)}
      //     </div>
      //   );
      // },
    },
  ];

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
          <GridToolbarQuickFilter />
        </div>
      </GridToolbarContainer>
    );
  };

  const onExportClick = () => {
    setExportState({ btnName: "Exporting..." });
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    Axios.get(
      API_URL_LMS + `loyalty/export-inventory?customerId=${customerNo}`,
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

  React.useEffect(() => {
    dispatch(getAllocationInventoryListAction(customerNo));
  }, []);
  React.useEffect(() => {
    if (isAddEdit === true && openPopup === false)
      dispatch(getAllocationInventoryListAction(customerNo));
  }, [isAddEdit, openPopup]);

  React.useEffect(() => {
    const filterData =
      (allocatioInventory &&
        allocatioInventory.allocatioInventoryList &&
        allocatioInventory.allocatioInventoryList.data &&
        allocatioInventory.allocatioInventoryList.data.length > 0 &&
        allocatioInventory.allocatioInventoryList.data.map((e, i) => ({
          ...e,
          inventoryCode: Math.floor(Math.random() * 90000) + 10000,
          expireDateString: millisecondsToStringDate(
            e.expirationDate,
            DATE_FORMAT
          ),
        }))) ||
      [];
    setTableData(filterData);
  }, [allocatioInventory]);
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
        {/* <DataGrid
          rows={tableData ? tableData : []}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          components={{
            Toolbar: CustomToolbar,
          }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
        /> */}

<DataGridProMUI
          rows={tableData ? tableData : []}
          columns={columns}          
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}          
          ExpFilecolHeadings={ExpFilecolHeadings}
          ExpFilecolKeys={ExpFilecolKeys}
          excelFormating={excelFormating}
          // excelDataTransformConfig={excelDataTransformConfig}
          ExportFileName={"allocation_inventory"}
          loading={allocatioInventory.loading}
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
        <AllocationInventoryEdit
          setOpenPopup={setOpenPopup}
          recordForEdit={recordForEdit}
          setIsAddEdit={setIsAddEdit}
          subdealerNumber={subdealerNumber}
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
