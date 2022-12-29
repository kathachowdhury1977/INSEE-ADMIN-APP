import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import "../Dashboard.scss";
import VisitGuideTabs from "../../../components/Tabs/VisitGuideTabs";

function ConwoodProductMaster(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


    return (
        <>
            <div className="content-wrapper">
                <Header title="Conwood Product Master" />

                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <VisitGuideTabs />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(ConwoodProductMaster);
