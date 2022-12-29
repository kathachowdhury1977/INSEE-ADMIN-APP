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


const cancleStyle = {
  marginleft: "3%",
};
const imgwidth = {
  width: "100%",
};
let fileObj = [];
let fileArray = [];

function AddRetailerContactForm(props) {

   let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

  const event = useSelector((state) => state);
  const [file, setFile] = React.useState(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  let history = useHistory();
 
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [userid, setUserId] = React.useState("");
  const [alternatmobile, setAlternateMobile] = React.useState("");
  const [phonenumber, setPhoneNumber] = React.useState("");  
  const [email, setEmail] = React.useState("");
  const [nickname, setNickName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [dateofbirth, setDateofBirth] = React.useState("");
  const [age, setAge] = React.useState("");
  const [relation, setRelation] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [whatsapp, setWhatsApp] = React.useState("");
  const [zolo, setZolo] = React.useState("");
  const [line, setLine] = React.useState("");
  const [education, setEducation] = React.useState("");
  const [major, setMajor] = React.useState("");
  const [institution, setInstitution] = React.useState("");
  const [marital, setMarital] = React.useState("");
  const [handicap, setHandicap] = React.useState(false);
  const [food, setFood] = React.useState("");
  const [drink, setDrink] = React.useState("");
  const [diet, setDiet] = React.useState("");
  const [sport, setSport] = React.useState("");
  const [decision, setDecision] = React.useState(false);
  const [influncer, setInfluncer] = React.useState(false);
  const [upload, setUpload] = React.useState("");
  const [country, setCountry] = React.useState("TH");
  const [favirate, setFavarite] = React.useState("");
  const [salutation, setSalutation] = React.useState("");
  const location = useLocation();

  const { retailerCode } = location.state;
  const { retailerName } = location.state;

  const togglebutton = useSelector((state) => state.checkboxtoggle.checkboxtoggle);
  const retaileraddaccount = useSelector((state) => state.retaileraccountformdata);
  const productselectid = useSelector((state) => state.productselectid.productselectid);
  const Shiptoselectid = useSelector((state) => state.shiptoselectid.shiptoselectid);
  const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


  console.log("Shiptoselectid++++",Shiptoselectid);

  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
   



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

  console.log("myemail", email);



  useEffect(() => {
    dispatch(eventActions.CheckboxToggle(
      {
        "handicap": handicap,
      }
    ));
  }, [handicap]);



  const fileHandler = (e) => {
    setFile(e.target.files[0]);
  };

  function uploadMultipleFiles(e) {
    setUpload(e.target.files[0]);
    console.log("upload image", e.target.files[0]);
  }

  function deleteMultipleFiles(e) {
    console.log(fileObj, "fileObjfileObj");
    var index = fileArray.indexOf(e.target.id);
    console.log(index, "index");
    if (index > -1) {
      fileArray.splice(index, 1);
      fileObj.splice(index, 1);
      console.log(fileArray, "fileArray");
    }

    setFile({ file: fileArray });
  }

  const handleSubmit = () => {

    if (dateofbirth && dateofbirth !== null) {
      var dob = dateofbirth && dateofbirth;
    }
    else {
      var dob = null
    }
    let productData = {
      "age": age,
      "alternateMobileNumber": alternatmobile,
      "confirmedDate": "string",
      "contactImage": "string",
      "dob": dob,
      "decisionMaker": true,
      "dietaryLimitaion": diet,
      "education": education,
      "emailId": email,
      "favSports": sport,
      "firstName": fname,
      "gender": gender,
      "handicaped": togglebutton && togglebutton.handicap ? "Yes" : "No",
      "influencer": true,
      "inseeUser": true,
      "institution": institution,
      "lastName": lname,
      "lineId": line,
      "major": major,
      "maritalStatus": marital,
      "nickName": nickname,
      "nonPreferedDrink": drink,
      "nonPreferedFood": food,
      "phoneNumber": phonenumber,
      'countryCode': country,
      "position": position,
      "primaryMobileNumber": "string",
      "relation": relation,
      "retailerCode": retailerCode,
      "whatsAppId": whatsapp,
      "userId": userid,
      "salutation":salutation,
      "favFood":favirate,
      "zoloId": zolo
    }


    console.log("account data form", productData);

    dispatch(eventActions.RetailerAccountFormData(productData, userid, upload));
    // 
    // window.location.reload();
  }




  useEffect(() => {
    if (!!retaileraddaccount && retaileraddaccount.retaileraccountformdata !== undefined) {
        dispatch(eventActions.retailerAllContactList(retailerCode, ''));
      toast.success('Retailer Contact has been Added successfully', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/RetailerDetailList", {retailerCode, retailerName});

    } else if (!!retaileraddaccount && retaileraddaccount.error) {
      toast.success(retaileraddaccount.error, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }, [retaileraddaccount])


  useEffect(() => {
    return () => {
      dispatch(eventActions.RetailerAccountFormData());
    }
  }, []);

  const cancelSubmit = () => {
    history.push("/RetailerDetailList", {retailerCode, retailerName});
  }



  return (
    <>
      <div className="content-wrapper">
        <Header title="Add Retailer Contact" />

        <div className={"row ipad_css " + MyNewClass}>
          <div className="mainScroll">
            <div className="card create-lead add_contact">

              <div className="">
                <div className="col-12 account-head">
                  <div className="header_head">
                    <h6>Retailer Code<br />
                      <span className="account_dt text-danger">{retailerCode}</span>
                    </h6>

                    <h6 className="">
                      Retailer Name<br />
                      <span className="account_dt text-danger">{retailerName}</span>
                    </h6>
                  </div>

                </div>
              </div>

              <div className="row mt-2">
                <div className="col-sm-12 col-md-12 col-lg-8">
                  <div className="form_section">
                    <div className="container-fluid">
                      <div className="">
                        <div className="formBox">
                          <div>
                            <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">
                                  <label>{t("Salutation")}</label>
                                   <select name="" id="" onChange={(event) => setSalutation(event.target.value)}>
                                   <option value="">Select</option>
                                     <option value="MR">MR</option>
                                     <option value="MRS">MRS</option>
                                     <option value="MS">MS</option>
                                   </select>
                                </div>
                              </div>

                              <div className="col-xl-5 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">
                                  <label>{t("First Name")}</label>
                                  <input className="input" type="text" name={"fname"} onChange={event => setFname(event.target.value)} className="form-control" placeholder="Enter First Name" />
                                </div>
                              </div>
                              <div className="col-xl-5 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Last Name")}</label>
                                  <input className="input" type="text" name={"lname"} onChange={event => setLname(event.target.value)} className="form-control" placeholder="Enter Last Name" />
                                </div>
                              </div>


                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">

                                  <label>
                                    {t("User Name")}
                                  </label>
                                  <input className="input" type="text" name={"username"} onChange={event => setUserId(event.target.value)} className="form-control" placeholder="Enter User Name" />

                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Mobile Number")}</label>
                                  <input className="input" type="text" name={"alternatmobile"} onChange={event => setAlternateMobile(event.target.value)} className="form-control" placeholder="Enter mobile" />
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Phone Number")}</label>
                                  <input className="input" type="text" name={"phonenumber"} onChange={event => setPhoneNumber(event.target.value)} className="form-control" placeholder="Enter phone number" />
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Email Address")}</label>
                                  <input type="email" className="input" onChange={emailValidation} type="text" name={"email"} placeholder="Enter email Address" autocomplete="off" required="" />
                                  {/* <input type="email" className="input" className="form-control" onChange={event => setEmail(event.target.value)} type="text" name={"email"} placeholder="Enter email Address" autocomplete="off" required="" /> */}
                                  <div className={`message ${isValid ? 'success' : 'error'}`}>
                                    {message}
                                  </div>
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>
                                    {t("Country")}
                                  </label>

                                  <select name="" id="" onChange={event => setCountry(event.target.value)}>
                                    <option value="TH">TH</option>
                                    <option value="LK">LK</option>
                                    <option value="VN">VN</option>
                                  </select>

                                </div>
                              </div>


                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="col-sm-12">
                                  <div className="inputBox mt-5">
                                    <input type="file"
                                      id="upload"
                                      onChange={uploadMultipleFiles}

                                    />
                                  </div>
                                </div>
                              </div>




                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">
                                  <label>{t("Nick Name")}</label>
                                  <input className="input" type="text" name={"nickname"} onChange={event => setNickName(event.target.value)} className="form-control" placeholder="Enter Name" />
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">
                                  <label>
                                    {t("Gender")}
                                  </label>
                                  <select name={"gender"} onChange={event => setGender(event.target.value)} >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                  </select>


                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>
                                    {t("Date of Birth")}
                                  </label>
                                  <input className="input" type="date" name={"dateofbirth"} onChange={event => setDateofBirth(event.target.value)} className="form-control" placeholder="Enter Date of Birth" />
                                </div>
                              </div>


                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>
                                    {t("Position")}
                                  </label>
                                  <select name={"position"} onChange={event => setPosition(event.target.value)}  >
                                    <option value="">Select Position</option>
                                    <option value="Owner">CEO</option>
                                    <option value="Owner">Owner</option>
                                    <option value="Executive Board">Executive Board</option>
                                    <option value="President">President</option>
                                    <option value="CFO">CFO</option>
                                    <option value="SVP/VP">SVP/VP</option>
                                    <option value="Director">Director</option>
                                    <option value="MD">MD</option>
                                    <option value="GM">GM</option>
                                    <option value="Sales & Marketing Manager">Sales & Marketing Manager</option>
                                    <option value="Procurement Manager">Procurement Manager</option>
                                    <option value="Logistic Manager">Logistic Manager</option>
                                    <option value="Finance & Accounting Manager">Finance & Accounting Manager</option>
                                    <option value="HR Manager">HR Manager</option>
                                    <option value="IT Manager">IT Manager</option>
                                    <option value="Admin Manager">Admin Manager</option>
                                    <option value="Head Of Engineer">Head Of Engineer</option>
                                    <option value="Sales Representative">Sales Representative</option>
                                    <option value="Marketing Officer">Marketing Officer</option>
                                    <option value="Procurement Officer">Procurement Officer</option>
                                    <option value="Logistic Officer">Logistic Officer</option>
                                    <option value="Finance & Accounting  Officer">Finance & Accounting  Officer</option>
                                    <option value="HR Officer">HR Officer</option>
                                    <option value="Admin Officer">Admin Officer</option>
                                    <option value="Engineer">Engineer </option>
                                    <option value="Secretary">Secretary</option>
                                    <option value="Call Center Agent">Call Center Agent</option>
                                    <option value="IT Officer">IT Officer</option>
                                  </select>
                                </div>
                              </div>


                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">
                                  <label>{t("Relation")}</label>
                                  <select name={"relation"} onChange={event => setRelation(event.target.value)} >
                                    <option value="">Select Relation</option>
                                    <option value="Owner">Owner</option>
                                    <option value="Family">Family</option>
                                    <option value="Staff">Staff</option>
                                  </select>
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="lead-checkbox-container mt-3">
                                  <div>
                                    <input id="checkbox-1" class="checkbox-custom" name="checkbox-1" type="checkbox" onChange={event => setDecision(!decision)} />
                                    <label for="checkbox-1" class="checkbox-custom-label"> &nbsp;<strong>Decision Maker</strong></label>
                                  </div>

                                  <div>
                                    <input id="checkbox-2" class="checkbox-custom" name="checkbox-2" type="checkbox" onChange={event => setInfluncer(!influncer)} />
                                    <label for="checkbox-2" class="checkbox-custom-label"> &nbsp; <strong>Influencer</strong></label>
                                  </div>

                                </div>
                              </div>
{/* 
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="lead-checkbox-container mt-3">

                                  <div>
                                    <input id="checkbox-2" class="checkbox-custom" name="checkbox-2" type="checkbox" onChange={event => setInfluncer(!influncer)} />
                                    <label for="checkbox-2" class="checkbox-custom-label"> &nbsp; <strong>Influencer</strong></label>
                                  </div>
                                </div>
                              </div> */}

                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>
                                    {t("Social IDs")}
                                  </label>
                                  <div className="row">
                                    <div className="col-4">
                                      <input className="input" type="text" name={"whatsapp"} onChange={event => setWhatsApp(event.target.value)} className="form-control" placeholder="Enter What's app id" />
                                    </div>
                                    <div className="col-4">
                                      <input className="input" type="text" name={"zolo"} onChange={event => setZolo(event.target.value)} className="form-control" placeholder="Enter zolo id" />
                                    </div>
                                    <div className="col-4">
                                      <input className="input" type="text" name={"line"} onChange={event => setLine(event.target.value)} className="form-control" placeholder="Enter line id" />
                                    </div>
                                  </div>

                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">
                                  <label>{t("Highest Education")}</label>

                                  <select name={"Education"} onChange={event => setEducation(event.target.value)}>
                                    <option value="">Select Education</option>
                                    <option value="Doctorate">Doctorate</option>
                                    <option value="Master Degree">Master Degree</option>
                                    <option value="Bachelor Degree">Bachelor Degree</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="Certificate">Certificate</option>
                                    <option value="High School">High School</option>
                                    <option value="Studying">Studying</option>
                                  </select>
                                </div>


                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>
                                    {t("Major")}
                                  </label>
                                  <input className="input" type="text" name={"major"} onChange={event => setMajor(event.target.value)} className="form-control" placeholder="Enter Major" />
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>
                                    {t("Favourite Food")}
                                  </label>
                                  <input className="input" type="text" name={"FavouriteFood"} onChange={event => setFavarite(event.target.value)} className="form-control" placeholder="Enter Favourite Food" />
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">
                                  <label>{t("Institution")}</label>
                                  <input className="input" type="text" name={"institution"} onChange={event => setInstitution(event.target.value)} className="form-control" placeholder="Enter institution" />
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">
                                  <label>{t("Marital Status")}</label>
                                  <select name={"marital"} onChange={event => setMarital(event.target.value)} >
                                    <option value="">Select Marital</option>
                                    <option value="Married">Married</option>
                                    <option value="Unmarried">Unmarried</option>
                                  </select>
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">
                                  <label>{t("Handicap")}</label>
                                  <div>
                                    <input id="checkbox-3" class="checkbox-custom" name="checkbox-1" type="checkbox" onChange={event => setHandicap(!handicap)} />
                                    <label for="checkbox-3" class="checkbox-custom-label">  &nbsp; <strong>Handicap</strong></label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>
                                    {t("Not Preferred Food")}
                                  </label>
                                  <input className="input" type="text" name={"food"} onChange={event => setFood(event.target.value)} className="form-control" placeholder="Enter Food" />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>
                                    {t("Not Preferred Drink")}
                                  </label>
                                  <input className="input" type="text" name={"drink"} onChange={event => setDrink(event.target.value)} className="form-control" placeholder="Enter Drink" />
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>
                                    {t("Dietary Limitation")}
                                  </label>
                                  <input className="input" type="text" name={"Diet"} onChange={event => setDiet(event.target.value)} className="form-control" placeholder="Enter Dieatry" />
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>
                                    {t("Favorite Sports")}
                                  </label>
                                  <input className="input" type="text" name={"sport"} onChange={event => setSport(event.target.value)} className="form-control" placeholder="Enter Sports" />
                                </div>
                              </div>


                            </div>

                            <div className="row mt-2 mb-3">
                              <div className="col-sm-12 text-center mb-3">
                                <div className="button_popup mb-3">
                                  <button class="add-button des" onClick={handleSubmit}> {t("Save")} </button>
                                  <button class="lightgrey_btn des" onClick={cancelSubmit} style={cancleStyle}> {t("Cancel")}</button>
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
                  <div className="row mt-5 contact_upload_image">
                     {/* <div className="section-item">
                      <div className="col-sm-12 col-md-12 sec_details extra-soldto form_section">
                        {

                          (country === "VN" && relation === "Owner" || country === "LK" && relation === "Owner") ?


                            <div className="col-12 inputBox p-0">
                              <label>
                                {t("SoldToList")}
                              </label>
                              <SelectWithSoldTo />
                            </div>

                            : ''
                        }

                      </div>

                      <div className="form_section extra-soldto">

                        {
                          (country === "VN" && relation === "Staff" || country === "LK" && relation === "Staff") ?

                            <div className="inputBox ">
                              <label>
                                {t("ShipTo")}
                              </label>
                              <SelectWithShipTo />
                            </div>
                            : ''
                        }

                      </div>
                    </div> */}
                  </div>
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

export default withTranslation()(AddRetailerContactForm);
