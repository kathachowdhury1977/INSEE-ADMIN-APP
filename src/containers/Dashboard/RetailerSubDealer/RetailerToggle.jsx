import React, { useEffect } from 'react';
import { eventActions } from "../../../_actions";
import { useDispatch, useSelector } from "react-redux";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { API_URL_USER } from "../../../Constant/index";
import { useLocation } from 'react-router-dom';
import { boolean } from 'joi';

export default function RetailerToggle(props) {
  let userName = localStorage.getItem('userData');
  userName = JSON.parse(userName);
  const dispatch = useDispatch();

  const location = useLocation();
  const { userId } = location.state;
    const { contactPersonDetails } = location.state;
    const { retailerCode } = location.state;
  const [activeData, setActiveData] = React.useState({});
  const [active, setActive] = React.useState(0);
  const [state, setState] = React.useState({ checkedA: false, });
  const togglebutton = useSelector((state) => state.checkboxtoggle.checkboxtoggle);
  const updateContact = useSelector((state) => state.updatecontacttoggle);
  const row = props.row;




  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
      },
    };

    fetch(API_URL_USER + `ums/external-user/getCustomerByContactId/`+ row.inseeRefId, requestOptions)
      .then((res) => res.json())
      .then((result) => {
        console.log('contactListcontactList', result);
        setActiveData(result.data);
      });
  }


  useEffect(() => {
    dispatch(eventActions.CheckboxToggle(
      {
        "active": active,
      }
    ));
  }, [active]);






  const handleToggle = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log("event.target.checked", event.target.checked);
    if (event.target.checked) {
      console.log('togglebutton', togglebutton);
      setActive(1);


      let UpdateData = {

        "contactId": row.inseeRefId,
        "countryCode": userName.countryCode,
        "createdAt": 0,
        "createdBy": "string",
        "email": row.email,
        "firstName": row.firstName,
        "loyality": activeData && activeData.loyality,
        "mobileNumber": row.mobileNumber,
        "orderAndDeliverRole": activeData && activeData.orderAndDeliverRole,
        "password": "string",
        "paymentOfflineAndOnlineRole": activeData && activeData.paymentOfflineAndOnlineRole,
        "performanceRole": activeData && activeData.performanceRole,
        "retailerId": retailerCode,
        "roles": 'string',
        "soldTo": [
          'string'
        ],
        "status": 1,
        "updatedAt": 0,
        "updatedBy": "string",
        "userId": row.userId,
        "userRole": "Customer"
      };


      (async () => {
        await dispatch(eventActions.UpdatecontactToggle(UpdateData));
        dispatch(eventActions.retailerAllContactList(retailerCode, ''));
      })()


    }
    else {

      setActive(0);
      let UpdateData = {
        "contactId": row.inseeRefId,
        "countryCode": userName.countryCode,
        "createdAt": 0,
        "createdBy": "string",
        "email": row.email,
        "firstName": row.firstName,
        "loyality": activeData.loyality,
        "mobileNumber": row.mobileNumber,
        "orderAndDeliverRole": activeData.orderAndDeliverRole,
        "password": "string",
        "paymentOfflineAndOnlineRole": activeData.paymentOfflineAndOnlineRole,
        "performanceRole": activeData.performanceRole,
        "retailerId": retailerCode,
        "roles": "string",
        "soldTo": [
          "string"
        ],
        "status": 0,
        "updatedAt": 0,
        "updatedBy": "string",
        "userId": row.userId,
        "userRole": "Customer"

      };
      (async () => {
        await dispatch(eventActions.UpdatecontactToggle(UpdateData));
        dispatch(eventActions.retailerAllContactList(retailerCode, ''));
      })()

      
    }

  }

  useEffect(() => {
    if (updateContact && updateContact.updatecontacttoggle !== undefined) {

      dispatch(eventActions.retailerAllContactList(retailerCode, ''));

    }
  }, [updateContact && updateContact.updatecontacttoggle !== undefined])


  return (
    <FormGroup row>
      <label className="in-active">InActive</label>
      {activeData && activeData.status == '1' ?
        <FormControlLabel
          control={<Switch checked onChange={handleToggle} name="checkedA" value={active} />}
          label="Active"
        /> :

        <FormControlLabel
          control={<Switch checked={state.checkedA} onChange={handleToggle} name="checkedA" value={active} />}
          label="Active"
        />
      }

    </FormGroup>
  );
}
