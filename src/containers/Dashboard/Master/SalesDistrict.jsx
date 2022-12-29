import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import AddSalesDistrictPopup from "../../../components/ModalPopup/AddSalesDistrictPopup";
import BusinessTable from "../../../components/FunctionalTable/BusinessTable";
import {Link} from "react-router-dom";
import EditSalesDistrict from "../../../components/MasterPopup/EditSalesDistrict";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";

function SalesDistrict(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [salesDistrict, setSalesDistrict] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const salesdistrict = useSelector((state) => state.salesdistrictmaster.getsalesdistrict);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getSalesDistrict(userName.countryCode));
    }, []);

    console.log("salesdistrict",salesdistrict);

    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, name, satus, code) => {
        setSalesDistrict({ 'name': name, 'satus': satus, 'code':code });
        setPopupopen(true);
    }



    return (
        <>
            <div className="content-wrapper">
                <Header title="Sales District" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                        <AddSalesDistrictPopup title="Add Sales District" />
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 mt-2 view_section fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Sales District Name</th>
                                        <th>Status</th>
                                        <th>Sales District Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {salesdistrict
                                        ? salesdistrict.map((unitItem) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.name, unitItem.status, unitItem.code)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>{unitItem.name}</td>
                                                    <td>{unitItem.status}</td>
                                                    <td>{unitItem.code}</td>
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

            <EditSalesDistrict salesDistrict={salesDistrict} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>
        </>
    );
}

export default withTranslation()(SalesDistrict);
