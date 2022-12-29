import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import moment from "moment";
import Axios from "axios";
import { useSelector } from "react-redux";
import Controls from "../../subDealerManagement/subdealer/Controls";
import { API_URL_ADMIN, API_URL_LMS } from "../../../../Constant/index";
import { useForm, Form } from "../../../../components/Form/FormComponent";
import { isRequired } from "../../../../_helpers/commonFunctions";
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@mui/material";
const INITIAL_FORM_VALUES = {
  active: false,
  billingType: "",
  calculationType: "",
  createdBy: null,
  creationDate: null,
  cutOffDays: "",
  dealerPoint: "",
  deleted: false,
  distributionChannel: "",
  division: "",
  endDate: null,
  expireYear: "",
  id: "",
  itemCategory: "",
  lastModifiedBy: null,
  lastModifiedDate: null,
  materialGroup: "",
  materialPriceGroup: "",
  quantity: "",
  salesOrganization: "",
  startDate: null,
  subDealerPoint: "",
  isManual: true,
};

const LEGAL_FORM = [
  "Partnership",
  "Partnership Ltd",
  "Company Limited",
  "Public company Ltd",
  "Store",
  "Group of People",
  "Person",
  "Government",
];
const BILLING_TYPE = ["Test Billing1", "Test Billing2"];
const DISTRIBUTE = ["Test1", "Test2"];
const SUB_DISTRICT = ["Ang Thong", "Ano Ru", "Daeng Yai", "Dan Chang"];
const theme = createTheme({
  palette: {
    neutral: {
      main: "#D3D3D3",
      contrastText: "#000000",
    },
  },
});

