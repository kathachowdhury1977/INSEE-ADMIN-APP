import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import moment from "moment";
import Axios from "axios";
import Controls from "../../subDealerManagement/subdealer/Controls";
import { useForm, Form } from "../../../../components/Form/FormComponent";
import { isRequired } from "../../../../_helpers/commonFunctions";
import { API_URL_LMS} from "../../../../Constant/index";
const INITIAL_FORM_VALUES = {
  id: "",
  expirationDate: null,
  soldToNameEN: "",
  soldToNameTH: "",
  relationStatus: "",
};

const COUNTRY_SELECT_VALUES = ["Active", "Inactive"];

const theme = createTheme({
  palette: {
    neutral: {
      main: "#D3D3D3",
      contrastText: "#000000",
    },
  },
});

const AllocationInventoryEdit = (props) => {
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

  const updateExpiryDate = (e) => {
    e.preventDefault();
    // if (validate()) {
      const requestOptions = {
        headers: {
          "Content-Type": "application/json",
          "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
        },
      };
      setState({ btnTxt: "Saving..." });
      setIsSaveDisabled(true);
      // const payloadDetails={
      //   "relationStatus": values.relationStatus,
      //   "soldToNameEN": values.soldToNameEN,
      //   "soldToNameTH": values.soldToNameTH,
      //   "soldToNumber": values.soldToNumber, 
      //   "subdealerNumber": values.subdealerNumber  
       
      // }
      let expiryDate=values.expirationDate ? moment(values.expirationDate).format("DD-MM-YYYY") : null

      const allIdsTxt = values.allIds && values.allIds.length>0 && values.allIds.join();
      
      Axios.put(API_URL_LMS+`loyalty/inventory?objectId=${allIdsTxt}&expireDate=${expiryDate}`,{},requestOptions)
        .then((response) => {
            if(response.data.status===200)
            {
                setState({
                    ...state,
                    openAlert: true,
                    severity: "success",
                    message: "Expiration Date updated successfully ",
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
    // }
  };
  

  // useform is a reusable component for forms
  // for single controll real time validation of form pass true as 2nd parameter and validate function as 3rd parameter
  const { values, setValues, handleInputChange, errors, setErrors } = useForm(
    INITIAL_FORM_VALUES,
    true,
    validate
  );

  useEffect(() => {
    if (recordForEdit !== null){
      let newRefRecordEdit={...recordForEdit}    
      newRefRecordEdit.expirationDate = newRefRecordEdit.expirationDate && newRefRecordEdit.expirationDate!=='' ?  moment(newRefRecordEdit.expirationDate).format("MM-DD-yyyy") : null      
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
      <div className="ControllForm" style={{padding:"0px 10px 0px 10px"}}>
        <Form onSubmit={updateExpiryDate} style={{margin:"0px"}}>
 <Controls.DatePicker
            name="expirationDate"
            label="Expiration Date"
            // maxDate={values.createdDateTo || new Date()}
            value={values.expirationDate}
            onChange={handleInputChange}
            // disable={filterValues.disableFilters}
            // error={filterErr.createdDateFrom}
          /> 


          <div className="BtnContainer" style={{margin: "20px 0px 30px"}}>
            <Button
              type="submit"
              variant="contained"
              className="SaveBtn"
              disabled={isSaveDisabled}
              style={{marginRight:"43%"}}
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

export default AllocationInventoryEdit;