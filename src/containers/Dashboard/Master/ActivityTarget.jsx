import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import AddSpecialProjectPopup from "../../../components/ModalPopup/AddSpecialProjectPopup";
import { Link } from "react-router-dom";
import EditActivityTarget from "../../../components/MasterPopup/EditActivityTarget";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import { ToastContainer, toast } from 'react-toastify'
import UploadActivityTarget from "../../../components/MasterPopup/UploadActivityTarget";
import Loader from "../../../components/Loader/Loader";

function ActivityTarget(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [activityTargetEdit, setActivityTarget] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

    const activityTarget = useSelector((state) => state.activitytarget);
    const DownloadactivityTarget = useSelector((state) => state.downloadactivtytarget.downloadactivtytarget);
    const deleteActivity = useSelector((state) => state.deleteactivitytarget);

  
   console.log("DownloadactivityTarget",DownloadactivityTarget);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.downloadActivityTarget());
    }, []);

    useEffect(() => {
        dispatch(eventActions.getActivityTarget());
    }, []);

   const rows = activityTarget.activitytarget  ? activityTarget.activitytarget : [];
   console.log("activityTarget",rows);
 

    const handleDelete = (event, salesRepId) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(salesRepId)
    }

    useEffect(() => {
        if (deleteActivity && !deleteActivity.loading &&
            (deleteActivity.deleteactivitytarget)) {
                dispatch(eventActions.getActivityTarget());
            toast.success('Activity Target deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            
        }
    }, [deleteActivity]);

    const handlepen = (event,id,salesRepId, visitsPerMonth, defaultStartAndFinishLocation) => {
        setActivityTarget({ 'id':id,'salesRepId':salesRepId,  'visitsPerMonth':visitsPerMonth, 
         'defaultStartAndFinishLocation':defaultStartAndFinishLocation
        });
        setPopupopen(true);
    }

    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteActivityTarget())
        }
    }, [])




    return (
        <>
            <div className="content-wrapper">
                <Header title="Activity Target" />

                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                     <a className="add-button" title="Download Template" href={DownloadactivityTarget && DownloadactivityTarget.activityTargetPath} download> <i class="fa fa-download button-upload" aria-hidden="true"></i> Download</a>
                                        <UploadActivityTarget title="Upload Activity Target" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 view_section">
                                <div className="fixTableHead">
                                    <table class="table table-bordered guideline_table">
                                        <thead>
                                            <tr>
                                                <th>Action</th>
                                                <th>Sales Rep Id</th>
                                             
                                                <th>Visit Per Month</th>
                                               
                                               <th>Default start & finish location</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                             {activityTarget  && activityTarget.loading ? <Loader/> :
                                           rows && rows
                                           .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                           : rows && rows
                                             .slice()
                                             .reverse().map((list) => {
                                                    return ( 
                                                        <tr>
                                                            <td>
                                                                <div className="action">
                                                                    <span className="category_icon">
                                                                        <i className="fa fa-trash" onClick={(event) => handleDelete(event,list.id)}></i>
                                                                    </span>
                                                                    <span className="category_icon edit_conwood">
                                                                        <i className="fa fa-edit" onClick={(event) => handlepen(event,list.id,
                                                                            list.salesRepId, 
                                                                            list.visitsPerMonth,
                                                                            list.defaultStartAndFinishLocation)}></i>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>{list.salesRepId}</td>
                                                         
                                                            <td>{list.visitsPerMonth}</td>
                                                            
                                                            <td><Link to="">GPS LOCATIOON</Link></td>
                                                           
                                                        
                                                         </tr>
                                                    );
                                                })
                                              
                                            }  
                                        </tbody>
                                    </table>
                                </div>
                                {/* <BusinessTable tableData={tableData} comonscol={comonscol} /> */}

                                <div className="button_popup float-left mt-2">
                                    <Link className="add-button bg-dark" to="/Master">Back</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <EditActivityTarget activityTargetEdit={activityTargetEdit} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteActivityTarget(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>
        </>
    );
}

export default withTranslation()(ActivityTarget);
