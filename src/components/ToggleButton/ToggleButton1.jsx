import React from 'react';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function ToggleButton(props) {
  const dispatch = useDispatch();

  const[active, setActive] =React.useState(0);
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
  });


  const contactList = props.contactlist

  console.log("props toggle", props.contactlist);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log("event.target.checked", event.target.checked);
    if(event.target.checked) {
      setActive(1);
    }
    else {
      setActive(0);
    }

    let UpdateData = {
        "countryCode": "string",
        "createdAt": 0,
        "createdBy": "string",
        "email": "string",
        "firstName": "string",
        "orderAndDeliverRole": "string",
        "password": "string",
        "paymentOfflineAndOnlineRole": "string",
        "performanceRole": "string",
        "roles": "string",
        "soldTo": [
          "string"
        ],
        "status": active,
        "updatedAt": 0,
        "updatedBy": "string",
        "userId": contactList.primaryMobileNumber,
        "userRole": "string"
    
      
    };

    console.log("UpdateData", UpdateData);

    dispatch(eventActions.ContactStatus(UpdateData, contactList.primaryMobileNumber)
    );

  }



  return (
    <FormGroup row>
      <label className="in-active">InActive</label>
      <FormControlLabel
        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" value={active} />}
        label="Active"
      />
      {/* <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      <FormControlLabel control={<Switch />} label="Uncontrolled" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
      <FormControlLabel disabled control={<Switch checked />} label="Disabled" /> */}
    </FormGroup>
  );
}
