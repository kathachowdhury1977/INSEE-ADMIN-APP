import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddPriceBookPopup from "../../../components/ModalPopup/AddPriceBookPopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditPriceBook from "../../../components/MasterPopup/EditPriceBook";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";


function AreaType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [priceBook, setPriceBook] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');


    const pricebook = useSelector((state) => state.pricebookmaster.getpricebook);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getPriceBook(userName.countryCode));
    }, []);

    console.log("pricebook", pricebook);

    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, priceBookKey, priceBookValue) => {
        setPriceBook({ 'priceBookKey': priceBookKey, 'priceBookValue': priceBookValue });
        setPopupopen(true);
    }



    return (
        <>
            <div className="content-wrapper">
                <Header title="Price Book" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddPriceBookPopup title="Add Price Book" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action </th>
                                        <th>Price Book</th>
                                        <th>Price Book Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pricebook
                                        ? pricebook.map((unitItem) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.priceBookKey, unitItem.priceBookValue)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>{unitItem.priceBookKey}</td>
                                                    <td>{unitItem.priceBookValue}</td>
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
            <EditPriceBook priceBook={priceBook} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </> 
    );
}

export default withTranslation()(AreaType);
