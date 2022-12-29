import React, { useEffect, useState } from "react";
import { eventActions } from "../../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { withTranslation, useTranslation } from "react-i18next";
import ToggleButton from "../../../components/ToggleButton/ToggleButton";
import "../Dashboard.scss";
import { API_URL_USER } from "../../../Constant/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';



function ExternalActions(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const location = useLocation();
    const { accountName } = location.state;
    const { soldtoNumber } = location.state;
    const [activeData, setActiveData] = React.useState({});
    const dispatch = useDispatch();
    const togglebutton = useSelector((state) => state.checkboxtoggle.checkboxtoggle);
    const createContact = useSelector((state) => state.contacttoggle)
    const row = props.row;
    const [userid, setUserId] = useState("");
     console.log("myFIlter", row.ownerSoldToShipToList &&  row.ownerSoldToShipToList);

     console.log("dfgfdg+++",row);

    
    

    // useEffect(() => {
    //     dispatch(eventActions.allEvent());
    // }, []);

    // ["0110008926","123 CM MT","0110008926","123 CM MT"]


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
                console.log('contactListcontactList', result.data);
                setActiveData(result.data);
            });
        ///dispatch(eventActions.CustomerUserId(contactList.inseeRefId));
    }, [row.inseeRefId]);
      

    // row.ownerSoldToList

    // "soldTo": row.ownerSoldToList ? row.ownerSoldToList : [row.soldToNumber], 
    // "countryCode": row.countryCode,

    const handleChange = (event) => {
        
        debugger
        console.log("message+++", togglebutton);
        var myFiltersoldto = [];
        if(row.ownerSoldToShipToList != null) {
           
            // myFiltersoldto.push(accountName)
            for(var i=0 ; i < row.ownerSoldToShipToList.length; i++) {
                var myFinalsoldto = row.ownerSoldToShipToList[i].soldToNumber;
                myFiltersoldto.push(myFinalsoldto)
    
            }
        } else {
           myFiltersoldto.push(row.soldToNumber)
        }

        
        let UpdateData = {
            "contactId": row.inseeRefId, 
            "countryCode": row.countryCode,
            "createdAt": 0,
            "createdBy": "string",
            "email": row.emailId,
            "firstName": row.firstName,
            "lastName": row.lastName,
            "loyality": togglebutton && togglebutton.order ? "Active" : "Inactive",
            "orderAndDeliverRole": togglebutton && togglebutton.order ? "Active" : "Inactive",
            "password": "insee@123",
            "paymentOfflineAndOnlineRole": togglebutton && togglebutton.payment ? "Active" : "Inactive",
            "performanceRole": togglebutton && togglebutton.performance ? "Active" : "Inactive",
            "roles": row.relation,
            "soldTo": myFiltersoldto, 
            "status": togglebutton && togglebutton.active ? "0" : "1",
            "updatedAt": 0,
            "updatedBy": "string",
            "userId": row.primaryMobileNumber,
            "userRole": "Customer"

        };
        console.log("mydatalust",UpdateData);
        dispatch(eventActions.contactToggle(UpdateData, row.primaryMobileNumber));

    }


    useEffect(() => {
        if (!!createContact  && !!createContact.contacttoggle && createContact.contacttoggle !== undefined) {
            dispatch(eventActions.AccountContactList(accountName, soldtoNumber));
            toast.success('User has been Make Insee successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } else if (!!createContact && !!createContact.error) {
            toast.success(!!createContact && createContact.error, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }, [createContact])

    useEffect(() => {
        return () => {
            dispatch(eventActions.contactToggle())
        }
    }, [])


    return (
        <>
            <div className="external_action">
                {activeData && activeData.makeInseePlusUser == 'Active' ?
                    <label className="label_section"><input type="radio" checked onChange={handleChange} />Make Insee Plus User</label>
                    :
                    props.disabled1['disabled' + props.inseeRefId] !== undefined && props.disabled1['disabled' + props.inseeRefId] ?
                        <label className="label_section"><input type="radio" onChange={handleChange} />Make Insee Plus User</label>
                        :
                        <label className="label_section"><input type="radio" onChange={handleChange} />Make Insee Plus User</label>
                }
                <span className="toggle_switch"><ToggleButton disabled={props.disabled} setDisable={props.setDisable} row={props.row} inseeRefId={props.inseeRefId} /></span>
            </div>
        </>
    );
}

export default withTranslation()(ExternalActions);
