import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import  '../../containers/Home/Home.scss';

const LanguageSelector = () => {

  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);


  };


  return (

    <div className="languageselector" onChange={changeLanguage}>

     <label> <input type="radio" className="radio" value="en" name="language" defaultChecked /> English</label>

     <label>  <input type="radio" className="radio" value="th" name="language" /> Thailand</label>

     <label>  <input type="radio" className="radio" value="vt" name="language" />

      Vietnam</label>

      <label>  <input type="radio"  className="radio" value="sl" name="language" /> Sri Lanka</label>

    </div>

  );

};


export default LanguageSelector;