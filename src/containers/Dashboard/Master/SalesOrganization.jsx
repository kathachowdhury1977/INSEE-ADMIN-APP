import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import AddSalesOrganizationPopup from "../../../components/ModalPopup/AddSalesOrganizationPopup";
import BusinessTable from "../../../components/FunctionalTable/BusinessTable";
import {Link} from "react-router-dom";
import EditSalesOragnization from "../../../components/MasterPopup/EditSalesOragnization";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";

function SalesOrganization(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [salesOrg, setSalesOrg] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const salesorganization = useSelector((state) => state.salesorganizationmaster.getsalesorganization);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getSalesOrganization(userName.countryCode));
    }, []);

    console.log("salesorganization", salesorganization);

    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, key, value, countryCode) => {
        setSalesOrg({ 'key': key, 'value': value, 'countryCode':countryCode });
        setPopupopen(true);
    }
      

    return (
        <>
            <div className="content-wrapper">
                <Header title="Sales Organizaton" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                        <AddSalesOrganizationPopup title="Add Sales Organizaton" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 view_section fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Sales Organizaton Code</th>
                                        <th>Sales Organizaton Name</th>
                                        <th>Country Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {salesorganization
                                        ? salesorganization.map((unitItem) => {
                                            return (
                                                <tr>
                                                    <td>
                                                    <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.key, unitItem.value,unitItem.countryCode)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    
                                                    <td>{unitItem.key}</td>
                                                    <td>{unitItem.value}</td>
                                                    <td>{unitItem.countryCode}</td>
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
            <EditSalesOragnization salesOrg={salesOrg} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>
        </>
    );
}

export default withTranslation()(SalesOrganization);
