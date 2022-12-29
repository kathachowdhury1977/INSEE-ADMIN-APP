import React,{ useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddDistributionAreaPopup from "../../../components/ModalPopup/AddDistributionAreaPopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditDistributionArea from "../../../components/MasterPopup/EditDistributionArea";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";


function AreaType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [distributionArea, setDistributionArea] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');


    const distributionarea = useSelector((state) => state.distributionareamaster.getdistributionarea);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getDistributionArea(userName.countryCode));
    }, []);

    console.log("distributionarea",distributionarea);

    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, distributionKey, distributionValue) => {
        setDistributionArea({ 'distributionKey': distributionKey, 'distributionValue': distributionValue });
        setPopupopen(true);
    }

    return (
        <>
            <div className="content-wrapper">
                <Header title="Distribution Area" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddDistributionAreaPopup title="Add Distribution Area" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                            <div className="fixTableHead">
                            <table class="table table-bordered guideline_table">
                            <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Distribution Name</th>
                                        <th>Distribution Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {distributionarea
                                        ? distributionarea.map((unitItem) => {
                                            return (
                                                <tr>
                                                   
                                                    <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.distributionKey, unitItem.distributionValue)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    
                                                    <td>{unitItem.distributionKey}</td>
                                                    <td>{unitItem.distributionValue}</td>
                                                </tr>
                                            );
                                        })
                                        : null
                                    } 
                                </tbody>
                            </table>
                            </div>
                            <div className="button_popup float-left">
                                <Link className="add-button bg-dark" to="/Master">Back</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <EditDistributionArea distributionArea={distributionArea} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(AreaType);
