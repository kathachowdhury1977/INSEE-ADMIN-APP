import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddUnitPopup from "../../../components/ModalPopup/AddUnitPopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditUnitMaster from "../../../components/MasterPopup/EditUnitMaster";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";


function UnitMaster(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [unitMaster, setUnitMaster] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const unitList = useSelector((state) => state.unitmaster.unitmaster);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.UnitMaster(userName.countryCode));
    }, []);

    console.log("unitList", unitList);

    // let dataArr = divisionList && divisionList.map(item=>{
    //     return [item.value,item]
    // });

    // let maparr = new Map(dataArr);
    // let result = [...maparr.values()];

    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, type, name) => {
        setUnitMaster({ 'type': type, 'name': name });
        setPopupopen(true);
    }


    return (
        <>
            <div className="content-wrapper">
                <Header title="Unit Master" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddUnitPopup title="Add Unit" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr> <th>Action</th>
                                        <th>Unit Code</th>
                                        <th>unit Name (EN)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {unitList
                                        ? unitList.map((unitItem) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.type, unitItem.name)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>{unitItem.type}</td>
                                                    <td>{unitItem.name}</td>
       
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

            <EditUnitMaster unitMaster={unitMaster} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(UnitMaster);
