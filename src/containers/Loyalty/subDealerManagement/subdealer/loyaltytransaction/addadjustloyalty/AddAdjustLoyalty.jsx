import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Axios from "axios";
import "./AddAdjustLoyalty.scss";
import Controls from "../../Controls";
import { useForm, Form } from "../../../../../../components/Form/FormComponent";
import { isRequired } from "../../../../../../_helpers/commonFunctions";
import { API_URL_LMS } from "../../../../../../Constant/index";

const INITIAL_FORM_VALUES = {
  activityType: "",
  point: "",
  remarks: "",
};

const ACTIVITY_TYPE_SELECT_VALUES = ["Bonus", "Point Deduction"];

const AddAdjustLoyalty = (props) => {
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

  // validating the fields
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("activityType" in fieldValues)
      temp.activityType = isRequired(fieldValues.activityType)
        ? ""
        : "Activity Type is required.";
    if ("point" in fieldValues)
      temp.point = isRequired(fieldValues.point)
        ? fieldValues.activityType == "Bonus" && fieldValues.point < 0
          ? "Please Enter positive value"
          : ""
        : "Add Points is required.";
    if ("remarks" in fieldValues)
      temp.remarks = isRequired(fieldValues.remarks)
        ? ""
        : "Remarks is required.";
    setErrors({
      ...temp,
    });
    // to check all of the properties inside temp function is an empty string(i.e. valid)
    // we will return this only if the validate is method is called from Onsubmit method
    if (fieldValues == values)
      return Object.values(temp).every((eachFieldErr) => eachFieldErr == "");
  };

  // useform is a reusable component for forms
  // for single controll real time validation of form pass true as 2nd parameter and validate function as 3rd parameter
  const { values, setValues, handleInputChange, errors, setErrors } = useForm(
    INITIAL_FORM_VALUES,
    true,
    validate
  );

  useEffect(() => {
    if (recordForEdit !== null) {
      let newRefRecordEdit = { ...recordForEdit };
      newRefRecordEdit.point =
        newRefRecordEdit.activityType == "Point Deduction"
          ? parseFloat(newRefRecordEdit.totalPoints)
              .toFixed(2)
              .toString()
              .charAt(0) === "-"
            ? parseFloat(newRefRecordEdit.totalPoints)
                .toFixed(2)
                .toString()
                .substring(1)
            : parseFloat(newRefRecordEdit.totalPoints).toFixed(2)
          : parseFloat(newRefRecordEdit.totalPoints).toFixed(2);
      setValues({
        ...newRefRecordEdit,
      });
    }
  }, [recordForEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      recordForEdit !== null ? updateAdjLyl() : addAdjLyl();
    }
  };

  const handlePointChange = (e) => {
    let { name, value } = e.target;
    if (isNaN(value)) {
      return;
    }
    handleInputChange(e, "number");
  };

  // to add loyalty
  const addAdjLyl = () => {
    values["isDealer"] = false;
    values["subDealerName"] = subdealerName;
    values["subDealerNumber"] = subdealerNumber;
    let userData = localStorage.getItem("userData");
    values["userId"] = JSON.parse(userData).userId;
    setState({ btnTxt: "Saving..." });
    setIsSaveDisabled(true);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    // body: ,
    Axios.post(
      API_URL_LMS + `admin/adjustLoyaltyPoints`,
      JSON.stringify(values),
      requestOptions
    )
      .then((response) => {
        setState({
          ...state,
          openAlert: true,
          message: `Points ${values.activityType=="Bonus" ? 'Added':'Deducted'} Successfully!!`,
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

  const updateAdjLyl = () => {
    values["isDealer"] = false;
    values["subDealerName"] = subdealerName;
    values["subDealerNumber"] = subdealerNumber;
    values["id"] = recordForEdit.id;
    let userData = localStorage.getItem("userData");
    values["userId"] = JSON.parse(userData).userId;
    setState({ btnTxt: "Saving..." });
    setIsSaveDisabled(true);
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    // body: ,
    Axios.put(
      API_URL_LMS + `admin/adjustLoyaltyPoints`,
      JSON.stringify(values),
      requestOptions
    )
      .then((response) => {
        setState({
          ...state,
          openAlert: true,
          message: "Points Updated Successfully!!",
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

  return (
    <div className="AdjustLoyaltyContainer">
      {state.openAlert ? (
        <div className="AlertMsg">
          <Alert
            severity={state.severity}
            onClose={() => {
              setOpenPopup(false);
            }}
          >
            {state.message}
          </Alert>
        </div>
      ) : (
        ""
      )}
      <Form onSubmit={handleSubmit}>
        <div>
          <Controls.Select
            name="activityType"
            label="Activity Type*"
            value={values.activityType}
            onChange={handleInputChange}
            disabled={recordForEdit ? true : false}
            options={ACTIVITY_TYPE_SELECT_VALUES}
            error={errors.activityType}
          />
        </div>
        <br />
        <div>
          <Controls.Input
            name="point"
            label={
              values.activityType == "Point Deduction"
                ? "Deduct Points*"
                : "Add Points*"
            }
            size="small"
            value={values.point}
            onChange={handlePointChange}
            error={errors.point}
            InputProps={{
              startAdornment:
                values.activityType == "Point Deduction" ? (
                  <InputAdornment position="start">-</InputAdornment>
                ) : null,
            }}
          />
        </div>
        <br />
        <div>
          <Controls.Input
            name="remarks"
            label="Remarks*"
            size="small"
            value={values.remarks}
            onChange={handleInputChange}
            error={errors.remarks}
            rows={4}
            multiline
          />
        </div>
        <br />
        <div className="SubAdjLylBtnContainer">
          <Button
            type="submit"
            variant="contained"
            className="SaveBtn"
            disabled={isSaveDisabled}
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
          >
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddAdjustLoyalty;
