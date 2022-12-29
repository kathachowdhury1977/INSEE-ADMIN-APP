import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Axios from "axios";
import { useSelector } from 'react-redux';
import moment from "moment";
import Hidden from '@material-ui/core/Hidden';
import Controls from "../Controls";
import { API_URL_ADMIN} from "../../../../../Constant";
import { useForm, Form } from "../../../../../components/Form/FormComponent";
import { isRequired, ValidateEmail } from "../../../../../_helpers/commonFunctions";
import {
    FormControl,
    FormControlLabel,
    Checkbox as MuiCheckbox,
  } from "@mui/material";


const CUSTOMER_TIER=["Red","Gold","Silver","Diamond","Platinum"];
const LEGAL_FORM=["Partnership","Partnership Ltd","Company Limited","Public company Ltd","Store","Group of People","Person","Government"]
const DISTRICT=["Khueang Nai", "Rasi Salai","Bua Yai","Dan Chang","Chok Chai"]
const PRVINCE=["Phrae", "Khon Kaen","Sisaket","Suphan Buri","Uttaradit","Roi Et"]
const SUB_DISTRICT=["Ang Thong", "Ano Ru","Daeng Yai","Dan Chang"]
const SALES_DISTRICT=["MT", "N1", "N2", "NE1", "NE2", "NE3", "NE4", "ET1", "ET2", "WT", "SO1", "SO2"]
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
  const [districtList,setDistrictList]=useState([])
  const [salesDistrict,SetSalesDistrict]=useState([])
  const [legalForm,SetLegalForm]=useState([])
  const [postalCode,setPostalCode]=useState([])
  const [changeProvince,setChangeProvince]=useState("default")
  const [customerTierStatus,SetCustomerTierStatus]=useState([])
  const [subDistrictList,setSubDistrictList]=useState([])
  const INITIAL_FORM_VALUES = {
    "markForDelete":false ,
    "accountGroup": "",
    "subDealerNameEN": "",
    "subDealerNameTH": "",
    "taxNumber": "",
    "customerTierStatus": "", 
    "inseeLifeNumber": "",
    "inseeLifePoints": null,
    "thaiSmartCard": "",
    "addressNumber": "",
    "street": "",
    "latitudeLongitude": "",
    "email": "",
    "phoneNumber":"" ,
    "mobile":"" ,
    "subDealerNumber": "",
    "groupCompany": "",
    "legalForm": "",
    "pdpa": false,
    "pdpaConsentDate":null,
    "provinceId":"",
    "district": "",
    "subDistrict": "",
    "postalCode": "",
    "salesDistrict": "",
    "createdBy": "",
    "creationDate": null,
    "groupCompanySCCC":false,
    "groupCompanySCCO":false,
    "groupCompanyCONWOOD":false,
    "groupCompanyISUB":false,
    "groupCompanyIECO":false
  }
  // for validation the form
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // for single input validation we need to check if this feild is there are not
    // if ("subDealerNumber" in fieldValues)
    //   temp.subDealerNumber = isRequired(fieldValues.subDealerNumber)
    //     ? ""
    //     : "Sub Dealer Number is required.";

    if ("taxNumber" in fieldValues)
      temp.taxNumber = isRequired(fieldValues.taxNumber)
        ? ""
        : "Tax Number is required.";
    if ("taxNumber" in fieldValues)
      temp.taxNumber = isRequired(fieldValues.taxNumber)
        ? (temp.taxNumber = fieldValues.taxNumber.length===13
            ? ""
            : "Tax number should be 13 character in length.")
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

    if ("accountGroup" in fieldValues)
      temp.accountGroup = isRequired(fieldValues.accountGroup)
        ? ""
        : "Account Group is required.";

    if ("subDealerNameEN" in fieldValues)
      temp.subDealerNameEN = isRequired(fieldValues.subDealerNameEN)
        ? ""
        : "Sub Dealer Name(EN) is required.";
    if ("legalForm" in fieldValues)
      temp.legalForm = isRequired(fieldValues.legalForm)
        ? ""
        : "Legal Form is required.";

    if ("provinceId" in fieldValues)
      temp.provinceId = isRequired(fieldValues.provinceId)
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
     (temp.email = ValidateEmail(fieldValues.email)
            ? ""
            : fieldValues.email ? "Email is not Valid. " : "")        
    
    if ("subDealerNameTH" in fieldValues)
      temp.subDealerNameTH = isRequired(fieldValues.subDealerNameTH)
        ? ""
        : "Sub Dealer Name (TH) is required.";

    if ("district" in fieldValues)
      temp.district = isRequired(fieldValues.district)
        ? ""
        : "District is required.";
    if ("postalCode" in fieldValues)
      temp.postalCode = isRequired(fieldValues.postalCode)
        ? ""
        : "Postal Code is required.";



    setErrors({
      ...temp,
    });
    // to check all of the properties inside temp function is an empty string(i.e. valid)
    // we will return this only if the validate is method is called from Onsubmit method
    if (fieldValues == values)
      return Object.values(temp).every((eachFieldErr) => eachFieldErr == "");
  };

   
  const getSubDealerNumber = (sapRefNo,delay) => {
    const requestOptions = {
      headers: {
        "Content-Type": "multipart/form-data",
        'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
      },
    };
    return new Promise((resolve,reject)=>{
    setTimeout(() => {    
    return Axios.get(API_URL_ADMIN+"retailer/subDealerNumber?referenceSAPId="+sapRefNo,requestOptions)
       .then((response) => {
         if(response.data && response.data.data && response.data.data!==null){
          resolve(response.data.data);          
         }else{
          resolve('notFound');     
         }
       })
       .catch((error) => {
        reject(error)
         
       });
      }, delay); 
    });
   
   }

  const addSubDealer = async (e) => {
    e.preventDefault();
    if (validate()) {
    setIsSaveDisabled(true);
    setState({ btnTxt: "Saving..." });
    let groupCompany;
    if(values.groupCompanySCCC || values.groupCompanySCCO || values.groupCompanyCONWOOD || values.groupCompanyISUB || values.groupCompanyIECO){
      groupCompany=[values.groupCompanySCCC ? 'SCCC' : false,values.groupCompanySCCO ? "SCCO" : false ,values.groupCompanyCONWOOD ? 'CONWOOD' : false,values.groupCompanyISUB ? 'ISUB' : false,values.groupCompanyIECO ? 'IECO' : false]
      values.groupCompany = groupCompany.filter(item=> item!==false).join(",")
    }
    const formData = new FormData();
    const img = values.userImage;
    delete values.userImage;
    values.country="TH"
        // delete values.groupCompanyCONWOOD;
    // delete values.groupCompanyIECO;
    // delete values.groupCompanyISUB;
    // delete values.groupCompanySCCC;
    // delete values.groupCompanySCCO;
    values.createdBy=userData.userId
         
    const requestPayload={...values}
    requestPayload.pdpaConsentDate= values.pdpaConsentDate ? moment(values.pdpaConsentDate).format("DD-MM-YYYY HH:mm") : null
    let provinceText=provinceList.filter(item=> item.provinceCode===values.provinceId)
    requestPayload.province= provinceText[0].province && provinceText[0].province.trim()
    let legalFormText=legalForm.data.filter(item=> item.code===values.legalForm)
    requestPayload.legalFormName = legalFormText[0].description  
    requestPayload.inseeLifePoints = values.inseeLifePoints ? values.inseeLifePoints : null 
    formData.append("subDealerData", JSON.stringify(requestPayload));
    formData.append("contactImage", img);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
      },
    };
    const taxval= await taxNumberValidate()
    if(taxval=='notvalid'){
      return false;
    }
    Axios.post(
      API_URL_ADMIN + `retailer/subdealer`,
      formData,
      requestOptions
    )
      .then(async (response) => {
        if(response.data.status===200){
          let subDealerNumber;
           subDealerNumber= await getSubDealerNumber(response.data.data.referenceSAPId,2000)
          if(subDealerNumber=='notFound'){           
            subDealerNumber= await getSubDealerNumber(response.data.data.referenceSAPId,2000)
          }
          if(subDealerNumber=='notFound'){
            setState({
              ...state,
              openAlert: true,
              severity:'error',
              message:
                "Sub dealer number creation failed.",
              btnTxt: "SAVE",
            });

          }else{
            setState({
              ...state,
              openAlert: true,
              severity:'success',
              message:
                "Sub dealer created successfully : " + subDealerNumber,
              btnTxt: "SAVE",
            });
            props.setIsAddEdit(true)

          }
        }else{
          setState({
            ...state,
            openAlert: true,
            severity:'error',
            message:response.data.message && response.data.message.includes("Please Enter Valid Latitude and Longitude") ? "Please Enter Valid Latitude and Longitude." : "Error in processing",
            btnTxt: "SAVE",
          });
        }
        setIsSaveDisabled(false);

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
  
  const updateSubDealer = async (e) => {
    e.preventDefault();
    if (validate()) {
    setIsSaveDisabled(true);
    setState({ btnTxt: "Saving..." });
    let groupCompany;
    if(values.groupCompanySCCC || values.groupCompanySCCO || values.groupCompanyCONWOOD || values.groupCompanyISUB || values.groupCompanyIECO){
      groupCompany=[values.groupCompanySCCC ? 'SCCC' : false,values.groupCompanySCCO ? "SCCO" : false ,values.groupCompanyCONWOOD ? 'CONWOOD' : false,values.groupCompanyISUB ? 'ISUB' : false,values.groupCompanyIECO ? 'IECO' : false]
      values.groupCompany = groupCompany.filter(item=> item!==false).join(",")
    }
    const formData = new FormData();
    const img = values.userImage;
    delete values.userImage;
    values.country="TH"
    
    // delete values.markForDelete;
    const requestPayload={...values}
    let provinceText=provinceList.filter(item=> item.provinceCode===values.provinceId)
    requestPayload.pdpaConsentDate= values.pdpaConsentDate ? moment(values.pdpaConsentDate).format("DD-MM-YYYY HH:mm") : null
    requestPayload.province= provinceText[0].province && provinceText[0].province.trim()       
    let legalFormText=legalForm.data.filter(item=> item.code===values.legalForm)
    requestPayload.legalFormName = legalFormText[0].description
    requestPayload.inseeLifePoints = values.inseeLifePoints ? values.inseeLifePoints : null
    formData.append("subDealerData", JSON.stringify(requestPayload)); 
    formData.append("contactImage", img);
    
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
        'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
      },
    };
    const taxval= await taxNumberValidate()
    if(taxval=='notvalid'){     
      return false;
    }
    Axios.put(
      API_URL_ADMIN + `retailer/subdealer`,
      formData,
      requestOptions
    )
      .then((response) => {
        if(response.data.status===200){
          setState({
            ...state,
            openAlert: true,
            severity:'success',
            message:
              "Sub dealer updated successfully : " + values.subDealerNumber,
            btnTxt: "SAVE",
          });
          props.setIsAddEdit(true)

        }else{
          setState({
            ...state,
            openAlert: true,
            severity:'error',
            message:
              "Error in processing",
            btnTxt: "SAVE",
          });
        }
        setIsSaveDisabled(false);

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

  function getProvince(){
    const requestOptions = {
        headers: {
          "Content-Type": "application/json",
          'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
        },
      };
      Axios.get(API_URL_ADMIN+"new-province/getDistinctProvince",requestOptions)
      .then((response) => {
        const provinceDropdownList=response && response.data && response.data.data && response.data.data.map(item=>{
          item.province =item.province && item.province.split("-")[0]        
          return item
        })             
        setProvinceList(provinceDropdownList)       
      })
      // Axios.get(API_URL_ADMIN+"metadata/TH/province",requestOptions)
      // .then((response) => {
      //   const provinceDropdownList=response && response.data && response.data.data && response.data.data.map(item=>{
      //     item.province =item.province && item.province.split("-")[0]        
      //     return item
      //   })             
      //   setProvinceList(provinceDropdownList)       
      // })
}

function getSalesDistrict(){
  const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
      },
    };
    Axios.get(API_URL_ADMIN+"retailer/salesDistrict",requestOptions)
    .then((response) => {
      SetSalesDistrict(response.data)
      return response;
    })
}

function getCustomerTier(){
  const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
      },
    };
    Axios.get(API_URL_ADMIN+"retailer/customerTierStatus",requestOptions)
    .then((response) => {
      SetCustomerTierStatus(response.data)
      return response;
    })
}


