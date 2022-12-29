import React from "react";
import { withTranslation, useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";

function Wip(props) {  
    return (
        <>
            <div className="content-wrapper">
                <Header title="Coming Soon" />
                <div className={"row ipad_css "}>
                    <div className="mainScroll">
                        <div className="mt-2 dashboard_page">
                              Coming Soon...
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    );
}

export default Wip;
