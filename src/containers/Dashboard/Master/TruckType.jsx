import React,{ useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddTruckTypePopup from "../../../components/ModalPopup/AddTruckTypePopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditTruckTypePopup from "../../../components/MasterPopup/EditTruckTypePopup";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";


function AreaType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [truckType, setTruckType] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');


    const trucktype = useSelector((state) => state.trucktypemaster.gettrucktype);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getTruckType(userName.countryCode));
    }, []);

    console.log("trucktype",trucktype);


    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, name, status) => {
        setTruckType({ 'name': name, 'status': status });
        setPopupopen(true);
    }



    return (
        <>
            <div className="content-wrapper">
                <Header title="Truck Type" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddTruckTypePopup title="Add Truck Type" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section fixTableHead">
                            <table class="table table-bordered guideline_table">
                            <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Truck Type</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {trucktype
                                        ? trucktype.map((unitItem) => {
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

            <EditTruckTypePopup truckType={truckType} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(AreaType);
