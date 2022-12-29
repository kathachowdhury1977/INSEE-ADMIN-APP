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



const WeekendHoliday = () => {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [actionCategory, setActionCategory] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const WeekWise = useSelector((state) => state.weekendholidaylist);
    const deleteHoliday = useSelector((state) => state.deleteholidaymaster);


    useEffect(() => {
        dispatch(eventActions.getAllWeekendHolidayList());
    }, []);

    console.log("WeekWise", WeekWise);

    const rows = WeekWise.weekendholidaylist;


    const handleDelete = (event, id) => {

        setOpen(true);

        setCategoryDelete(id)
    }

    const handlepen = (event, id, date, occasion) => {
        setActionCategory({ 'id': id, 'date': date, 'occasion':occasion });
        setPopupopen(true);
    }





    useEffect(() => {
        if (deleteHoliday && !deleteHoliday.loading &&
            (deleteHoliday.deleteholidaymaster)) {
                dispatch(eventActions.getAllHolidayMasterList());
            toast.success('Holiday has been deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [deleteHoliday]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteHolidayMaster())
        }
    }, [])

  

    return (
        <>
            <div className="col-12 mt-2 view_section p-0">
                <div className="fixTableHead" style={{ height: "calc(100vh - 261px)"}}>
                    <table class="table table-bordered guideline_table">
                        <thead>
                            <tr>
                                {/* <th>Action</th> */}
                                <th>Date</th>
                                <th>Weekend</th>
                            </tr>
                        </thead>
                        <tbody>
                            {WeekWise && WeekWise.loading ? <Loader /> :

                                rows ? rows.map((list) => {
                                    return (
                                        <tr>
                                            {/* <td>
                                                <div className="action">
                                                    <span className="category_icon">
                                                        <i className="fa fa-trash" onClick={(event) => handleDelete(event,list.id)}></i>
                                                    </span>
                                                    <span className="category_icon edit_conwood">
                                                        <i className="fa fa-edit" onClick={(event) => handlepen(event,list.id,list.date,list.occasion)}></i>
                                                    </span>
                                                </div>
                                            </td> */}
                                            <td>{list.date}</td>
                                            <td>{list.day}</td>

                                        </tr>
                                    );
                                })
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

export default WeekendHoliday;