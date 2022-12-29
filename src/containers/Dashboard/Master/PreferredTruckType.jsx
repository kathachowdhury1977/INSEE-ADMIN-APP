import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import PreffredTruckPopup from "../../../components/ModalPopup/PreffredTruckPopup";
import BusinessTable from "../../../components/FunctionalTable/BusinessTable";
import { Link } from "react-router-dom";
import EditTruckType from "../../../components/MasterPopup/EditTruckType";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";

function PreferredTruckType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [truckType, setTruckType] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const preferredtrucktypes = useSelector((state) => state.preferredtrucktypesmaster.getpreferredtrucktypes);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getPreferredTruckTypes(userName.countryCode));
    }, []);

    console.log("preferredtrucktypes", preferredtrucktypes);

    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, name, countryCode) => {
        setTruckType({ 'name': name, 'countryCode': countryCode });
        setPopupopen(true);
    }


    return (
        <>
            <div className="content-wrapper">
                <Header title="Preferred Truck Type" />

                <div className="row ipad_css">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                        <PreffredTruckPopup title="Add Preferred Truck Type" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 view_section fixTableHead">
                                <table class="table table-bordered guideline_table">
                                    <thead>
                                        <tr>
                                            <th>Action</th>
                                            <th>Preferred Truck Name</th>
                                            {/* <th>Value</th> */}
                                            <th>Country Code</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {preferredtrucktypes
                                            ? preferredtrucktypes.map((unitItem) => {
                                                return (
                                                    <tr>
                                                        <td>
                                                            <div className="action">
                                                                <span className="category_icon">
                                                                    <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                                </span>
                                                                <span className="category_icon edit_conwood">
                                                                    <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.name, unitItem.countryCode)}></i>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>{unitItem.name}</td>
                                                        {/* <td>{unitItem.value}</td> */}
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
            <EditTruckType truckType={truckType} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>
        </>
    );
}

export default withTranslation()(PreferredTruckType);
