import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { useLocation } from 'react-router-dom';
import RetailerSubDealerTabs from "../../../components/Tabs/RetailerSubDealerTabs";

function RetailerDetailList(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();
    const { retailerCode } = location.state;
    const { retailerName } = location.state;
    const { userId } = location.state;
    const { contactPersonDetails } = location.state;
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


   



    useEffect(() => {
        // console.log('rajeev')
        // dispatch(eventActions.retailerSubdealers(50, serchTextValue ? serchTextValue : '', 1));
    }, []);


    return (
        <>
            <div className="content-wrapper">
                <Header title={"Retailer / Sub Dealer Management List"} />

                <div className={"row view_section ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="row col-12">
                            <div className="col-12 mt-2">
                                <div className="header_head">
                                    <h6>Retailer Code<br />
                                        <span className="account_dt text-danger">{retailerCode}</span>
                                    </h6>

                                    <h6 className="">
                                        Retailer Name<br />
                                        <span className="account_dt text-danger">{retailerName}</span>
                                    </h6>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 mt-2">
                            <RetailerSubDealerTabs/>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(RetailerDetailList);
