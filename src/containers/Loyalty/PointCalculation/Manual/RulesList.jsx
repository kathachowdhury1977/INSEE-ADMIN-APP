import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Axios from "axios";
import { Grid } from "@mui/material";
import moment from "moment";
import Controls from "../../subDealerManagement/subdealer/Controls";
import { API_URL_LMS } from "../../../../Constant/index";
import { useForm, Form } from "../../../../components/Form/FormComponent";
import {
  convertToCurrencyFormat,
  convertToCurrencyFormatQuantaty,
  millisecondsToStringDate,
  DATE_FORMAT,
  isRequired,
} from "../../../../_helpers/commonFunctions";
import { withTranslation, useTranslation } from "react-i18next";
// import Controls from "../../Controls";
// import defaultImg from "./defaultImg.png";
// import Axios from "axios";
// import { API_URL_ADMIN} from "../../../../../Constant/index";
import { useDispatch, useSelector } from "react-redux";
// import { getSubDealerAction } from "../../../../../_actions/subDealer.action";
import Popup from "../../../../components/Popup/Popup";
import SearchForm from "./SearchForm";
import RulesAddEditForm from "./RulesAddEditForm";
import DeleteRule from "./DeleteRule";
import { getPointCalulationManualListAction } from "../../../../_actions/subDealer.action";
import ExportPopup from "../../../../components/exportPopup/ExportPopup";
import DataGridProMUI from "../../../../components/DataGrid/DataGridProMUI";

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
    EndDate: "2024-02-02T07:50:04.410Z",
    markForDelete: false,
    accountGroup: "ABCG123",
    subDealerNumber: "No",
    groupCompany: "Twerr",
    subDealerNo: "123575",
    subDealerNameEN: "Test Dealer",
    subDealerNameTH: "TDH667",
    taxNumber: "assd2345",
    legalForm: "Partnership Ltd",
    customerTierStatus: "Gold",
    InseeLifeNumber: "ytddkdff",
    InseeLifePoints: "5462828280",
    thaiSmartCard: "21234533",
    addressNumber: "55656",
    province: "Phrae",
    district: "Rasi Salai",
    subDistrict: "Ano Ru",
    street: "street ",
    postalCode: "897656",
    latitudeLongitude: "2324434 45455",
    salesDistrict: "MT",
    pdpa: "uyudhd",
    PDPAConsentDateTime: "2010-02-02T07:50:04.410Z",
    email: "test123@gmail.com",
    phoneNumber: "9878675656",
    mobile: "87356483093",
    userImage: "",
    createdBy: "Vk kumar",
    createdDateTime: "2010-02-02T07:50:04.410Z",
  },
  {
    id: 2,
    EndDate: "2024-02-02T07:50:04.410Z",
    markForDelete: true,
    accountGroup: "XMCNS",
    subDealerNumber: "Yes",
    groupCompany: "Twerr",
    subDealerNo: "123575",
    subDealerNameEN: "Test Dealer",
    subDealerNameTH: "sssjkf74746",
    taxNumber: "assd2345",
    legalForm: "Partnership",
    customerTierStatus: "Gold",
    InseeLifeNumber: "ytddkdff",
    InseeLifePoints: "5462828280",
    thaiSmartCard: "21234533",
    addressNumber: "55656",
    province: "Sisaket",
    district: "Bua Yai",
    subDistrict: "Ano Ru",
    street: "Test street ",
    postalCode: "897656",
    latitudeLongitude: "2324434 45455",
    salesDistrict: "N2",
    pdpa: "uyudhd",
    PDPAConsentDateTime: "2010-02-02T07:50:04.410Z",
    email: "test123@gmail.com",
    phoneNumber: "9878675656",
    mobile: "87356483093",
    userImage: "",
    createdBy: "Ak kumar",
    createdDateTime: "2012-02-02T07:50:04.410Z",
  },
  {
    id: 3,
    EndDate: "2025-02-02T07:50:04.410Z",
    markForDelete: false,
    subDealerNumber: "Yes",
    accountGroup: "ทดสอบ 2325",
    groupCompany: "dfgfd",
    subDealerNo: "567867",
    subDealerNameEN: " Dealer",
    subDealerNameTH: "jlfi68",
    taxNumber: "ทดสอบเลขภาษี",
    legalForm: "Partnership Ltd",
    customerTierStatus: "Red",
    InseeLifeNumber: "12345666",
    InseeLifePoints: "5462828280",
    thaiSmartCard: "21234533",
    addressNumber: "ที่อยู่ทดสอบ",
    province: "Uttaradit",
    district: "Dan Chang",
    subDistrict: "Ang Thong",
    street: "ถนน",
    postalCode: "ทดสอบไปรษณีย์",
    latitudeLongitude: "2324434 45455",
    salesDistrict: "NE1",
    pdpa: "HDGD",
    PDPAConsentDateTime: "2010-02-02T07:50:04.410Z",
    email: "12test123@gmail.com",
    phoneNumber: "011 32324",
    mobile: "7656453456",
    userImage: "",
    createdBy: "An kumar",
    createdDateTime: "2011-02-02T07:50:04.410Z",
  },
  {
    id: 4,
    markForDelete: false,
    EndDate: "2024-02-02T07:50:04.410Z",
    subDealerNumber: "No",
    accountGroup: "rer 2325",
    groupCompany: "dfgfd",
    subDealerNo: "567867",
    subDealerNameEN: " Dealer",
    subDealerNameTH: "bghjgh",
    taxNumber: "tyutyu",
    legalForm: "Partnership Ltd",
    customerTierStatus: "Red",
    InseeLifeNumber: "12345666",
    InseeLifePoints: "5462828280",
    thaiSmartCard: "21234533",
    addressNumber: "ที่อยู่ทดสอบ",
    province: "Uttaradit",
    district: "Dan Chang",
    subDistrict: "Ang Thong",
    street: "ถนน",
    postalCode: "ghghhg",
    latitudeLongitude: "2324434 45455",
    salesDistrict: "NE1",
    pdpa: "HDGD",
    PDPAConsentDateTime: "2010-02-02T07:50:04.410Z",
    email: "12test123@gmail.com",
    phoneNumber: "011 32324",
    mobile: "7656453456",
    userImage: "",
    createdBy: "An kumar",
    createdDateTime: "2011-02-02T07:50:04.410Z",
  },
  {
    id: 5,
    markForDelete: false,
    EndDate: "2024-02-02T07:50:04.410Z",
    subDealerNumber: "Yes",
    accountGroup: " 2325",
    groupCompany: "dfgfd",
    subDealerNo: "567867",
    subDealerNameEN: " Dealer",
    subDealerNameTH: "ธนวรรณ123",
    taxNumber: "",
    legalForm: "Partnership Ltd",
    customerTierStatus: "Red",
    InseeLifeNumber: "12345666",
    InseeLifePoints: "5462828280",
    thaiSmartCard: "21234533",
    addressNumber: "ที่อยู่ทดสอบ",
    province: "Uttaradit",
    district: "Dan Chang",
    subDistrict: "Ang Thong",
    street: "ถนน",
    postalCode: "sdsdfsd",
    latitudeLongitude: "2324434 45455",
    salesDistrict: "NE1",
    pdpa: "HDGD",
    PDPAConsentDateTime: "2010-02-02T07:50:04.410Z",
    email: "12test123@gmail.com",
    phoneNumber: "011 32324",
    mobile: "7656453456",
    userImage: "",
    createdBy: "An kumar",
    createdDateTime: "2011-02-02T07:50:04.410Z",
  },
];

