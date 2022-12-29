import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import moment from "moment/moment";
import Axios from "axios";
import "./AddEditPointManualAdjust.scss";
import Controls from "../Controls";
import { useForm, Form } from "../../../../components/Form/FormComponent";
import { handleZero, isRequired } from "../../../../_helpers/commonFunctions";
import { API_URL_LMS, API_URL_ADMIN } from "../../../../Constant/index";

const INITIAL_FORM_VALUES = {
  customerType: "",
  customerNumber: "",
  customerName: "",
  activityType: "",
  point: "",
  createDate: moment(new Date()).format("MM-DD-yyyy"),
  remarks: "",
};

const TYPE_OF_CUSTOMER = ["Dealer", "Sub Dealer"];
const Activity_Type_SELECT_VALUES = ["Point Deduction", "Bonus"];

// for validation the form
const AddEditPointManualAdjust = (props) => {
  const { setOpenPopup, recordForEdit } = props;
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  const [state, setState] = useState({
    openAlert: false,
    severity: "success",
    message: "",
    btnTxt: "SAVE",
    min: "",
    max: "",
  });

  useEffect(() => {
    if (recordForEdit !== null) {
      let newRefRecordEdit = { ...recordForEdit };
      newRefRecordEdit.point =
        newRefRecordEdit.activityType == "Point Deduction"
          ? newRefRecordEdit.point.toString().charAt(0) === "-"
            ? newRefRecordEdit.point.toString().substring(1)
            : newRefRecordEdit.point
          : newRefRecordEdit.point;
      setValues({
        ...newRefRecordEdit,
      });
    }
  }, [recordForEdit]);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // for single input validation we need to check if this feild is there are not
    if ("customerType" in fieldValues)
      temp.customerType = isRequired(fieldValues.customerType)
        ? ""
        : "Type Of Customer is required.";

    if ("customerNumber" in fieldValues)
      temp.customerNumber = isRequired(fieldValues.customerNumber)
        ? ""
        : "Customer Number is required.";

    if ("activityType" in fieldValues)
      temp.activityType = isRequired(fieldValues.activityType)
        ? ""
        : "Activity Type is required.";

    if ("point" in fieldValues)
      temp.point = isRequired(fieldValues.point) ? "" : "Value is required.";

    setErrors({
      ...temp,
    });
    // to check all of the properties inside temp function is an empty string(i.e. valid)
    // we will return this only if the validate is method is called from Onsubmit method
    if (fieldValues == values)
      return Object.values(temp).every((eachFieldErr) => eachFieldErr == "");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getCustomerName();
    }
  };

  const handleOnBlur = (event) => {
    getCustomerName();
  };

  const getCustomerName = () => {
    const requestOptions = {
      headers: {
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    let customerNo=values.customerNumber
    if(values.customerType=="Dealer"){
      customerNo=handleZero(values.customerNumber)
    }
    Axios.get(
      API_URL_ADMIN +
        `retailer/get-customer-name/by-customer-no?customerNumber=` +
        customerNo +
        `&customerType=` +
        values.customerType.replace(/ /g,''),
        requestOptions
    )
      .then((response) => {
        if (response.data.status == 200) {
          setValues({
            ...values,
            customerName: response.data.data.customerNameEn,
          });
        }
        if (response.data.status == 420) {
          setState({
            message: response.data.message,
            severity: "error",
            open: true,
          });
          setErrors({ customerName: response.data.message });
        }
      })
      .catch((error) => {
        setState({
          message: "Error in processing",
          severity: "error",
          open: true,
        });
        setErrors({ customerName: "Error in processing" });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setState({ btnTxt: "Saving..." });
      setIsSaveDisabled(true);
      recordForEdit !== null
        ? updateContact(values)
        : addContactSubmitForm(values);
    }
  };

  const addContactSubmitForm = (values) => {
    const PayloadValues = { ...values };
    PayloadValues.createDate = moment(values.createDate).format("DD-MM-yyyy");
    PayloadValues.customerNumber=handleZero(values.customerNumber);
    let userData = localStorage.getItem("userData");
    PayloadValues["createdBy"]=JSON.parse(userData).userId;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    // body: ,
    Axios.post(
      API_URL_LMS + `/loyalty/manual-adjust`,
      JSON.stringify(PayloadValues),
      requestOptions
    )
      .then((response) => {
        if (response.data.status == 200) {
          setState({
            ...state,
            openAlert: true,
            severity: "success",
            message: `Points ${PayloadValues.activityType=="Bonus" ? 'Added':'Deducted'} Successfully!!`,
            btnTxt: "SAVE",
          });
        }
        if (response.data.status == 420) {
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
  };

  const updateContact = (values) => {
    const PayloadValues = { ...values };
    PayloadValues.createDate = moment(values.createDate).format("DD-MM-yyyy");
    PayloadValues.customerNumber=handleZero(values.customerNumber);
    let userData = localStorage.getItem("userData");
    PayloadValues["createdBy"]=JSON.parse(userData).userId;
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    // body: ,
    Axios.put(
      API_URL_LMS + `/loyalty/manual-adjust`,
      JSON.stringify(PayloadValues),
      requestOptions
    )
      .then((response) => {
        if (response.data.status == 200) {
          setState({
            ...state,
            openAlert: true,
            severity: "success",
            message: "Points Updated Successfully!!",
            btnTxt: "SAVE",
          });
        }
        if (response.data.status == 420) {
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
  };

  // useform is a reusable component for forms
  // for single controll real time validation of form pass true as 2nd parameter and validate function as 3rd parameter
  const { values, setValues, handleInputChange, errors, setErrors } = useForm(
    INITIAL_FORM_VALUES,
    true,
    validate
  );

  useEffect(() => {
    setErrors({});
  }, [values]);
  return (
    <div className="ManualAdjContainer">
      {state.openAlert ? (
        <div className="ManualAdjAlertMsg">
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
      <div className="ControllForm">
        <Form onSubmit={handleSubmit} elementSize={"90%"}>
          <Grid container>
            <Grid item md={6} xs={12} className="GridContainer">
              <Controls.Select
                name="customerType"
                label="Type Of Customer*"
                value={values.customerType}
                onChange={handleInputChange}
                options={TYPE_OF_CUSTOMER}
                disabled={recordForEdit ? true : false}
                inputProps={{ tabIndex: "1" }}
                error={errors.customerType}
              />
              <Controls.Input
                name="customerName"
                label="Customer Name*"
                value={values.customerName}
                onChange={handleInputChange}
                size="small"
                disabled={true}
                inputProps={{ tabIndex: "3" }}
                error={errors.customerName}
              />
              <Controls.Input
                name="point"
                label="Value*"
                value={values.point}
                onChange={(e) => handleInputChange(e, "number")}
                size="small"
                id="outlined-start-adornment"
                InputProps={{
                  startAdornment:
                    values.activityType == "Point Deduction" ? (
                      <InputAdornment position="start">-</InputAdornment>
                    ) : null,
                }}
                inputProps={{
                  tabIndex: "5",
                }}
                error={errors.point}
              />
              <Controls.Input
                name="remarks"
                label="Remarks"
                value={values.remarks}
                onChange={handleInputChange}
                size="small"
                inputProps={{ tabIndex: "7" }}
              />
            </Grid>
            <Grid item md={6} xs={12} className="GridContainer">
              <Controls.Input
                name="customerNumber"
                label="Customer Number*"
                value={values.customerNumber}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                onBlur={handleOnBlur}
                disabled={recordForEdit ? true : false}
                size="small"
                inputProps={{ tabIndex: "2" }}
                error={errors.customerNumber}
              />
              <Controls.Select
                name="activityType"
                label="Activity Type*"
                value={values.activityType}
                onChange={handleInputChange}
                options={Activity_Type_SELECT_VALUES}
                inputProps={{ tabIndex: "4" }}
                error={errors.activityType}
              />
              <Controls.DatePicker
                name="createDate"
                label="Create Date"
                value={values.createDate}
                onChange={handleInputChange}
                error={errors.createDate}
                disabled={true}
                maxDate={new Date()}
                inputProps={{ tabIndex: "6" }}
                format={"MM-dd-yyyy"}
              />
              <div className="BtnContainer">
                <Button
                  type="submit"
                  variant="contained"
                  className="SaveBtn"
                  disabled={isSaveDisabled}
                  tabIndex="8"
                >
                  Save
                  {/* {state.btnTxt} */}
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={() => {
                    setOpenPopup(false);
                  }}
                  tabIndex="9"
                >
                  Cancel
                </Button>
              </div>
            </Grid>
          </Grid>
        </Form>
      </div>
    </div>
  );
};

export default AddEditPointManualAdjust;
