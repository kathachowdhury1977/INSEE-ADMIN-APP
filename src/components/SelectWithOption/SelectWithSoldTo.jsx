import React, { useState, useEffect } from 'react';
import MultiSelect from  'react-multiple-select-dropdown-lite';
import  'react-multiple-select-dropdown-lite/dist/index.css';
import "./selectoption.scss"
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

const SelectWithSoldTo = () => {
  const dispatch = useDispatch();
  const Soldtowithdivision = useSelector((state) => state.soldtoselectwithdivision.soldtoselectwithdivision);
  const productselectid = useSelector((state) => state.productselectid.productselectid);
  const [value, setvalue] = useState([])
  console.log("productselectid",productselectid);
  const location = useLocation();
  const { accountName } = location.state;



  const  handleOnchange  =  (val,event)  => {
    setvalue(val)
    var data = val.split(",")
    console.log(("data+++",data))
   
    dispatch(eventActions.productSelectId(data));
  }

  useEffect(() => {
    dispatch(eventActions.SoldToSelectWithDivision());
}, []);

  // const  options  = [
  //   { label:  'Option 1', value:  'option_1'  },
  //   { label:  'Option 2', value:  'option_2'  },
  //   { label:  'Option 3', value:  'option_3'  },
  //   { label:  'Option 4', value:  'option_4'  },
  // ]

  const option = Soldtowithdivision && Soldtowithdivision.map((division) =>{
    return {
      label: division,
      value: division
    }
  }) 

  console.log("search with option", Soldtowithdivision);

  return(
    <div className="select_option">
      <MultiSelect
        onChange={handleOnchange}
        options={option}
      />
    </div>
)}
export  default SelectWithSoldTo;