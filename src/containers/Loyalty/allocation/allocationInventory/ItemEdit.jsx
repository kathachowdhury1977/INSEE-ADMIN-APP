import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Axios from "axios";
import Controls from "../../subDealerManagement/subdealer/Controls";
import { useForm, Form } from "../../../../components/Form/FormComponent";
import { isRequired } from "../../../../_helpers/commonFunctions";
import { API_URL_LMS} from "../../../../Constant/index";
const INITIAL_FORM_VALUES = {
  id: "",
  isMarkDelete: false,
  pointsReceived: "",
  subDealerId: "",
  subDealerName: "",
};


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

  const updateRecord = (e) => {
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
      Axios.put(`${API_URL_LMS}loyalty/inventory-item?productObjectId=${props.productId}&itemObject_id=${values.id}&markDelete=${values.isMarkDelete}`,{},requestOptions)
        .then((response) => {
            if(response.data.status===200)
            {
                setState({
                    ...state,
                    openAlert: true,
                    message: "Record updated successfully ",
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
    if (recordForEdit !== null)
      setValues({
        ...recordForEdit,
      });
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
      <div className="ControllForm itemEditForm">
        <Form onSubmit={updateRecord}>
        <Grid container>
            <Grid item md={12} xs={12} className="GridContainer">
        <Controls.Input
            name="subDealerId"
            label="Sub Dealer Number"
            value={values.subDealerId}
            onChange={handleInputChange}
            size="small"
            disabled
          />
           <Controls.Input
            name="subDealerName"
            label="Dealer Name(EN)"
            value={values.subDealerName}
            onChange={handleInputChange}
            size="small"
            disabled
          />
           <Controls.Input
            name="pointsReceived"
            label="Allocated Quantity"
            value={values.pointsReceived}
            onChange={handleInputChange}
            size="small"
            disabled
          />

          <div>
                <Controls.Checkbox
                  name="isMarkDelete"
                  label="Mark Delete"
                  disabled={values.isMarkDelete=="true" ? true : false}
                  value={values.isMarkDelete=="true" || values.isMarkDelete===true ? true : false}
                  onChange={handleInputChange}
                  inputProps={{ tabIndex: "1" }}
                />
              </div>


          <div className="BtnContainer" style={{margin: "5px 0px 30px",textAlign:"center"}}>
            <Button
              type="submit"
              variant="contained"
              className="SaveBtn"
              disabled={isSaveDisabled || values.isMarkDelete=="true" ? true : false}
              // disabled={values.isMarkDelete=="true" ? true : false}
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
          </Grid>
          </Grid>
        </Form>
      </div>
    </>
  );
};

export default AllocationInventoryEdit;