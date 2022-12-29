import React, { useEffect } from "react";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "../../../_actions";
import EditHolidayMaster from "../../../components/MasterPopup/EditHolidayMaster";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';



const AllHolidayWeekendList = () => {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [actionCategory, setActionCategory] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const WeekWise = useSelector((state) => state.weekendholidaylist);
    const dateWise = useSelector((state) => state.allholidaymasterlist);


    useEffect(() => {
        dispatch(eventActions.getAllWeekendHolidayList());
    }, []);

    useEffect(() => {
        dispatch(eventActions.getAllHolidayMasterList());
    }, []);

    console.log("WeekWise", WeekWise);

    const rows = WeekWise.weekendholidaylist;
    const rows1 = dateWise.allholidaymasterlist;








    return (
        <>
            <div className="col-12 mt-2 view_section p-0">
                <div className="fixTableHead" style={{ height: "calc(100vh - 222px)"}}>
                    <table class="table table-bordered guideline_table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Day</th>
                            </tr>
                        </thead>
                        <tbody>

                            {dateWise && dateWise.loading ? <Loader /> :

                                rows1 ? rows1.map((list) => {
                                    return (
                                        <tr>
                                            <td>Holiday</td>
                                            <td>{moment(list.date).format("DD-MM-YYYY")}</td>
                                            <td>{list.occasion}</td>

                                        </tr>
                                    );
                                }
                                )
                                    : <div className="no_record">No Record Found</div>
                            }


                            {WeekWise && WeekWise.loading ? <Loader /> :

                                rows ? rows.map((list) => {
                                    return (
                                        <tr>
                                            <td>{list.day === "Saturday" || list.day === "Sunday" ? "Weekend" : null}</td>
                                            <td>{list.date}</td>
                                            <td>{list.day}</td>

                                        </tr>
                                    );
                                }
                                )
                                    : <div className="no_record">No Record Found</div>
                            }



                        </tbody>
                    </table>
                </div>
                <EditHolidayMaster actionCategory={actionCategory} popupopen={popupopen} setOpen={setPopupopen} />
                <div>
                    {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteHolidayMaster(categoryDelete)} open={open} setOpen={setOpen} />}
                </div>
                <div className="button_popup float-left mt-2">
                    <Link className="add-button bg-dark" to="/Master">Back</Link>
                </div>
            </div>

        </>
    )
}

export default AllHolidayWeekendList;