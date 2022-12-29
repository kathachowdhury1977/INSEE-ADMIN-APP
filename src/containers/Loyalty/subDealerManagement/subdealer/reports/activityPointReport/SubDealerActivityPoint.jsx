import React, { useState } from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import moment from "moment";
import { withTranslation, useTranslation } from "react-i18next";
import Controls from "../../Controls";
// import defaultImg from "./defaultImg.png";
import Axios from "axios";
import { API_URL_ADMIN} from "../../../../../../Constant/index";
import { useDispatch, useSelector } from "react-redux";
import { getSubDealerAction } from "../../../../../../_actions/subDealer.action";

import SubDealerActivityPointSearchForm from "./SubDealerActivityPointSearchForm";


import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    markForDelete: false,
    accountGroup: "ABCG123",
    subDealerNumber:"AAF111103",
    groupCompany:"Twerr",
    subDealerNo:"123575",
    subDealerNameEN:"Test Dealer",
    subDealerNameTH:"TDH667",
    taxNumber:"assd2345",
    legalForm:"Partnership Ltd",
    customerTierStatus:"Gold",
    InseeLifeNumber:"ytddkdff",
    InseeLifePoints:"5462828280",
    thaiSmartCard:"21234533",
    addressNumber:"55656",
    province:"Phrae",
    district:"Rasi Salai",
    subDistrict: "Ano Ru",
    street:"street ",
    postalCode:"897656",
    latitudeLongitude:"2324434 45455",
    salesDistrict:"MT",
    pdpa:"uyudhd",
    PDPAConsentDateTime:"2010-02-02T07:50:04.410Z",
    email:"test123@gmail.com",
    phoneNumber:"9878675656",
    mobile:"87356483093",
    userImage:"",
    createdBy:"Vk kumar",
    createdDateTime:"2010-02-02T07:50:04.410Z",
  },
  {
    id: 2,
    markForDelete: true,
    accountGroup: "XMCNS",
    subDealerNumber:"AAF111102",
    groupCompany:"Twerr",
    subDealerNo:"123575",
    subDealerNameEN:"Test Dealer",
    subDealerNameTH:"sssjkf74746",
    taxNumber:"assd2345",
    legalForm:"Partnership",
    customerTierStatus:"Gold",
    InseeLifeNumber:"ytddkdff",
    InseeLifePoints:"5462828280",
    thaiSmartCard:"21234533",
    addressNumber:"55656",
    province:"Sisaket",
    district:"Bua Yai",
    subDistrict: "Ano Ru",
    street:"Test street ",
    postalCode:"897656",
    latitudeLongitude:"2324434 45455",
    salesDistrict:"N2",
    pdpa:"uyudhd",
    PDPAConsentDateTime:"2010-02-02T07:50:04.410Z",
    email:"test123@gmail.com",
    phoneNumber:"9878675656",
    mobile:"87356483093",
    userImage:"",
    createdBy:"Ak kumar",
    createdDateTime:"2012-02-02T07:50:04.410Z",
  },
  {
    id: 3,
    markForDelete: false,
    subDealerNumber:"AAF111101",
    accountGroup: "ทดสอบ 2325",
    groupCompany:"dfgfd",
    subDealerNo:"567867",
    subDealerNameEN:" Dealer",
    subDealerNameTH:"jlfi68",
    taxNumber:"ทดสอบเลขภาษี",
    legalForm:"Partnership Ltd",
    customerTierStatus:"Red",
    InseeLifeNumber:"12345666",
    InseeLifePoints:"5462828280",
    thaiSmartCard:"21234533",
    addressNumber:"ที่อยู่ทดสอบ",
    province:"Uttaradit",
    district:"Dan Chang",
    subDistrict: "Ang Thong",
    street:"ถนน",
    postalCode:"ทดสอบไปรษณีย์",
    latitudeLongitude:"2324434 45455",
    salesDistrict:"NE1",
    pdpa:"HDGD",
    PDPAConsentDateTime:"2010-02-02T07:50:04.410Z",
    email:"12test123@gmail.com",
    phoneNumber:"011 32324",
    mobile:"7656453456",
    userImage:"",
    createdBy:"An kumar",
    createdDateTime:"2011-02-02T07:50:04.410Z",
  },
  {
    id: 4,
    markForDelete: false,
    subDealerNumber:"Test56b",
    accountGroup: "rer 2325",
    groupCompany:"dfgfd",
    subDealerNo:"567867",
    subDealerNameEN:" Dealer",
    subDealerNameTH:"bghjgh",
    taxNumber:"tyutyu",
    legalForm:"Partnership Ltd",
    customerTierStatus:"Red",
    InseeLifeNumber:"12345666",
    InseeLifePoints:"5462828280",
    thaiSmartCard:"21234533",
    addressNumber:"ที่อยู่ทดสอบ",
    province:"Uttaradit",
    district:"Dan Chang",
    subDistrict: "Ang Thong",
    street:"ถนน",
    postalCode:"ghghhg",
    latitudeLongitude:"2324434 45455",
    salesDistrict:"NE1",
    pdpa:"HDGD",
    PDPAConsentDateTime:"2010-02-02T07:50:04.410Z",
    email:"12test123@gmail.com",
    phoneNumber:"011 32324",
    mobile:"7656453456",
    userImage:"",
    createdBy:"An kumar",
    createdDateTime:"2011-02-02T07:50:04.410Z",
  },
  {
    id: 5,
    markForDelete: false,
    subDealerNumber:"BVGCB446",
    accountGroup: " 2325",
    groupCompany:"dfgfd",
    subDealerNo:"567867",
    subDealerNameEN:" Dealer",
    subDealerNameTH:"ธนวรรณ123",
    taxNumber:"",
    legalForm:"Partnership Ltd",
    customerTierStatus:"Red",
    InseeLifeNumber:"12345666",
    InseeLifePoints:"5462828280",
    thaiSmartCard:"21234533",
    addressNumber:"ที่อยู่ทดสอบ",
    province:"Uttaradit",
    district:"Dan Chang",
    subDistrict: "Ang Thong",
    street:"ถนน",
    postalCode:"sdsdfsd",
    latitudeLongitude:"2324434 45455",
    salesDistrict:"NE1",
    pdpa:"HDGD",
    PDPAConsentDateTime:"2010-02-02T07:50:04.410Z",
    email:"12test123@gmail.com",
    phoneNumber:"011 32324",
    mobile:"7656453456",
    userImage:"",
    createdBy:"An kumar",
    createdDateTime:"2011-02-02T07:50:04.410Z",
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
          Export
        </Button>
        <GridToolbarQuickFilter />
      </div>
    </GridToolbarContainer>
  );
};

