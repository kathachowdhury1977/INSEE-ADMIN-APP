import React, { useState, useEffect } from 'react';
import MultiSelect from  'react-multiple-select-dropdown-lite';
import  'react-multiple-select-dropdown-lite/dist/index.css';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import "./Dropdown_section.scss";

const RegionDropdown = () => {
  const dispatch = useDispatch();
  const RegionList = useSelector((state) => state.regionlist.regionlist);
  const reginSelectvalue = useSelector((state) => state.regionselect.regionselect);
  

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.RegionList(userName.countryCode));
    }, []); 


  const [value, setvalue] = useState([]);


  const  handleOnchange  =  val  => {
    
    setvalue(val)
    var data = val.split(",")

   
    dispatch(eventActions.regionSelect(data));
  }

  useEffect(() => {
    dispatch(eventActions.productGroupmasterList());
}, []);


  const optionList = RegionList && RegionList.map((itemlsit) =>{
    return {
      label:itemlsit.region,
      value: itemlsit.region
    } 
  })


  return(
    <div className="dropdown_section">
      <MultiSelect
        onChange={handleOnchange}
        options={optionList}
      />
    </div>
)}
export  default RegionDropdown;
