import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import DistributionChannelPopup from "../../../components/ModalPopup/DistributionChannelPopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditDistributionChanel from "../../../components/MasterPopup/EditDistributionChanel";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";


function DistributionChannel(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [distributionChanel, setDistributionChanel] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const distributionChannel = useSelector((state) => state.distributionchannel.distributionchannel);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getDistributionChannel(userName.countryCode));
    }, []);


    let rows = distributionChannel ? distributionChannel : [];
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
        setDistributionChanel({ 'key': key, 'value': value, 'countryCode':countryCode });
        setPopupopen(true);
    }




    return (
        <>
            <div className="content-wrapper">
                <Header title="Distribution channel" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <DistributionChannelPopup title="Add Distribution channel" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                            <div className="fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Distribution channel Code</th>
                                        <th>Distribution channel Name</th>
                                        <th>Country Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows ? rows.map((distributionItem) => {
                                        return (
                                            <tr>
                                                <td>
                                                    <div className="action">
                                                        <span className="category_icon">
                                                            <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                        </span>
                                                        <span className="category_icon edit_conwood">
                                                            <i className="fa fa-edit" onClick={(event) => handlepen(event,distributionItem.key, distributionItem.value,distributionItem.countryCode)}></i>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>{distributionItem.key}</td>
                                                <td>{distributionItem.value}</td>
                                                <td>{distributionItem.countryCode}</td>
                                            </tr>
                                        );
                                    })
                                        : null
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
            <EditDistributionChanel distributionChanel={distributionChanel} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>
        </>
    );
}

export default withTranslation()(DistributionChannel);
