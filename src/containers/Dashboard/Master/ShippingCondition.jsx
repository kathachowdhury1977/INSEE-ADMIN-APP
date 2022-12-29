import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ShippingConditionPopup from "../../../components/ModalPopup/ShippingConditionPopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditShippingCondition from "../../../components/MasterPopup/EditShippingCondition";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";

function ShippingCondition(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [shippingCondi, setShippingCondi] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const shippingCondition = useSelector((state) => state.shippingcondition.shippingcondition);
    
    let rows = shippingCondition ? shippingCondition : [];
    let dataArr = rows.map(item => {
        return [item.value, item]
    });

    let maparr = new Map(dataArr);
    let result = [...maparr.values()];
    rows = result.reverse();
    

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getShippingCondition(userName.countryCode));
    }, []);

    console.log("shippingCondition", shippingCondition);

    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, productCategory, value ,countryCode) => {
        setShippingCondi({ 'productCategory': productCategory, 'value': value, 'countryCode':countryCode });
        setPopupopen(true);
    }


    return (
        <>
            <div className="content-wrapper">
                <Header title="Shipping Condition" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <ShippingConditionPopup title="Add Shipping Condition" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        {/* <th>Product Category</th> */}
                                        <th>Action</th>
                                        <th>Shipping Condition Code</th>
                                        <th>Description (EN)</th>
                                        <th>Country Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows
                                        ? rows.map((shiipingItem) => {
                                            return (
                                                <tr>
                                                    
                                                    {/* <td>{shiipingItem.key}</td> */}
                                                    <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, shiipingItem.productCategory, shiipingItem.value, shiipingItem.countryCode)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>{shiipingItem.productCategory}</td>
                                                    <td>{shiipingItem.value}</td>
                                                    <td>{shiipingItem.countryCode}</td>
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

            <EditShippingCondition shippingCondi={shippingCondi} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(ShippingCondition);
