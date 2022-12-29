import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import AddPriceTypePopup from "../../../components/ModalPopup/AddPriceTypePopup";
import BusinessTable from "../../../components/FunctionalTable/BusinessTable";
import {Link} from "react-router-dom";
import EditPriceTypeMaster from "../../../components/MasterPopup/EditPriceTypeMaster";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";

function PriceTypeMaster(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [priceTypeMaster, setPriceTypeMaster] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const pricetype = useSelector((state) => state.pricetypemaster.getpricetype);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getPriceType(userName.countryCode));
    }, []);

    console.log("pricetype", pricetype);

    let rows = pricetype ? pricetype : [];
    let dataArr = rows.map(item => {
        return [item.value, item]
    });

    let maparr = new Map(dataArr);
    let result = [...maparr.values()];
    rows = result.reverse();

    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, name, status) => {
        setPriceTypeMaster({ 'name': name, 'status': status });
        setPopupopen(true);
    }


    return (
        <>
            <div className="content-wrapper">
                <Header title="Price Type Master" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                        <AddPriceTypePopup title="Add Price Type" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 view_section fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Price Type Name</th>
                                        <th>Price Type Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {pricetype
                                        ? pricetype.map((unitItem) => {
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
                            <div className="button_popup float-left mt-2">
                                    <Link className="add-button bg-dark" to="/Master">Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EditPriceTypeMaster priceTypeMaster={priceTypeMaster} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(PriceTypeMaster);
