import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import Texbox from "../../../components/Tabs/TextBox";
import Button from "../../../components/Tabs/Button";

import ".././Dashboard.scss";


function Demo(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [firstName, setFirstName] = React.useState("");
    const [lastname, setLastName] = React.useState("");

    
    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);


    console.log("firstName",firstName);
    console.log("lastname",lastname);

    const SbumitHandler =() => {
        setFirstName("Satyendra")
        setLastName("Sharma") 
    }

    return (
        <>
            <div className="content-wrapper">
                <Header title="Loyalty Reports" />
                <div className="row ipad_css">
                    <div className="mainScroll">
                        <div className="mt-2">
                            <div className="col-12">
                               <input type ="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                                 <input type ="text" value={lastname} onChange={(event) => setLastName(event.target.value)}/>

                                 <button onClick={SbumitHandler}>Submit</button>
                                 
                            </div>
                        </div>
                       

                    </div>
                </div>
            </div>
            
        </>
    );
}

export default withTranslation()(Demo);
