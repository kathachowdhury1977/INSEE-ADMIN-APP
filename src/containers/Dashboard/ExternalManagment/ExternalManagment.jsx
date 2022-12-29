import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import "../Dashboard.scss";
import { Link } from "react-router-dom";
import SearchBox from "../../../components/SearchBox/SearchBox";
import SelectBox from "../../../components/SelectBox/SelectBox";
import AddRolePopup from "../../../components/ModalPopup/AddRolePopup";

function ExternalManagment(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(eventActions.allEvent());
    }, []);

    return (
        <>
            <div className="content-wrapper">
                <Header title="External User Managment" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                          <div className="row">
                                <div className="col-6">
                                    <SearchBox placeholder="Search user..." />
                                </div>
                                <div className="col-6">
                                    <div className="button_popup">
                                        {/* <AddRolePopup title="ADD ROLE" /> */}
                                        <Link to="/UserManagmentForm" className="ml-3 add-button">Add External User</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12">
                                    <select className="select_box mr-2" name="" id="">
                                        <option value="">Role</option>
                                        <option value="">Retailer</option>
                                        <option value="">Distributor</option>
                                        <option value="">CPM</option>
                                        <option value="">Small Control</option>
                                        <option value="">Trader</option>
                                        <option value="">RMX Producer</option>
                                        <option value="">Developer</option>
                                        <option value="">Contractor</option>
                                        <option value="">Agent</option>
                                    </select>
                                    <select className="select_box mr-2" name="" id="">
                                        <option value="">Divison</option>
                                    </select>
                                    <select className="select_box mr-2" name="" id="">
                                        <option value="">Segment</option>
                                    </select>
                                    <select className="select_box" name="" id="">
                                        <option value="">Country</option>
                                    </select>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table class="table table-bordered mt-2">
                                    <thead>
                                        <tr>
                                            <th>Customer Name</th>
                                            <th>Customer Id</th>
                                            <th>Email Address</th>
                                            <th>Mobile Number</th>
                                            <th>Division</th>
                                            <th>Segment</th>
                                            <th>Region</th>
                                            <th>Province</th>
                                            <th>District</th>
                                            <th>Sub-District</th>
                                            <th>Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><Link to="/ExternalMangamentDetailList" className="user_list">Puruksha Enterprise Limited</Link></td>
                                            <td>215466922</td>
                                            <td>john@gmail.com</td>
                                            <td>845249533</td>
                                            <td>RMX</td>
                                            <td>B2B</td>
                                            <td>North Bangkok</td>
                                            <td>Thing Chong</td>
                                            <td>Chung Mong</td>
                                            <td>Tungmin</td>
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

export default withTranslation()(ExternalManagment);
