import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import CustomerGroupPopup from "../../../components/ModalPopup/CustomerGroupPopup";

function CustomerGroupMaster(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const customerList = useSelector((state) => state.getcustomergroup.getcustomergroup);

    useEffect(() => {
        dispatch(eventActions.GetcustomerGroup());
    }, []);

    console.log("customerList", customerList);

    return (
        <>
            <div className="content-wrapper">
                <Header title="Customer Group Master" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                        <CustomerGroupPopup title="Add Customer Group" />
                                    </div>
                                </div>
                            </div>


                            <div className="table-responsive">
                                <table class="table table-bordered guideline_table mt-3">
                                    <thead>
                                        <tr>
                                            <th>Customer Group</th>
                                            <th>Customer Group Code</th>
                                            <th>Segment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customerList
                                            ? customerList.map((customeritem) => {
                                                return (
                                                    <tr>
                                                        <td>{customeritem.customerGroup}</td>
                                                        <td>{customeritem.code}</td>
                                                        <td>{customeritem.segment}</td>
                                                    </tr>
                                                );
                                            })
                                            : null
                                        }

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

export default withTranslation()(CustomerGroupMaster);
