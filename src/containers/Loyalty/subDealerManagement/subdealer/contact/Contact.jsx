import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import "./Contact.scss";
import Controls from "../Controls";
import ContactForm from "./contactform/ContactForm";
import DeleteContact from "./deletecontact/DeleteContact";
import Popup from "../../../../../components/Popup/Popup";
import defaultImg from "../../../../../assets/img/defaultImg.jpg";
// import { RenderCellExpand } from "../../../../../components/datagridtooltip/DataGridToolTip";
import EditPermissionForm from "./editpermissionform/EditPermissionForm";
import { API_URL_ADMIN } from "../../../../../Constant/index";
import Axios from "axios";
import { Grid } from "@mui/material";
// import {
//   DataGrid,
//   GridToolbarContainer,
//   GridToolbarColumnsButton,
//   GridToolbarQuickFilter,
//   GridToolbarExport,
//   GridToolbarDensitySelector,
// } from "@mui/x-data-grid";
import { RenderCellExpand } from "../../../../../components/datagridtooltip/DataGridToolTip";
import { getSubDealerContactAction } from "../../../../../_actions/subDealer.action";
import ExportPopup from "../../../../../components/exportPopup/ExportPopup";
import DataGridProMUI from "../../../../../components/DataGrid/DataGridProMUI";
import {
  DATE_FORMAT,
  DATE_TIME_FORMAT,
  millisecondsToStringDate,
} from "../../../../../_helpers/commonFunctions";
const Contact = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const subdealerNumber = params.get("subDelearNumber");
  const subdealerName = params.get("subDelearName");
  const [openPopup, setOpenPopup] = useState(false);
  const [openEditPermissionPopup, setOpenEditPermissionPopup] = useState(null);
  const [openDeleteContactPopup, setOpenDeleteContactPopup] = useState(null);
  const [openExportPopup, setOpenExportPopup] = useState(null);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [recordForDelete, setRecordForDelete] = useState({});
  const [recordForEditPermission, setRecordForEditPermission] = useState(null);
  const [headerName, setHeaderName] = useState("Add Contact");
  const [rows, setRows] = useState([]);
  const [gridData, setGridData] = useState([]);
  const [pageSize, setPageSize] = useState(25);
  const [state, setState] = React.useState({
    message: "Deleted Successfully!!!!",
    severity: "success",
    open: false,
    editPermissionHdr: "",
  });
  const excelFormating = [{ dateOfBirth: "date" }];
  const excelDataTransformConfig = {
    markDelete: { true: "Yes", false: "No" },
    pdpaSigned: { true: "Yes", false: "No" },
  };
  const [exportState, setExportState] = useState({
    btnName: "EXPORT",
    linkToDownload: null,
  });
  const dispatch = useDispatch();
  const subDealerContactState = useSelector((state) => state.subDealerContact);
  // const CustomToolbar = () => {
  //   return (
  //     <GridToolbarContainer className="CntGridToolbarContainer">
  //       <Grid container spacing={2}>
  //         <Grid item md={4} xs={12}>
  //           <GridToolbarColumnsButton />
  //           <GridToolbarDensitySelector />
  //         </Grid>
  //         <Grid item md={4} xs={6}>
  //           <Grid container spacing={2}>
  //             <div className="ContactExportAndSearchContainer">
  //               <Grid item md={4} xs={12}>
  //                 <Button
  //                   variant="outlined"
  //                   startIcon={<DownloadIcon />}
  //                   onClick={onExportClick}
  //                 >
  //                   {exportState.btnName}
  //                 </Button>
  //               </Grid>
  //               <Grid item md={12} xs={12}>
  //                 <GridToolbarQuickFilter />
  //               </Grid>
  //             </div>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </GridToolbarContainer>
  //   );
  // };
  const ExpFilecolHeadings = [
    [
      "Mark Delete",
      "User Name",
      "User Image",
      "First Name",
      "Last Name",
      "Nick Name",
      "Mobile Number",
      "Phone Number",
      "Email Address",
      "Gender",
      "Date of Birth",
      "Age",
      "Marital Status",
      "Relation",
      "Position",
      "Highest Education",
      "Institution",
      "Major",
      "Not Preferred Food",
      "Not Preferred Drink",
      "Dietary Limitation",
      "Favorite Sports",
      "Country",
      "Handicap",
      "WhatsApp Id",
      "Zolo Id",
      "Line Id",
      "PDPA Signed",
      "PDPA Signed Date & Time",
    ],
  ];
  const ExpFilecolKeys = [
    "markDelete",
    "userName",
    "contactImage",
    "firstName",
    "lastName",
    "nickName",
    "mobileNumber",
    "phoneNumber",
    "emailAddress",
    "gender",
    "dateOfBirth",
    "age",
    "maritalStatus",
    "relation",
    "position",
    "highestEducation",
    "institution",
    "major",
    "notPreferedFood",
    "notPreferedDrink",
    "dietaryLimitaion",
    "favoriteSports",
    "country",
    "handicap",
    "whatsAppId",
    "zoloId",
    "lineId",
    "pdpaSigned",
    "pdpaSignedDate",
  ];

  useEffect(() => {
    dispatch(getSubDealerContactAction(subdealerNumber));
  }, []);
  useEffect(() => {
    if (!openPopup && !openDeleteContactPopup && !openEditPermissionPopup) {
      dispatch(getSubDealerContactAction(subdealerNumber));
    }
  }, [openPopup, openDeleteContactPopup, openEditPermissionPopup]);

  const onExportClick = () => {
    setExportState({ btnName: "Exporting..." });
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    Axios.get(
      API_URL_ADMIN +
        `retailer/exportSubDealerContacts?subDealerNumber=` +
        subdealerNumber
    )
      .then((response) => {
        setOpenExportPopup(true);
        setExportState({ btnName: "EXPORT", linkToDownload: response.data });
      })
      .catch((error) => {
        setExportState({ btnName: "EXPORT" });
      });
  };

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
          setHeaderName("Edit Contact");
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
      field: "markDelete",
      headerName: "Mark Delete",
      renderCell: (markDelete) => {
        return (
          <div className="MarkDelChkBox">
            <Controls.Checkbox value={markDelete.row.markDelete} />
          </div>
        );
      },
    },
    {
      field: "permissions",
      headerName: "Permissions",
      headerAlign: "center",
      renderCell: (params) => {
        const onClick = (e) => {
          setRecordForEditPermission(params.row);
          setState({
            editPermissionHdr: "Permissions for " + params.row.userName,
          });
          setOpenEditPermissionPopup(true);
        };
        return (
          <Button onClick={onClick} disabled={params.row.markDelete}>
            Edit
          </Button>
        );
      },
    },
    {
      field: "userName",
      headerName: "User Name",
      headerAlign: "center",
      align: "center",
      width: 200,
      renderCell: (row) => <RenderCellExpand align="center" {...row} />,
    },
    {
      field: "contactImage",
      headerName: "User Image",
      headerAlign: "center",
      align: "center",
      width: 150,
      renderCell: (row) => {
        return (
          <img
            className="user_image"
            src={row.formattedValue ? row.formattedValue : defaultImg}
          ></img>
        );
      },
    },
    {
      field: "firstName",
      headerName: "First Name",
      headerAlign: "center",
      width: 200,
      renderCell: RenderCellExpand,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      headerAlign: "center",
      width: 200,
      renderCell: RenderCellExpand,
    },
    {
      field: "nickName",
      headerName: "Nick Name",
      headerAlign: "center",
      width: 200,
      renderCell: RenderCellExpand,
    },
    {
      field: "mobileNumber",
      headerName: "Mobile Number",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 150,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "emailAddress",
      headerName: "Email Address",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (row) => <RenderCellExpand align="center" {...row} />,
    },
    {
      field: "gender",
      headerName: "Gender",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "dobString",
      headerName: "Date of Birth",
      headerAlign: "center",
      width: 100,
      // renderCell: ({ row }) => {
      //   return (
      //     <div>
      //       {row.dateOfBirth
      //         ? moment(row.dateOfBirth).format("DD-MM-yyyy")
      //         : null}
      //     </div>
      //   );
      // },
    },
    {
      field: "age",
      headerName: "Age",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "maritalStatus",
      headerName: "Marital Status",
      headerAlign: "center",
      align: "center",
      width: 120,
    },
    {
      field: "relation",
      headerName: "Relation",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "position",
      headerName: "Position",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "highestEducation",
      headerName: "Highest Education",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "institution",
      headerName: "Institution",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "major",
      headerName: "Major",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "notPreferedFood",
      headerName: "Not Preferred Food",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "notPreferedDrink",
      headerName: "Not Preferred Drink",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "dietaryLimitaion",
      headerName: "Dietary Limitation",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "favoriteSports",
      headerName: "Favorite Sports",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "country",
      headerName: "Country",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "handicap",
      headerName: "Handicap",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <div className="MarkDelChkBox">
            <Controls.Checkbox value={row.handicap === true ? true : false} />
          </div>
        );
      },
    },
    {
      field: "whatsAppId",
      headerName: "WhatsApp Id",
      headerAlign: "center",
      align: "center",
      renderCell: RenderCellExpand,
    },
    {
      field: "zoloId",
      headerName: "Zolo Id",
      headerAlign: "center",
      align: "center",
      renderCell: RenderCellExpand,
    },
    {
      field: "lineId",
      headerName: "Line Id",
      headerAlign: "center",
      align: "center",
      renderCell: RenderCellExpand,
    },
    {
      field: "pdpaSigned",
      headerName: "PDPA Signed",
      headerAlign: "center",
      align: "center",
      width: 150,
      renderCell: ({ row }) => {
        return (
          <div className="MarkDelChkBox">
            <Controls.Checkbox value={row.pdpaSigned === "true"} />
          </div>
        );
      },
    },
    {
      field: "pdpaSignedDate",
      headerName: "PDPA Signed Date & Time",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
  ];

  React.useEffect(() => {
    const gridData =
      subDealerContactState &&
      subDealerContactState.subdealerContactList &&
      subDealerContactState.subdealerContactList.data &&
      subDealerContactState.subdealerContactList.data.map((item, index) => {
        return {
          ...item,
          dobString: millisecondsToStringDate(item.dateOfBirth, DATE_FORMAT),
        };
      });
    setGridData(gridData);
  }, [subDealerContactState]);

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
              setHeaderName("Add Contact");
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          >
            ADD CONTACT
          </Button>
        </div>
      </div>
      <div className="ContactDataGridContainer">
        <DataGridProMUI
          rows={gridData ? gridData : []}
          //pageSize={25}
          // rowsPerPageOptions={[25, 50, 75, 100]}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          // components={{
          //   Toolbar: CustomToolbar,
          // }}
          // componentsProps={{
          //   toolbar: {
          //     showQuickFilter: true,
          //     quickFilterProps: { debounceMs: 500 },
          //   },
          // }}
          ExpFilecolHeadings={ExpFilecolHeadings}
          excelFormating={excelFormating}
          ExpFilecolKeys={ExpFilecolKeys}
          excelDataTransformConfig={excelDataTransformConfig}
          // ExportDateFormatIndexes={[10]}
          ExportFileName={"Subdealer_contacts_" + subdealerNumber}
          loading={subDealerContactState.loading}
        />
      </div>
      {/* popup is a reusable custom dialog component, pt pb pr pl are padding props*/}
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
        <ContactForm
          setOpenPopup={setOpenPopup}
          recordForEdit={recordForEdit}
        />
      </Popup>
      <Popup
        title={state.editPermissionHdr}
        openPopup={openEditPermissionPopup}
        setOpenPopup={setOpenEditPermissionPopup}
      >
        <EditPermissionForm
          openPopup={openEditPermissionPopup}
          setOpenPopup={setOpenEditPermissionPopup}
          recordForEditPermission={recordForEditPermission}
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
      {/* <ExportPopup
        title={""}
        openPopup={openExportPopup}
        setOpenExportPopup={setOpenExportPopup}
        linkToDownload={exportState.linkToDownload}
      /> */}
    </>
  );
};

export default Contact;
