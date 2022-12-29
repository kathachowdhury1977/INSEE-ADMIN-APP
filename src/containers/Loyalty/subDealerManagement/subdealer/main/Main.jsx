import React from "react";
import "./Main.scss";
import { withTranslation } from "react-i18next";
// import { useDispatch, useSelector } from "react-redux";
import Header from "../../../../../components/Header/Header";
import SubDealerList from "./SubDealerList";


// import LoyaltyReportsTabs from "./LoyaltyReportsTabs";


function Main(props) {
    // const event = useSelector((state) => state);
    // const { t } = useTranslation();
    // const dispatch = useDispatch();
    // const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


    // let userName = localStorage.getItem('userData');
    // userName = JSON.parse(userName);

    return (
        <>
            <div className="content-wrapper">
                <Header title="Sub Dealer Management List" />
                <div className="row ipad_css ">
                    <div className="mainScroll mainScroll-subdealer">                        
                            <div className="col-12 mt-2">
                                <SubDealerList />
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
}

export default withTranslation()(Main);
