import React, { useEffect, useState } from "react";
import { withTranslation, useTranslation } from "react-i18next";
import { eventActions } from "../../../_actions";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import { useLocation } from 'react-router-dom';
import "../ExternalManagment/AccountContactForm.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";



const cancleStyle = {
  marginleft: "3%",
};
const imgwidth = {
  width: "100%",
};
let fileObj = [];
let fileArray = [];

function AddRetailerSubDealer(props) {

  let userName = localStorage.getItem('userData');
  userName = JSON.parse(userName);

  const event = useSelector((state) => state);
  const [file, setFile] = React.useState(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  let history = useHistory();
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

  const [soldto, setSoldToNumber] = React.useState('');
  const [accountGroup, setAccountGroup] = React.useState('ZSUB');
  const [groupCompany, setGroupCompany] = React.useState([]);
  const [userId, setUserId] = React.useState('');
  const [subDealerCode, setSubDealerCode] = React.useState("");
  const [subDealerName, setSubDealerName] = React.useState("");
  const [taxNumber, setTaxNumber] = React.useState("");
  const [legalForm, setLegalForm] = React.useState("");
  console.log("legalForm",legalForm);
  const [customerTier, setCustomerTier] = React.useState("");
  const [inseeLife, setInseeLife] = React.useState("");
  const [inseepoint, setInseePoint] = React.useState("");
  const [thaiSmart, setThaiSmart] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [subDistrict, setSubDistrict] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [province, setProvince] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
  const [salesDistrict, setSales] = React.useState("");
  const [pdpa, setPDPA] = React.useState("");
  const [pdpaConstant, setPdpaConstant] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [mobile1, setMobile1] = React.useState("");
  const [mobile2, setMobile2] = React.useState("");
  const [salesRepId, setSalesRepId] = React.useState("");
  const [salesRepName, setSalesRepName] = React.useState("");
  const [subdealerImage, setSubDealerImage] = React.useState("");
  const [subdealerLogo, setSubDealerLogo] = React.useState("");
  const [potential, setPotential] = React.useState("");
  const [regionId, setRegionId] = React.useState("");
  const [ownerFname, setOwnerFName] = React.useState("");
  const [ownerPrimaryMobile1, setOwnerPrimaryMobile1] = React.useState("");
  const [ownerPrimarymobile2, setOwnerPrimaryMobile2] = React.useState("");
  const [ownerEmail, setOwnerEmail] = React.useState("");
  const [ownerBirthday, setOwnerBirthday] = React.useState("");
  const [contactFirstName, setContactFirstName] = React.useState("");
  const [contactLastName, setContactLastName] = React.useState("");
  const [contactMobile1, setContactMobile1] = React.useState("");
  const [contactPhone1, setContactPhone1] = React.useState("");
  const [contactMobile2, setContactMoble2] = React.useState("");
  const [contactPhone2, setContactPhone2] = React.useState("");
  const [contactPrimaryEmail, setContactPrimaryEmail] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [division, setDivision] = React.useState("");
  const [distribution, setDistribution] = React.useState("");
  const [salesOrgCode, setSalesOrgCode] = React.useState("");
  const [paymentTerm, setPaymentTerm] = React.useState("");
  const [creditControl, setCreditControl] = React.useState("");
  const [companyCode, setCompanyCode] = React.useState("");
  const [alernateMobile, setOwnerAlernateMobile] = React.useState("");
  const [ownerLName, setOwnerLName] = React.useState("");
  const [subdealerTHName, setSubDealerNameTH] = React.useState("");
  const [status, setStatus] = React.useState("Active");
  const [defaultProviceId, setDefaultProvinceId] = React.useState("");

  const [isValidPostalCode, setIsPostalCode] = useState(false);
  const [messagePostal, setMessagePostal] = useState('');

  console.log("defaultProviceId", defaultProviceId);

  const ValidationHandler = (e) => {
    const re = /[0-9]|Backspace|Delete|ArrowRight|ArrowLeft/;
    const allowed = /Backspace|Delete|ArrowRight|ArrowLeft/;
    if(!re.test(e.key) || (e.target.value.length >= 5 && !allowed.test(e.key))  ) e.preventDefault(); 
  }

  const PostalCodeHandler = (event) => {
    console.log("myPostalCode", event.target.value);

    const mypostalCode = event.target.value;

    if (mypostalCode.length > 4) {
      setIsPostalCode(true);
      setMessagePostal("Your Postal Code looks good!");
    }
    else {
      setIsPostalCode(false);
      setMessagePostal('Please enter a valid postal code!');
    }
    setPostalCode(mypostalCode);
  }


  const myGroup = (event) => {
    setGroupCompany([...groupCompany, event.target.value]);
  }

  console.log("groupCompany+++", groupCompany);

  const addRetailer = useSelector((state) => state.createretailersubdealer);



  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  const salesRepListId = useSelector((state) => state.salesrepidlist.salesrepidlist);
  const salesDistrictListId = useSelector((state) => state.salesdistrictlist.salesdistrictlist);
  const retailerProvinceList = useSelector((state) => state.retailerprovince.retailerprovince);
   const retailerDistrictList = useSelector((state) => state.retailerdistrict.retailerdistrict);
  const retailerSubDistrict = useSelector((state) => state.retailersubdistrict.retailersubdistrict);
  const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

   const provinceHandler = (event) => {
    var index = event.target.selectedIndex;
    var optionElement = event.target.childNodes[index]
    var option = optionElement.getAttribute("attribute-value");
     console.log("myAttribute",option);
    setProvince(event.target.value);
    setDefaultProvinceId(option);

   }


  console.log("defaultProviceId",defaultProviceId);

  useEffect(() => {
    dispatch(eventActions.salesRepIdList(userName.countryCode));
  }, [userName.countryCode]);

  useEffect(() => {
    dispatch(eventActions.salesDistrictList(userName.countryCode));
  }, [userName.countryCode]);

  useEffect(() => {
    dispatch(eventActions.RetailerProvince(userName.countryCode));
  }, [userName.countryCode]);

  useEffect(() => {
    dispatch(eventActions.RetailerDistrict(province));
  }, [province]);

  useEffect(() => {
    dispatch(eventActions.RetailerSubDistrict(district));
  }, [district]);




  const emailRegex = /\S+@\S+\.\S+/;

  const emailValidation = (event) => {

    const myemail = event.target.value;

    if (emailRegex.test(myemail)) {
      setIsValid(true);
      setMessage('Your email looks good!');
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email!');
    }

    setEmail(myemail)

  }










  const onSubmit = () => {

    let data = {
      "accountGroup": accountGroup,
      "address": address,
      "companyCode": companyCode,
      "contactPersonDetails": {
        "email": contactPrimaryEmail,
        "firstName": contactFirstName,
        "lastName": contactLastName,
        "mobileNumber": [
          contactMobile1
        ],
        "phoneNumber": [
          contactPhone1
        ]
      },
      "country": userName.countryCode,
      "creditControlArea": creditControl,
      "customerTierStatus": customerTier,
      "distributionChannelCode": distribution,
      "district": district,
      "districtId": "string",
      "divisionCode": division,
      "email": email,
      "groupCompany": "string",
      "groupCompanyList": groupCompany,
      "id": "string",
      "inseeLifeNumber": inseeLife,
      "inseeLifePoints": inseepoint,
      "inseeUser": true,
      "latitude": latitude,
      "legalForm": legalForm,
      "longitude": longitude,
      "mobile1": mobile1,
      "mobile2": mobile2,
      "monthlyPotential": potential,
      "ownerDetails": {
        "alternateMobileNumber": [
          alernateMobile
        ],
        "birthday": ownerBirthday,
        "firstName": ownerFname,
        "lasttName": ownerLName,
        "phoneNumber": [
          "string"
        ],
        "primaryEmail": ownerEmail,
        "primaryMobileNumber": ownerPrimaryMobile1
      },
      "paymentTerm": paymentTerm,
      "pdpa": pdpa,
      "pdpaConsentDate": pdpaConstant,
      "phoneNumber": phoneNumber,
      "postalCode": postalCode,
      "province": province,
      "provinceId": defaultProviceId,
      "region": regionId,
      "retailerCode": subDealerCode,
      "retailerName": subDealerName,
      "retailerNameTH": subdealerTHName,
      "salesDistrict": salesDistrict,
      "salesOrganizationCode": salesOrgCode,
      "salesRepId": salesRepId,
      "salesRepName": salesRepName,
      "salesRepresentative": "string",
      "soldToNumberList": [soldto],
      "street": street,
      "subDealerImage": subdealerImage,
      "subDealerLogo": subdealerLogo,
      "subDistrict": subDistrict,
      "taxNumber": taxNumber,
      "thaiSmartCard": thaiSmart,
      "retailerInseeStatus": status,
      "sourceName":"Admin",
      "userName": username
    }


    console.log("myCreateRetailerData", data);
    dispatch(eventActions.createRetailerSubDealer(data));
  }





  useEffect((e) => {
    if (!!addRetailer && addRetailer.createretailersubdealer !== undefined) {
      dispatch(eventActions.retailerSubdealers(50, '', 1));
      toast.success('Retailer has been Added successfully', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/RetailerSubDealer");

    } else if (!!addRetailer && addRetailer.error) {
      toast.success(addRetailer.error, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }, [addRetailer])


  useEffect(() => {
    return () => {
      dispatch(eventActions.createRetailerSubDealer());
    }
  }, []);


  const cancelSubmit = () => {
    history.push("/RetailerSubDealer");
  }

  


  return (
    <>
      <div className="content-wrapper">
        <Header title="Add Retailer Sub Dealer" />

        <div className={"row ipad_css "  +  MyNewClass}>
          <div className="mainScroll">
            <div className="card create-lead add_contact">
              <div className="row mt-2">
                <div className="col-sm-12 col-md-12 col-lg-10">
                  <div className="form_section">
                    <div className="container-fluid">
                      <div className="">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="formBox">
                          <div>
                            <div className="row">



                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Status")} <span className="required">(*)</span></label>
                                  <select name="" id="" onChange={(event) => setStatus(event.target.value)}>
                                    <option value="Active">Active</option>
                                    <option value="inActive">InActive</option>
                                  </select>
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sold To Number")} <span className="required">(*)</span></label>
                                  <input type="text" className="form-control" 
                                  placeholder="enter valid sold to number"
                                   onChange={(event) => setSoldToNumber(event.target.value)} 
                                   required
                                 
                                   />
                                  
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">
                                  <label>{t("Account Group")} <span className="required">(*)</span></label>
                                  <input type="text" className="form-control" disabled placeholder="Enter account group" value={accountGroup} onChange={(event) => setAccountGroup(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Group Company")}</label>
                                  <div className="lead-checkbox-container mt-3 row">
                                    <div className="col-2">
                                      <input id="checkbox-1" class="checkbox-custom" name="checkbox-1" type="checkbox" value="SCCC" onChange={(event) => myGroup(event)} />
                                      <label for="checkbox-1" class="checkbox-custom-label"> &nbsp;<strong>SCCC</strong></label>
                                    </div>

                                    <div className="col-2">
                                      <input id="checkbox-1" class="checkbox-custom" name="checkbox-1" type="checkbox" value="SCCO" onChange={(event) => myGroup(event)} />
                                      <label for="checkbox-1" class="checkbox-custom-label"> &nbsp; <strong>SCCO</strong></label>
                                    </div>

                                    <div className="col-3">
                                      <input id="checkbox-1" class="checkbox-custom" name="checkbox-1" type="checkbox" value="Conwood" onChange={(event) => myGroup(event)} />
                                      <label for="checkbox-1" class="checkbox-custom-label"> &nbsp; <strong>CONWOOD</strong></label>
                                    </div>

                                    <div className="col-2">
                                      <input id="checkbox-1" class="checkbox-custom" name="checkbox-1" type="checkbox" value="ISUB" onChange={(event) => myGroup(event)} />
                                      <label for="checkbox-1" class="checkbox-custom-label"> &nbsp; <strong>ISUB</strong></label>
                                    </div>

                                    <div className="col-3">
                                      <input id="checkbox-1" class="checkbox-custom" name="checkbox-1" type="checkbox" value="IECO" onChange={(event) => myGroup(event)} />
                                      <label for="checkbox-1" class="checkbox-custom-label"> &nbsp; <strong>IECO</strong></label>
                                    </div>

                                  </div>
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sub Dealer Code")}</label>
                                  <input type="text" className="form-control" disabled placeholder="Enter code" onChange={(event) => setSubDealerCode(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sub Dealer Name")} <span className="required">(*)</span></label>
                                  <input type="text" className="form-control" 
                                  placeholder="Enter name" 
                                  onChange={(event) => setSubDealerName(event.target.value)}
                                  required/>
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sub Dealer Name(TH)")} <span className="required">(*)</span></label>
                                  <input type="text" className="form-control" 
                                  placeholder="Enter name" 
                                  onChange={(event) => setSubDealerNameTH(event.target.value)}
                                  required />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Tax Number")} <span className="required">(*)</span></label>
                                  <input type="text" 
                                  className="form-control" 
                                  placeholder="Enter tax number" onChange={(event) => setTaxNumber(event.target.value)}
                                  required />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Legal Form")} <span className="required">(*)</span></label>
                                  <select name="" id="" onChange={(event) => setLegalForm(event.target.value)} required>
                                    <option value="">Select Legal Form</option>
                                    <option value="01">Partnership</option>
                                    <option value="02">Partnership Ltd</option>
                                    <option value="03">Company Limited</option>
                                    <option value="04">Public company Ltd</option>
                                    <option value="05">Store</option>              
                                    <option value="06">Group of People</option>
                                    <option value="07">Person</option>
                                    <option value="08">Government</option>
                                   
                                  
                                  </select>
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Customer Tier Status")}</label>
                                  {/* <input type="text" className="form-control" placeholder="Enter customer tier status" onChange={(event) => setCustomerTier(event.target.value)} /> */}
                                  <select name="" id="" onChange={(event) => setCustomerTier(event.target.value)}>
                                    <option value="">Select customer tier</option>
                                    <option value="Red">Red</option>
                                    <option value="Gold">Gold</option>
                                    <option value="Silver">Silver</option>
                                    <option value="Diamond">Diamond</option>
                                    <option value="Platinum">Platinum</option>
                                  </select>
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("INSEE Life Number")}</label>
                                  <input type="text" className="form-control" placeholder="Enter insee life no." onChange={(event) => setInseeLife(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("INSEE Life Point")}</label>
                                  <input type="text" className="form-control" placeholder="Enter insee life points" onChange={(event) => setInseePoint(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Thai Smart Card")}</label>
                                  <input type="text" className="form-control" placeholder="Enter thai smart card" onChange={(event) => setThaiSmart(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Address Number")} <span className="required">(*)</span></label>
                                  <input type="text" 
                                  className="form-control" placeholder="Enter address" 
                                  onChange={(event) => setAddress(event.target.value)}
                                  required />
                                </div>
                              </div>




                              {/* <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Region Id")} <span className="required">(*)</span></label>
                                  <select name="" id="" onChange={(event) => setRegionId(event.target.value)}>
                                    <option value="">Select Region</option>
                                    {RegionId && RegionId.map((regionList) => {
                                      return (
                                        <>
                                          <option value={regionList.region}>{regionList.region}</option>
                                        </>
                                      )

                                    })}

                                  </select>
                                </div>
                              </div> */}

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Province")} <span className="required">(*)</span></label>

                                  <select name="" id="myDivID" onChange={provinceHandler} >
                                    <option value="">Select Province</option>
                                    {retailerProvinceList && retailerProvinceList.map((provinceId,index) => {
                                      return (
                                        <>
                                          <option attribute-value={provinceId.provinceId} value={provinceId.province}>{provinceId.province}</option>
                                        </>
                                      )
                                    })}

                                  </select>
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("District")} <span className="required">(*)</span></label>

                                  <select name="" id="" onChange={(event) => setDistrict(event.target.value)}>
                                    <option value="">Select District</option>
                                    {retailerDistrictList && retailerDistrictList.map((mydistrict) => {
                                      return (
                                        <>
                                          <option value={mydistrict.district}>{mydistrict.district}</option>
                                        </>
                                      )
                                    })}
                                  </select>
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sub District")} <span className="required">(*)</span></label>
                                  <select name="" id="" onChange={(event) => setSubDistrict(event.target.value)}>
                                    <option value="">Select Sub District</option>
                                    {retailerSubDistrict && retailerSubDistrict.map((list) => {
                                      return (
                                        <>
                                          <option value={list.subDistrict}>{list.subDistrict}</option>
                                        </>
                                      )
                                    })}
                                  </select>
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Street")} <span className="required">(*)</span></label>
                                  <input type="text" 
                                  className="form-control" 
                                  placeholder="Enter street" onChange={(event) => setStreet(event.target.value)}
                                  required />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Postal Code")} <span className="required">(*)</span></label>
                                  <input type="number" minlength ="0" maxlength="5" size="1"  className="form-control" placeholder="Enter postal code" onChange={(event) => PostalCodeHandler(event)} onKeyDown={(e) => ValidationHandler(e)}  required />
                                  <div className={`message ${isValidPostalCode ? 'success' : 'error'}`}> {messagePostal} </div>
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Latitude")}</label>
                                  <input type="text" className="form-control" placeholder="Enter latitude" onChange={(event) => setLatitude((event.target.value))} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Longitude")}</label>
                                  <input type="text" className="form-control" placeholder="Enter Longitude" onChange={(event) => setLongitude(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sales District")} <span className="required">(*)</span></label>

                                  <select name="" id="" onChange={(event) => setSales(event.target.value)} required >
                                    <option value="">Select District</option>
                                    {salesDistrictListId && salesDistrictListId.map((mylist) => {
                                      return (
                                        <>
                                          <option value={mylist.name}>{mylist.name}</option>
                                        </>
                                      )
                                    })}
                                  </select>
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="lead-checkbox-container mt-3 row">
                                  <div className="col-12">
                                    <input id="checkbox-6" class="checkbox-custom" name="checkbox-6" type="checkbox" onChange={(event) => setPDPA(event.target.value)} />
                                    <label for="checkbox-6" class="checkbox-custom-label"> &nbsp;<strong>PDPA</strong></label>
                                  </div>
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("PDPA Constant Date / Time")}</label>
                                  <input type="datetime-local" className="form-control" placeholder="Enter date" onChange={(event) => setPdpaConstant(event.target.value)} />
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Email Address")}</label>
                                  <input type="email" className="input" onChange={emailValidation} type="text" name={"email"} placeholder="Enter email Address" autocomplete="off" required="" />

                                  <div className={`message ${isValid ? 'success' : 'error'}`}>
                                    {message}
                                  </div>
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Phone Number")}</label>
                                  <input type="text" className="form-control" placeholder="Enter phone" onChange={(event) => setPhoneNumber(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Mobile1")} <span className="required">(*)</span></label>
                                  <input type="text" 
                                  className="form-control" placeholder="Enter mobile" 
                                  onChange={(event) => setMobile1(event.target.value)}
                                  required />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Mobile2")}</label>
                                  <input type="text" className="form-control" placeholder="Enter mobile" onChange={(event) => setMobile2(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sales Rep Id")}</label>
                                  {/* <input type="text" className="form-control" placeholder="Enter rep id"  /> */}
                                  <select name="" id="" onChange={(event) => setSalesRepId(event.target.value)}>
                                    <option value="">Select Rep id</option>
                                    {salesRepListId && salesRepListId.map((repId) => {
                                      return (
                                        <>
                                          <option value={repId.userId}>{repId.userId}</option>
                                        </>
                                      )
                                    })}

                                  </select>
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sales Rep Name")}</label>
                                  <input type="text" className="form-control" placeholder="Enter rep name" onChange={(event) => setSalesRepName(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sub Dealer Image")}</label>
                                  <input type="text" className="form-control" placeholder="upload image" onChange={(event) => setSubDealerImage(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sub Dealer Logo")}</label>
                                  <input type="text" className="form-control" placeholder="upload logo" onChange={(event) => setSubDealerLogo(event.target.value)} />
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Division Code")}</label>
                                  <input type="text" className="form-control" placeholder="enter division" onChange={(event) => setDivision(event.target.value)} />
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Distribution Channel Code")}</label>
                                  <input type="text" className="form-control" placeholder="enter channel code" onChange={(event) => setDistribution(event.target.value)} />
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sales Organization Code")}</label>
                                  <input type="text" className="form-control" placeholder="enter org code" onChange={(event) => setSalesOrgCode(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Payment Term")}</label>
                                  <input type="text" className="form-control" placeholder="enter payment term" onChange={(event) => setPaymentTerm(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Credit Control Area")}</label>
                                  <input type="text" className="form-control" placeholder="enter credit control" onChange={(event) => setCreditControl(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Company Code")}</label>
                                  <input type="text" className="form-control" placeholder="enter company code" onChange={(event) => setCompanyCode(event.target.value)} />
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Monthly Potential")}</label>
                                  <input type="text" className="form-control" placeholder="enter potential" onChange={(event) => setPotential(event.target.value)} />
                                </div>
                              </div>



                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Owner First Name")}</label>
                                  <input type="text" className="form-control" placeholder="enter owner first name" onChange={(event) => setOwnerFName(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Owner Last Name")}</label>
                                  <input type="text" className="form-control" placeholder="enter owner last name" onChange={(event) => setOwnerLName(event.target.value)} />
                                </div>
                              </div>

                              {/* <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("User Name")}</label>
                                  <input type="text" className="form-control" placeholder="enter user name" onChange={(event) => setUserName(event.target.value)} />
                                </div>
                              </div> */}


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Owner Primary Mobile Number")}</label>
                                  <input type="text" className="form-control" placeholder="enter owner mobile" onChange={(event) => setOwnerPrimaryMobile1(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Owner Alertnate Mobile Number1")}</label>
                                  <input type="text" className="form-control" placeholder="enter owner alernate mobile" onChange={(event) => setOwnerAlernateMobile(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Owner Primary Mobile Number1")}</label>
                                  <input type="text" className="form-control" placeholder="enter owner mobile1" onChange={(event) => setOwnerPrimaryMobile2(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Owner Primary Email")}</label>
                                  <input type="text" className="form-control" placeholder="enter owner email" onChange={(event) => setOwnerEmail(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Owner  Birthday")}</label>
                                  <input type="date" className="form-control" placeholder="enter owner birthday" onChange={(event) => setOwnerBirthday(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Contact FirstName")}</label>
                                  <input type="text" className="form-control" placeholder="enter contact firstname" onChange={(event) => setContactFirstName(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Contact LastName")}</label>
                                  <input type="text" className="form-control" placeholder="enter contact lastname" onChange={(event) => setContactLastName(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Contact mobile Number1")}</label>
                                  <input type="text" className="form-control" placeholder="enter contact mobile number1" onChange={(event) => setContactMobile1(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Contact phone Number1")}</label>
                                  <input type="text" className="form-control" placeholder="enter contact phone number1" onChange={(event) => setContactPhone1(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Contact mobile Number2")}</label>
                                  <input type="text" className="form-control" placeholder="enter contact mobile number2" onChange={(event) => setContactMoble2(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Contact phone Number2")}</label>
                                  <input type="text" className="form-control" placeholder="enter contact phone number2" onChange={(event) => setContactPhone2(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Contact Primary Email")}</label>
                                  <input type="email" className="form-control" placeholder="enter contact primary email" onChange={(event) => setContactPrimaryEmail(event.target.value)} />
                                </div>
                              </div>

                            </div>

                            <div className="row mt-2 mb-3">
                              <div className="col-sm-12 text-center mb-3">
                                <div className="button_popup mb-3">
                                  <input class="add-button des" type="Submit" /> 
                                  <button class="lightgrey_btn des" onClick={cancelSubmit} style={cancleStyle}> {t("Cancel")}</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-3 col-md-12 col-sm-12 col-xs-12">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default withTranslation()(AddRetailerSubDealer);
