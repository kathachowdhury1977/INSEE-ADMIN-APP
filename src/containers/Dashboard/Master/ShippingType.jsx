import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ShippingTypePopup from "../../../components/ModalPopup/ShippingTypePopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditShippingType from "../../../components/MasterPopup/EditShippingType";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";


function ShippingType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [shippingTypeI, setShippingType] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const shippingType = useSelector((state) => state.shippingtype.shippingtype);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.shppingType(userName.countryCode));
    }, []);

    console.log("shippingType", shippingType);

    let rows = shippingType ? shippingType : [];
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

    const handlepen = (event, key, value, countryCode) => {
        setShippingType({ 'key': key, 'value': value, 'countryCode':countryCode });
        setPopupopen(true);
    }


    return (
        <>
            <div className="content-wrapper">
                <Header title="Shipping Type" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <ShippingTypePopup title="Add Shipping Type" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Shipping Type Code</th>
                                        <th>Description (ENG)</th>
                                        <th>Country Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows ? rows.map((shippingitem) => {
                                        return (
                                            <tr>
                                                  <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, shippingitem.key, shippingitem.value, shippingitem.countryCode)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                <td>{shippingitem.key}</td>
                                                <td>{shippingitem.value}</td>
                                                <td>{shippingitem.countryCode}</td>

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

            <EditShippingType shippingTypeI={shippingTypeI} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>


        </>
    );
}

export default withTranslation()(ShippingType);
