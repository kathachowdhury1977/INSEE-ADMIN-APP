import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import UploadLoyalityCutOffRules from "../../../components/MasterPopup/UploadLoyalityCutOffRules";
import AddLoyaltyCutOff from "../../../components/ModalPopup/AddLoyaltyCutOff";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import EditLoyalityCutOffRules from "../../../components/MasterPopup/EditLoyalityCutOffRules";
import Loader from "../../../components/Loader/Loader";



function LoyalityCutOffRules(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [cutoffRules, setCutOffRules] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const LoyalityCutOff = useSelector((state) => state.getloyalitycutoffrules);
    const DeleteCutOffRules = useSelector((state) => state.deleteloyalitycutoffrules);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);





    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getLoyalityCutOffRules(userName.countryCode, 1, 100000));
    }, []);



    const rows = LoyalityCutOff.getloyalitycutoffrules ? LoyalityCutOff.getloyalitycutoffrules.results : [];

    console.log("myloyalaty", rows);



    const handleDelete = (event, category, groupCode) => {
        setOpen(true);
        setCategoryDelete({ 'category': category, "groupCode": groupCode, })
    }




    useEffect(() => {
        if (DeleteCutOffRules && !DeleteCutOffRules.loading &&
            (DeleteCutOffRules.deleteloyalitycutoffrules)) {
                dispatch(eventActions.getLoyalityCutOffRules(userName.countryCode, 1, 100000));
            toast.success('Loyality Cut off rules deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [DeleteCutOffRules]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteLoyalityCutOffRules())
        }
    }, [])



    const handlepen = (event, soldToNumber, category, groupCode,year,month,date) => {
        setCutOffRules({ 'soldToNumber':soldToNumber, 'category': category, 'groupCode': groupCode,  'year':year, 'month':month, 'date':date});
        setPopupopen(true);
    }


    return (
        <>
            <div className="content-wrapper">
                <Header title="Loyalty Cut Off Rules" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    {/* <UploadLoyalityCutOffRules title="upload" /> */}
                                    <AddLoyaltyCutOff title="Add Loyalty Cut Off Rules"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                            <div className="fixTableHead">
                                <table class="table table-bordered guideline_table">
                                    <thead>
                                        <tr>
                                            <th>Action</th>
                                            <th>Sold To Number</th>
                                            <th>Company</th>
                                            <th>Division</th>
                                            {/* <th>Year</th>
                                            <th>month</th> */}
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {LoyalityCutOff && LoyalityCutOff.loading ? <Loader/> :
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
                                                                    <i className="fa fa-trash" onClick={(event) => handleDelete(event, unitItem.category, unitItem.groupCode)}></i>
                                                                </span>
                                                                <span className="category_icon edit_conwood">
                                                                    <i className="fa fa-edit" onClick={(event) => handlepen(event,unitItem.soldToNumber, unitItem.category,unitItem.groupCode,unitItem.year,unitItem.month,unitItem.date)}></i>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>{unitItem.soldToNumber}</td>
                                                        <td>{unitItem.groupCode}</td>
                                                        <td>{unitItem.category}</td>
                                                        {/* <td>{unitItem.year}</td>
                                                        <td>{unitItem.month}</td> */}
                                                        <td>{unitItem.date}</td>
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
            <EditLoyalityCutOffRules cutoffRules={cutoffRules} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteLoyalityCutOffRules(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(LoyalityCutOffRules);