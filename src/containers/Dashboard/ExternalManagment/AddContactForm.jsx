import React, { useEffect, useState } from "react";
import { withTranslation, useTranslation } from "react-i18next";
import { eventActions } from "../../../_actions";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import { useLocation } from 'react-router-dom';
import "./AccountContactForm.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectWithSoldTo from "../../../components/SelectWithOption/SelectWithSoldTo";
import SelectWithShipTo from "../../../components/SelectWithOption/SelectWithShipTo";
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'


const cancleStyle = {
  marginleft: "3%",
};
const imgwidth = {
  width: "100%",
};
let fileObj = [];
let fileArray = [];

function AddContactForm(props) {

  let userName = localStorage.getItem('userData');
  userName = JSON.parse(userName);

  const event = useSelector((state) => state);
  const [file, setFile] = React.useState(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  let history = useHistory();


  const [disabled, setDisabled] = React.useState(true);
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [mobile, setMobile] = React.useState("");
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
  const [sodtoList, setSoldToNumber] = React.useState("");
  const [decision, setDecision] = React.useState(false);
  const [influncer, setInfluncer] = React.useState(false);
  const [upload, setUpload] = React.useState("");
  const [country, setCountry] = React.useState("TH");
  const location = useLocation();
  const { accountName } = location.state;
  const { soldtoNumber } = location.state;
  const togglebutton = useSelector((state) => state.checkboxtoggle.checkboxtoggle);
  const addaccount = useSelector((state) => state.accountformdata);
  const productselectid = useSelector((state) => state.productselectid.productselectid);
  const Shiptoselectid = useSelector((state) => state.shiptoselectid.shiptoselectid);
  console.log("disabled",disabled);
  const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

  const Soldtowithdivision = useSelector((state) => state.soldtoselectwithdivision.soldtoselectwithdivision);
  


  useEffect(() => {
    dispatch(eventActions.SoldToSelectWithDivision());
    dispatch(eventActions.ShipToList(accountName));
  }, []);

  console.log("Soldtowithdivision+++", Shiptoselectid);

  const mySoldToHandler = (event) => {

    var mylist = event.target.value.split('-').join('');
    let finalValue = mylist.match(/.{1,10} /g).join('-');

    var mySold = finalValue.split('-')[0].trim();
    setSoldToNumber(mySold)
  }

  

  const [inputList, setInputList] = useState([]);
  useEffect(() => { debugger
    if (country === "TH") {
      return
    } else {
      if(Soldtowithdivision != null && Soldtowithdivision!= undefined){
        Soldtowithdivision && Soldtowithdivision.map((list) => {
          if(list.includes(accountName)){
            return (         
              setInputList([...inputList, {soldToNumber : list, shipToList: [""]}])                                  
            );
          }
        
         }
         )
      }
    }
    

  }, [Soldtowithdivision, country])

  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  


  




  // handle input change
  const handleInputChange = (e, index) => { debugger    
     var name = 'soldToNumber'
    var value = e.target.innerText
    var mylist = value.split('-').join('');
    let finalValue = mylist.match(/.{1,10} /g).join('-');
    var mySold = finalValue.split('-')[0].trim();
    dispatch(eventActions.ShipToList(mySold));
    // dispatch(eventActions.ShipToList(mySold ? mySold : accountName));
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);;
  };

  const handleInputChangeSold = (e, index) => {
    
    const name = "shipToList"
    const value = e
    var data = value.split(",")
    const list = [...inputList];
    list[index][name] = data;
    setInputList(list);
  };



  

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    debugger
    const list = [...inputList];
    list.splice(list.indexOf(index), 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { soldToNumber: '', shipToList: [""] }]);
    setDisabled(false)
  };


  console.log(inputList, '789526OOO')


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
      "countryCode": country,
      "dateOfBirth": "2021-10-20T05:11:19.973Z",
      "decisionMaker": true,
      "dietaryLimitaion": diet,
      "dob": dob,
      "education": education,
      "emailId": email,
      "excelShipTo": "string",
      "excelSoldTo": "string",
      "favSports": sport,
      "firstName": fname,
      "gender": gender,
      "handicaped": togglebutton && togglebutton.handicap ? "Yes" : "No",
      "influencer": true,
      "inseeRefId": "string",
      "inseeUser": true,
      "institution": institution,
      "lastName": lname,
      "lineId": line,
      "major": major,
      "maritalStatus": marital,
      "nickName": nickname,
      "nonPreferedDrink": drink,
      "nonPreferedFood": food,
      "ownerSoldToShipToList": inputList,
      "pdpConfirmed": "string",
      "phoneNumber": phonenumber,
      "position": position,
      "primaryMobileNumber": "string",
      "relation": relation,
      "soldToNumber": accountName,
      "whatsAppId": whatsapp,
      "zoloId": zolo
    }


    console.log("account data form", productData);

    dispatch(eventActions.AccountFormData(productData, mobile, upload));
    // 
    // window.location.reload();
  }

  console.log(Soldtowithdivision, 'Soldtowithdivision4587')



 const SoldtowithdivisionData = Soldtowithdivision
  ? Soldtowithdivision && Soldtowithdivision.map((list) => {
      return {
        id: list,
        name: list,
      }
    })
  : []



  useEffect(() => {
    if (!!addaccount && addaccount.accountformdata !== undefined) {
      dispatch(eventActions.AccountContactList(accountName, soldtoNumber));
      toast.success('Contact has been Added successfully', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/ExternalMangamentDetailList", { accountName: accountName, soldtoNumber: soldtoNumber });

    } else if (!!addaccount && addaccount.error) {
      toast.success(addaccount.error, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }, [addaccount])


  useEffect(() => {
    return () => {
      dispatch(eventActions.AccountFormData());
    }
  }, []);

  const cancelSubmit = () => {
    history.push("/ExternalMangamentDetailList", { accountName: accountName, soldtoNumber: soldtoNumber });
  }

//   const accountNameFilter = Soldtowithdivision.includes(accountName);

// console.log(accountNameFilter && accountNameFilter, 'accountNameFilter789')

  return (
    <>
      <div className="content-wrapper">
        <Header title="Add Contact" />

        <div className={"row ipad_css "  +  MyNewClass}>
          <div className="mainScroll">
            <div className="card create-lead add_contact">

              <div className="">
                <div className="col-12 account-head">
                  <div className="header_head">
                    <h6>Sold To Number<br />
                      <span className="account_dt text-danger">{accountName}</span>
                    </h6>

                    <h6 className="">
                      Account Name<br />
                      <span className="account_dt text-danger">{soldtoNumber}</span>
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

                              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox">
                                  <label>{t("First Name")}</label>
                                  <input className="input" type="text" name={"fname"} onChange={event => setFname(event.target.value)} className="form-control" placeholder="Enter First Name" />
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
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
                                  <input className="input" type="text" name={"mobile"} onChange={event => setMobile(event.target.value)} className="form-control" placeholder="Enter User Name" />

                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Mobile Number")}</label>
                                  <input className="input" type="number" pattern="^-?[0-9]\d*\.?\d*$" name={"alternatmobile"} onChange={event => setAlternateMobile(event.target.value)} className="form-control" placeholder="Enter mobile" />
                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="inputBox ">
                                  <label>{t("Phone Number")}</label>
                                  <input className="input" type="number" pattern="^-?[0-9]\d*\.?\d*$" name={"phonenumber"} onChange={event => setPhoneNumber(event.target.value)} className="form-control" placeholder="Enter phone number" />
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
                                  <div className="inputBox" style={{ marginTop: "38px" }}>
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

                              { (country === "VN" && relation === "Owner" || country === "LK" && relation === "Owner")  || (country === "VN" && relation === "Staff" || country === "LK" && relation === "Staff") ?

                                <div className="col-12 mb-1">

                                {inputList.map((x, i) => {
                                  return (
                                    <div className="row">
                                      <div className="col-5">
                                        <div className="form-group">
                                          <label for="group_code">Sold To List</label>
                                          {console.log("accountName",accountName)}
                                          {
                                            i === 0 ? <select id="" disabled name={'soldToNumber'} onChange={e => handleInputChange(e, i)}>
                                            
                                            {
                                            
                                            Soldtowithdivision && Soldtowithdivision.map((list) => {
                                              if(list.includes(accountName)){
                                                return (                                                
                                                  <option selected disabled value={list} >{list}</option>
                                                );
                                              }
                                            
                                             }
                                             )
                                            }

                                          </select> :
                                          <Autocomplete
                                          id='adminSoldTo'
                                          options={SoldtowithdivisionData}
                                          noOptionsText={t('No Data Found')}
                                          style={{borderBottom: 0}}
                                          onChange={e => handleInputChange(e, i)}
                                          getOptionLabel={(option) => option.name}                        
                                          renderInput={(params) => (
                                            <TextField
                                              {...params}
                                             
                                            />
                                          )}
                                        />
                                          }


                                        </div>
                                      </div>

                                      <div className="col-5">
                                        <div className="form-group">
                                          <div className="inputBox extra-soldto">
                                            <label>
                                              {t("ShipTo")}
                                            </label>
                                            <SelectWithShipTo
                                              handleInputChange={e => handleInputChangeSold(e, i)}
                                              sodtoList={sodtoList} />
                                          </div>

                                        </div>
                                      </div>
                                      <div className="btn-box col-2 text-right">
                                        {inputList.length > 1 &&
                                          <button
                                            onClick={() => handleRemoveClick(i)}>
                                            <i className="fa fa-trash"></i>
                                          </button>}
                                        {/* {inputList.length !== 1 && <button
                                          onClick={() => handleRemoveClick(i)}><i className="fa fa-trash"></i></button>} */}
                                        {inputList.length - 1 === i && <button onClick={handleAddClick}><i className="fa fa-plus"></i></button>}
                                      </div>
                                    </div>
                                  );
                                })}

                              </div> : ''
                              }

                              
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="lead-checkbox-container mt-3">
                                  <div>
                                    <input id="checkbox-1" class="checkbox-custom" name="checkbox-1" type="checkbox" onChange={event => setDecision(!decision)} />
                                    <label for="checkbox-1" class="checkbox-custom-label"> &nbsp;<strong>Decision Maker</strong></label>
                                  </div>

                                  {/* <div>
                                    <input id="checkbox-2" class="checkbox-custom" name="checkbox-2" type="checkbox" onChange={event => setInfluncer(!influncer)} />
                                    <label for="checkbox-2" class="checkbox-custom-label"> &nbsp; <strong>Influencer</strong></label>
                                  </div> */}

                                </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="lead-checkbox-container mt-3">

                                  <div>
                                    <input id="checkbox-2" class="checkbox-custom" name="checkbox-2" type="checkbox" onChange={event => setInfluncer(!influncer)} />
                                    <label for="checkbox-2" class="checkbox-custom-label"> &nbsp; <strong>Influencer</strong></label>
                                  </div>
                                </div>
                              </div>

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
                  {/* <div className="row mt-5 contact_upload_image">
                    <div className="section-item">
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
                    </div>
                  </div> */}
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

export default withTranslation()(AddContactForm);
