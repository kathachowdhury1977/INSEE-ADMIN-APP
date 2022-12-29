import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import BusinessSegmentPopup from "../../../components/ModalPopup/BusinessSegmentPopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";


function BusinessSegment(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const businessSegment = useSelector((state) => state.businesssegment.businesssegment);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getBusinessSegment(userName.countryCode));
    }, []);

    console.log("businessSegment", businessSegment);

    let rows = businessSegment ? businessSegment : [];
    let dataArr = rows.map(item => {
        return [item.value, item]
    });

    let maparr = new Map(dataArr);
    let result = [...maparr.values()];
    rows = result.reverse();


    return (
        <>
            <div className="content-wrapper">
                <Header title="Business Segment" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                  <BusinessSegmentPopup title="Add Business Segment" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                            <table class="table table-bordered guideline_table mt-3">
                                <thead>
                                    <tr>
                                        <th>Business Segment Code</th>
                                        <th>Business Segment Name</th>
                                        <th>Country Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows ? rows.map((BusinessItem) => {
                                            return (
                                                <tr>
                                                    <td>{BusinessItem.key}</td>
                                                    <td>{BusinessItem.value}</td>
                                                    <td>{BusinessItem.countryCode}</td>
                                                </tr>
                                            );
                                        })
                                        : null
                                    }

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

export default withTranslation()(BusinessSegment);
