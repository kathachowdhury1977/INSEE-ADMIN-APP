import React,{ useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddLeadStagePopup from "../../../components/ModalPopup/AddLeadStagePopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditLeadStage from "../../../components/MasterPopup/EditLeadStage";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";


function LeadSource(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [leadStage, setLeadStage] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');


    const leadstage = useSelector((state) => state.leadstagemaster.getleadstage);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getLeadStage());
    }, []);

    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event,leadStageId, leadStage,score) => {
        setLeadStage({ 'leadStageId': leadStageId, 'leadStage': leadStage, 'score':score });
        setPopupopen(true);
    }

    return (
        <>
            <div className="content-wrapper">
                <Header title="Action Lead Stage" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddLeadStagePopup title="Add Lead Stage" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section fixTableHead">
                            <table class="table table-bordered guideline_table">
                            <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Lead Stage Id</th>
                                        <th>Lead Stage </th>
                                        <th>Score</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                {leadstage
                                        ? leadstage.map((unitItem) => {
                                            return (
                                                <tr>
                                                     <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.leadStageId, unitItem.leadStage,unitItem.score)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>{unitItem.leadStageId}</td>
                                                    <td>{unitItem.leadStage}</td>
                                                    <td>{unitItem.score}</td>
                                                   
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
           
            <EditLeadStage leadStage={leadStage} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(LeadSource);
