import React,{ useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddAreaTypePopup from "../../../components/ModalPopup/AddAreaTypePopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";


function AreaType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();


    const areatype = useSelector((state) => state.areatypemaster.getareatype);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getAreaType(userName.countryCode));
    }, []);

    console.log("areatype", areatype);



    return (
        <>
            <div className="content-wrapper">
                <Header title="Area Type" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddAreaTypePopup title="Add Area Type" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                            <table class="table table-bordered guideline_table mt-3">
                            <thead>
                                    <tr>
                                        <th>Area Type Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {areatype
                                        ? areatype.map((unitItem) => {
                                            return (
                                                <tr>
                                                    <td>{unitItem.name}</td>
                                                    <td>{unitItem.status}</td>
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

export default withTranslation()(AreaType);
