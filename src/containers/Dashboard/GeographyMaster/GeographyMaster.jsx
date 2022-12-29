import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import GeographyMaterialTable from "../../../components/MaterialTable/GeographyMaterialTable";
import GeographyMasterPopup from "../../../components/ModalPopup/GeographyMasterPopup";

function GeographyMaster(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    return (
        <>
            <div className="content-wrapper">
                <Header title="Geography Master" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-7 text-left guide_month_year">

                                </div>
                                <div className="col-5">
                                    <div className="button_popup">
                                        <Link className="add-button">Download</Link>
                                        <GeographyMasterPopup title="Upload Geography Master" />
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive table_design">
                                <GeographyMaterialTable/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(GeographyMaster);
