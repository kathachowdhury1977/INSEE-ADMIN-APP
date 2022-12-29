import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import SubDealerTable from "./SubDealerTable";


function SubDealer(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();

    return (
        <>



            <div className="table-responsive table_design">
                <SubDealerTable/>
            </div>
        </>
    );
}

export default withTranslation()(SubDealer);
