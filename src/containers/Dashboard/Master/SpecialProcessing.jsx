import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import SpecialProcessingPopup from "../../../components/ModalPopup/SpecialProcessingPopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditSpecialProcess from "../../../components/MasterPopup/EditSpecialProcess";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";


function SpecialProcessing(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [specialProcessing, setSpecialProcessing] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const specialProcess = useSelector((state) => state.specialprocessing.specialprocessing);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.SpecialProcessing(userName.countryCode));
    }, []);

    console.log("specialProcess", specialProcess);

    let rows = specialProcess ? specialProcess : [];
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
        setSpecialProcessing({ 'key': key, 'value': value, 'countryCode':countryCode });
        setPopupopen(true);
    }


    return (
        <>
            <div className="content-wrapper">
                <Header title="Special Processing" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                <SpecialProcessingPopup title="Add Special Processing" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Special Processing Code</th>
                                        <th>Description (ENG)</th>
                                        <th>Country Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows ? rows.map((specialItem) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, specialItem.key, specialItem.value, specialItem.countryCode)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>{specialItem.key}</td>
                                                    <td>{specialItem.value}</td>
                                                    <td>{specialItem.countryCode}</td>
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
            <EditSpecialProcess specialProcessing={specialProcessing} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>
        </>
    );
}

export default withTranslation()(SpecialProcessing);
