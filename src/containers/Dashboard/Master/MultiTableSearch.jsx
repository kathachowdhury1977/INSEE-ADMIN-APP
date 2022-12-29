import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

export default function MultiTableSearch(props) {

  return (
    
        <input type = {props.type}  value ={props.defaultValue} placeholder={props.placeholder} onChange={(event) => props.handleSearchValue(event.target.value)}/>
  );
}
