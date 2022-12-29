import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddActionStatusPopup from "../../../components/ModalPopup/AddActionStatusPopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import EditActionStatus from "../../../components/MasterPopup/EditActionStatus";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../../../components/Loader/Loader";
import DOMPurify from "dompurify";


function AreaType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [actionStatus, setActionStatus] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

    const Deletestatus = useSelector((state) => state.deleteactionstatus);
    const actionstatus = useSelector((state) => state.actionstatusmaster);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getActionStatus());
    }, []);

    const rows = actionstatus.getactionstatus ? actionstatus.getactionstatus : [];

    const handlepen = (event, key, value) => {
        console.log("myStatus",key, value);
        setActionStatus({ 'key': key, 'value': value });
        setPopupopen(true);
    }

    const handleDelete = (event,key, value) => {
        setOpen(true);
        
        let data ={
            "key": key,
            "value": value
          }

        setCategoryDelete(data)
    }

    

    useEffect(() => {
        if (Deletestatus && !Deletestatus.loading &&
            (Deletestatus.deleteactionstatus)) {
            dispatch(eventActions.getActionStatus());
            toast.success('Action Status has been deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
           
        }
    }, [Deletestatus]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.DeleteActionStatus())
        }
    }, [])


    return (
        <>
            <div className="content-wrapper">
                <Header title="Action Status" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddActionStatusPopup title="Add Action Status" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                            <div className="fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Action Status </th>
                                        <th>value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {actionstatus && actionstatus.loading ? <Loader/> :
                                    rows && rows
                                    .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                    : rows && rows
                                      .slice()
                                      .reverse().map((unitItem) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event,unitItem.key, unitItem.value)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.key, unitItem.value)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.key)}}></td>
                                                    <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.value)}}></td>
                                                </tr>
                                            );
                                        })}
                                       
                                </tbody>
                            </table>
                            </div>
                            <div className="button_popup float-left mt-2">
                                <Link className="add-button bg-dark" to="/Master">Back</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <EditActionStatus actionStatus={actionStatus} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.DeleteActionStatus(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(AreaType);
