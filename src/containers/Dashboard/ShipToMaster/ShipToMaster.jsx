import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import {Link} from "react-router-dom";
import ShipTomasterPopup from "../../../components/ModalPopup/ShipTomasterPopup"; 

function ShipToMaster(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(eventActions.allEvent());
    }, []);

    return (
        <>
            <div className="content-wrapper">
                <Header title="Ship To Master" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-7 text-left guide_month_year">
    
                                </div>
                                <div className="col-5">
                                    <div className="button_popup">
                                        <Link className="add-button">Download</Link>
                                        <ShipTomasterPopup title="Upload Ship To Master" />
                                    </div>
                                </div>
                            </div>


                            <div className="table-responsive">
                                <table class="table table-bordered guideline_table mt-3">
                                    <thead>
                                        <tr>
                                            <th>Sold to ID</th>
                                            <th>Ship to Name </th>
                                            <th>Ship to ID</th>
                                            <th>Sales District</th>
                                            <th>Monthly Potential</th>
                                            <th>Create Date </th>
                                            <th>Created By </th>
                                            <th>Updated on </th>
                                            <th>Update By </th>
                                            <th>Ship to Address 1</th>
                                            <th>Ship to Address 2</th>
                                            <th>Ship to Address 3</th>
                                            <th>Ship to Address 4</th>
                                            <th>Ship to Address 5</th>
                                            <th>City</th>
                                            <th>Region</th>
                                            <th>Region Description</th>
                                            <th>Postal Code</th>
                                            <th>Country</th>
                                            <th>Ship to Mobile Number </th>
                                            <th>Ship to latitude </th>
                                            <th>Ship to longitde </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>110000001</td>
                                            <td>Phumsuriya Ladprao18</td>
                                            <td>210043309</td>
                                            <td>ZGMT01</td>
                                            <td></td>
                                            <td>13/07/2015</td>
                                            <td>ZNATAPPRA</td>
                                            <td>13/07/2015</td>
                                            <td></td>
                                            <td>ภูมิสุริยะ ลาดพร้าว 18</td>
                                            <td>PHUMSURIYA</td>
                                            <td>408</td>
                                            <td>Minima explicabo.</td>
                                            <td>ต.อ้อมน้อย</td>
                                            <td>อ.กระทุ่มแบน</td>     
                                            <td>10</td>
                                            <td>กรุงเทพมหานคร</td>
                                            <td>10900</td>
                                            <td>TH</td>
                                            <td>69418481466</td>
                                            <td></td>
                                            <td></td>
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

export default withTranslation()(ShipToMaster);
