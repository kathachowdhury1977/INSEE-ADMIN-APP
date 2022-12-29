import React, { useState } from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import moment from "moment";
import IconButton from "@mui/material/IconButton";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { withTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import Controls from "../Controls";
import SubDealerAddForm from "./SubDealerAddForm";
import Popup from "../../../../../components/Popup/Popup";
import defaultImg from "./defaultImg.png";
import { API_URL_ADMIN } from "../../../../../Constant/index";
import { RenderCellExpand } from "../../../../../components/datagridtooltip/DataGridToolTip";
import { getSubDealerAction } from "../../../../../_actions/subDealer.action";
// import Loader from "../../../../../components/Loader/Loader";
import ExportPopup from "../../../../../components/exportPopup/ExportPopup";
import { DataFormat,DATE_FORMAT, DATE_TIME_FORMAT, millisecondsToStringDate,convertToCurrencyFormat } from "../../../../../_helpers/commonFunctions";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
  // GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import DataGridProMUI from "../../../../../components/DataGrid/DataGridProMUI";

const SubDealerList = (props) => {
  // console.log("bbbbb",millisecondsToStringDate(1671388200000,EXCEL_DATE_FORMAT))
  const [openPopup, setOpenPopup] = useState(false);
  const [isAddEdit, setIsAddEdit] = useState(false);
  // const [openEditPermissionPopup, setOpenEditPermissionPopup] = useState(null);
  // const [openDeleteContactPopup, setOpenDeleteContactPopup] = useState(null);
  const [recordForEdit, setRecordForEdit] = useState({});
  // const [recordForDelete, setRecordForDelete] = useState(null);
  const [headerName, setHeaderName] = useState("Add Sub Dealer");
  const dispatch = useDispatch();
  const subDealerState = useSelector((state) => state.subDealerLoyalty);
  const Domhistory = useHistory();
  const [openExportPopup, setOpenExportPopup] = useState(null);
  const [pageSize, setPageSize] = useState(25);
  const [exportState, setExportState] = useState({
    btnName: "EXPORT",
    linkToDownload: null,
  });
  const excelFormating = [
    { creationDate: "dateTime" },
    { pdpaConsentDate: "dateTime" },
  ];
  const excelDataTransformConfig = {
    markForDelete: { true: "Yes", false: "No" },
    eopCreationDate: true,
    pdpaStringDate: true,
  };
  const [legalForm, SetLegalForm] = useState([]);
  const [gridData, setGridData] = useState([]);
  const [province, setProvince] = useState([]);
  const [loading, setLoading]=React.useState(false)
  const [state, setState] = React.useState({
    message: "",
    severity: "",
    open: false,
  });

  const ExpFilecolHeadings = [
    [
      "Mark Delete",
      "Account Group",
      "Group Company",
      "Sub Dealer Number",
      "Sub Dealer Name (EN)",
      "Sub Dealer Name (TH)",
      "Tax Number",
      "Legal Form",
      "Customer Tier Status",
      "INSEE LIFE Number",
      "INSEE LIFE Points",
      "Thai Smart Card",
      "Address Number",
      "Province",
      "District",
      "Sub District",
      "Street",
      "Postal Code",
      "Latitude, Longitude",
      "Sales District",
      "PDPA",
      "PDPA Consent Date/Time",
      "Email",
      "Phone Number",
      "Mobile",
      "Customer Image",
      "Created By",
      "Created Date/Time",
    ],
  ];
  const ExpFilecolKeys = [
    "markForDelete",
    "accountGroup",
    "groupCompany",
    "subDealerNumber",
    "subDealerNameEN",
    "subDealerNameTH",
    "taxNumber",
    "legalFormName",
    "customerTierStatus",
    "inseeLifeNumber",
    "inseeLifePoints",
    "thaiSmartCard",
    "addressNumber",
    "province",
    "district",
    "subDistrict",
    "street",
    "postalCode",
    "latitudeLongitude",
    "salesDistrict",
    "pdpaString",
    "pdpaConsentDate",
    "email",
    "phoneNumber",
    "mobile",
    "customerImage",
    "createdBy",
    "creationDate",
  ];

  const columns = [
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        const onEditClick = (e) => {
          setHeaderName("Edit Sub Dealer " + params.row.subDealerNumber);
          let rowData = params.row;
          rowData.markDelete = params.row && params.row.markForDelete;
          if (
            rowData &&
            rowData.groupCompany !== null &&
            rowData.groupCompany.includes("SCCC")
          ) {
            rowData.groupCompanySCCC = true;
          }
          if (
            rowData &&
            rowData.groupCompany !== null &&
            rowData.groupCompany.includes("SCCO")
          ) {
            rowData.groupCompanySCCO = true;
          }
          if (
            rowData &&
            rowData.groupCompany !== null &&
            rowData.groupCompany.includes("CONWOOD")
          ) {
            rowData.groupCompanyCONWOOD = true;
          }
          if (
            rowData &&
            rowData.groupCompany !== null &&
            rowData.groupCompany.includes("ISUB")
          ) {
            rowData.groupCompanyISUB = true;
          }
          if (
            rowData &&
            rowData.groupCompany !== null &&
            rowData.groupCompany.includes("IECO")
          ) {
            rowData.groupCompanyIECO = true;
          }
          setRecordForEdit(rowData);
          setOpenPopup(true);
        };

        return (
          <div className="Action">
            {/* <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton> */}
            <IconButton aria-label="edit">
              <EditIcon className="EditIcon" onClick={onEditClick} />
            </IconButton>
            {/* <EditIcon className="EditIcon" onClick={onEditClick} /> */}
          </div>
        );
      },
    },
    {
      field: "markForDelete",
      headerName: "Mark Delete",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <div className="MarkDelChkBox">
            <Controls.Checkbox value={row.markForDelete} />
          </div>
        );
      },
    },
    {
      field: "accountGroup",
      headerName: "Account Group",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "groupCompany",
      headerName: "Group Company",
      headerAlign: "center",
      align: "center",
      width: 250,
      renderCell: (row) => <RenderCellExpand align="center" {...row} />,
    },
    {
      field: "subDealerNumber",
      headerName: "Sub Dealer Number",
      headerAlign: "center",
      align: "center",
      width: 170,
      renderCell: ({ row }) => {
        return (
          <>{row.subDealerNumber ? DataFormat(row.subDealerNumber) : ""}</>
        );
      },
    },
    {
      field: "subDealerNameEN",
      headerName: "Sub Dealer Name (EN)",
      headerAlign: "center",
      align: "left",
      width: 250,
      renderCell: RenderCellExpand,
      renderCell: ({ row }) => {
        const redirectToContact = (e) => {
          e.preventDefault();
          Domhistory.push(
            "/SubDealerManagement?subDelearNumber=" +
              row.subDealerNumber +
              "&subDelearName=" +
              row.subDealerNameEN
          );
        };
        return (
          <a href="#" onClick={redirectToContact}>
            {row.subDealerNameEN}
          </a>
        );
      },
    },
    {
      field: "subDealerNameTH",
      headerName: "Sub Dealer Name (TH)",
      headerAlign: "center",
      align: "left",
      width: 250,
      renderCell: RenderCellExpand,
    },
    {
      field: "taxNumber",
      headerName: "Tax Number",
      headerAlign: "center",
      align: "center",
      width: 150,
      renderCell: (row) => <RenderCellExpand align="center" {...row} />,
    },
    {
      field: "legalFormData",
      headerName: "Legal Form",
      headerAlign: "center",
      align: "center",
      width: 250,
    },
    {
      field: "customerTierStatus",
      headerName: "Customer Tier Status",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "inseeLifeNumber",
      headerName: "INSEE LIFE Number",
      align: "right",
      headerAlign: "center",
      aligh: "center",
      width: 150,
      renderCell: (row) => <RenderCellExpand align="center" {...row} />,
    },
    {
      field: "inseeLifePoints",
      headerName: "INSEE LIFE Points",
      align: "right",
      headerAlign: "center",
      width: 160,
      renderCell: ({ row }) => {
        return (
          <div>
            {row.inseeLifePoints !=null
              ? convertToCurrencyFormat(row.inseeLifePoints)
              : "0.00"}
          </div>
        );
      },
    },
    {
      field: "thaiSmartCard",
      headerName: "Thai Smart Card",
      headerAlign: "center",
      align: "center",
      width: 150,
      renderCell: (row) => <RenderCellExpand align="center" {...row} />,
    },
    {
      field: "addressNumber",
      headerName: "Address Number",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    // ch
    {
      field: "province",
      headerName: "Province",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "district",
      headerName: "District",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "subDistrict",
      headerName: "Sub District",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "street",
      headerName: "Street",
      headerAlign: "center",
      width: 150,
      align: "center",
      renderCell: (row) => <RenderCellExpand align="center" {...row} />,
    },
    {
      field: "postalCode",
      headerName: "Postal Code",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "latitudeLongitude",
      headerName: "Latitude, Longitude ",
      headerAlign: "center",
      align: "center",
      width: 200,
      renderCell: (row) => <RenderCellExpand align="center" {...row} />,
    },
    {
      field: "salesDistrict",
      headerName: "Sales District",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "pdpaString",
      headerName: "PDPA",
      width: 150,
      headerAlign: "center",
      align: "center",
      // renderCell: ({ row }) => {
      //   return <>{row.pdpa === true || row.pdpa === "true" ? "Yes" : "No"}</>;
      // },
    },
    {
      field: "pdpaConsentDate",
      headerName: "PDPA Consent Date/Time",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (row) => <RenderCellExpand align="center" {...row} />,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      headerAlign: "center",
      align: "center",
      width: 100,
    },
    {
      field: "customerImage",
      headerName: "Customer Image",
      headerAlign: "center",
      align: "center",
      width: 150,
      renderCell: ({ row }) => {
        return (
          <img
            className="user_image1"
            src={row.customerImage ? row.customerImage : defaultImg}
            alt="user"
          ></img>
        );
      },
    },
    {
      field: "createdBy",
      headerName: "Created By",
      headerAlign: "center",
      align: "left",
      width: 150,
      renderCell: RenderCellExpand,
    },
    {
      field: "createdDateString",
      headerName: "Created Date/Time",
      width: 150,
      headerAlign: "center",
      align: "center",
      // renderCell: ({ row }) => {
      //   return (
      //     <div>
      //       {row.creationDate
      //         ? moment(row.creationDate * 1000).format("DD-MM-YYYY HH:mm")
      //         : ""}
      //     </div>
      //   );
      // },
    },
  ];

 
  function getLegalForm() {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    Axios.get(API_URL_ADMIN + "retailer/legalForm", requestOptions).then(
      (response) => {
        SetLegalForm(response.data);
        return response;
      }
    );
  }
  function getprovince() {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    Axios.get(API_URL_ADMIN + "metadata/TH/province", requestOptions).then(
      (response) => {
        setProvince(response.data);
        return response;
      }
    );
  }

  React.useEffect(() => {
    getLegalForm();
    getprovince();
    dispatch(getSubDealerAction());
  }, []);

  React.useEffect(() => {
   const gridData= subDealerState &&
            subDealerState.subdealerList &&
            subDealerState.subdealerList.data && subDealerState.subdealerList.data.map((item,index)=>{
              return({...item,createdDateString : millisecondsToStringDate(item.creationDate*1000,DATE_TIME_FORMAT),pdpaString:item.pdpa === true || item.pdpa === "true" ? "Yes" : "No",legalFormData:item.legalFormName ? item.legalFormName : ""})
            })
            setGridData(gridData)
  }, [subDealerState]);
  React.useEffect(() => {
    if (isAddEdit === true && openPopup === false)
      dispatch(getSubDealerAction());
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
      <div className="DataGridContainer">
        <DataGridProMUI
          rows={
            gridData
              ? gridData
              : []
          }
          columns={columns}          
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
          excelFormating={excelFormating}
          excelDataTransformConfig={excelDataTransformConfig}
          ExportFileName={"SubDealers"}
          loading={subDealerState.loading}
          
        />
      </div>
      
      {/* popup is a reusable custom dialog component */}
      <Popup
        title={headerName}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        width={"100%"}
        height={"100%"}
        pt={0}
        pb={0}
        pl={0}
        pr={0}
      >
        <SubDealerAddForm
          setOpenPopup={setOpenPopup}
          recordForEdit={recordForEdit}
          setIsAddEdit={setIsAddEdit}
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

export default withTranslation()(SubDealerList);
