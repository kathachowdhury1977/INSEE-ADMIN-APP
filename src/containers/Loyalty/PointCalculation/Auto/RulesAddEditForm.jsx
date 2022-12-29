import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";
import Controls from "../../subDealerManagement/subdealer/Controls";
import { API_URL_LMS, API_URL_ADMIN } from "../../../../Constant/index";
import { useForm, Form } from "../../../../components/Form/FormComponent";
import { isRequired } from "../../../../_helpers/commonFunctions";
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@mui/material";
const INITIAL_FORM_VALUES = {
  startDate: null,
  endDate: null,
  salesOrganization: "",
  distributionChannel: "",
  division: "",
  materialGroup: "",
  materialPriceGroup: "",
  expireYear: "",
  quantity: "",
  dealerPoint: "",
  subDealerPoint: "",
  billingType: "",
  itemCategory: "",
  calculationType: "",
  cutOffDays: "",
  active: false,
  isManual: "false",
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
const CALCULATIO_TYPE = ["Add", "Deduct"];
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
    if (
      "cutOffDays" in fieldValues &&
      fieldValues.cutOffDays &&
      fieldValues.cutOffDays !== "" &&
      (fieldValues.cutOffDays < 1 || fieldValues.cutOffDays > 31)
    ) {
      temp.cutOffDays = "Cut-Off date must be between 1 to 31 ";
    } else {
      temp.cutOffDays = "";
    }
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
    if (validate()) {
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
      PayloadValues.isManual = false;
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
    }
  };

  const updateRule = (e) => {
    e.preventDefault();
    if (validate()) {
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
      // values.endDate="10-09-2020"
      PayloadValues.active = values.active === true ? "Yes" : "No";
      PayloadValues.isManual = false;
      PayloadValues.billingType = values.billingType ? values.billingType.toUpperCase() : "";
      PayloadValues.distributionChannel = values.distributionChannel ? values.distributionChannel.toUpperCase() : "";
      PayloadValues.itemCategory = values.itemCategory ? values.itemCategory.toUpperCase() : "";
      PayloadValues.materialGroup = values.materialGroup ? values.materialGroup.toUpperCase() : "";
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
            setState({
              ...state,
              openAlert: true,
              severity: "error",
              message: response.data.message,
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
    }
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
                inputProps={{ tabIndex: "1" }}
                value={values.startDate ? values.startDate : null}
                onChange={handleInputChange}
                error={errors.startDate}
                maxDate={values.endDate}
              />
              <Controls.Input
                name="salesOrganization"
                label="Sales Organization"
                inputProps={{ tabIndex: "4" }}
                value={values.salesOrganization}
                onChange={handleInputChange}
                size="small"
                error={errors.salesOrganization}
              />
              <Controls.Input
                name="division"
                label="Division"
                inputProps={{ tabIndex: "7" }}
                value={values.division}
                onChange={handleInputChange}
                size="small"
                error={errors.division}
              />

              <Controls.Input
                name="materialPriceGroup"
                label="Material Pricing Group"
                inputProps={{ tabIndex: "10" }}
                value={values.materialPriceGroup}
                onChange={handleInputChange}
                size="small"
                error={errors.materialPriceGroup}
              />

              <Controls.Input
                name="expireYear"
                label="Expiry Years"
                value={values.expireYear ? values.expireYear : ""}
                onChange={(e) => handleInputChange(e, "number")}
                size="small"
                inputProps={{ maxLength: 4, tabIndex: "13" }}
                error={errors.expireYear}
              />
              <Controls.Input
                name="subDealerPoint"
                label="Sub Dealer Points"
                value={values.subDealerPoint ? values.subDealerPoint : ""}
                onChange={(e) => handleInputChange(e, "number")}
                size="small"
                inputProps={{ tabIndex: "16" }}
                error={errors.subDealerPoint}
              />
            </Grid>
            <Grid item md={4} xs={12} className="GridContainer">
              <Controls.DatePicker
                name="endDate"
                label="End Date"
                inputProps={{ tabIndex: "2" }}
                value={values.endDate ? values.endDate : null}
                onChange={handleInputChange}
              />
              {/* <FormControl></FormControl> */}
              <Controls.Input
                name="billingType"
                label="Billing Type"
                inputProps={{ tabIndex: "5" }}
                value={values.billingType}
                onChange={handleInputChange}
                size="small"
                error={errors.billingType}
              />

              <Controls.Input
                name="itemCategory"
                label="Item Category"
                inputProps={{ tabIndex: "8" }}
                value={values.itemCategory}
                onChange={handleInputChange}
                size="small"
              />

              <Controls.Select
                name="calculationType"
                label="Calculation Type"
                inputProps={{ tabIndex: "11" }}
                value={values.calculationType}
                onChange={handleInputChange}
                options={CALCULATIO_TYPE}
                error={errors.calculationType}
                showSelect
              />

              <Controls.Input
                name="quantity"
                label="Quantity"
                inputProps={{ tabIndex: "14" }}
                value={values.quantity ? values.quantity : ""}
                onChange={(e) => handleInputChange(e, "number")}
                size="small"
                error={errors.quantity}
              />

              {/* <div className="BtnSPointContainer">
                <Button
                  type="submit"
                  variant="contained"
                  className="SaveBtn"
                  disabled={isSaveDisabled}
                  tabIndex="17"
                >
                  {state.btnTxt}
                </Button>
              </div> */}
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
                name="distributionChannel"
                label="Distribution Channel"
                inputProps={{ tabIndex: "6" }}
                value={values.distributionChannel}
                onChange={handleInputChange}
                size="small"
                error={errors.distributionChannel}
              />

              <Controls.Input
                name="materialGroup"
                label="Material Group 1"
                inputProps={{ tabIndex: "9" }}
                value={values.materialGroup}
                onChange={handleInputChange}
                size="small"
                error={errors.materialGroup}
              />

              <Controls.Input
                name="cutOffDays"
                label="Cut-off Day"
                value={values.cutOffDays ? values.cutOffDays : ""}
                onChange={(e) => handleInputChange(e, "number")}
                size="small"
                error={errors.cutOffDays}
                inputProps={{ maxLength: 2, tabIndex: "12" }}
              />

              <Controls.Input
                name="dealerPoint"
                label="Dealer Points"
                value={values.dealerPoint ? values.dealerPoint : ""}
                inputProps={{ tabIndex: "15" }}
                onChange={(e) => handleInputChange(e, "number")}
                size="small"
                error={errors.dealerPoint}
              />
              <div className="BtnSubContainer">
                <Button
                  type="submit"
                  variant="contained"
                  className="SaveBtn"
                  disabled={isSaveDisabled}
                  tabIndex="17"
                >
                  {state.btnTxt}
                </Button>

                <Button
                  variant="outlined"
                  color="secondary"
                  className="outlineButton"
                  size="small"
                  tabIndex="18"
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