function getLegalForm(){
  const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
      },
    };
    Axios.get(API_URL_ADMIN+"retailer/legalForm",requestOptions)
    .then((response) => {
      SetLegalForm(response.data)
      return response;
    })
}



function getDistrict(){
  if(values.provinceId && provinceList){  
    
  let provinceText=provinceList.filter(item=> item.provinceCode===values.provinceId)
  const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
      }, 
    };
    if(provinceText[0] && provinceText[0].province){
      Axios.get(API_URL_ADMIN+"new-province/get/district/ByNewProvince?province="+provinceText[0].province,requestOptions)
      .then((response) => {
        setDistrictList(response.data)        
        return response;
      })
    }

    // if(provinceText[0] && provinceText[0].province){
    //   Axios.get(API_URL_ADMIN+"/province/get/district/ByProvince?province="+provinceText[0].province,requestOptions)
    //   .then((response) => {
    //     setDistrictList(response.data)        
    //     return response;
    //   })
    // }

    
  }
}

function getSubDistrict(){
  if(values.district)
  {
    let districtText =values.district.split("-")
    if(districtText[0]){
      const requestOptions = {
        headers: {
          "Content-Type": "application/json",
          'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
        },
      };
      Axios.get(API_URL_ADMIN+"new-province/get/subDistrict/ByNewDistrict?district="+districtText[0],requestOptions)
      .then((response) => {
        setSubDistrictList(response)
      })
      // Axios.get(API_URL_ADMIN+"province/get/subDistrict/ByDistrict?district="+districtText[0],requestOptions)
      // .then((response) => {
      //   setSubDistrictList(response)
      // })
    }

  }
}
function getPostalCode(){
  if(values.district)
  {
      const requestOptions = {
        headers: {
          "Content-Type": "application/json",
          'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
        },
      };
      Axios.get(API_URL_ADMIN+"new-province/get-postal-code/by-newDistrict-code?districtCode="+values.district,requestOptions)
      .then((response) => {
        setPostalCode(response)
      }) 
      // Axios.get(API_URL_ADMIN+"retailer/get-postal-code/by-district-code?districtCode="+values.district,requestOptions)
      // .then((response) => {
      //   setPostalCode(response)
      // })   
}
}


  
  const taxNumberValidate = () => {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
      },
    };
     return Axios.get(API_URL_ADMIN+"retailer/validateTaxNumber?taxNumber="+values.taxNumber,requestOptions)
        .then((response) => {
          if(response.data && response.data.data.length===0){
            return 'valid';
          }else{
            if(recordForEdit && recordForEdit.taxNumber===response.data.data[0].taxNumber){
              return 'valid';
            }else{
              setIsSaveDisabled(true);
              setState({ btnTxt: "Save" });
              setErrors({
                ...errors,taxInvalid:'Duplicate! Tax number already exists in the system'
              });
              return 'notvalid';;

            }

          }

        })
        .catch((error) => {
          
        });
  
    
    }


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
      newRefRecordEdit.pdpaConsentDate = newRefRecordEdit.pdpaConsentDate && newRefRecordEdit.pdpaConsentDate!=='' ?  moment(newRefRecordEdit.pdpaConsentDate,"DD-MM-YYYY HH:mm").format("MM-DD-yyyy HH:mm") : null   
      newRefRecordEdit.creationDate = newRefRecordEdit.creationDate && newRefRecordEdit.creationDate!=='' ? moment(newRefRecordEdit.creationDate*1000).format("DD-MM-yyyy HH:mm") : null  
      setValues({
        ...newRefRecordEdit,
      });  
    }
   
  }, [recordForEdit]);
  useEffect(() => {
    getProvince()
    getCustomerTier()
    getSalesDistrict()
    getLegalForm()
  }, []);
  useEffect(() => {
    getDistrict()
  }, [values.provinceId,provinceList]);
  const provincehandleChange =e=>{        
    handleInputChange(e)
    setChangeProvince(Math.floor(1000 + Math.random() * 9000))
  }
  useEffect(() => {
    getSubDistrict()
    getPostalCode()
  }, [values.district]);

  useEffect(() => {
    if(changeProvince!=='default'){
      setValues({
        ...values,
        "postalCode":"",
        "district":"",
        "subDistrict":""
      }); 
    }
  }, [changeProvince]);

  useEffect(() => {
    setIsSaveDisabled(false);
    setState({ btnTxt: "Save" });
    setErrors({
      ...errors,taxInvalid:''
    });
  }, [values.taxNumber]);
  useEffect(() => {
    if(postalCode && postalCode.data && postalCode.data.data && postalCode.data.data.length===1){
      setValues({
        ...values,
        postalCode:postalCode.data.data[0]
      });
    }
  }, [postalCode]);
  
  function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}



  return (
    <>
    {/* <Loader /> */}
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
      <div className="ControllForm">
        <Form onSubmit={recordForEdit ? updateSubDealer : addSubDealer} elementSize={"90%"}>
          <Grid container>
            <Grid item md={4} xs={12} className="GridContainer">
            <div>
                <Controls.Checkbox
                  name="markForDelete"
                  label={"Mark Delete"}
                  value={values.markForDelete ? true : false}
                  onChange={handleInputChange}
                  inputProps={{ tabIndex: "1" }}
                />
              </div>
              {/* <FormControl></FormControl> */}

              {/* Input is an custom reusable component */}
              <Controls.Input
                name="subDealerNumber"
                label="Sub Dealer Number*"
                value={!recordForEdit ? "Auto Generated" : values.subDealerNumber}
                onChange={e=>handleInputChange(e,'number')}
                size="small"
                disabled={true}
                error={errors.subDealerNumber}
                inputProps={{ tabIndex: "3" }}
              />
              <Controls.Input
                name="taxNumber"
                label="Tax Number*"
                value={values.taxNumber}
                onChange={handleInputChange}
                // onBlur={taxNumberValidate}
                size="small"
                error={errors.taxNumber || errors.taxInvalid}
                inputProps={{ tabIndex: "6",maxLength: 13 }}
              />
              <Controls.Input
                name="inseeLifeNumber"
                label="INSEE LIFE Number"
                value={values.inseeLifeNumber ? values.inseeLifeNumber : ""}
                onChange={e=>handleInputChange(e,'number')}
                size="small"
                inputProps={{ tabIndex: "9" }}
              />
             
              <Controls.Input
                name="addressNumber"
                label="Address Number*"
                value={values.addressNumber}
                onChange={handleInputChange}
                size="small"
                error={errors.addressNumber}
                inputProps={{ tabIndex: "12" }}
              />
              <Controls.Select
                name="subDistrict"
                label="Sub District*"
                optionCode="subDistrict"
                optionLabel="subDistrict"
                value={values.subDistrict}
                onChange={handleInputChange}
                options={subDistrictList && subDistrictList.data && subDistrictList.data.data ? sortByKey(subDistrictList.data.data,"subDistrict") : []}
                error={errors.subDistrict}
                inputProps={{ tabIndex: "15" }}
              />
              <Controls.Input
                name="latitudeLongitude"
                label="Latitude, Longitude*"
                value={values.latitudeLongitude}
                onChange={handleInputChange}
                size="small"
                error={errors.latitudeLongitude}
                inputProps={{ tabIndex: "18" }}
              />
              {/* <Controls.DatePicker
                name="pdpaConsentDate"
                label="PDPA Consent Date/Time"
                error={false}
                helperText=""
                value={values.pdpaConsentDate ? values.pdpaConsentDate : null}
                onChange={handleInputChange}
                inputProps={{ tabIndex: "21" }}
              />  */}
              <Controls.DatetimePicker
                name="pdpaConsentDate"
                label="PDPA Consent Date/Time"
                error={false}
                helperText=""
                format="dd-MM-yyyy HH:mm"
                ampm={false}
                value={values.pdpaConsentDate ? values.pdpaConsentDate : null}
                onChange={handleInputChange}
                inputProps={{ tabIndex: "21" }}
              /> 
               {/* <Controls.Input
                name="pdpaConsentDate"
                label="PDPA Consent Date/Time"
                value={values.pdpaConsentDate}
                size="small"
                disabled
                // inputProps={{ tabIndex: "18" }}
              /> */}

      
               <Controls.Input
                name="mobile"
                label="Mobile"
                value={values.mobile ? values.mobile : ""}
                onChange={e=>handleInputChange(e,'number')}
                size="small"
                error={errors.mobile}
                inputProps={{ tabIndex: "28",maxLength: 10 }}
              />

            <div className="userImageContainer">
                <span className="usrImgHeader">{"User Image"}</span>
                <br />
                <input
                  // hidden
                  accept="image/*"
                  // multiple
                  type="file"
                  name="userImage"
                  onChange={handleInputChange}
                  className="ImgUploadBtn"
                  tabIndex= "29"
                  inputProps={{ tabIndex: "30" }}
                />
              </div>

            </Grid>
            <Grid item md={4} xs={12} className="GridContainer">
              <Controls.Input
                name="accountGroup"
                label="Account Group*"
                disabled={recordForEdit ? true : false}
                value={values.accountGroup}
                onChange={handleInputChange}
                size="small"
                error={errors.accountGroup}
                inputProps={{ tabIndex: "2" }}
              />
              {/* <FormControl></FormControl> */}
              <Controls.Input
                name="subDealerNameEN"
                label="Sub Dealer Name(EN)*"
                
                value={values.subDealerNameEN}
                onChange={handleInputChange}
                size="small"
                error={errors.subDealerNameEN}
                inputProps={{ tabIndex: "4" }}
              />
             
              <Controls.Select
                name="legalForm"
                label="Legal Form*"
                value={values.legalForm}
                onChange={handleInputChange}
                optionCode="code"
                optionLabel="description"
                options={legalForm && legalForm.data ? sortByKey(legalForm.data,"description") : []}
                inputProps={{ tabIndex: "7" }}
                error={errors.legalForm}
              />

              <Controls.Input
                name="inseeLifePoints"
                label="INSEE LIFE Points"
                value={values.inseeLifePoints ? values.inseeLifePoints : ""}
                onChange={e=>handleInputChange(e,'number')}
                size="small"
                inputProps={{ tabIndex: "10" }}
              />

              <Controls.Select
                name="provinceId"
                label="Province*"
                value={values.provinceId}
                onChange={provincehandleChange}
                optionCode="provinceCode"
                optionLabel="province"
                options={provinceList ? sortByKey(provinceList,"province") : []}
                error={errors.province}
                inputProps={{ tabIndex: "13" }}
              />
               <Controls.Input
                name="street"
                label="Street*"
                value={values.street}
                onChange={handleInputChange}
                size="small"
                error={errors.street}
                inputProps={{ tabIndex: "16" }}
              />
              <Controls.Select
                name="salesDistrict"
                label="Sales District*"
                value={values.salesDistrict}
                onChange={handleInputChange}
                options={salesDistrict && salesDistrict.data ? salesDistrict.data : []}
                error={errors.salesDistrict}
                inputProps={{ tabIndex: "19" }}
              />
              <Controls.Input
                name="email"
                label="Email"
                
                value={values.email}
                onChange={handleInputChange}
                size="small"
                error={errors.email}
                inputProps={{ tabIndex: "22" }}
              />

             <Controls.Input
                name="createdBy"
                label="Created By"
                disabled
                value={recordForEdit ? values.createdBy : userData.userId}
                onChange={handleInputChange}
                size="small"
                inputProps={{ tabIndex: "29" }}
              />
             <div>
                <Controls.Checkbox
                  name="pdpa"
                  label="PDPA"
                  value={values.pdpa==="true" || values.pdpa===true ? true : false}
                  onChange={handleInputChange}
                  inputProps={{ tabIndex: "30" }}
                />               
            </div>

            {/* <Hidden only={['sm', 'xs']}>
            <div className={recordForEdit ? "BtnSubContainer subDealerBtnEditSave" : "BtnSubContainer subDealerBtnAddSave" }>
                <Button
                  type="submit"
                  variant="contained"
                  className="SaveBtn"
                  size="small"
                  disabled={isSaveDisabled}
                  tabIndex= "31"                  
                >
                  {state.btnTxt}
                  
                </Button>               
              </div>
           
             </Hidden> */}


             
            </Grid>
            <Grid item md={4} xs={12} className="GridContainer">
            <Hidden only={['sm', 'xs']}>
            <FormControl  style={{height:"40px"}}></FormControl>
             </Hidden>
           
           
              <Controls.Input
                name="subDealerNameTH"
                label="Sub Dealer Name (TH)*"
                value={values.subDealerNameTH}
                onChange={handleInputChange}
                size="small"
                error={errors.subDealerNameTH}
                inputProps={{ tabIndex: "5" }}
              />
               <Controls.Select
                name="customerTierStatus"
                label="Customer Tier Status"
                value={values.customerTierStatus}
                onChange={handleInputChange}
                options={customerTierStatus && customerTierStatus.data ? customerTierStatus.data : []}
                inputProps={{ tabIndex: "8" }}
                showSelect
              />
             
              <Controls.Input
                name="thaiSmartCard"
                label="Thai Smart Card"
                value={values.thaiSmartCard ? values.thaiSmartCard : ""}
                onChange={e=>handleInputChange(e,'number')}
                size="small"
                inputProps={{ tabIndex: "11" }}
              />
               <Controls.Select
                name="district"
                label="District*"
                value={values.district}
                onChange={handleInputChange}
                optionCode="district"
                optionLabel="district"
                options={districtList && districtList.data ? sortByKey(districtList.data,"district") : []}                
                error={errors.district}
                inputProps={{ tabIndex: "14" }}
              />

              <Controls.Select
                name="postalCode"
                label="Postal Code*"
                value={values.postalCode}
                onChange={handleInputChange}
               
                options={postalCode && postalCode.data && postalCode.data.data ? postalCode.data.data : []}                
                error={errors.postalCode}
                inputProps={{ tabIndex: "17" }}
              />
            <Controls.Input
              name="phoneNumber"
              label="Phone Number"
              value={values.phoneNumber ? values.phoneNumber : ""}
              onChange={e=>handleInputChange(e,'number')}
              size="small"
              error={errors.phoneNumber}
              inputProps={{ tabIndex: "20" }}
            />
            {recordForEdit && (
              <Controls.Input
              name="creationDate"
              label="Created Date/Time"
              value={values.creationDate}
              size="small"
              disabled
            />                   
              
              )}

<div style={{marginBottom: "25px"}} className="checkBOxControl">
            <div style={{marginLeft:"5px"}}>Group Company</div>           
           <Controls.Checkbox
                 name="groupCompanySCCC"
                 label="SCCC"
                 value={values.groupCompanySCCC}
                 onChange={handleInputChange}
                 inputProps={{ tabIndex: "23" }}
                 className="subDealerCheckbox"
               />  
            <Controls.Checkbox
                 name="groupCompanySCCO"
                 label="SCCO"
                 value={values.groupCompanySCCO}
                 onChange={handleInputChange}
                 inputProps={{ tabIndex: "24" }}
                 className="subDealerCheckbox"
               />
             <Controls.Checkbox
                 name="groupCompanyCONWOOD"
                 label="CONWOOD"
                 value={values.groupCompanyCONWOOD}
                 onChange={handleInputChange}
                 inputProps={{ tabIndex: "25" }}
                 className="subDealerCheckbox"
               />
             
             <Controls.Checkbox
                 name="groupCompanyISUB"
                 label="ISUB"
                 value={values.groupCompanyISUB}
                 onChange={handleInputChange}
                 inputProps={{ tabIndex: "26" }}
                 className="subDealerCheckbox"
               />
             <Controls.Checkbox
                 name="groupCompanyIECO"
                 label="IECO"
                 value={values.groupCompanyIECO}
                 onChange={handleInputChange}
                 inputProps={{ tabIndex: "27" }}
                 className="subDealerCheckbox"
               />     
          
              
              
             </div>
             {/* <Hidden only={['sm', 'xs']}>
             <div className={recordForEdit ? "BtnSubContainer subDealerBtnEditCancel" : "BtnSubContainer subDealerBtnAddCancel" }>
               
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={() => {
                    setOpenPopup(false);
                  }}
                  tabIndex= "32"
                  className="outlineButton"
                >
                  Cancel
                </Button>
              </div>
            
             </Hidden> */}

             {/* <Hidden             
              display={ {md: "none", lg: "none"} }
             only={['md', 'xl']}>
              <div className="BtnSubContainer hideOnMd" style={recordForEdit ? {marginTop:'13px'} : {marginTop:'35px'} }>
                <Button
                  type="submit"
                  variant="contained"
                  className="SaveBtn"
                  size="small"
                  disabled={isSaveDisabled}
                  tabIndex= "31"                  
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
                  tabIndex= "32"
                  className="outlineButton"
                >
                  Cancel
                </Button>
              </div>
              </Hidden> */}

            
              <div className="BtnSubContainer" style={recordForEdit ? {marginTop:'13px',marginBottom:"7px"} : {marginTop:'35px'} }>
                <Button
                  type="submit"
                  variant="contained"
                  className="SaveBtn"
                  size="small"
                  disabled={isSaveDisabled}
                  tabIndex= "31"                  
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
                  tabIndex= "32"
                  className="outlineButton"
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

export default SubDealerAddForm;
