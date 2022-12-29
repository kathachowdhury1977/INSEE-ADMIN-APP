import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import AddDeliveryModePopup from "../../../components/ModalPopup/AddDeliveryModePopup";
import BusinessTable from "../../../components/FunctionalTable/BusinessTable";
import {Link} from "react-router-dom";

function DeliveryMode(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const deliverymode = useSelector((state) => state.deliverymodemaster.getdeliverymode);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getDeliveryMode(userName.countryCode));
    }, []);

    console.log("deliverymode", deliverymode);
    const tableData = {
        data: [
            { name: "Delivered", status: "Active", createdate: "28/02/2021", createby: "200011", modifieddate: "02/03/2021", modifiedby: "300011" },
            { name: "Pickup", status: "Active", createdate: "28/02/2021", createby: "200011", modifieddate: "02/03/2021", modifiedby: "300011" },
            { name: "Both", status: "Active", createdate: "28/02/2021", createby: "200011", modifieddate: "02/03/2021", modifiedby: "300011" }
        ],
        resolve: () => {},
        updatedAt: new Date()
      };
      
      const comonscol = [
        { title: "Name", field: "name" },
        { title: "Status", field: "status" },
        { title: "Created Date", field: "createdate" },
        { title: "Created By", field: "createby" },
        { title: "Modified Date", field: "modifieddate" },
        { title: "Modified By", field: "modifiedby", }
      ];
      

    return (
        <>
            <div className="content-wrapper">
                <Header title="Delivery Mode" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                        <AddDeliveryModePopup title="Add Delivery Mode" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 view_section">
                            <table class="table table-bordered guideline_table mt-3">
                                <thead>
                                    <tr>
                                        <th>Delivery Mode Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {deliverymode
                                        ? deliverymode.map((unitItem) => {
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

export default withTranslation()(DeliveryMode);
