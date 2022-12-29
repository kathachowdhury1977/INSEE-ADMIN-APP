import React, { useEffect, useState } from "react";
import { withTranslation, useTranslation } from "react-i18next";
import { eventActions } from "../../../_actions";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import { useLocation } from "react-router-dom";
import "../ExternalManagment/AccountContactForm.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RetailerCheckbox from "../../../components/RetailerCheckbox/RetailerCheckbox";



const cancleStyle = {
  marginleft: "3%",
};
const imgwidth = {
  width: "100%",
};
let fileObj = [];
let fileArray = [];

function UpdateRetailerSubDealer(props) {
  const location = useLocation();
  let userName = localStorage.getItem('userData');
  userName = JSON.parse(userName);
  const { id } = location.state;
  const event = useSelector((state) => state);
  const [file, setFile] = React.useState(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  let history = useHistory();
  const autoRetailerField = useSelector((state) => state.retailerautofield.retailerautofield);
  const mymultiList = useSelector((state) => state.selectmulticheckbox.selectmulticheckbox);
  console.log("autoRetailerField",autoRetailerField);

  const [soldto, setSoldToNumber] = React.useState('');
  const [accountGroup, setAccountGroup] = React.useState('ZSUB');
  const [subDealerCode, setSubDealerCode] = React.useState("");
  const [subDealerName, setSubDealerName] = React.useState("");
  const [taxNumber, setTaxNumber] = React.useState("");
  const [legalForm, setLegalForm] = React.useState("");
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
  const [usernameID, setUserName] = React.useState("");
  const [division, setDivision] = React.useState("");
  const [distribution, setDistribution] = React.useState("");
  const [salesOrgCode, setSalesOrgCode] = React.useState("");
  const [paymentTerm, setPaymentTerm] = React.useState("");
  const [creditControl, setCreditControl] = React.useState("");
  const [companyCode, setCompanyCode] = React.useState("");
  const [alernateMobile, setOwnerAlernateMobile] = React.useState("");
  const [ownerLName, setOwnerLName] = React.useState("");
  const [subdealerTHName, setSubDealerNameTH] = React.useState("");



  const updateRetailer = useSelector((state) => state.updateretailerlist);



  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  const salesRepListId = useSelector((state) => state.salesrepidlist.salesrepidlist);
  const salesDistrictListId = useSelector((state) => state.salesdistrictlist.salesdistrictlist);
  const retailerProvinceList = useSelector((state) => state.retailerprovince.retailerprovince);
   const retailerDistrictList = useSelector((state) => state.retailerdistrict.retailerdistrict);
  const retailerSubDistrict = useSelector((state) => state.retailersubdistrict.retailersubdistrict);
  const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


  useEffect(() => {
    dispatch(eventActions.salesRepIdList(userName.countryCode));
  }, [userName.countryCode]);

  useEffect(() => {
    dispatch(eventActions.salesDistrictList(userName.countryCode));
  }, [userName.countryCode]);

  useEffect(() => {
    dispatch(eventActions.RegionList(userName.countryCode));
  }, [userName.countryCode]);


  useEffect(() => {
    dispatch(eventActions.RetailerProvince());
  }, []);


  useEffect(() => {
    dispatch(eventActions.RetailerDistrict(province ? province : autoRetailerField && autoRetailerField.province));
  }, [province ? province : autoRetailerField && autoRetailerField.province]);


  useEffect(() => {
    dispatch(eventActions.RetailerSubDistrict(district ? district : autoRetailerField && autoRetailerField.district));
  }, [district ? district : autoRetailerField && autoRetailerField.district]);



  useEffect(() => {
    dispatch(eventActions.retailerAutoField(id));
  }, []);

  console.log("autoRetailerField", autoRetailerField && autoRetailerField);



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



  const [status, setStatus] = React.useState(autoRetailerField && autoRetailerField.retailerInseeStatus);






  const handleSubmit = () => {
    debugger

    let data = {
      "accountGroup": accountGroup ? accountGroup : autoRetailerField && autoRetailerField.accountGroup,
      "address": address ? address : autoRetailerField && autoRetailerField.address,
      "companyCode": companyCode ? companyCode : autoRetailerField && autoRetailerField.companyCode,
      "contactPersonDetails": {
        "email": contactPrimaryEmail ? contactPrimaryEmail : autoRetailerField && autoRetailerField.contactPersonDetails.email,
        "firstName": contactFirstName ? contactFirstName : autoRetailerField && autoRetailerField.contactPersonDetails.firstName,
        "lastName": contactLastName ? contactLastName : autoRetailerField && autoRetailerField.contactPersonDetails.lastName,
        "mobileNumber": [
          contactMobile1 ? contactMobile1 : autoRetailerField && autoRetailerField.contactPersonDetails.mobileNumber[0],
        ],
        "phoneNumber": [
          contactPhone1 ? contactPhone1 : autoRetailerField && autoRetailerField.contactPersonDetails.phoneNumber[0],
        ]
      },
      "country": userName.countryCode,
      "creditControlArea": creditControl ? creditControl : autoRetailerField && autoRetailerField.creditControlArea,
      "customerTierStatus": customerTier ? customerTier : autoRetailerField && autoRetailerField.customerTierStatus,
      "distributionChannelCode": distribution ? distribution : autoRetailerField && autoRetailerField.distributionChannelCode,
      "district": district ? district : autoRetailerField && autoRetailerField.district,
      "districtId": "string",
      "divisionCode": division ? division : autoRetailerField && autoRetailerField.divisionCode,
      "email": email ? email : autoRetailerField && autoRetailerField.email,
      "groupCompany": "string",
      "groupCompanies" : mymultiList,
      "groupCompanyList": [],
      "id": autoRetailerField && autoRetailerField.id,
      "inseeLifeNumber": inseeLife ? inseeLife : autoRetailerField && autoRetailerField.inseeLifeNumber,
      "inseeLifePoints": inseepoint ? inseepoint : autoRetailerField && autoRetailerField.inseeLifePoints,
      "inseeUser": true,
      "latitude": latitude ? latitude : autoRetailerField && autoRetailerField.latitude,
      "legalForm": legalForm ? legalForm : autoRetailerField && autoRetailerField.legalForm,
      "longitude": longitude ? longitude : autoRetailerField && autoRetailerField.longitude,
      "mobile1": mobile1 ? mobile1 : autoRetailerField && autoRetailerField.mobile1,
      "mobile2": mobile2 ? mobile2 : autoRetailerField && autoRetailerField.mobile,
      "monthlyPotential": potential ? potential : autoRetailerField && autoRetailerField.monthlyPotential,
      "ownerDetails": {
        "alternateMobileNumber": [
          alernateMobile ? alernateMobile : autoRetailerField && autoRetailerField.ownerDetails.alternateMobileNumber[0],
        ],
        "birthday": ownerBirthday ? ownerBirthday : autoRetailerField && autoRetailerField.ownerDetails.birthday,
        "firstName": ownerFname ? ownerFname : autoRetailerField && autoRetailerField.ownerDetails.firstName,
        "lasttName": ownerLName ? ownerLName : autoRetailerField && autoRetailerField.ownerDetails.lasttName,
        "phoneNumber": [
          "string"
        ],
        "primaryEmail": ownerEmail ? ownerEmail : autoRetailerField && autoRetailerField.ownerDetails.primaryEmail,
        "primaryMobileNumber": ownerPrimaryMobile1 ? ownerPrimaryMobile1 : autoRetailerField && autoRetailerField.ownerDetails.primaryMobileNumber,
      },
      "paymentTerm": paymentTerm ? paymentTerm : autoRetailerField && autoRetailerField.paymentTerm,
      "pdpa": pdpa,
      "pdpaConsentDate": pdpaConstant ? pdpaConstant : autoRetailerField && autoRetailerField.pdpaConsentDate,
      "phoneNumber": phoneNumber ? phoneNumber : autoRetailerField && autoRetailerField.phoneNumber,
      "postalCode": postalCode ? postalCode : autoRetailerField && autoRetailerField.postalCode,
      "province": province ? province : autoRetailerField && autoRetailerField.province,
      "provinceId": "string",
      "region": regionId ? regionId : autoRetailerField && autoRetailerField.region,
      "retailerCode": subDealerCode ? subDealerCode : autoRetailerField && autoRetailerField.retailerCode,
      "retailerName": subDealerName ? subDealerName : autoRetailerField && autoRetailerField.retailerName,
      "retailerNameTH": subdealerTHName ? subdealerTHName : autoRetailerField && autoRetailerField.retailerNameTH,
      "salesDistrict": salesDistrict ? salesDistrict : autoRetailerField && autoRetailerField.salesDistrict,
      "salesOrganizationCode": salesOrgCode ? salesOrgCode : autoRetailerField && autoRetailerField.salesOrganizationCode,
      "salesRepId": salesRepId ? salesRepId : autoRetailerField && autoRetailerField.salesRepId,
      "salesRepName": salesRepName ? salesRepName : autoRetailerField && autoRetailerField.salesRepName,
      "salesRepresentative": "string",
      "soldToNumberList": [soldto],
      "street": street ? street : autoRetailerField && autoRetailerField.street,
      "subDealerImage": subdealerImage ? subdealerImage : autoRetailerField && autoRetailerField.subDealerImage,
      "subDealerLogo": subdealerLogo ? subdealerLogo : autoRetailerField && autoRetailerField.subDealerLogo,
      "subDistrict": subDistrict ? subDistrict : autoRetailerField && autoRetailerField.subDistrict,
      "taxNumber": taxNumber,
      "thaiSmartCard": thaiSmart ? thaiSmart : autoRetailerField && autoRetailerField.thaiSmartCard,
      "retailerInseeStatus": status ? status : autoRetailerField && autoRetailerField.retailerInseeStatus,
      "userName": usernameID ? usernameID : autoRetailerField && autoRetailerField.userName,
    }

    console.log("myCreateRetailerData", data);
   dispatch(eventActions.updateRetailerList(data));
  }



  useEffect((e) => {
    if (!!updateRetailer && updateRetailer.updateretailerlist !== undefined) {
      dispatch(eventActions.retailerSubdealers(50, '', 1));
      toast.success('Retailer has been updated successfully', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/RetailerSubDealer");

    } else if (!!updateRetailer && updateRetailer.error) {
      toast.success(updateRetailer.error, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }, [updateRetailer])


  useEffect(() => {
    return () => {
      dispatch(eventActions.updateRetailerList());
      dispatch(eventActions.retailerAutoField(id));
    }
  }, []);


  const cancelSubmit = () => {
    history.push("/RetailerSubDealer");
  }



  return (
    <>
      <div className="content-wrapper">
        <Header title="Update Retailer Sub Dealer" />

        <div className={"row ipad_css "  +  MyNewClass}>
          <div className="mainScroll">
            <div className="card create-lead add_contact">
              <div className="row mt-2">
                <div className="col-sm-12 col-md-12 col-lg-10">
                  <div className="form_section">
                    <div className="container-fluid">
                      <div className="">
                        <div className="formBox">
                          <div>
                            <div className="row">

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Status")}</label>
                                  <select name="" id="" value={status ? status : (autoRetailerField && autoRetailerField.retailerInseeStatus) || ''} onChange={(event) => setStatus(event.target.value)}>
                                    <option value="Active">Active</option>
                                    <option value="InActive">InActive</option>
                                  </select>
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sold To Number")} <span className="required">(*)</span></label>
                                  <input type="text" className="form-control" defaultValue={autoRetailerField && autoRetailerField.soldToNumber} placeholder="enter valid sold to number" onChange={(event) => setSoldToNumber(event.target.value)} />
                                </div>
                              </div>



                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">
                                  <label>{t("Account Group")} <span className="required">(*)</span></label>
                                  <input type="text" className="form-control" defaultValue={autoRetailerField && autoRetailerField.accountGroup} value={accountGroup} disabled placeholder="Enter account group" onChange={(event) => setAccountGroup(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Group Company")}</label>
                                 <RetailerCheckbox handleSubmit={handleSubmit} autoRetailerField={autoRetailerField && autoRetailerField} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sub Dealer Code")}</label>
                                  <input type="text" className="form-control" defaultValue={autoRetailerField && autoRetailerField.retailerCode} disabled placeholder="Enter code" onChange={(event) => setSubDealerCode(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sub Dealer Name")} <span className="required">(*)</span></label>
                                  <input type="text" className="form-control" defaultValue={autoRetailerField && autoRetailerField.retailerName} placeholder="Enter name" onChange={(event) => setSubDealerName(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sub Dealer Name(TH)")} <span className="required">(*)</span></label>
                                  <input type="text" className="form-control" defaultValue={autoRetailerField && autoRetailerField.retailerNameTH} placeholder="Enter name" onChange={(event) => setSubDealerNameTH(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Tax Number")} <span className="required">(*)</span></label>
                                  <input type="text" className="form-control" defaultValue={autoRetailerField && autoRetailerField.taxNumber} placeholder="Enter tax number" onChange={(event) => setTaxNumber(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Legal Form")} <span className="required">(*)</span></label>
                                  <select name="" id="" value={legalForm ? legalForm : (autoRetailerField && autoRetailerField.legalForm) || ''} onChange={(event) => setLegalForm(event.target.value)}>
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
                                  {/* <input type="text" defaultValue={autoRetailerField && autoRetailerField.customerTierStatus} className="form-control" placeholder="Enter customer tier status" onChange={(event) => setCustomerTier(event.target.value)} /> */}
                                  <select name="" id="" value = {customerTier ? customerTier : (autoRetailerField && autoRetailerField.customerTierStatus) || ''} onChange={(event) => setCustomerTier(event.target.value)}>
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
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.inseeLifeNumber} className="form-control" placeholder="Enter insee life no." onChange={(event) => setInseeLife(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("INSEE Life Point")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.inseeLifePoints} className="form-control" placeholder="Enter insee life points" onChange={(event) => setInseePoint(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Thai Smart Card")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.thaiSmartCard} className="form-control" placeholder="Enter thai smart card" onChange={(event) => setThaiSmart(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Address Number")} <span className="required">(*)</span></label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.address} className="form-control" placeholder="Enter address" onChange={(event) => setAddress(event.target.value)} />
                                </div>
                              </div>




                            

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Province ID")} <span className="required">(*)</span></label>
                                 
                                  <select name="" id="" value={!!province ? province : autoRetailerField && autoRetailerField.province} onChange={(event) => setProvince(event.target.value)}>
                                    <option value="">Select Province</option>
                                    {retailerProvinceList && retailerProvinceList.map((provinceId) => {
                                      return (
                                        <>
                                          <option value={provinceId.province}>{provinceId.province}</option>
                                        </>
                                      )
                                    })}

                                  </select>
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("District")} <span className="required">(*)</span></label>

                                  <select name="" id="" value={district ? district : (autoRetailerField && autoRetailerField.district) || ''} onChange={(event) => setDistrict(event.target.value)}>
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
                                  <select name="" id="" value={subDistrict ? subDistrict : (autoRetailerField && autoRetailerField.subDistrict) || ''} onChange={(event) => setSubDistrict(event.target.value)}>
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
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.street} className="form-control" placeholder="Enter street" onChange={(event) => setStreet(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Postal Code")} <span className="required">(*)</span></label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.postalCode} className="form-control" placeholder="Enter postal code" onChange={(event) => setPostalCode(event.target.value)} />
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Latitude")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.latitude} className="form-control" placeholder="Enter latitude" onChange={(event) => setLatitude((event.target.value))} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Longitude")}</label>
                                  <input type="text" className="form-control" defaultValue={autoRetailerField && autoRetailerField.longitude} placeholder="Enter Longitude" onChange={(event) => setLongitude(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">
                                  <label>{t("Sales District")} <span className="required">(*)</span></label>

                                  <select name="" id="" value={salesDistrict ? salesDistrict : (autoRetailerField && autoRetailerField.salesDistrict) || ''} onChange={(event) => setSales(event.target.value)} >
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
                                  <input type="datetime-local" defaultValue={autoRetailerField && autoRetailerField.pdpaConsentDate} className="form-control" placeholder="Enter date" onChange={(event) => setPdpaConstant(event.target.value)} />
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Email Address")}</label>
                                  <input type="email" className="input" defaultValue={autoRetailerField && autoRetailerField.email} onChange={emailValidation} type="text" name={"email"} placeholder="Enter email Address" autocomplete="off" required="" />

                                  <div className={`message ${isValid ? 'success' : 'error'}`}>
                                    {message}
                                  </div>
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Phone Number")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.phoneNumber} className="form-control" placeholder="Enter phone" onChange={(event) => setPhoneNumber(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Mobile1")} <span className="required">(*)</span></label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.mobile1} className="form-control" placeholder="Enter mobile" onChange={(event) => setMobile1(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Mobile2")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.mobile2} className="form-control" placeholder="Enter mobile" onChange={(event) => setMobile2(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sales Rep Id")}</label>
                                  {/* <input type="text" className="form-control" placeholder="Enter rep id"  /> */}
                                  <select name="" id="" value={salesRepId ? salesRepId : (autoRetailerField && autoRetailerField.salesRepId) || ''} onChange={(event) => setSalesRepId(event.target.value)}>
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
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.salesRepName} className="form-control" placeholder="Enter rep name" onChange={(event) => setSalesRepName(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sub Dealer Image")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.subDealerImage} className="form-control" placeholder="upload image" onChange={(event) => setSubDealerImage(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sub Dealer Logo")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.subDealerLogo} className="form-control" placeholder="upload logo" onChange={(event) => setSubDealerLogo(event.target.value)} />
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Division Code")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.divisionCode} className="form-control" placeholder="enter division" onChange={(event) => setDivision(event.target.value)} />
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Distribution Channel Code")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.distributionChannelCode} className="form-control" placeholder="enter channel code" onChange={(event) => setDistribution(event.target.value)} />
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Sales Organization Code")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.salesOrganizationCode} className="form-control" placeholder="enter org code" onChange={(event) => setSalesOrgCode(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Payment Term")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.paymentTerm} className="form-control" placeholder="enter payment term" onChange={(event) => setPaymentTerm(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Credit Control Area")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.creditControlArea} className="form-control" placeholder="enter credit control" onChange={(event) => setCreditControl(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Company Code")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.companyCode} className="form-control" placeholder="enter company code" onChange={(event) => setCompanyCode(event.target.value)} />
                                </div>
                              </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Monthly Potential")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.monthlyPotential} className="form-control" placeholder="enter potential" onChange={(event) => setPotential(event.target.value)} />
                                </div>
                              </div>



                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Owner First Name")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.ownerDetails.firstName} className="form-control" placeholder="enter owner first name" onChange={(event) => setOwnerFName(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Owner Last Name")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.ownerDetails.lasttName} className="form-control" placeholder="enter owner last name" onChange={(event) => setOwnerLName(event.target.value)} />
                                </div>
                              </div>


                              {/* <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("User Name")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.userName} className="form-control" placeholder="enter user name" onChange={(event) => setUserName(event.target.value)} />
                                </div>
                              </div> */}


                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Owner Primary Mobile Number")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.ownerDetails.primaryMobileNumber} className="form-control" placeholder="enter owner mobile" onChange={(event) => setOwnerPrimaryMobile1(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Owner Alertnate Mobile Number1")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.ownerDetails.alternateMobileNumber[0]} className="form-control" placeholder="enter owner alernate mobile" onChange={(event) => setOwnerAlernateMobile(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Owner Primary Mobile Number1")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.ownerDetails.phoneNumber[0]} className="form-control" placeholder="enter owner mobile1" onChange={(event) => setOwnerPrimaryMobile2(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Owner Primary Email")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.ownerDetails.primaryEmail} className="form-control" placeholder="enter owner email" onChange={(event) => setOwnerEmail(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Owner  Birthday")}</label>
                                  <input type="date" defaultValue={autoRetailerField && autoRetailerField.ownerDetails.birthday} className="form-control" placeholder="enter owner birthday" onChange={(event) => setOwnerBirthday(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Contact FirstName")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.contactPersonDetails.firstName} className="form-control" placeholder="enter contact firstname" onChange={(event) => setContactFirstName(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Contact LastName")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.contactPersonDetails.lastName} className="form-control" placeholder="enter contact lastname" onChange={(event) => setContactLastName(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Contact mobile Number1")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.contactPersonDetails.mobileNumber[0]} className="form-control" placeholder="enter contact mobile number1" onChange={(event) => setContactMobile1(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Contact phone Number1")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.contactPersonDetails.phoneNumber[0]} className="form-control" placeholder="enter contact phone number1" onChange={(event) => setContactPhone1(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">
                                  <label>{t("Contact mobile Number2")}</label>
                                  <input type="text" defaultValue={autoRetailerField && autoRetailerField.contactPersonDetails.mobileNumber[0]} className="form-control" placeholder="enter contact mobile number2" onChange={(event) => setContactMoble2(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">
                                  <label>{t("Contact phone Number2")}</label>
                                  <input type="text" className="form-control" placeholder="enter contact phone number2" onChange={(event) => setContactPhone2(event.target.value)} />
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Contact Primary Email")}</label>
                                  <input type="email" defaultValue={autoRetailerField && autoRetailerField.contactPersonDetails.email} className="form-control" placeholder="enter contact primary email" onChange={(event) => setContactPrimaryEmail(event.target.value)} />
                                </div>
                              </div>

                            </div>

                            <div className="row mt-2 mb-3">
                              <div className="col-sm-12 text-center mb-3">
                                <div className="button_popup mb-3">
                                  <button class="add-button des" onClick={handleSubmit}> {t("Save")} </button>
                                  <button class="lightgrey_btn des" style={cancleStyle} onClick={cancelSubmit}> {t("Cancel")}</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default withTranslation()(UpdateRetailerSubDealer);