const SubDealerActivityPoint = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [isdelete, setIsdelete] = useState(false);
  const [openEditPermissionPopup, setOpenEditPermissionPopup] = useState(null);
  const [openDeleteRulePopup, setOpenDeleteRulePopup] = useState(null);
  const [recordForEdit, setRecordForEdit] = useState({});
  const [recordForDelete, setRecordForDelete] = useState(null);
  const [headerName, setHeaderName] = useState("Add New Rule");
  const dispatch = useDispatch();
  const [isAddEdit, setIsAddEdit] = useState(false);
  const [searchString, setSearchString] = useState("");
  const pointCalculationState = useSelector((state) => state.pointCalculation);
  const [openExportPopup, setOpenExportPopup] = useState(null);
  const [pageSize, setPageSize] = useState(25);
  const [exportState, setExportState] = useState({
    btnName: "EXPORT",
    linkToDownload: null,
  });
  const [state, setState] = React.useState({
    message: "Deleted Successfully!!!!",
    severity: "success",
    open: false,
  });
  const [gridData, setGridData] = useState([]);

  const INITIAL_FORM_VALUES = {
    activeFlag: "All",
    startDate: null,
    endDate: null,
  };
  const ACTIVE_LIST = ["Yes", "No", "All"];
  const excelFormating = [{ startDate: "date" }, { endDate: "date" }];
  // heading of the exported file
  const ExpFilecolHeadings = [
    [
      "Start Date",
      "End Date",
      "Active",
      "Sales Organization",
      "Distribution Channel",
      "Division",
      "Material Group 1",
      "Material Pricing Group",
      "Expiry Years",
      "Quantity",
      "Sub Dealer Points",
    ],
  ];
  // feilds which are required in the export file and order of the feilds
  const ExpFilecolKeys = [
    "startDate",
    "endDate",
    "active",
    "salesOrganization",
    "distributionChannel",
    "division",
    "materialGroup",
    "materialPriceGroup",
    "expireYear",
    "quantity",
    "subDealerPoint",
  ];

  const columns = [
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        const onEditClick = (e) => {
          setHeaderName("EDIT POINT CALCULATION RULES");
          setRecordForEdit(params.row);
          setOpenPopup(true);
          setIsAddEdit(false);
        };
        const onDeleteClick = (e) => {
          setRecordForDelete(params.row);
          setOpenDeleteRulePopup(true);
          setIsdelete(false);
        };

        return (
          <div className="Action">
            <EditIcon className="EditIcon" onClick={onEditClick} />
            <DeleteIcon className="DeleteIcon" onClick={onDeleteClick} />
          </div>
        );
      },
    },
    {
      field: "startDate",
      headerName: "Start Date",
      headerAlign: "center",
      align: "center",
      width: 150,
      // renderCell: ({ row }) => {
      //   return moment(parseInt(row.c)).format("DD-MM-YYYY");
      // },
      type: "date",
      valueFormatter: (row) => {
        return row.value && row.value !== null
          ? moment(new Date(row.value)).format("DD-MM-yyyy")
          : "";
      },
    },
    {
      field: "endDate",
      headerName: "End Date",
      headerAlign: "center",
      align: "center",
      width: 150,
      // renderCell: ({ row }) => {
      //   return moment(parseInt(row.endDate)).format("DD-MM-YYYY");
      // },
      type: "date",
      valueFormatter: (row) => {
        return row.value && row.value !== null
          ? moment(new Date(row.value)).format("DD-MM-yyyy")
          : "";
      },
    },
    {
      field: "active",
      headerName: "Active",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "salesOrganization",
      headerName: "Sales Organization",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "distributionChannel",
      headerName: "Distribution Channel",
      align: "center",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "division",
      headerName: "Division",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "materialGroup",
      headerName: "Material Group 1",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "materialPriceGroup",
      headerName: "Material Pricing Group ",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "expireYear",
      headerName: "Expiry Years",
      align: "center",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      headerAlign: "center",
      align: "right",
      width: 150,
      renderCell: ({ row }) => {
        return convertToCurrencyFormatQuantaty(row.quantity);
      },
    },
    {
      field: "subDealerPoint",
      headerName: "Sub Dealer Points",
      headerAlign: "center",
      align: "right",
      width: 150,
      renderCell: ({ row }) => {
        return convertToCurrencyFormat(row.subDealerPoint);
      },
    },
  ];

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // for single input validation we need to check if this feild is there are not
    if ("subDealerNumber" in fieldValues)
      temp.subDealerNumber = isRequired(fieldValues.subDealerNumber)
        ? ""
        : "Sub Dealer Number is required.";

    if ("startDate" in values && values.endDate != null) {
      temp.startDate =
        values.startDate > values.endDate
          ? "Start date Should be lesser than End date"
          : "";
    }

    setErrors({
      ...temp,
    });
    // to check all of the properties inside temp function is an empty string(i.e. valid)
    // we will return this only if the validate is method is called from Onsubmit method
    if (fieldValues == values)
      return Object.values(temp).every((eachFieldErr) => eachFieldErr == "");
  };
  const { values, setValues, handleInputChange, errors, setErrors } = useForm(
    INITIAL_FORM_VALUES,
    true,
    validate
  );

  React.useEffect(() => {
    if (values.startDate && values.endDate) validate();
  }, [values.startDate, values.endDate]);

  React.useEffect(() => {
    if (isAddEdit === true && openPopup === false)
      dispatch(getPointCalulationManualListAction(searchString));
  }, [isAddEdit, openPopup]);

  const resetSearch = () => {
    setValues({ activeFlag: "All", startDate: null, endDate: null });
  };

  React.useEffect(() => {
    let queryString = "";
    if (values.activeFlag === "All") {
      queryString = `?ruleType=manual${
        values.startDate
          ? "&&startDate=" + moment(values.startDate).format("DD-MM-yyyy")
          : ""
      }${
        values.endDate
          ? "&&endDate=" + moment(values.endDate).format("DD-MM-yyyy")
          : ""
      }`;
    } else {
      queryString = `?ruleType=manual${
        values.activeFlag ? "&&activeFlag=" + values.activeFlag : ""
      }${
        values.startDate
          ? "&&startDate=" + moment(values.startDate).format("DD-MM-yyyy")
          : ""
      }${
        values.endDate
          ? "&&endDate=" + moment(values.endDate).format("DD-MM-yyyy")
          : ""
      }`;
    }
    setSearchString(queryString);
    dispatch(getPointCalulationManualListAction(queryString));
  }, [values.activeFlag, values.startDate, values.endDate]);

  React.useEffect(() => {
    if (isdelete === true && openDeleteRulePopup === false)
      dispatch(getPointCalulationManualListAction("?ruleType=manual"));
  }, [isdelete, openDeleteRulePopup]);

  useEffect(() => {
    const gridData =   pointCalculationState &&
    pointCalculationState.manual &&
    pointCalculationState.manual.manualRuleList &&
    pointCalculationState.manual.manualRuleList.data
      && pointCalculationState.manual.manualRuleList.data.map((e, i) =>{
        return (
          {
            ...e,
            // startDateString: millisecondsToStringDate(
            //   e.startDate,
            //   DATE_FORMAT
            // ),
            // endDateString: millisecondsToStringDate(
            //   e.endDate,
            //   DATE_FORMAT
            // ),
            startDate: e.startDate != null ? new Date(e.startDate) : "",
            endDate : e.endDate != null ? new Date(e.endDate) :""
          }
        )
        })
      setGridData(gridData)
},[ pointCalculationState &&
  pointCalculationState.manual &&
  pointCalculationState.manual.manualRuleList &&
  pointCalculationState.manual.manualRuleList.data
  ])

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

      <>
        <div className="pCalFormControll">
          <Grid container>
            <Grid item md={3} xs={12}>
              <Controls.DatePicker
                name="startDate"
                label="Start Date"
                helperText=""
                value={values.startDate ? values.startDate : null}
                onChange={handleInputChange}
                maxDate={values.endDate}
                error={errors.startDate}
              />
            </Grid>

            <Grid item md={3} xs={12}>
              <Controls.DatePicker
                name="endDate"
                label="End Date"
                value={values.endDate ? values.endDate : null}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <Controls.Select
                name="activeFlag"
                label="Active"
                value={values.activeFlag}
                onChange={handleInputChange}
                options={ACTIVE_LIST}
                error={errors.subDistrict}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <div className="">
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={resetSearch}
                >
                  Clear All
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </>

      <div className="addPointsRules">
        <Button
          variant="contained"
          className="btncolor"
          onClick={() => {
            setHeaderName("ADD POINT CALCULATION RULES");
            setOpenPopup(true);
            setRecordForEdit(null);
            setIsAddEdit(false);
          }}
        >
          ADD POINT CALCULATION RULES
        </Button>
      </div>

      <div className="DataGridContainer">
        <DataGridProMUI
          rows ={gridData}
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
          // ExportDateFormatIndexes={[3,4,9]}
          excelFormating={excelFormating}
          ExportFileName={"PointCalculationRule_Manual"}
          loading={pointCalculationState && pointCalculationState.manual && pointCalculationState.manual.loading ? true : false}
        />
      </div>

      <Popup
        title={headerName}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        width={"100%"}
        height={"auto"}
        pt={0}
        pb={5}
        pl={0}
        pr={0}
      >
        <RulesAddEditForm
          setOpenPopup={setOpenPopup}
          recordForEdit={recordForEdit}
          setIsAddEdit={setIsAddEdit}
        />
      </Popup>

      <Popup
        title={""}
        openPopup={openDeleteRulePopup}
        setOpenPopup={setOpenDeleteRulePopup}
      >
        <DeleteRule
          openPopup={openDeleteRulePopup}
          setOpenPopup={setOpenDeleteRulePopup}
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

export default withTranslation()(SubDealerActivityPoint);
