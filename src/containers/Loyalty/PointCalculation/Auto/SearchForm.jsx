import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import moment from "moment";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Controls from "../../subDealerManagement/subdealer/Controls";
import { API_URL_ADMIN} from "../../../../Constant/index";
import { useForm, Form } from "../../../../components/Form/FormComponent";
import { isRequired } from "../../../../_helpers/commonFunctions";
import { getPointCalulationListAction } from "../../../../_actions/subDealer.action";
import {
    FormControl,
    FormControlLabel,
    Checkbox as MuiCheckbox,
  } from "@mui/material";
const INITIAL_FORM_VALUES = {
   "activeFlag":"All",
   "startDate":null,
   "endDate":null
  }

const ACTIVE_LIST=["Yes","No","All"];

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
  const dispatch = useDispatch();
  const [state, setState] = useState({
    openAlert: false,
    severity: "success",
    message: "",
    btnTxt: "SAVE",
  });
  const [provinceList,setProvinceList]=useState([])
  const [districtList,setDistrict]=useState([])
  const [subDistrictList,setSubDistrict]=useState([])
  // for validation the form
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // for single input validation we need to check if this feild is there are not
  
    setErrors({
      ...temp,
    });
    // to check all of the properties inside temp function is an empty string(i.e. valid)
    // we will return this only if the validate is method is called from Onsubmit method
    if (fieldValues == values)
      return Object.values(temp).every((eachFieldErr) => eachFieldErr == "");
  };


  const getSearch = (e) => {
    e.preventDefault();
      };

  // useform is a reusable component for forms
  // for single controll real time validation of form pass true as 2nd parameter and validate function as 3rd parameter
  const { values, setValues, handleInputChange, errors, setErrors } = useForm(
    INITIAL_FORM_VALUES,
    true,
    validate
  );


  useEffect(() => {
    let queryString=''
    if(values.activeFlag==='All'){
      queryString=`?ruleType=auto${values.startDate ? '&&startDate='+moment(values.startDate).format("DD-MM-yyyy") : ""}${values.endDate ? '&&endDate='+moment(values.endDate).format("DD-MM-yyyy") : ""}`
    }else{
       queryString=`?ruleType=auto${values.activeFlag ? '&&activeFlag='+values.activeFlag : ""}${values.startDate ? '&&startDate='+moment(values.startDate).format("DD-MM-yyyy") : ""}${values.endDate ? '&&endDate='+moment(values.endDate).format("DD-MM-yyyy") : ""}`
    }    
    dispatch(getPointCalulationListAction(queryString));
  }, [values.activeFlag,values.startDate,values.endDate]);
const resetSearch = ()=>{
  setValues({activeFlag:"All",startDate:null,endDate:null})
  // dispatch(getPointCalulationListAction("?ruleType=auto"));
}
useEffect(()=>{
if(props.isUpdated===true){
  resetSearch()
}
},[props.isUpdated])
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
      <div className="pCalFormControll">
        <Form onSubmit={getSearch} elementSize={"90%"}>
          <Grid container>
            <Grid item md={3} xs={12}>
            <Controls.DatePicker
                name="startDate"
                label="Start Date"
                error={false}
                helperText=""
                value={values.startDate ? values.startDate : null}
                onChange={handleInputChange}
              /> 
            </Grid>

            <Grid item md={3} xs={12}>
            <Controls.DatePicker
                name="endDate"
                label="End Date"
                value={values.endDate ? values.endDate : null}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item md={3} xs={12}>

            <Controls.Select
                name="activeFlag"
                label="Active"
                value={values.activeFlag}
                onChange={handleInputChange}
                options={ACTIVE_LIST}
                // error={errors.subDistrict}
              />           
           
             
            </Grid>
            <Grid item md={3} xs={12}>
            <div className="">                
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={resetSearch}
                >
                  Clear All 
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