const SubDealerAddForm = (props) => {
  const { setOpenPopup, recordForEdit } = props;
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [state, setState] = useState({
    openAlert: false,
    severity: "success",
    message: "",
    btnTxt: "SAVE",
  });

  // for validation the form
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

  const addRule = (e) => {
    e.preventDefault();
    // if (validate()) {
    setState({ btnTxt: "Saving..." });
    setIsSaveDisabled(true);
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    const PayloadValues = { ...values };
    PayloadValues.startDate = values.startDate
      ? moment(values.startDate).format("DD-MM-yyyy")
      : null;
    PayloadValues.endDate = values.endDate
      ? moment(values.endDate).format("DD-MM-yyyy")
      : null;
    PayloadValues.active = values.active === true ? "Yes" : "No";
    PayloadValues.isManual = true;
    PayloadValues.billingType = values.billingType ? values.billingType.toUpperCase() : "";
    PayloadValues.distributionChannel = values.distributionChannel ? values.distributionChannel.toUpperCase() : "";
    PayloadValues.itemCategory = values.itemCategory ? values.itemCategory.toUpperCase() : "";
    PayloadValues.materialGroup = values.materialGroup ? values.materialGroup.toUpperCase() : "";
    PayloadValues.division = values.division ? values.division.toUpperCase() : "";
    PayloadValues.materialPriceGroup = values.materialPriceGroup ? values.materialPriceGroup.toUpperCase() : "";
    Axios.post(
      API_URL_LMS + `loyalty/point-calc-rule`,
      PayloadValues,
      requestOptions
    )
      .then((response) => {
        if (
          response.data.status === 200 &&
          response.data.message === "Success"
        ) {
          setState({
            ...state,
            openAlert: true,
            message: "Rule created successfully ",
            btnTxt: "SAVE",
          });
          props.setIsAddEdit(true);
        } else if (response.data.status === 420) {
          setState({
            ...state,
            openAlert: true,
            severity: "error",
            message: response.data.message,
            btnTxt: "SAVE",
          });
        } else {
          setState({
            ...state,
            openAlert: true,
            severity: "error",
            message: "Error in processing",
            btnTxt: "SAVE",
          });
          setIsSaveDisabled(false);
        }
      })
      .catch((error) => {
        setState({
          ...state,
          openAlert: true,
          severity: "error",
          message: "Error in processing",
          btnTxt: "SAVE",
        });
        setIsSaveDisabled(false);
      });
    // }
  };

  const updateRule = (e) => {
    e.preventDefault();
    // if (validate()) {
    setState({ btnTxt: "Saving..." });
    setIsSaveDisabled(true);
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    // values.startDate=values.startDate ? moment(values.startDate).format("DD-MM-yyyy") : ''
    // values.endDate="10-09-2020"
    const PayloadValues = { ...values };
    PayloadValues.active = values.active === true ? "Yes" : "No";
    PayloadValues.isManual = true;
    PayloadValues.startDate = values.startDate
      ? moment(values.startDate).format("DD-MM-yyyy")
      : null;
    PayloadValues.endDate = values.endDate
      ? moment(values.endDate).format("DD-MM-yyyy")
      : null;
      PayloadValues.billingType = values.billingType ? values.billingType.toUpperCase() : "";
      PayloadValues.distributionChannel = values.distributionChannel ? values.distributionChannel.toUpperCase() : "";
      PayloadValues.itemCategory = values.itemCategory ? values.itemCategory.toUpperCase() : "";
      PayloadValues.materialGroup = values.materialGroup ? values.materialGroup.toUpperCase() : "";
      PayloadValues.division = values.division ? values.division.toUpperCase() : "";
      PayloadValues.materialPriceGroup = values.materialPriceGroup ? values.materialPriceGroup.toUpperCase() : "";
    Axios.put(
      API_URL_LMS + `loyalty/point-calc-rule`,
      PayloadValues,
      requestOptions
    )
      .then((response) => {
        if (response.data.status === 200) {
          setState({
            ...state,
            openAlert: true,
            severity: "success",
            message: "Rule updated successfully ",
            btnTxt: "SAVE",
          });
          props.setIsAddEdit(true);
        } else {
          setIsSaveDisabled(false);
          setState({
            ...state,
            openAlert: true,
            severity: "error",
            message: response.data.message,
            btnTxt: "SAVE",
          });
        }
      })
      .catch((error) => {
        setState({
          ...state,
          openAlert: true,
          severity: "error",
          message: "Error in processing",
          btnTxt: "SAVE",
        });
        setIsSaveDisabled(false);
      });
    // }
  };

  // useform is a reusable component for forms
  // for single controll real time validation of form pass true as 2nd parameter and validate function as 3rd parameter
  const { values, setValues, handleInputChange, errors, setErrors } = useForm(
    INITIAL_FORM_VALUES,
    true,
    validate
  );

  React.useEffect(() => {
    if (values.startDate && values.endDate) validate();
  }, [values.startDate, values.endDate]);

  useEffect(() => {
    if (recordForEdit !== null) {
      let newRefRecordEdit = { ...recordForEdit };
      newRefRecordEdit.active =
        newRefRecordEdit.active === "Yes" ? true : false;
      newRefRecordEdit.startDate =
        newRefRecordEdit.startDate && newRefRecordEdit.startDate !== ""
          ? moment(newRefRecordEdit.startDate).format("MM-DD-yyyy")
          : null;
      newRefRecordEdit.endDate =
        newRefRecordEdit.endDate && newRefRecordEdit.endDate !== ""
          ? moment(newRefRecordEdit.endDate).format("MM-DD-yyyy")
          : null;
      setValues({
        ...newRefRecordEdit,
      });
    }
  }, [recordForEdit]);

  return (
    <>
      {state.openAlert ? (
        <div className="AlertMsg">
          <Alert
            severity={state.severity}
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenPopup(false);
                }}
              >
                Close
              </Button>
            }
          >
            {state.message}
          </Alert>
        </div>
      ) : (
        ""
      )}

      {/* Form is an custom reusable component */}
      <div className="ControllForm">
        <Form
          onSubmit={recordForEdit ? updateRule : addRule}
          elementSize={"90%"}
        >
          <Grid container>
            <Grid item md={4} xs={12} className="GridContainer">
              <Controls.DatePicker
                name="startDate"
                label="Start Date"
                value={values.startDate}
                onChange={handleInputChange}
                inputProps={{ tabIndex: "1" }}
                error={errors.startDate}
                maxDate={values.endDate}
              />
              <Controls.Input
                name="salesOrganization"
                label="Sales Organization"
                value={values.salesOrganization}
                onChange={handleInputChange}
                size="small"
                inputProps={{ tabIndex: "4" }}
              />
              <Controls.Input
                name="materialGroup"
                label="Material Group 1"
                inputProps={{ tabIndex: "7" }}
                value={values.materialGroup}
                onChange={handleInputChange}
                size="small"
              />
              <Controls.Input
                name="quantity"
                label="Quantity"
                value={values.quantity}
                inputProps={{ tabIndex: "10" }}
                onChange={(e) => handleInputChange(e, "number")}
                size="small"
              />
            </Grid>
            <Grid item md={4} xs={12} className="GridContainer">
              <Controls.DatePicker
                name="endDate"
                label="End Date"
                value={values.endDate}
                onChange={handleInputChange}
                inputProps={{ tabIndex: "2" }}
              />

              <Controls.Input
                name="distributionChannel"
                label="Distribution Channel"
                value={values.distributionChannel}
                onChange={handleInputChange}
                size="small"
                inputProps={{ tabIndex: "5" }}
              />

              <Controls.Input
                name="materialPriceGroup"
                label="Material Pricing Group"
                value={values.materialPriceGroup}
                inputProps={{ tabIndex: "8" }}
                onChange={handleInputChange}
                size="small"
              />

              <Controls.Input
                name="subDealerPoint"
                label="Sub Dealer Points"
                inputProps={{ tabIndex: "11" }}
                value={values.subDealerPoint}
                onChange={(e) => handleInputChange(e, "number")}
                size="small"
              />
            </Grid>
            <Grid item md={4} xs={12} className="GridContainer">
              <Controls.Checkbox
                name="active"
                label="Active"
                inputProps={{ tabIndex: "3" }}
                value={values.active}
                onChange={handleInputChange}
              />

              <Controls.Input
                name="division"
                label="Division"
                value={values.division}
                size="small"
                inputProps={{ tabIndex: "6" }}
                onChange={handleInputChange}
              />

              <Controls.Input
                name="expireYear"
                label="Expiry Years"
                inputProps={{ tabIndex: "9", maxLength: 4 }}
                value={values.expireYear}
                onChange={(e) => handleInputChange(e, "number")}
                size="small"
              />

              <div className="BtnSubContainer" style={{ marginTop: "20px" }}>
                <Button
                  type="submit"
                  variant="contained"
                  className="SaveBtn"
                  disabled={isSaveDisabled}
                  tabIndex="12"
                >
                  {state.btnTxt}
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  className="outlineButton"
                  size="small"
                  tabIndex="13"
                  onClick={() => {
                    setOpenPopup(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Grid>
          </Grid>
        </Form>
      </div>
    </>
  );
};

export default SubDealerAddForm;
