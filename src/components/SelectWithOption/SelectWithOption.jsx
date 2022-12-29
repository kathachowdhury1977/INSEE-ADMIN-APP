import React, { useState, useEffect } from 'react';
import MultiSelect from  'react-multiple-select-dropdown-lite';
import  'react-multiple-select-dropdown-lite/dist/index.css';
import "./selectoption.scss"
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";

const SelectWithOption = () => {
  const dispatch = useDispatch();
  const ProductActiveAssignList = useSelector((state) => state.productactiveassignlist.productactiveassignlist);
  const productselectid = useSelector((state) => state.productselectid.productselectid);
  const [value, setvalue] = useState([])


  const  handleOnchange  =  val  => {
    setvalue(val)
    var data = val.split(",")
   
    dispatch(eventActions.productSelectId(data));
  }

  useEffect(() => {
    dispatch(eventActions.ProductActiveAssignList());
}, []);

  // const  options  = [
  //   { label:  'Option 1', value:  'option_1'  },
  //   { label:  'Option 2', value:  'option_2'  },
  //   { label:  'Option 3', value:  'option_3'  },
  //   { label:  'Option 4', value:  'option_4'  },
  // ]

  const option = ProductActiveAssignList && ProductActiveAssignList.map((item) =>{
    return {
      label: item.productGroupName,
      value: item.productGroupId
    }
  }) 

  console.log("search with option", ProductActiveAssignList);

  return(
    <div className="select_option">
      <MultiSelect
        onChange={handleOnchange}
        options={option}
      />
    </div>
)}
export  default SelectWithOption;