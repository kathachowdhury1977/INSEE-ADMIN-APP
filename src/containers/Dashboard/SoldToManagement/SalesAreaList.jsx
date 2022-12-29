import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import SalesAreaListTable from "./SalesAreaListTable";

function SalesAreaList(props) {
  const event = useSelector((state) => state);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const { accountName } = location.state;
  const { soldtoNumber } = location.state;
  const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


  return (
    <>
      <div className="content-wrapper">
        <Header title="Sales Area List" />

        <div className={"row ipad_css " + MyNewClass}>
          <div className="mainScroll">
            <div className="col-12 view_section">
              <div className="row">
                <div className="col-9 mt-2">
                  <div className="header_head">
                    <h6>Sold To Number<br />
                      <span className="account_dt text-danger">{accountName}</span>
                    </h6>

                    <h6 className="">
                      Account Name<br />
                      <span className="account_dt text-danger">{soldtoNumber}</span>
                    </h6>
                  </div>

                </div>

                <div className="col-3">
                </div>

              </div>

              <div className="table-responsive table_design">
                <SalesAreaListTable />
              </div>
              <div className="button_popup float-left mt-2">
                <Link className="add-button bg-dark" to="/SoldToManagement">Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(SalesAreaList);
