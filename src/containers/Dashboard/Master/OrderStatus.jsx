import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import AddOrderStatusPopup from "../../../components/ModalPopup/AddOrderStatusPopup";
import BusinessTable from "../../../components/FunctionalTable/BusinessTable";
import {Link} from "react-router-dom";

function OrderStatus(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(eventActions.allEvent());
    }, []);

    const tableData = {
        data: [
          { type: "order1", val: "TH"},
          { type: "order2", val: "TH" },
          { type: "order3", val: "TH" }
        ],
        resolve: () => {},
        updatedAt: new Date()
      };
      
      const comonscol = [
        { title: "Order Status Name", field: "type" },
        { title: "Country", field: "val" }
      ];
      

    return (
        <>
            <div className="content-wrapper">
                <Header title="Order Status" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                        <AddOrderStatusPopup title="Add order status" />
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
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

export default withTranslation()(OrderStatus);
