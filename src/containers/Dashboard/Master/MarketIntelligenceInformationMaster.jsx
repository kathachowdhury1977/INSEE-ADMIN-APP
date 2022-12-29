import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import MarketIntelligencePopup from "../../../components/ModalPopup/MarketIntelligencePopup";
import BusinessTable from "../../../components/FunctionalTable/BusinessTable";
import {Link} from "react-router-dom";
import EditMarketIntelligence from "../../../components/MasterPopup/EditMarketIntelligence";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";


function MarketIntelligenceInformationMaster(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [marketIntelligence, setMarketIntelligence] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const marketintelligencemaster = useSelector((state) => state.marketintelligencemaster.getmarketintelligence);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getMarketIntelligence(userName.countryCode));
    }, []);

    console.log("marketintelligencemaster",marketintelligencemaster);

    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, name, satus) => {
        setMarketIntelligence({ 'name': name, 'satus': satus });
        setPopupopen(true);
    }

    return (
        <>
            <div className="content-wrapper">
                <Header title="Market intelligence Information" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">
                                <div className="col-3 text-left guide_month_year">
                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                        <MarketIntelligencePopup title="Add Market intelligence Information" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 view_section fixTableHead">
                            {/* <div className="table-responsive table_design"> */}
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Market Intelligence Information Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {marketintelligencemaster
                                        ? marketintelligencemaster.map((unitItem) => {
                                            return (
                                                <tr>
                                                     <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.name, unitItem.status)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
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
            
            <EditMarketIntelligence marketIntelligence={marketIntelligence} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(MarketIntelligenceInformationMaster);
