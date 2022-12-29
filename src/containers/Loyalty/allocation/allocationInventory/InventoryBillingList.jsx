import React, { useState } from "react";
import Button from "@mui/material/Button";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Axios from "axios";
import moment from "moment";
import { API_URL_LMS} from "../../../../Constant/index";
import { useDispatch, useSelector } from "react-redux";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
  // GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

import {
  DATE_FORMAT,
  millisecondsToStringDate
} from "../../../../_helpers/commonFunctions";

import { RenderCellExpand } from "../../../../components/datagridtooltip/DataGridToolTip";
import Popup from "../../../../components/Popup/Popup";
import AddDealer from "./AllocationInventoryEdit";
// import DeleteDealer from "./DeleteDealer";
// import "./dealerRelationShip.scss";
import ExportPopup from "../../../../components/exportPopup/ExportPopup";
import { getDealerRetationShipListAction } from "../../../../_actions/subDealer.action";
import {
  convertToCurrencyFormat,
  convertToCurrencyFormatQuantaty,
  DataFormat
} from "../../../../_helpers";
import { API_URL_ADMIN } from "../../../../Constant/index";
import DataGridProMUI from "../../../../components/DataGrid/DataGridProMUI";

const rows = [
  {
    id: 1,
    aaal: "6526634",
    company: "SCCC",
    billingyear: "2014",
    bmonth: "05",
    pno: "635634",
    pname: "INSEE SUPER-BAG40 KG",
    qty: "200.00",
    rqty: "00.00",
    mAllocated: "00.00",
    aAllocated: "100.00",
    sumA: "100.00",
    EDate: "2014-10-5",
  },
  {
    id: 2,
    aaal: "97388",
    company: "SCCC",
    billingyear: "2016",
    bmonth: "07",
    pno: "45454",
    pname: "INSEE SUPER-BAG 60 KG",
    qty: "100.00",
    rqty: "300.00",
    mAllocated: "10.00",
    aAllocated: "100.00",
    sumA: "100.00",
    EDate: "2015-10-5",
  },
  {
    id: 1,
    aaal: "6526634",
    company: "SCCC",
    billingyear: "2014",
    bmonth: "05",
    pno: "635634",
    pname: "INSEE SUPER-BAG40 KG",
    qty: "200.00",
    rqty: "00.00",
    mAllocated: "00.00",
    aAllocated: "100.00",
    sumA: "100.00",
    EDate: "2014-10-5",
  },
];

const AllocationInventoryList = (props) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [isAddEdit, setIsAddEdit] = useState(false);
  const [isdelete, setIsdelete] = useState(false);
  const [openDeleteContactPopup, setOpenDeleteContactPopup] = useState(null);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [recordForDelete, setRecordForDelete] = useState(null);
  const [headerName, setHeaderName] = useState("Add Contact");
  const [tableData, setTableData] = useState([]);
  const [gridData, setGridData] = useState([]);
  const dealerListWithRelationship = useSelector(
    (state) => state.dealerListWithRelationship
  );
  const [openExportPopup, setOpenExportPopup] = useState(null);
  const [pageSize, setPageSize] = React.useState(25);
  const { dataTable } = props;
  const [exportState, setExportState] = useState({
    btnName: "EXPORT",
    linkToDownload: null,
  });
  // let [searchParams, setSearchParams] = useSearchParams();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const subdealerNumber = params.get("subDelearNumber");
  const [loading, setLoading]=React.useState(false)
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    message: "",
    severity: "",
    open: false,
  });

  React.useEffect(() => {
    setLoading(true)
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };  
    Axios.get(API_URL_LMS+`loyalty/inventory-billing?productCode=${props.itemDetails.productCode}&customerId=${props.itemDetails.customerId}&billingMonths=${props.itemDetails.billingMonth}&billingYear=${props.itemDetails.billingYear}&expiryDate=${props.itemDetails.expirationDate}`,requestOptions)
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
  }, []);


  const excelFormating = [{ creationDate: "date" },{billingDate:"date"}];
  const ExpFilecolHeadings = [
    [
      "Billing Number",
      "Billing Quantity",
      "Billing Date",
      "Product Number",
      "Product Name",
      "Create Date",
    ],
  ];
  const ExpFilecolKeys = [
    "billingNumber",
    "billingQty",
    "billingDate",
    "productCode",
    "productName",
    "creationDate",
  ];

  const columns = [
    {
      field: "billingNumber",
      headerName: "Billing Number",
      align: "center",
      headerAlign: "center",
      width: 190,
    },
    {
      field: "billingQty",
      headerName: "Billing Quantity",
      headerAlign: "center",
      align: "right",
      width: 190,
      renderCell: ({ row }) => {
        return <div>{row.billingQty ? convertToCurrencyFormatQuantaty(row.billingQty) : null}</div>;
      },
    },
    {
      field: "billingDate",
      headerName: "Billing Date",
      headerAlign: "center",
      align: "center",
      width: 150,
      type: "date",
      valueFormatter: (row) => {
        return row.value && row.value !== null
          ? moment(new Date(row.value)).format("DD-MM-yyyy")
          : "";
      },
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
      field: "creationDate",
      headerName: "Create Date",
      width: 150,
      headerAlign: "center",
      align: "center",
      valueFormatter: (row) => {
        return row.value && row.value !== null
          ? moment(new Date(row.value)).format("DD-MM-yyyy")
          : "";
      },
    },
  ];

  React.useEffect(() => {
    const gridData= tableData &&
    tableData.map((item,index)=>{
               return({...item,
                billingDate: new Date(item.billingDate),
                creationDate: new Date(item.creationDate),
              })
             })
             setGridData(gridData)
   }, [tableData]);

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
          rows={gridData ? gridData : []}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          // components={{
          //   Toolbar: CustomToolbar,
          // }}
          // rowsPerPageOptions={[25, 50, 75, 100]}
          // componentsProps={{
          //   toolbar: {
          //     showQuickFilter: true,
          //     quickFilterProps: { debounceMs: 500 },
          //   },
          // }}
          ExpFilecolHeadings={ExpFilecolHeadings}
          excelFormating={excelFormating}
          ExpFilecolKeys={ExpFilecolKeys}
          // excelDataTransformConfig={excelDataTransformConfig}
          // ExportDateFormatIndexes={[10]}
          ExportFileName={"cc_allocation_inventory_billing"}
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
        <AddDealer
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
