import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import SoldToShipTable from "./SoldToShipTable";



function SoldToShip(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();

    return (
        <>
            <div className="table-responsive table_design">
                <SoldToShipTable />
            </div>
        </>
    );
}

export default withTranslation()(SoldToShip);
