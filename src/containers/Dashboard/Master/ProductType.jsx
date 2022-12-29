import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddProductTypePopup from "../../../components/ModalPopup/AddProductTypePopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditProductType from "../../../components/MasterPopup/EditProductType";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";


function ProductType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [productType, setProductType] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');



    const producttype = useSelector((state) => state.producttypemaster.getproducttype);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getProductType(userName.countryCode));
    }, []);

    console.log("producttype", producttype);

    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, name, satus) => {
        setProductType({ 'name': name, 'satus': satus });
        setPopupopen(true);
    }



    return (
        <>
            <div className="content-wrapper">
                <Header title="Product Type" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddProductTypePopup title="Add Product Type" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Product Type Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {producttype
                                        ? producttype.map((unitItem) => {
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
            <EditProductType productType={productType} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(ProductType);
