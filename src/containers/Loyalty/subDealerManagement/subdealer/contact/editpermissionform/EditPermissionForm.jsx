import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Alert from "@mui/material/Alert";
import Axios from "axios";
import moment from "moment";
import "./EditPermissionForm.scss";
import Controls from "../../Controls";
import { API_URL_UMS } from "../../../../../../Constant/index";

const INITIAL_FORM_VALUES = {
  makeInseePlusUser: "",
  active: "",
  loyality: "",
};

const EditPermissionForm = (props) => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const subdealerNumber = params.get("subDelearNumber");
  const subdealerName = params.get("subDelearName");
  const { setOpenPopup, recordForEditPermission } = props;
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [state, setState] = useState({
    permissionData: null,
    showSuccessMsg: false,
    showErrMsg: false,
    message: "",
    smsBtnTxt: "SEND SMS",
    saveBtnTxt: "SAVE",
    smsBtnDisabled: false,
    credentialBtnTxt: "RESEND LOGIN CREDENTIAL",
    credentialBtnDisabled: false,
    openAlert: false,
    severity: "success",
    alertMessage: "",
    disableBtns:false
  });

  useEffect(() => {
    getPermission();
  }, []);

  useEffect(() => {
    let val =
      formValues.makeInseePlusUser == "Active" && formValues.active === "Active"
        ? true
        : false;
    setState({
      ...state,
      credentialBtnDisabled: val,
      smsBtnDisabled: val,
    });
  }, [formValues.makeInseePlusUser, formValues.active,state.disableBtns]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name !== "active") {
      setFormValues({
        ...formValues,
        [name]: value === false ? "InActive" : "Active",
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: e.target.checked === false ? "InActive" : "Active",
      });
    }
  };

  const getPermission = () => {
    let userData = localStorage.getItem("userData");
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
        "X-SOLD-TO-ID": JSON.parse(userData).userId,
      },
    };
    // need to change hard coded the data
    Axios.get(
      API_URL_UMS +
        "external-user/getCustomerByContactId/" +
        recordForEditPermission.id,
      requestOptions
    )
      .then((response) => {
        if (response.data.status == 200) {
          setState({
            ...state,
            disableBtns:true,
          });
          setFormValues(response.data.data);
        }
        if (response.data.status == 420) {
          setState({
            ...state,
            disableBtns:false,
          });
        }
      })
      .catch((error) => error);
  };

  const onSendSms = () => {
    setState({ ...state, smsBtnTxt: "Sending...", smsBtnDisabled: true });
    Axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setState({
          ...state,
          openAlert: true,
          alertMessage: "Sms Sent Successfully!!!",
          smsBtnTxt: "SEND SMS",
          smsBtnDisabled: false,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          showErrMsg: true,
          message: "Error in Processing",
          smsBtnTxt: "SEND SMS",
          smsBtnDisabled: false,
        });
      });
  };

  const onResendLoginCredential = () => {
    setState({
      ...state,
      credentialBtnTxt: "Sending Login Credential...",
      credentialBtnDisabled: true,
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    // here the payloadd is sent in query string
    Axios.post(
      API_URL_UMS +
        "external-user/resendEmail?userId=" +
        recordForEditPermission.userName,
      {},
      requestOptions
    )
      .then((response) => {
        if (response.data.status == 200) {
          setState({
            ...state,
            openAlert: true,
            alertMessage: "Credential sent Successfully!!!",
            credentialBtnDisabled: false,
            disableBtns:true,
          });
        }
      })
      .catch((error) => {
        setState({
          ...state,
          showErrMsg: true,
          message: "Error in Processing",
          credentialBtnDisabled: false,
        });
      });
  };

  const onSaveClick = () => {
    const { makeInseePlusUser, loyality, active } = formValues;
    let formData = {
      confirmedDate: moment(new Date()).format("yyyy-MM-DD"),
      countryCode: recordForEditPermission.country,
      firstName: recordForEditPermission.firstName,
      lastName: recordForEditPermission.lastName,
      mobileNumber: recordForEditPermission.mobileNumber,
      makeInseePlusUser,
      loyality,
      active,
      inseeUser: true,
      userId: recordForEditPermission.userName,
      contactId: recordForEditPermission.id,
      email: recordForEditPermission.emailAddress,
      userRole: "Customer",
      soldTo: [subdealerNumber],
      userImage : recordForEditPermission.contactImage
    };
    setState({ ...state, saveBtnTxt: "Saving..." });
    let userData = localStorage.getItem("userData");
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
        "X-SOLD-TO-ID": JSON.parse(userData).userId,
      },
    };
    Axios.put(
      API_URL_UMS +
        `external-user/subdealerContactPermission?X-SOLD-TO-ID=` +
        JSON.parse(userData).userId,
      JSON.stringify(formData),
      requestOptions
    )
      .then((response) => {
        if (response.data.status == 200) {
          setState({
            ...state,
            openAlert: true,
            alertMessage: "Permission Created Successfully",
            btnTxt: "SAVE",
            credentialBtnDisabled: true,
            disableBtns:true,
          });
        }
        if (response.data.status == 420) {
          setState({
            ...state,
            openAlert: true,
            severity: "error",
            alertMessage: response.data.message,
            btnTxt: "SAVE",
            disableBtns:false,
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
          disableBtns:false,
        });
      });
  };

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
            {state.alertMessage}
          </Alert>
        </div>
      ) : (
        ""
      )}
      <form>
        <div className="InseePlusUsr">
          <Controls.Checkbox
            name="makeInseePlusUser"
            value={formValues.makeInseePlusUser === "Active" ? true : false}
            onChange={handleInputChange}
            label="Make Insee Plus User "
          />
        </div>
        <div>
          <FormControlLabel
            value="start"
            control={
              <Switch
                color="primary"
                name="active"
                checked={formValues.active === "Active" ? true : false}
                onChange={handleInputChange}
              />
            }
            label="Active"
            labelPlacement="start"
          />
        </div>
        <div className="ModulesAllowed">
          {"Modules Allowed"}
          <br />
          <div className="ModulesAllowedChkBox">
            <Controls.Checkbox
              label="Loyalty"
              name="loyality"
              value={formValues.loyality === "Active" ? true : false}
              labelPlacement="end"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <Button
          variant="outlined"
          onClick={onSendSms}
          disabled={!state.smsBtnDisabled || !state.disableBtns}
        >
          {state.smsBtnTxt}
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          variant="outlined"
          onClick={onResendLoginCredential}
          disabled={!state.credentialBtnDisabled || !state.disableBtns}
        >
          {state.credentialBtnTxt}
        </Button>
        {state.showSuccessMsg && (
          <div className="SuccessMsg">{state.message}</div>
        )}
        {state.showErrMsg && <div className="ErrorMsg">{state.message}</div>}
        <div className="SaveCancelBtn">
          <Button
            variant="contained"
            size="small"
            className="SaveBtn"
            onClick={onSaveClick}
          >
            {state.saveBtnTxt}
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};
export default EditPermissionForm;
