import React,{ useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddLeadSourcePopup from "../../../components/ModalPopup/AddLeadSourcePopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditLeadSource from "../../../components/MasterPopup/EditLeadSource";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";


function LeadSource(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [leadSource, setLeadSource] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');


    const leadsource = useSelector((state) => state.leadsourcemaster.getleadsource);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getLeadSource());
    }, []);

    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, leadSourceId, leadSourceName) => {
        setLeadSource({ 'leadSourceId': leadSourceId, 'leadSourceName': leadSourceName });
        setPopupopen(true);
    }

    return (
        <>
            <div className="content-wrapper">
                <Header title="Action Lead Source" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddLeadSourcePopup title="Add Lead Source" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section fixTableHead">
                            <table class="table table-bordered guideline_table">
                            <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Lead Source Id</th>
                                        <th>Lead Source Name</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                {leadsource
                                        ? leadsource.map((unitItem) => {
                                            return (
                                                <tr>
                                                     <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.leadSourceId, unitItem.leadSourceName)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>{unitItem.leadSourceId}</td>
                                                    <td>{unitItem.leadSourceName}</td>
                                                   
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

            <EditLeadSource leadSource={leadSource} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(LeadSource);
