import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddAreaTypePopup from "../../../components/ModalPopup/AddAreaTypePopup";
import AddConstructionPhasePopup from '../../../components/ModalPopup/AddConstructionPhasePopup'
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditConstructionPhase from "../../../components/MasterPopup/EditConstructionPhase";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../../../components/Loader/Loader";
import DOMPurify from "dompurify";


function AreaType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [constructionPhase, setConstructionPhase] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const Deleteconstructionphase = useSelector((state) => state.deleteconstructionphase);
    const constructionphase = useSelector((state) => state.constructionphasemaster);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getConstructionPhase(userName.countryCode));
    }, []);

    console.log("constructionphase", constructionphase);

    const rows = constructionphase.getconstructionphase ? constructionphase.getconstructionphase : [];
   
    
    const handleDelete = (event, constructionPhaseId) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete({  'country':userName.countryCode, 'constructionPhaseId':constructionPhaseId})
    }

    useEffect(() => {
        if (Deleteconstructionphase && !Deleteconstructionphase.loading &&
            (Deleteconstructionphase.deleteconstructionphase)) {
                dispatch(eventActions.getConstructionPhase(userName.countryCode));
                toast.success('Construction Phase has been deleted successfully', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
        }
    }, [Deleteconstructionphase]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.DeleteConsttuctionPhase())
        }
    }, [])





    const handlepen = (event, constructionPhaseId, constructionPhase) => {
        setConstructionPhase({ 'constructionPhaseId': constructionPhaseId, 'constructionPhase': constructionPhase });
        setPopupopen(true);
    }


    return (
        <>
            <div className="content-wrapper">
                <Header title="Construction Phase" />
                <div className={"row ipad_css " + MyNewClass }>
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddConstructionPhasePopup title="Add Construction Phase" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                            <div className="fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Construction Phase Id</th>
                                        <th>Construction Phase</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {constructionphase && constructionphase.loading ?
                                    <Loader/> :  rows && rows
                                    .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                    : rows && rows
                                      .slice()
                                      .reverse().map((unitItem) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event,unitItem.constructionPhaseId)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.constructionPhaseId, unitItem.constructionPhase)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.constructionPhaseId)}}></td>
                                                    <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.constructionPhase)}}></td>
                                                </tr>
                                            );
                                        })
                                       
                                    }
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
            <EditConstructionPhase constructionPhase={constructionPhase} popupopen={popupopen} setOpen={setPopupopen}/>
         <div>
         {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.DeleteConsttuctionPhase(categoryDelete)} open={open} setOpen={setOpen} />}
         </div>
        </>
    );
}

export default withTranslation()(AreaType);
