import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import Header from "../../../components/Header/Header";
import { useHistory } from "react-router-dom";
import "../Dashboard.scss";
import SoldToTabsDesign from "../../../components/Tabs/SoldToTabsDesign";


function ExternalMangamentDetailList(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();
    const { accountName } = location.state;
    const { soldtoNumber } = location.state;
    let history = useHistory();
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


    const addContactform = (event, accountName, soldtoNumber) => {
        history.push("/AddContactForm", { accountName, soldtoNumber });
    }


    return (
        <>
            <div className="content-wrapper">
                <Header title="Sold to Management List" />

                <div className={"row ipad_css "  +  MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">
                                <div className="col-12 mt-2">
                                    <div className="header_head">
                                        <h6>Sold To Number<br />
                                            <span className="account_dt text-danger">{accountName}</span>
                                        </h6>

                                        <h6 className="">
                                            Account Name<br />
                                            <span className="account_dt text-danger">{soldtoNumber}</span>
                                        </h6>
                                    </div>

                                </div>

                                <div className="col-3">
                                    {/* <div className="button_popup">
                                        <button onClick={(event) => addContactform(event,accountName,soldtoNumber)} accountName={accountName} soldtoNumber={soldtoNumber} className="add-button ml-2">Add Contact</button>
                                    </div> */}
                                </div>

                            </div>
                            <div className="mb-3 pb-4">

                                <SoldToTabsDesign />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(ExternalMangamentDetailList);
