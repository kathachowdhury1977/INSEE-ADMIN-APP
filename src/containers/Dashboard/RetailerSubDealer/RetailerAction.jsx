import React, { useEffect, useState } from "react";
import { eventActions } from "../../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { withTranslation, useTranslation } from "react-i18next";
import RetailerToggle from "../../../containers/Dashboard/RetailerSubDealer/RetailerToggle";
import "../Dashboard.scss";
import { API_URL_USER } from "../../../Constant/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';



function RetailerAction(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const location = useLocation();
    const { retailerCode } = location.state;
    const [activeData, setActiveData] = React.useState({});
    const dispatch = useDispatch();
    const togglebutton = useSelector((state) => state.checkboxtoggle.checkboxtoggle);
    const createContact = useSelector((state) => state.retailermakeinseeplus)
    const row = props.row;



    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

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
                console.log('contactListcontactList+', result);
                setActiveData(result.data);
            });
       
    }, [row.inseeRefId]);
      
    const handleChange = (event) => {
        
      
        let UpdateData = {
            "confirmedDate": "2021-02-31",
            "contactId": row.inseeRefId,
            "countryCode": userName.countryCode,
            "createdAt": 0,
            "createdBy": "string",
            "email": row.email,
            "firstName": row.firstName,
            "inseeUser": true,
            "lastName": row.lastName,
            "loyality": togglebutton && togglebutton.order ? "Active" : "Inactive",
            "makeInseePlusUser": "string",
            "mobileNumber": "string",
            "orderAndDeliverRole": togglebutton && togglebutton.order ? "Active" : "Inactive",
            "password": "string",
            "paymentOfflineAndOnlineRole": togglebutton && togglebutton.payment ? "Active" : "Inactive",
            "pdpConfirmed": "string",
            "performanceRole": togglebutton && togglebutton.performance ? "Active" : "Inactive",
            "retailerId": retailerCode,
            "roles": "string",
            "soldTo": [
              "string"
            ],
            "status": togglebutton && togglebutton.active ? "0" : "1",
            "updatedAt": 0,
            "updatedBy": "string",
            "userId": row.userId,
            "userRole": "string"
          };

          console.log("test+++", UpdateData);
        dispatch(eventActions.RetailerMakeInseePlus(UpdateData));

    }


    useEffect(() => {
        if (createContact && !createContact.loading &&
            (createContact.retailermakeinseeplus)) {
                dispatch(eventActions.retailerAllContactList(retailerCode, ''));
                toast.success('Retailer User has been Make Insee successfully', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            
        }
    }, [createContact]);

    

    // useEffect(() => {
    //     if (!!createContact  && !!createContact.retailermakeinseeplus && createContact.retailermakeinseeplus !== undefined) {
    //         dispatch(eventActions.retailerAllContactList(retailerCode));
    //         toast.success('Retaielr User has been Make Insee successfully', {
    //             position: "top-right",
    //             autoClose: 4000,
    //             hideProgressBar: true,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         });

    //     } else if (!!createContact && !!createContact.error) {
    //         toast.success(!!createContact && createContact.error, {
    //             position: "top-right",
    //             autoClose: 4000,
    //             hideProgressBar: true,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         })
    //     }
    // }, [createContact])

    useEffect(() => {
        return () => {
            dispatch(eventActions.RetailerMakeInseePlus())
        }
    }, [])



   console.log("activeData==99",activeData);
    return (
        <>
            <div className="external_action">
                {activeData && activeData.makeInseePlusUser == 'Active' ?
                    <label className="label_section"><input type="radio" checked onChange={handleChange} />Make Insee Plus User</label>
              
                        :
                        <label className="label_section"><input type="radio" onChange={handleChange} />Make Insee Plus User</label>
                }
                <span className="toggle_switch"><RetailerToggle row={props.row} inseeRefId={props.inseeRefId} /></span>
            </div>
        </>
    );
}

export default withTranslation()(RetailerAction);
