import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import AddShippingStatusPopup from "../../../components/ModalPopup/AddShippingStatusPopup";
import BusinessTable from "../../../components/FunctionalTable/BusinessTable";
import {Link} from "react-router-dom";

function ShippingStatus(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(eventActions.allEvent());
    }, []);

    const tableData = {
        data: [
          { type: "Pick up", title: "TH", languagetype: "CM"},
          { type: "Pick-up+MHE", title: "TH", languagetype: "CM" },
          { type: "Delivery", title: "TH", languagetype: "CM"}
        ],
        resolve: () => {},
        updatedAt: new Date()
      };
      
      const comonscol = [
        { title: "Shipping Status type", field: "type"},
        { title: "Country Code", field: "title"},
        { title: "Category", field: "languagetype"}
      ];
      

    return (
        <>
            <div className="content-wrapper">
                <Header title="Shipping Status" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                        <AddShippingStatusPopup title="Add Shipping Type" />
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

export default withTranslation()(ShippingStatus);
