import React from "react";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";

function Dashboard(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loginData = useSelector((state) => state.loginPage);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);
    
    if(loginData.loginPage != undefined || loginData.loginPage != null){
        localStorage.setItem('userData',JSON.stringify(loginData.loginPage));
      }
 
    return (
        <>
            <div className="content-wrapper">
                <Header title="Dashboard" />
                <div className={"row ipad_css "  +  MyNewClass}>
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

export default withTranslation()(Dashboard);
