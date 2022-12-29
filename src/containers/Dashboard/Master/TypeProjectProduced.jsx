import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import AddTypeProjectProceedPopup from "../../../components/ModalPopup/AddTypeProjectProceedPopup";
import BusinessTable from "../../../components/FunctionalTable/BusinessTable";
import {Link} from "react-router-dom";

function TypeProjectProduced(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const pricetype = useSelector((state) => state.pricetypemaster.getpricetype);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getPriceType(userName.countryCode));
    }, []);

    console.log("pricetype", pricetype);

    const tableData = {
        data: [
            { name: "Foundation Products", status: "Active", createdate: "22/02/2021", createby: "200011", modifieddate: "24/02/2021", modifiedby: "30003" },
            { name: "Structural Beams Products", status: "Active", createdate: "22/02/2021", createby: "200011", modifieddate: "24/02/2021", modifiedby: "30003" },
            { name: "Slab Products", status: "Active", createdate: "22/02/2021", createby: "200011", modifieddate: "24/02/2021", modifiedby: "30003" },
            { name: "Wall Products", status: "Active", createdate: "22/02/2021", createby: "200011", modifieddate: "24/02/2021", modifiedby: "30003" },
            { name: "Precast Facade Products", status: "Active", createdate: "22/02/2021", createby: "200011", modifieddate: "24/02/2021", modifiedby: "30003" },
            { name: "Others", status: "Active", createdate: "22/02/2021", createby: "200011", modifieddate: "24/02/2021", modifiedby: "30003" }
        ],
        resolve: () => { },
        updatedAt: new Date()
    };

    const comonscol = [
        { title: "Project Produced Name", field: "name" },
        { title: "Project Produced Status", field: "status" },
        { title: "Created Date", field: "createdate" },
        { title: "Created By", field: "createby" },
        { title: "Modified Date", field: "modifieddate" },
        { title: "Modified By", field: "modifiedby", }
    ];


    return (
        <>
            <div className="content-wrapper">
                <Header title="Type of Project Produced Master" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">
                                <div className="col-3 text-left guide_month_year">
                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                        <AddTypeProjectProceedPopup title="Add Type of Project Produced" />
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive table_design">
                            <table class="table table-bordered guideline_table mt-3">
                                <thead>
                                    <tr>
                                        <th>Price Type Name</th>
                                        <th>Price Type Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {pricetype
                                        ? pricetype.map((unitItem) => {
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
                                {/* <BusinessTable tableData={tableData} comonscol={comonscol} /> */}

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

export default withTranslation()(TypeProjectProduced);
