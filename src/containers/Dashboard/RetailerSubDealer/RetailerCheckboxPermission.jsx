import React, { useEffect, useState } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import "../Dashboard.scss";
import { API_URL_USER } from "../../../Constant/index";
import { useLocation } from 'react-router-dom';


function RetailerCheckboxPermission(props) {
  const event = useSelector((state) => state);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [order, setOrder] = React.useState(false);
  const [orderCheck, setOrderCheck] = React.useState(false);
 

  const [performance, setPerformance] = React.useState(false);
  const [payment, setPayment] = React.useState(false);
  const [loyality, setLoyality] = React.useState(false);
  const [activeData, setActiveData] = React.useState({});
  const togglebutton = useSelector((state) => state.checkboxtoggle.checkboxtoggle);
  const createContact = useSelector((state) => state.retailermakeinseeplus);
  const row = props.row;
  const location = useLocation();
  const { retailerCode } = location.state;


  const { userId } = location.state;

  console.log("createContact", createContact);

  let userName = localStorage.getItem('userData');
  userName = JSON.parse(userName);
  console.log("activeData++++000", activeData)

  console.log(togglebutton, 'togglebutton')

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
      },
    };

    fetch(API_URL_USER + `ums/external-user/getCustomerByContactId/` + row.inseeRefId, requestOptions)
      .then((res) => res.json())
      .then((result) => {
        console.log('contactListcontactList', result);
        setActiveData(result.data);
        setPerformance(result && result.data && result.data.performanceRole);
        setOrder(result && result.data && result.data.orderAndDeliverRole);
        setLoyality(result && result.data && result.data.loyality);
        setPayment(result && result.data && result.data.paymentOfflineAndOnlineRole);
      });

  }, [row.inseeRefId]);


  useEffect(() => {
    dispatch(eventActions.CheckboxToggle(
      {
        "order": order,
        "performance": performance,
        "payment": payment,
        "loyality": loyality
      }
    ));
  }, [order, performance, payment, loyality]);


  const editOrderCheckBox = (e) => {
    const { checked } = e.target
    let UpdateData = {

      "contactId":  activeData.contactId,
      "countryCode": userName.countryCode,
      "createdAt": 0,
      "createdBy": "string",
      "email": activeData.email,
      "firstName": activeData.firstName,
      "loyality": activeData && activeData.loyality,
      "mobileNumber": activeData.mobileNumber,
      "orderAndDeliverRole": checked === true ? "Active" : "Inactive",
      "password": "string",
      "paymentOfflineAndOnlineRole": activeData && activeData.paymentOfflineAndOnlineRole,
      "performanceRole": activeData && activeData.performanceRole,
      "retailerId": retailerCode,
      "roles": 'string',
      "soldTo": [
        'string'
      ],
      "status": activeData.status,
      "updatedAt": activeData.updatedAt,
      "updatedBy": activeData.updatedBy,
      "userId": activeData.userId,

    };
    (async () => {
      await dispatch(eventActions.RetailerMakeInseePlus(UpdateData));
      dispatch(eventActions.retailerAllContactList(retailerCode, ''));
    })()






  }

  const editPerformance = (e) => {
    const { checked } = e.target
    console.log("myTarget", checked);
    let UpdateData = {


      "contactId":  activeData.contactId,
      "countryCode": userName.countryCode,
      "createdAt": 0,
      "createdBy": "string",
      "email": activeData.email,
      "firstName": activeData.firstName,
      "loyality": activeData && activeData.loyality,
      "mobileNumber": activeData.mobileNumber,
      "orderAndDeliverRole": activeData.orderAndDeliverRole,
      "password": "string",
      "paymentOfflineAndOnlineRole": activeData && activeData.paymentOfflineAndOnlineRole,
      "performanceRole": checked === true ? "Active" : "Inactive",
      "retailerId":retailerCode,
      "roles": 'string',
      "soldTo": [
        'string'
      ],
      "status": activeData.status,
      "updatedAt": activeData.updatedAt,
      "updatedBy": activeData.updatedBy,
      "userId": activeData.userId


    };
    (async () => {
      await dispatch(eventActions.RetailerMakeInseePlus(UpdateData));
      dispatch(eventActions.retailerAllContactList(retailerCode, ''));
    })()


  }

  const editPayment = (e) => {
    const { checked } = e.target
    let UpdateData = {


      "contactId":  activeData.contactId,
      "countryCode": userName.countryCode,
      "createdAt": 0,
      "createdBy": "string",
      "email": activeData.email,
      "firstName": activeData.firstName,
      "loyality": activeData && activeData.loyality,
      "mobileNumber": activeData.mobileNumber,
      "orderAndDeliverRole": activeData.orderAndDeliverRole,
      "password": "string",
      "paymentOfflineAndOnlineRole": checked === true ? "Active" : "Inactive",
      "performanceRole": activeData.performanceRole,
      "retailerId": retailerCode,
      "roles": 'string',
      "soldTo": [
        'string'
      ],
      "status": activeData.status,
      "updatedAt": activeData.updatedAt,
      "updatedBy": activeData.updatedBy,
      "userId": activeData.userId

    };
    (async () => {
      await dispatch(eventActions.RetailerMakeInseePlus(UpdateData));
       dispatch(eventActions.retailerAllContactList(retailerCode, ''));
    })()

  }

  const editLoyality = (e) => {
    const { checked } = e.target
    let UpdateData = {

      "contactId":  activeData.contactId,
      "countryCode": userName.countryCode,
      "createdAt": 0,
      "createdBy": "string",
      "email": activeData.email,
      "firstName": activeData.firstName,
      "loyality": checked === true ? "Active" : "Inactive",
      "mobileNumber": activeData.mobileNumber,
      "orderAndDeliverRole": activeData.orderAndDeliverRole,
      "password": "string",
      "paymentOfflineAndOnlineRole": activeData.paymentOfflineAndOnlineRole,
      "performanceRole": activeData.performanceRole,
      "retailerId": retailerCode,
      "roles": 'string',
      "soldTo": [
        'string'
      ],
      "status": activeData.status,
      "updatedAt": activeData.updatedAt,
      "updatedBy": activeData.updatedBy,
      "userId": activeData.userId

    };
    (async () => {
      await dispatch(eventActions.UpdatecontactToggle(UpdateData));
      dispatch(eventActions.retailerAllContactList(retailerCode, ''));

    })()


  }





  // useEffect(() => {
  //   return () => {
  //     dispatch(eventActions.RetailerUserId(userName.userId))
  //     dispatch(eventActions.retailerAllContactList(retailerCode, ''));
  //   }
  // }, [])



  return (
    <>

      <div className="checkbox_section">
        {/* <span><input checked={order === "Active" ? true : false} type="checkbox" name={"order"} onChange={e => editOrderCheckBox(e)} /><label>Order & Delivery</label></span>
        <span><input checked={performance === "Active" ? true : false} onChange={e => editPerformance(e)} type="checkbox" name={"performance"} /><label>Performance</label></span>
        <span><input checked={payment === "Active" ? true : false} type="checkbox" name={"payment"} onChange={e => editPayment(e)} /><label>Payment Offline & Online</label></span> */}
        {/* <br /> */}
        <span><input checked={loyality === "Active" ? true : false} type="checkbox" name={"loyality"} onChange={e => editLoyality(e)} /><label>Loyalty</label></span>
      </div>
    </>
  );
}

export default withTranslation()(RetailerCheckboxPermission);