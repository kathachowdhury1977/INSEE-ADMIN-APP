import React from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddCustomerCategoryPopup from "../../../components/ModalPopup/AddCustomerCategoryPopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";


function CustomerCategory(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();





    return (
        <>
            <div className="content-wrapper">
                <Header title="Customer Category" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddCustomerCategoryPopup title="Add Customer Category" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                            <table class="table table-bordered guideline_table mt-3">
                                <thead>
                                    <tr>
                                        <th>Customer Category Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>category name</td>
                                        <td>Active</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="button_popup float-left mt-2">
                                <Link className="add-button bg-dark" to="/Master">Back</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default withTranslation()(CustomerCategory);
