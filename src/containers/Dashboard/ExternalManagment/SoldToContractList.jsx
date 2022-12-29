import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import ContractList from "./ContractList";


function SoldToContractList(props) {
    const event = useSelector((state) => state);
    let history = useHistory();
    const { t } = useTranslation();



    return (
        <>

            <div className="table-responsive table_design">
                <ContractList />
            </div>
        </>
    );
}

export default withTranslation()(SoldToContractList);
