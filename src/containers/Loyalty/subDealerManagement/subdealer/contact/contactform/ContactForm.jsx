import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Axios from "axios";
import moment from "moment";
import "./ContactForm.scss";
import Controls from "../../Controls";
import { useForm, Form } from "../../../../../../components/Form/FormComponent";
import {
  isRequired,
  ValidateEmail,
} from "../../../../../../_helpers/commonFunctions";
import { API_URL_ADMIN } from "../../../../../../Constant/index";
import { SignalCellularNullTwoTone } from "@material-ui/icons";

const INITIAL_FORM_VALUES = {
  id: "",
  userName: "",
  firstName: "",
  lastName: "",
  nickName: "",
  phoneNumber: "",
  mobileNumber: "",
  emailAddress: "",
  gender: "",
  dateOfBirth: null,
  age: "",
  maritalStatus: "",
  relation: "",
  position: "",
  highestEducation: "",
  institution: "",
  major: "",
  notPreferedFood: "",
  notPreferedDrink: "",
  dietaryLimitaion: "",
  favoriteSports: "",
  country: "",
  markDelete: false,
  handicap: false,
  userImage: null,
  whatsAppId: "",
  zoloId: "",
  lineId: "",
  subDealerCode: "",
  pdpaSigned: false,
  pdpaSignedDate: null,
};

const GENDER_SELECT_VALUES = ["Male", "Female"];
const COUNTRY_SELECT_VALUES = ["TH"];
const MARITAL_SELECT_VALUES = ["Married", "Unmarried"];
const RELATION_SELECT_VALUES = ["Owner", "Family ", "Staff"];
const POSITION_SELECT_VALUES = ["CEO", "Owner ", "Executive Board","President","CFO","SVP/VP","Director","MD","GM","Sales & Marketing Manager","Procurement Manager","Logistic Manager","Finance & Accounting Manager","HR Manager","IT Manager","Admin Manager","Head Of Engineer","Sales Representative","Marketing Officer","Procurement Officer","Logistic Officer","Finance & Accounting  Officer","HR Officer","Admin Officer","Engineer","Secretary","Call Center Agent","IT Officer"];
const HIGHEST_EDUCATION_SELECT_VALUES = [
  "Doctorate",
  "Master Degree",
  "Bachelor Degree",
  "Diploma",
  "Certificate",
  "High School",
  "Studying"
];

const theme = createTheme({
  palette: {
    neutral: {
      main: "#D3D3D3",
      contrastText: "#000000",
    },
  },
});