const onExportClick = () => {
  console.log("Inside Export Click");
};

const SubDealerActivityPoint = () => {
  const dispatch = useDispatch();
  const subDealerState = useSelector((state) => state.subDealerLoyalty);
  console.log('iiiii',subDealerState)
  const [state, setState] = React.useState({
    message: "Deleted Successfully!!!!",
    severity: "success",
    open: false,
  });

  const columns = [      
    {
      field: "accountGroup",
      headerName: "Company",
      headerAlign: "left",
      width: 150,
    },
    {
      field: "groupCompany",
      headerName: "Activity Type",
      headerAlign: "left",
      width: 150,
    },
    {
      field: "subDealerNumber",
      headerName: "Dealer Number",
      headerAlign: "left",
      width: 150,
    },
    {
      field: "subDealerNameEN",
      headerName: "Dealer Name",
      headerAlign: "left"
    },
    {
      field: "subDealerNameTH",
      headerName: "Billing Number",
      headerAlign: "left",
      width: 150,
    },
    {
      field: "PDPAConsentDateTime",
      headerName: "Billing Date",
      headerAlign: "left",
      width: 150,
      renderCell: (row) => {
        return <div>{moment(row.PDPAConsentDateTime).format("DD-MM-yyyy")}</div>;
      },
    },
    {
      field: "legalForm",
      headerName: "Product Number",
      headerAlign: "left",
      width: 150,
    },
    {
      field: "customerTierStatus",
      headerName: "Product Name",
      headerAlign: "left",
      width: 150,
    },
    {
      field: "inseeLifeNumber",
      headerName: "Point Received",
      headerAlign: "left",
      width: 150,
    },
    {
      field: "PDPAConsentDateTime",
      headerName: "Expiration Date",
      headerAlign: "left",
      width: 150,
      renderCell: (row) => {
        return <div>{moment(row.PDPAConsentDateTime).format("DD-MM-yyyy")}</div>;
      },
    },
    {
      field: "thaiSmartCard",
      headerName: "Create Date",
      headerAlign: "left",
      width: 150,
    },
    {
      field: "addressNumber",
      headerName: "Remarks",
      headerAlign: "left",
      width: 150,
    }    
  ];
React.useEffect(() => {
  dispatch(getSubDealerAction());
}, []);
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
      
      <div>
      <SubDealerActivityPointSearchForm
          setOpenPopup={true}
          recordForEdit={null}
        />
      </div>
      <div className="DataGridContainer">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={25}
          rowsPerPageOptions={[25, 50, 75, 100]}
        //   components={{
        //     Toolbar: CustomToolbar,
        //   }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
        />
      </div>      
      
    </>
  );
};

export default withTranslation()(SubDealerActivityPoint);