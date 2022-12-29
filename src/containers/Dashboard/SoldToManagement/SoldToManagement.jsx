import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import SoldToManagmentTable from "../../../components/MaterialTable/SoldToManagmentTable";


function SoldToManagment(props) {
  const event = useSelector((state) => state);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);




  let userName = localStorage.getItem('userData');
  userName = JSON.parse(userName);

  
  return (
    <>
      <div className="content-wrapper">
        <Header title="Sold To Managment" />

        <div className={"row view_section ipad_css " + MyNewClass}>
          <div className="mainScroll">
            
          
            <div className="col-12 mt-2 mrg-top">
              <div className="table-responsive table_design retaiter-table">
                <SoldToManagmentTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(SoldToManagment);