const ContactForm = (props) => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const subdealerNumber = params.get("subDelearNumber");
  const subdealerName = params.get("subDelearName");
  const { setOpenPopup, recordForEdit } = props;
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
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
    if ("firstName" in fieldValues)
      temp.firstName = isRequired(fieldValues.firstName)
        ? ""
        : "First Name is required.";

    if ("lastName" in fieldValues)
      temp.lastName = isRequired(fieldValues.lastName)
        ? ""
        : "Last Name is required.";

    if ("mobileNumber" in fieldValues)
      temp.mobileNumber = isRequired(fieldValues.mobileNumber)
        ? (temp.mobileNumber =
            fieldValues.mobileNumber.toString().length > 9
              ? ""
              : "Minimum 10 numbers required.")
        : "Mobile Number is required.";

    if ("emailAddress" in fieldValues)
      temp.emailAddress = isRequired(fieldValues.emailAddress)
        ? (temp.emailAddress = ValidateEmail(fieldValues.emailAddress)
            ? ""
            : "Email is not Valid.")
        : "Email is required.";

    if ("country" in fieldValues)
      temp.country = isRequired(fieldValues.country)
        ? ""
        : "Country is required.";        

    setErrors({
      ...temp,
    });
    // to check all of the properties inside temp function is an empty string(i.e. valid)
    // we will return this only if the validate is method is called from Onsubmit method
    if (fieldValues == values)
      return Object.values(temp).every((eachFieldErr) => eachFieldErr == "");
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

  const updateContact = (values) => {
    const requestPayload = { ...values };
    const formatVal = Object.keys(INITIAL_FORM_VALUES).map((key) => ({
      // create a new object with the key, and the result of the division
      [key]: requestPayload[key],
    }));
    var formValues = formatVal.reduce((r, c) => Object.assign(r, c), {});
    const formData = new FormData();
    const contactImg = formValues.userImage;
    formValues["subDealerCode"] = subdealerNumber;
    delete formValues.contactImage;
    if (requestPayload.dateOfBirth !== null) {
      let frmtdDob = moment(formValues.dateOfBirth).format("DD-MM-yyyy");
      formValues["dateOfBirth"] = frmtdDob;
    }
    formValues.pdpaSignedDate = requestPayload.pdpaSignedDate
      ? moment(requestPayload.pdpaSignedDate).format("DD-MM-YYYY HH:mm")
      : null;
    formData.append("userData", JSON.stringify(formValues));
    formData.append("contactImage", contactImg);
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
        'X-AUTH-TOKEN': localStorage.getItem('x-auth-token'),
      },
    };
    Axios.put(
      API_URL_ADMIN + `retailer/subdealer-contact`,
      formData,
      requestOptions
    )
      .then((response) => {
        setState({
          ...state,
          openAlert: true,
          severity: "success",
          message:
            "Sub dealer contact updated successfully : " + formValues.userName,
          btnTxt: "SAVE",
        });
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

  const addContactSubmitForm = (values) => {
    const requestPayload = { ...values };
    const formData = new FormData();
    const contactImg = requestPayload.userImage;
    requestPayload["subDealerCode"] = subdealerNumber;
    delete requestPayload.userImage;
    delete requestPayload.id;
    requestPayload.pdpaSignedDate = requestPayload.pdpaSignedDate
      ? moment(requestPayload.pdpaSignedDate).format("DD-MM-YYYY HH:mm")
      : null;
    if (requestPayload.dateOfBirth !== null) {
      let frmtdDob = moment(requestPayload.dateOfBirth).format("DD-MM-yyyy");
      requestPayload["dateOfBirth"] = frmtdDob;
    }
    formData.append("userData", JSON.stringify(requestPayload));
    formData.append("contactImage", contactImg);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
      },
    };
    Axios.post(
      API_URL_ADMIN + `retailer/subdealer-contact`,
      formData,
      requestOptions
    )
      .then((response) => {
        if (response.data.status == 200) {
          setState({
            ...state,
            openAlert: true,
            severity: "success",
            message:
              "Sub dealer contact created successfully : " +
              requestPayload.userName,
            btnTxt: "SAVE",
          });
        }
        if (response.data.status == 420) {
          setState({
            ...state,
            openAlert: true,
            severity: "error",
            message: "UserName already Exists!!",
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
    if (values && values.dateOfBirth) {
      let timeDiff = Math.abs(
        Date.now() - new Date(values.dateOfBirth).getTime()
      );
      let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      setValues({ ...values, age: age });
    }
  }, [values.dateOfBirth]);

  useEffect(() => {
    if (recordForEdit !== null) {
      let newRefRecordEdit = { ...recordForEdit };
      newRefRecordEdit.pdpaSignedDate =
        newRefRecordEdit.pdpaSignedDate &&
        newRefRecordEdit.pdpaSignedDate !== ""
          ? moment(newRefRecordEdit.pdpaSignedDate, "DD-MM-YYYY HH:mm").format(
              "MM-DD-yyyy HH:mm"
            )
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
      <div className="SubDealerInfoHeader">
        <span className="SubDealerNumber">
          <h6>Sub Dealer Number &nbsp;</h6>
          {subdealerNumber}
        </span>
        <span className="SubDealerName">
          <h6>Sub Dealer Name &nbsp;</h6>
          {subdealerName}
        </span>
      </div>
      {/* Form is an custom reusable component */}
      <div className="ControllForm">
        <Form onSubmit={handleSubmit} elementSize={"90%"}>
          <Grid container>
            <Grid item md={4} xs={12} className="GridContainer">
              {/* Input is an custom reusable component */}
              <Controls.Input
                name="userName"
                label="User Name"
                value={values.userName}
                onChange={handleInputChange}
                size="small"
                error={errors.userName}
                inputProps={{ tabIndex: "1" }}
                disabled={recordForEdit ? true : false}
              />
              <Controls.Input
                name="nickName"
                label="Nick Name"
                value={values.nickName}
                onChange={handleInputChange}
                size="small"
                inputProps={{ tabIndex: "4" }}
              />
              <Controls.Input
                name="emailAddress"
                label="Email Address*"
                disabled={recordForEdit ? true : false}
                value={values.emailAddress}
                onChange={handleInputChange}
                size="small"
                error={errors.emailAddress}
                inputProps={{ tabIndex: "7" }}
              />
              <Controls.Input
                name="age"
                label="Age"
                value={values.age}
                disabled={true}
                onChange={handleInputChange}
                size="small"
                inputProps={{ tabIndex: "10" }}
              />
              <Controls.Select
                name="position"
                label="Position"
                value={values.position}
                onChange={handleInputChange}
                options={POSITION_SELECT_VALUES}
                inputProps={{ tabIndex: "13" }}
                showSelect
              />
              <Controls.Input
                name="major"
                label="Major"
                value={values.major}
                onChange={handleInputChange}
                size="small"
                inputProps={{ tabIndex: "16" }}
              />
              <Controls.Input
                name="dietaryLimitaion"
                label="Dietary Limitation"
                value={values.dietaryLimitaion}
                onChange={handleInputChange}
                size="small"
                inputProps={{ tabIndex: "19" }}
              />
              <h6 className="SocialIdHeading">Social IDs</h6>
              <Controls.Input
                name="whatsAppId"
                label="WhatsApp Id"
                value={values.whatsAppId}
                onChange={handleInputChange}
                size="small"
                inputProps={{ tabIndex: "22" }}
              />
              <div className="CnctCheckBox">
                <Controls.Checkbox
                  name="handicap"
                  label="Handicap"
                  value={values.handicap}
                  onChange={handleInputChange}
                  inputProps={{ tabIndex: "25" }}
                />
                <Controls.Checkbox
                  name="markDelete"
                  label="Mark Delete"
                  value={values.markDelete}
                  onChange={handleInputChange}
                  inputProps={{ tabIndex: "26" }}
                />
              </div>
            </Grid>
            <Grid item md={4} xs={12} className="GridContainer">
              <Controls.Input
                name="firstName"
                label="First Name*"
                disabled={recordForEdit ? true : false}
                value={values.firstName}
                onChange={handleInputChange}
                size="small"
                error={errors.firstName}
                inputProps={{ tabIndex: "2" }}
              />
              <Controls.Input
                name="phoneNumber"
                label="Phone Number"
                value={values.phoneNumber}
                onChange={(e) => handleInputChange(e, "number")}
                size="small"
                inputProps={{ tabIndex: "5" }}
              />
              <Controls.Select
                name="gender"
                label="Gender"
                value={values.gender}
                onChange={handleInputChange}
                options={GENDER_SELECT_VALUES}
                inputProps={{ tabIndex: "8" }}
                showSelect
              />
              <Controls.Select
                name="maritalStatus"
                label="Marital Status"
                value={values.maritalStatus}
                onChange={handleInputChange}
                options={MARITAL_SELECT_VALUES}
                error={errors.maritalStatus}
                inputProps={{ tabIndex: "11" }}
                showSelect
              />
              <Controls.Select
                name="highestEducation"
                label="Highest Education"
                value={values.highestEducation}
                onChange={handleInputChange}
                options={HIGHEST_EDUCATION_SELECT_VALUES}
                inputProps={{ tabIndex: "14" }}
                showSelect
              />
              <Controls.Input
                name="notPreferedFood"
                label="Not Preferred Food"
                value={values.notPreferedFood}
                onChange={handleInputChange}
                size="small"
                inputProps={{ tabIndex: "17" }}
              />
              <Controls.Input
                name="favoriteSports"
                label="Favourite Sports"
                value={values.favoriteSports}
                onChange={handleInputChange}
                size="small"
                inputProps={{ tabIndex: "20" }}
              />
              <div className="SocialIds">
                <Controls.Input
                  name="zoloId"
                  label="Zolo Id"
                  value={values.zoloId}
                  onChange={handleInputChange}
                  size="small"
                  inputProps={{ tabIndex: "23" }}
                />
              </div>
              <Controls.Checkbox
                name="pdpaSigned"
                label="PDPA & Signed"
                value={
                  values.pdpaSigned === "true" || values.pdpaSigned === true
                    ? true
                    : false
                }
                onChange={handleInputChange}
                disabled
                inputProps={{ tabIndex: "27" }}
              />
              <div className="userImageContainer">
                <span className="usrImgHeader">{"User Image"}</span>
                <br />
                <input
                  accept="image/*"
                  type="file"
                  name="userImage"
                  onChange={handleInputChange}
                  className="ImgUploadBtn"
                  tabIndex={29}
                />
              </div>
            </Grid>
            <Grid item md={4} xs={12} className="GridContainer">
              <Controls.Input
                name="lastName"
                label="Last Name*"
                disabled={recordForEdit ? true : false}
                value={values.lastName}
                onChange={handleInputChange}
                size="small"
                error={errors.lastName}
                inputProps={{ tabIndex: "3" }}
              />
              <Controls.Input
                name="mobileNumber"
                label="Mobile Number*"
                value={values.mobileNumber}
                onChange={(e) => handleInputChange(e, "number")}
                size="small"
                error={errors.mobileNumber}
                inputProps={{ tabIndex: "6", maxLength: 10 }}
              />
              <Controls.DatePicker
                name="dateOfBirth"
                label="Date Of Birth"
                value={values.dateOfBirth}
                onChange={handleInputChange}
                error={errors.dateOfBirth}
                maxDate={new Date()}
                inputProps={{ tabIndex: "9" }}
              />
              <Controls.Select
                name="relation"
                label="Relation"
                value={values.relation}
                onChange={handleInputChange}
                options={RELATION_SELECT_VALUES}
                inputProps={{ tabIndex: "12" }}
                showSelect
              />
              <Controls.Input
                name="institution"
                label="Institution"
                value={values.institution}
                onChange={handleInputChange}
                size="small"
                inputProps={{ tabIndex: "15" }}
              />
              <Controls.Input
                name="notPreferedDrink"
                label="Not Preferred Drink"
                value={values.notPreferedDrink}
                onChange={handleInputChange}
                size="small"
                inputProps={{ tabIndex: "18" }}
              />
              <Controls.Select
                name="country"
                label="Country*"
                value={values.country}
                onChange={handleInputChange}
                options={COUNTRY_SELECT_VALUES}
                inputProps={{ tabIndex: "21" }}
                error={errors.country}
                showSelect
              />
              <div className="SocialIds">
                <Controls.Input
                  name="lineId"
                  label="Line Id"
                  value={values.lineId}
                  onChange={handleInputChange}
                  size="small"
                  inputProps={{ tabIndex: "24" }}
                />
              </div>
              <Controls.DatetimePicker
                name="pdpaSignedDate"
                label="PDPA Consent Date/Time"
                error={false}
                helperText=""
                format="dd-MM-yyyy HH:mm"
                ampm={false}
                value={values.pdpaSignedDate ? values.pdpaSignedDate : null}
                onChange={handleInputChange}
                disabled={recordForEdit ? false : true}
                inputProps={{ tabIndex: "28" }}
              />
              <div className="BtnContainer">
                <Button
                  type="submit"
                  variant="contained"
                  className="SaveBtn"
                  disabled={isSaveDisabled}
                  tabIndex="30"
                >
                  {state.btnTxt}
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={() => {
                    setOpenPopup(false);
                  }}
                  tabIndex="31"
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

export default ContactForm;
