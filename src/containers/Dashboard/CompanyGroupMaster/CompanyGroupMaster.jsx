import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import GroupCompanyMasterPopup from "../../../components/ModalPopup/GroupCompanyMasterPopup";

function CompanyGroupMaster(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();


    return (
        <>
            <div className="content-wrapper">
                <Header title="Company Group Master" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                        <GroupCompanyMasterPopup title="Add Company Group" />
                                    </div>
                                </div>
                            </div>


                            <div className="table-responsive">
                                <table class="table table-bordered guideline_table mt-3">
                                    <thead>
                                        <tr>
                                            <th>Group Company Code</th>
                                            <th>Group Company Name </th>
                                            <th>Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>G0000000000</td>
                                            <td>Siam City Cement Public Company Limited</td>
                                            <td>TH</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(CompanyGroupMaster);
