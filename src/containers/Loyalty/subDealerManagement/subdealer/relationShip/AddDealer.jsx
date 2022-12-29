import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Axios from "axios";
import Controls from "../Controls";
import { useForm, Form } from "../../../../../components/Form/FormComponent";
import { handleZero, isRequired } from "../../../../../_helpers/commonFunctions";
import { API_URL_ADMIN} from "../../../../../Constant/index";
const INITIAL_FORM_VALUES = {
  id: "",
  soldToNumber: "",
  soldToNameEN: "",
  soldToNameTH: "",
  relationStatus: "",
};

const COUNTRY_SELECT_VALUES = ["Active", "InActive"];

const theme = createTheme({
  palette: {
    neutral: {
      main: "#D3D3D3",
      contrastText: "#000000",
    },
  },
});

const AddDealer = (props) => {
  const { setOpenPopup, recordForEdit } = props;
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  const [state, setState] = useState({
    openAlert: false,
    severity: "success",
    message: "",
    btnTxt: "SAVE",
  });
   const [dealerError,setDealerError] = useState(false)

  // for validation the form
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // for single input validation we need to check if this feild is there are not

    if ("soldToNumber" in fieldValues)
      temp.dealerNumber = isRequired(fieldValues.soldToNumber)
        ? ""
        : "Dealer Number is required.";

    setErrors({
      ...temp,
    });
    // to check all of the properties inside temp function is an empty string(i.e. valid)
    // we will return this only if the validate is method is called from Onsubmit method
    if (fieldValues == values)
      return Object.values(temp).every((eachFieldErr) => eachFieldErr == "");
  };

  const updateRelation = (e) => {
    e.preventDefault();
    if (validate()) {
      setState({ btnTxt: "Saving..." });
      setIsSaveDisabled(true);
      const payloadDetails={
        "relationStatus": values.relationStatus,
        "soldToNameEN": values.soldToNameEN,
        "soldToNameTH": values.soldToNameTH,
        "soldToNumber": values.soldToNumber, 
        "subdealerNumber": values.subdealerNumber 
       
      }
      const requestOptions = {
        headers: {
          'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
        },
      };
      Axios.put(API_URL_ADMIN+"retailer/soldto-subdealer",payloadDetails,requestOptions)
        .then((response) => {
            if(response.data.status===200)
            {
                setState({
                    ...state,
                    openAlert: true,
                    message: "Dealer relationship updated successfully ",
                    btnTxt: "SAVE",
                  });
                props.setIsAddEdit(true)

            }else{
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
  const addRelation = (e) => {
    e.preventDefault();
    if (!dealerError && validate()) {
      setState({ btnTxt: "Saving..." });
      setIsSaveDisabled(true);
      const payloadDetails={
        "relationStatus": values.relationStatus,
        "soldToNameEN": values.soldToNameEN,
        "soldToNameTH": values.soldToNameTH,
        "soldToNumber": handleZero(values.soldToNumber), 
        "subdealerNumber": props.subdealerNumber  
      }
      const requestOptions = {
        headers: {
          'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
        },
      };
      Axios.post(API_URL_ADMIN+"retailer/soldto-subdealer",payloadDetails,requestOptions)
        .then((response) => {
            if(response.data.status===200)
            {
                setState({
                    ...state,
                    openAlert: true,
                    message: "Dealer relationship created successfully ",
                    btnTxt: "SAVE",
                  });
                  props.setIsAddEdit(true)
            }
           else if(response.data.status===420)
            {
                setState({
                    ...state,
                    openAlert: true,
                    severity: "error",
                    message: response.data.message,
                    btnTxt: "SAVE",
                  });

            }else{
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

  // useform is a reusable component for forms
  // for single controll real time validation of form pass true as 2nd parameter and validate function as 3rd parameter
  const { values, setValues, handleInputChange, errors, setErrors } = useForm(
    INITIAL_FORM_VALUES,
    true,
    validate
  );

  useEffect(() => {
    if (recordForEdit !== null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);  
  useEffect(() => {
    if (!recordForEdit && values.soldToNumber)
    setValues({
      ...values,
      soldToNameEN: "",
      soldToNameTH: ""
    });
  }, [values.soldToNumber]);

const getDealerName=()=>{
  setIsSaveDisabled(true);
  if(values.soldToNumber && !recordForEdit){
    const requestOptions = {
      headers: {
        'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
      },
    };
  Axios.get(API_URL_ADMIN+"retailer/soldto-subdealer/"+ handleZero(values.soldToNumber),requestOptions)
  .then((response) => {
      if(response.data && response.data.data && response.data.data !==null)
      {
        setDealerError(false)
          setValues({
              ...values,
              soldToNameEN: response && response.data && response.data.data && response.data.data.soldToNameEN,
              soldToNameTH: response && response.data && response.data.data && response.data.data.soldToNameTH
            });
            setIsSaveDisabled(false);

      }else{
        setErrors({
          ...errors,dealerNumber:response.data.message
        });
        setDealerError(true)
        setIsSaveDisabled(false);
      }
  })
  .catch((error) => {
   
  });
}
}
  return (
    <>
      {state.openAlert ? (
        <div className="AlertMsg">
          <Alert
            severity={state.severity}
            action={
              <Button
                color="inherit"
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
        <Form onSubmit={recordForEdit ? updateRelation :  addRelation} className="main">
          <Controls.Input
            name="soldToNumber"
            label="Dealer Number*"
            value={values.soldToNumber}
            onChange={handleInputChange}
            onBlur={getDealerName}
            size="small"
            error={errors.dealerNumber}
            disabled={recordForEdit ? true : false}
          />

          <Controls.Input
            name="soldToNameEN"
            label="Dealer Name(EN)"
            value={values.soldToNameEN ? values.soldToNameEN : ""}
            onChange={handleInputChange}
            size="small"
            disabled={true}
          />
          <Controls.Input
            name="soldToNameTH"
            label="Dealer Name(TH)"
            value={values.soldToNameTH}
            onChange={handleInputChange}
            size="small"
            disabled={true}
          />
          <Controls.Select
            name="relationStatus"
            label="Relationship with Dealer"
            value={values.relationStatus}
            onChange={handleInputChange}
            options={COUNTRY_SELECT_VALUES}
            minWidth={120}
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
    </>
  );
};

export default AddDealer;