import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";

import ".././Dashboard.scss";
import BeatTabs from "./BeatTabs";


function BeatMaster(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    return (
        <>
            <div className="content-wrapper">
                <Header title="Beat master" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="mt-2">
                            <div className="col-12">
                                <BeatTabs />
                            </div>
                        </div>
                       

                    </div>
                </div>
            </div>
            
        </>
    );
}

export default withTranslation()(BeatMaster);
