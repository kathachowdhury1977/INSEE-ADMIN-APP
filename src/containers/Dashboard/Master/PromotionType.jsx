import React,{ useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddPromotionTypePopup from "../../../components/ModalPopup/AddPromotionTypePopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditPromotionType from "../../../components/MasterPopup/EditPromotionType";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";


function AreaType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [promotionType, setPromotionType] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');


    const promotiontype = useSelector((state) => state.promotiontypemaster.getpromotiontype);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getPromotionType(userName.countryCode));
    }, []);

    console.log("promotiontype", promotiontype);

    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, promotionTypeKey, promotionTypeValue) => {
        setPromotionType({ 'promotionTypeKey': promotionTypeKey, 'promotionTypeValue': promotionTypeValue });
        setPopupopen(true);
    }

    return (
        <>
            <div className="content-wrapper">
                <Header title="Promotion Type" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddPromotionTypePopup title="Add Promotion Type" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section fixTableHead">
                            <table class="table table-bordered guideline_table">
                            <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Promotion Type</th>
                                        <th>Promotion Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {promotiontype
                                        ? promotiontype.map((unitItem) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.promotionTypeKey, unitItem.promotionTypeValue)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>{unitItem.promotionTypeKey}</td>
                                                    <td>{unitItem.promotionTypeValue}</td>
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

            <EditPromotionType promotionType={promotionType} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(AreaType);
