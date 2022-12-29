import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import "../Dashboard.scss";
import SoldtoContactTable from "./SoldtoContactTable";
import { ToastContainer, toast } from 'react-toastify';



function SoldToContact(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();
    const { accountName } = location.state;
    const { soldtoNumber } = location.state;
   

    return (
        <>
            <div className="table-responsive table_design retaiter-table">
                <SoldtoContactTable searchValue={props.searchValue} />
            </div>

        </>
    );
}

export default withTranslation()(SoldToContact);
