import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import AddTrackTypePopup from "../../../components/ModalPopup/AddTrackTypePopup";
import BusinessTable from "../../../components/FunctionalTable/BusinessTable";
import {Link} from "react-router-dom";

function TrackTypeMaster(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(eventActions.allEvent());
    }, []);

    const tableData = {
        data: [
            { name: "4W", status: "Active", createdate: "28/02/2021", createby: "200011", modifieddate: "02/03/2021", modifiedby: "300011" },
            { name: "6W", status: "Active", createdate: "28/02/2021", createby: "200011", modifieddate: "02/03/2021", modifiedby: "300011" },
            { name: "10W", status: "Active", createdate: "28/02/2021", createby: "200011", modifieddate: "02/03/2021", modifiedby: "300011" },
            { name: "18W", status: "Active", createdate: "28/02/2021", createby: "200011", modifieddate: "02/03/2021", modifiedby: "300011" }
        ],
        resolve: () => { },
        updatedAt: new Date()
    };

    const comonscol = [
        { title: "Truck Type Name", field: "name" },
        { title: "Truck Type Status", field: "status" },
        { title: "Created Date", field: "createdate" },
        { title: "Created By", field: "createby" },
        { title: "Modified Date", field: "modifieddate" },
        { title: "Modified By", field: "modifiedby", }
    ];


    return (
        <>
            <div className="content-wrapper">
                <Header title="Truck Type Master" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">
                                <div className="col-3 text-left guide_month_year">
                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                        <AddTrackTypePopup title="Add Truck Type" />
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive table_design">
                                <BusinessTable tableData={tableData} comonscol={comonscol} />

                                <div className="button_popup float-left mt-2">
                                    <Link className="add-button bg-dark" to="/Master">Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(TrackTypeMaster);
