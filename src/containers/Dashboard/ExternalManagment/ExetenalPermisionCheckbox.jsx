import React, { useEffect, useState } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import "../Dashboard.scss";
import { API_URL_USER } from "../../../Constant/index";
import { useLocation } from 'react-router-dom';


function ExetenalPermisionCheckbox(props) {
  const event = useSelector((state) => state);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [order, setOrder] = React.useState(false);
  const [orderCheck, setOrderCheck] = React.useState(false);

  const [performance, setPerformance] = React.useState(false);
  const [payment, setPayment] = React.useState(false);
  const [loyality, setLoyality] = React.useState(false);
  const [activeData, setActiveData] = React.useState({});
  const [buttonStatus, setButtonStatus] = React.useState(false)
  const customeruserId = useSelector((state) => state.customeruserid.customeruserid);
  const togglebutton = useSelector((state) => state.checkboxtoggle.checkboxtoggle);
  const row = props.row;
  const location = useLocation();
  const { accountName } = location.state;
  const { soldtoNumber } = location.state;


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
        console.log('contactListcontactList', result.data);
        setActiveData(result.data);

        setPerformance(result && result.data && result.data.performanceRole);
        setOrder(result && result.data && result.data.orderAndDeliverRole);
        setLoyality(result && result.data && result.data.loyality);
        setPayment(result && result.data && result.data.paymentOfflineAndOnlineRole);
        setButtonStatus(result && result.data && result.data.status)
      });
    ///dispatch(eventActions.CustomerUserId(contactList.inseeRefId));
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
      "contactId": activeData.contactId,
      "countryCode": activeData.countryCode,
      "createdAt": activeData.createdAt,
      "createdBy": activeData.createdBy,
      "email": activeData.email,
      "firstName": activeData.firstName,
      "loyality": activeData.loyality,
      "mobileNumber": activeData.mobileNumber,
      "orderAndDeliverRole": checked === true ? "Active" : "Inactive",
      "password": activeData.password,
      "paymentOfflineAndOnlineRole": activeData.paymentOfflineAndOnlineRole,
      "performanceRole": activeData.performanceRole,
      "retailerId": activeData.retailerId,
      "roles": activeData.roles,
      "soldTo": [
        activeData.soldToNumber
      ],
      "status": activeData.status,
      "updatedAt": activeData.updatedAt,
      "updatedBy": activeData.updatedBy,
      "userId": activeData.userId,
      "userRole": activeData.userRole

    };
    (async () => {
      await dispatch(eventActions.UpdatecontactToggle(UpdateData));
      dispatch(eventActions.AccountContactList(accountName, soldtoNumber));


    })()


  }

  const editPerformance = (e) => {
    const { checked } = e.target
    let UpdateData = {
      "contactId": activeData.contactId,
      "countryCode": activeData.countryCode,
      "createdAt": activeData.createdAt,
      "createdBy": activeData.createdBy,
      "email": activeData.email,
      "firstName": activeData.firstName,
      "loyality": activeData.loyality,
      "mobileNumber": activeData.mobileNumber,
      "orderAndDeliverRole": activeData.orderAndDeliverRole,
      "password": activeData.password,
      "paymentOfflineAndOnlineRole": activeData.paymentOfflineAndOnlineRole,
      "performanceRole": checked === true ? "Active" : "Inactive",
      "retailerId": activeData.retailerId,
      "roles": activeData.roles,
      "soldTo": [
        activeData.soldToNumber
      ],
      "status": activeData.status,
      "updatedAt": activeData.updatedAt,
      "updatedBy": activeData.updatedBy,
      "userId": activeData.userId,
      "userRole": activeData.userRole

    };
    (async () => {
      await dispatch(eventActions.UpdatecontactToggle(UpdateData));
      dispatch(eventActions.AccountContactList(accountName, soldtoNumber));

    })()
  }

  const editPayment = (e) => {
    const { checked } = e.target
    let UpdateData = {
      "contactId": activeData.contactId,
      "countryCode": activeData.countryCode,
      "createdAt": activeData.createdAt,
      "createdBy": activeData.createdBy,
      "email": activeData.email,
      "firstName": activeData.firstName,
      "loyality": activeData.loyality,
      "mobileNumber": activeData.mobileNumber,
      "orderAndDeliverRole": activeData.orderAndDeliverRole,
      "password": activeData.password,
      "paymentOfflineAndOnlineRole": checked === true ? "Active" : "Inactive",
      "performanceRole": activeData.performanceRole,
      "retailerId": activeData.retailerId,
      "roles": activeData.roles,
      "soldTo": [
        activeData.soldToNumber
      ],
      "status": activeData.status,
      "updatedAt": activeData.updatedAt,
      "updatedBy": activeData.updatedBy,
      "userId": activeData.userId,
      "userRole": activeData.userRole

    };
    (async () => {
      await dispatch(eventActions.UpdatecontactToggle(UpdateData));
      dispatch(eventActions.AccountContactList(accountName, soldtoNumber));

    })()
  }

  const editLoyality = (e) => {
    const { checked } = e.target
    let UpdateData = {
      "contactId": activeData.contactId,
      "countryCode": activeData.countryCode,
      "createdAt": activeData.createdAt,
      "createdBy": activeData.createdBy,
      "email": activeData.email,
      "firstName": activeData.firstName,
      "loyality": checked === true ? "Active" : "Inactive",
      "mobileNumber": activeData.mobileNumber,
      "orderAndDeliverRole": activeData.orderAndDeliverRole,
      "password": activeData.password,
      "paymentOfflineAndOnlineRole": activeData.paymentOfflineAndOnlineRole,
      "performanceRole": activeData.performanceRole,
      "retailerId": activeData.retailerId,
      "roles": activeData.roles,
      "soldTo": [
        activeData.soldToNumber
      ],
      "status": activeData.status,
      "updatedAt": activeData.updatedAt,
      "updatedBy": activeData.updatedBy,
      "userId": activeData.userId,
      "userRole": activeData.userRole

    };
    (async () => {
      await dispatch(eventActions.UpdatecontactToggle(UpdateData));
      dispatch(eventActions.AccountContactList(accountName, soldtoNumber));

    })()
  }




  return (
    <>

      <div className="checkbox_section">
        <span><input checked={order === "Active" ? true : false} type="checkbox" name={"order"} onChange={e => editOrderCheckBox(e)} /><label>Order & Delivery</label></span>
        <span><input checked={performance === "Active" ? true : false} onChange={e => editPerformance(e)} type="checkbox" name={"performance"} /><label>Performance</label></span>
        <span><input checked={payment === "Active" ? true : false} type="checkbox" name={"payment"} onChange={e => editPayment(e)} /><label>Payment Offline & Online</label></span>
        <br />
        <span style={{ float: "left" }}><input checked={loyality === "Active" ? true : false} type="checkbox" name={"loyality"} onChange={e => editLoyality(e)} /><label>Loyalty</label></span>
      </div>
    </>
  );
}

export default withTranslation()(ExetenalPermisionCheckbox);