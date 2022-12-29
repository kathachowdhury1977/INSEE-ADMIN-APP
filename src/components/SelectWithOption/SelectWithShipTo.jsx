import React, { useState, useEffect } from 'react';
import MultiSelect from 'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import "./selectoption.scss"
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

const SelectWithShipTo = (props) => {
  const dispatch = useDispatch();
  const shipToList = useSelector((state) => state.shiptolist.shiptolist);
  const Shiptoselectid = useSelector((state) => state.shiptoselectid.shiptoselectid);
  const [value, setvalue] = useState([])
  const location = useLocation();
  const { accountName } = location.state;
  const mynumber = props.sodtoList;



  console.log("mysoldtonumber", mynumber);



  // const  handleOnchange  =  (val,event)  => { debugger
  //   setvalue(val)
  //   var data = val.split(",")
  //   console.log(("data+++",data))

  //   dispatch(eventActions.shiptToSelectId(data));
  // }

  // useEffect(() => {
  //   dispatch(eventActions.ShipToList(mynumber ? mynumber : accountName));
  // },[mynumber ? mynumber : accountName]);

  console.log("shipToList+++", shipToList);

  const options = [
    { label: 'Option 1', value: 'option_1' },
    { label: 'Option 2', value: 'option_2' },
    { label: 'Option 3', value: 'option_3' },
    { label: 'Option 4', value: 'option_4' },
  ]

  const option = shipToList && shipToList.map((shipto) => {
    return {
      label: shipto.shipToName + ' - ' + shipto.shipToId,
      value: shipto.shipToId
    }
  })



   
console.log("sdsfd",props.myList);

  return (
    <div className="select_option">
      <MultiSelect
        name={"shipToList"}
        onChange={e => props.handleInputChange(e, props.i)}
        options={option}
        value={props.shiptolist}
        placeholder ={props.myList}
        // displayValue="key"
         selectedValues={props.myList}

      />

     
    </div>
  )
}
export default SelectWithShipTo;