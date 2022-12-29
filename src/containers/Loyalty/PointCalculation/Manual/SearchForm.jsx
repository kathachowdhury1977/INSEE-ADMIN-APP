import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Axios from "axios";
import { useSelector } from 'react-redux';
import Controls from "../../subDealerManagement/subdealer/Controls";
import { API_URL_ADMIN} from "../../../../Constant/index";
import { useForm, Form } from "../../../../components/Form/FormComponent";
import { isRequired } from "../../../../_helpers/commonFunctions";
import {
    FormControl,
    FormControlLabel,
    Checkbox as MuiCheckbox,
  } from "@mui/material";
const INITIAL_FORM_VALUES = {
    "markForDelete":undefined ,
    "startDate":"",
    "endDate":"",
    "status":"All",
    "accountGroup": "",
    "subDealerNameEN": "",
    "subDealerNameTH": "",
    "taxNumber": "",
    "customerTierStatus": "",
    "InseeLifeNumber": "",
    "InseeLifePoints": "",
    "thaiSmartCard": "",
    "addressNumber": "",
    "street": "",
    "latitudeLongitude": "",
    "PDPA Consent Date/Time": "",
    "email": "",
    "phoneNumber":"" ,
    "mobile":"" ,
    "subDealerNumber": "",
    "groupCompany": "",
    "legalForm": "",
    "pdpa": "",
    "province": "",
    "district": "",
    "subDistrict": "",
    "postalCode": "",
    "salesDistrict": "",
    "createdBy": "",
    "createdDateTime": ""
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
    if ("subDealerNumber" in fieldValues)
      temp.subDealerNumber = isRequired(fieldValues.subDealerNumber)
        ? ""
        : "Sub Dealer Number is required.";

    if ("taxNumber" in fieldValues)
      temp.taxNumber = isRequired(fieldValues.taxNumber)
        ? ""
        : "Tax Number is required.";

    if ("addressNumber" in fieldValues)
      temp.addressNumber = isRequired(fieldValues.addressNumber)
        ? ""
        : "Address Number is required.";

    if ("subDistrict" in fieldValues)
      temp.subDistrict = isRequired(fieldValues.subDistrict)
        ? ""
        : "Sub District is required.";
    if ("latitudeLongitude" in fieldValues)
      temp.latitudeLongitude = isRequired(fieldValues.latitudeLongitude)
        ? ""
        : "Latitude & Longitude is required.";

    if ("mobile" in fieldValues)
      temp.mobile = isRequired(fieldValues.mobile)
        ? (temp.mobile =
            fieldValues.mobile.toString().length > 9
              ? ""
              : "Minimum 10 numbers required.")
        : "Mobile is required.";

    if ("accountGroup" in fieldValues)
      temp.accountGroup = isRequired(fieldValues.accountGroup)
        ? ""
        : "Account Group is required.";

    if ("subDealerNameEN" in fieldValues)
      temp.subDealerNameEN = isRequired(fieldValues.subDealerNameEN)
        ? ""
        : "Sub Dealer Name(EN) is required.";

    if ("Province" in fieldValues)
      temp.province = isRequired(fieldValues.province)
        ? ""
        : "Province is required.";

    if ("street" in fieldValues)
      temp.street = isRequired(fieldValues.street)
        ? ""
        : "Street is required.";
        
    if ("salesDistrict" in fieldValues)
      temp.salesDistrict = isRequired(fieldValues.salesDistrict)
        ? ""
        : "Sales District is required.";
    
    
    if ("email" in fieldValues)
    temp.email = isRequired(fieldValues.email)
        ? (temp.email = /$^|.+@.+..+/.test(fieldValues.email)
            ? ""
            : "Email is not Valid.")
        : "Email is required.";
    
    if ("subDealerNameTH" in fieldValues)
      temp.subDealerNameTH = isRequired(fieldValues.subDealerNameTH)
        ? ""
        : "Sub Dealer Name (TH) is required.";

    if ("district" in fieldValues)
      temp.district = isRequired(fieldValues.district)
        ? ""
        : "District is required.";


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

  function getCompanyDropDown(){
    const requestOptions = {
        headers: {
          "Content-Type": "application/json",
          'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
        },
      };
      Axios.get(API_URL_ADMIN+"province/get/byCountry?countryCode=TH",requestOptions)
      .then((response) => {
        setProvinceList(response)
        return response;
      })
}

function getActivityType(){
  const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
      },
    };
    Axios.get(API_URL_ADMIN+"province/get/district/ByProvince?province=",requestOptions)
    .then((response) => {
      setProvinceList(response)
      return response;
    })
}

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

  console.log('gggg',recordForEdit)
  console.log('gggg2',values)
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
        <Form elementSize={"90%"}>
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
                name="status"
                label="Active"
                value={values.status}
                onChange={handleInputChange}
                options={ACTIVE_LIST}
                error={errors.subDistrict}
              />           
           
             
            </Grid>
            <Grid item md={3} xs={12}>
            <div className="">                
                <Button
                  variant="outlined"
                  color="secondary"
                //   size="small"
                //   onClick={() => {
                //     setOpenPopup(false);
                //   }}
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
