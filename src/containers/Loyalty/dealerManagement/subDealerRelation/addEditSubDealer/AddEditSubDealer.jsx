import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import "./AddEditSubDealer.scss";
import Controls from "../../Controls";
import { useForm, Form } from "../../../../../components/Form/FormComponent";
import { isRequired } from "../../../../../_helpers/commonFunctions";
import { useDispatch, useSelector } from "react-redux";
import { getSubDealerInfoAction } from "../../../../../_actions/dealer.action";
import { API_URL_ADMIN } from "../../../../../Constant/index";

const INITIAL_FORM_VALUES = {
  subdealerNumber: "",
  subdealerNameEN: "",
  subdealerNameTH: "",
  relationStatus: "",
};

const Relation_Status_SELECT_VALUES = ["Active", "InActive"];

const AddEditSubDealer = (props) => {
  const location = useLocation();
  // dealernumber=accountName,dealerName=soldtoNumber
  const { accountName } = location.state;
  const { soldtoNumber } = location.state;
  const { setOpenPopup, recordForEdit } = props;
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  const [state, setState] = useState({
    openAlert: false,
    severity: "success",
    message: "",
    btnTxt: "SAVE",
  });
  const dispatch = useDispatch();
  const subDealerInfoState = useSelector((state) => state.getSubDealerInfo);

  useEffect(() => {
    if (
      subDealerInfoState.SubDealerInfo != null &&
      subDealerInfoState.SubDealerInfo.status == 200
    ) {
      const { subdealerNameEN, subdealerNameTH } =
        subDealerInfoState.SubDealerInfo.data;
      setValues({
        ...values,
        subdealerNameEN,
        subdealerNameTH,
      });
    } else if (
      subDealerInfoState.SubDealerInfo != null &&
      subDealerInfoState.SubDealerInfo.status == 420
    ) {
      setErrors({
        subdealerNumber: subDealerInfoState.SubDealerInfo.message,
      });
    }
  }, [subDealerInfoState]);

  useEffect(() => {
    setErrors({
      subdealerNumber: "",
    });
    if (recordForEdit !== null) {
      setValues({
        ...recordForEdit,
      });
    } else {
      setValues(INITIAL_FORM_VALUES);
    }
  }, [recordForEdit]);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // for single input validation we need to check if this feild is there are not
    if ("subdealerNumber" in fieldValues)
      temp.subdealerNumber = isRequired(fieldValues.subdealerNumber)
        ? ""
        : "Subdealer Number is required.";

    if ("subdealerNameEN" in fieldValues)
      temp.subdealerNameEN = isRequired(fieldValues.subdealerNameEN)
        ? ""
        : "subdealerNameEN Number is required.";

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

  useEffect(() => {}, [values]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(getSubDealerInfoAction(values.subdealerNumber));
    }
  };

  const handleOnBlur = (event) => {
    dispatch(getSubDealerInfoAction(values.subdealerNumber));
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
    // for dealer name in th and en it hardcoded later
    // need to change
    values.soldToNumber = accountName;
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };
    Axios.put(
      API_URL_ADMIN + `retailer/subdealer-soldto`,
      JSON.stringify(values),
      requestOptions
    )
      .then((response) => {
        if (response.data.status == 200) {
          setState({
            ...state,
            openAlert: true,
            message:
              "SubDealer " +
              values.subdealerNumber +
              " Relation Updated Successfully",
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

  const addContactSubmitForm = (values) => {
    // for dealer name in th and en it hardcoded later
    // need to change
    values.soldToNumber = accountName;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    Axios.post(
      API_URL_ADMIN + `retailer/subdealer-soldto`,
      JSON.stringify(values),
      requestOptions
    )
      .then((response) => {
        if (response.data.status == 200) {
          setState({
            ...state,
            openAlert: true,
            message:
              "SubDealer " +
              values.subdealerNumber +
              " Relation Created Successfully",
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

  return (
    <div className="AddEditSubDealerContainer">
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
      <div className="ControllForm">
        <Form onSubmit={handleSubmit} className="main">
          <Controls.Input
            name="subdealerNumber"
            label="Sub Dealer Number*"
            size="small"
            value={values.subdealerNumber}
            onKeyPress={handleKeyPress}
            onBlur={handleOnBlur}
            onChange={handleInputChange}
            disabled={recordForEdit ? true : false}
            error={errors.subdealerNumber}
          />

          <Controls.Input
            name="subdealerNameEN"
            label="Sub Dealer Name (EN)"
            size="small"
            value={values.subdealerNameEN}
            disabled={true}
          />

          <Controls.Input
            name="subdealerNameTH"
            label="Sub Dealer Name (TH)"
            size="small"
            value={values.subdealerNameTH}
            disabled={true}
          />

          <Controls.Select
            name="relationStatus"
            label="Relationship With Sub Dealer"
            value={values.relationStatus}
            onChange={handleInputChange}
            options={Relation_Status_SELECT_VALUES}
            showSelect
          />

          <div className="BtnContainer">
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
    </div>
  );
};

export default AddEditSubDealer;
