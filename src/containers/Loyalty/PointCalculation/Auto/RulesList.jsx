import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import moment from "moment";
import Axios from "axios";
import { Grid } from "@mui/material";
import { withTranslation, useTranslation } from "react-i18next";
// import Controls from "../../Controls";
// import defaultImg from "./defaultImg.png";
// import Axios from "axios";
// import { API_URL_ADMIN} from "../../../../../Constant/index";
import { useDispatch, useSelector } from "react-redux";
import { getPointCalulationListAction } from "../../../../_actions/subDealer.action";
import Popup from "../../../../components/Popup/Popup";
import Controls from "../../subDealerManagement/subdealer/Controls";
import SearchForm from "./SearchForm";
import RulesAddEditForm from "./RulesAddEditForm";
import DeleteRule from "./DeleteRule";
import { useForm, Form } from "../../../../components/Form/FormComponent";
import { API_URL_LMS, API_URL_ADMIN } from "../../../../Constant/index";
import ExportPopup from "../../../../components/exportPopup/ExportPopup";

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import DataGridProMUI from "../../../../components/DataGrid/DataGridProMUI";
import {
  convertToCurrencyFormat,
  convertToCurrencyFormatQuantaty,
  millisecondsToStringDate,
  DATE_FORMAT,
} from "../../../../_helpers";

const SubDealerActivityPoint = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [isdelete, setIsdelete] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [isAddEdit, setIsAddEdit] = useState(false);
  const [openExportPopup, setOpenExportPopup] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);
  const [openEditPermissionPopup, setOpenEditPermissionPopup] = useState(null);
  const [openDeleteRulePopup, setOpenDeleteRulePopup] = useState(null);
  const [recordForEdit, setRecordForEdit] = useState({});
  const [pageSize, setPageSize] = useState(25);
  const [recordForDelete, setRecordForDelete] = useState(null);
  const [headerName, setHeaderName] = useState("Add New Rule");
  const dispatch = useDispatch();
  const [filterErr, setFilterErr] = useState({});
  const [exportState, setExportState] = useState({
    btnName: "EXPORT",
    linkToDownload: null,
  });
  const INITIAL_FORM_VALUES = {
    activeFlag: "All",
    startDate: null,
    endDate: null,
  };
  const ACTIVE_LIST = ["Yes", "No", "All"];
  const pointCalculationState = useSelector((state) => state.pointCalculation);
  const [state, setState] = React.useState({
    message: "Deleted Successfully!!!!",
    severity: "success",
    open: false,
  });
  const [gridData, setGridData] = useState([]);

  const excelFormating = [{ startDate: "date" }, { endDate: "date" }];
  // heading of the exported file
  const ExpFilecolHeadings = [
    [
      "Start Date",
      "End Date",
      "Active",
      "Sales Organization",
      "Billing Type",
      "Distribution Channel",
      "Division",
      "Item Category",
      "Material Group 1",
      "Material Pricing Group",
      "Calculation Type",
      "Cut-off Day",
      "Expiry Years",
      "Quantity",
      "Dealer Points",
      "Sub Dealer Points",
    ],
  ];
  // feilds which are required in the export file and order of the feilds
  const ExpFilecolKeys = [
    "startDate",
    "endDate",
    "active",
    "salesOrganization",
    "billingType",
    "distributionChannel",
    "division",
    "itemCategory",
    "materialGroup",
    "materialPriceGroup",
    "calculationType",
    "cutOffDays",
    "expireYear",
    "quantity",
    "dealerPoint",
    "subDealerPoint",
  ];

  const validate = (fieldValues = values) => {
    let temp = {};
    // for single input validation we need to check if this feild is there are not
    if ("startDate" in values && values.endDate != null) {
      temp.startDate =
        values.startDate > values.endDate
          ? "Start date Should be lesser than End date"
          : "";
    }
    setFilterErr({ ...temp });
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

  const columns = [
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
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
      //   return moment(parseInt(row.startDate)).format("DD-MM-YYYY");
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
      align: "center",
      headerAlign: "right",
      width: 150,
    },
    {
      field: "billingType",
      headerName: "Billing Type",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "distributionChannel",
      headerName: "Distribution Channel",
      headerAlign: "center",
      align: "center",
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
      field: "itemCategory",
      headerName: "Item Category",
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
      width: 190,
    },
    {
      field: "calculationType",
      headerName: "Calculation Type",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "cutOffDays",
      headerName: "Cut-off Day",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "expireYear",
      headerName: "Expiry Years",
      headerAlign: "center",
      align: "center",
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
      field: "dealerPoint",
      headerName: "Dealer Points",
      headerAlign: "center",
      align: "right",
      width: 150,
      renderCell: ({ row }) => {
        return convertToCurrencyFormat(row.dealerPoint);
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
  React.useEffect(() => {
    // dispatch(getPointCalulationListAction('?ruleType=auto'));
  }, []);

  React.useEffect(() => {
    if (isAddEdit === true && openPopup === false) {
      dispatch(getPointCalulationListAction(searchString));
    }
  }, [isAddEdit, openPopup]);

  React.useEffect(() => {
    if (isdelete === true && openDeleteRulePopup === false)
      dispatch(getPointCalulationListAction("?ruleType=auto"));
  }, [isdelete, openDeleteRulePopup]);

  const resetSearch = () => {
    setValues({ activeFlag: "All", startDate: null, endDate: null });
  };



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
      API_URL_LMS + `loyalty/export-point-rule${searchString}`,
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
    let queryString = "";
    if (values.activeFlag === "All") {
      queryString = `?ruleType=auto${
        values.startDate
          ? "&&startDate=" + moment(values.startDate).format("DD-MM-yyyy")
          : ""
      }${
        values.endDate
          ? "&&endDate=" + moment(values.endDate).format("DD-MM-yyyy")
          : ""
      }`;
    } else {
      queryString = `?ruleType=auto${
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
    dispatch(getPointCalulationListAction(queryString));
  }, [values.activeFlag, values.startDate, values.endDate]);

  useEffect(() => {
        const gridData =  pointCalculationState &&
        pointCalculationState.auto &&
        pointCalculationState.auto.autoRuleList &&
         pointCalculationState.auto.autoRuleList.data.map((e, i) =>{
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
    pointCalculationState.auto &&
    pointCalculationState.auto.autoRuleList &&
     pointCalculationState.auto.autoRuleList.data])

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
                error={filterErr.startDate}
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
        {/* <SearchForm
          setOpenPopup={true}
          recordForEdit={null}
          isUpdated={isUpdated}
        /> */}
      </>

      <div className="addPointsRules">
        <Button
          variant="contained"
          className="btncolor"
          onClick={() => {
            setHeaderName("ADD POINT CALCULATION RULES");
            setOpenPopup(true);
            setIsAddEdit(false);
            setRecordForEdit(null);
          }}
        >
          ADD POINT CALCULATION RULES
        </Button>
      </div>

      <div className="DataGridContainer">
        <DataGridProMUI
          rows ={gridData}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          columns={columns}
          components={{
            Toolbar: CustomToolbar,
          }}
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
          ExportFileName={"PointCalculationRule_Auto"}
          loading={pointCalculationState && pointCalculationState.auto && pointCalculationState.auto.loading ? true : false}
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
