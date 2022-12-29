import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import AddOrderTypePopup from "../../../components/ModalPopup/AddOrderTypePopup";
import BusinessTable from "../../../components/FunctionalTable/BusinessTable";
import { Link } from "react-router-dom";
import EditOrderType from "../../../components/MasterPopup/EditOrderType";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";

function OrderType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [orderType, setOrderType] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const ordertype = useSelector((state) => state.ordertypemaster.getordertype);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getOrderType(userName.countryCode));
    }, []);

    console.log("ordertype", ordertype);


    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, key, value) => {
        setOrderType({ 'key': key, 'value': value });
        setPopupopen(true);
    }

    return (
        <>
            <div className="content-wrapper">
                <Header title="Order Type" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                        <AddOrderTypePopup title="Add order Type" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 view_section fixTableHead">
                                <table class="table table-bordered guideline_table">
                                    <thead>
                                        <tr>
                                            <th>Action</th>
                                            <th>Order Name</th>
                                            <th>Order Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ordertype
                                            ? ordertype.map((unitItem) => {
                                                return (
                                                    <tr>
                                                        <td>
                                                            <div className="action">
                                                                <span className="category_icon">
                                                                    <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                                </span>
                                                                <span className="category_icon edit_conwood">
                                                                    <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.key, unitItem.value)}></i>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>{unitItem.key}</td>
                                                        <td>{unitItem.value}</td>
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
            <EditOrderType orderType={orderType} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>
        </>
    );
}

export default withTranslation()(OrderType);
