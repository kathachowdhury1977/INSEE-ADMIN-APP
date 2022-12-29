import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import EditLoyalityCalcRules from "../../../components/MasterPopup/EditLoyalityCalcRules";
import Loader from "../../../components/Loader/Loader";
import AssignLoyaltyPopup from "../../../components/ModalPopup/AssignLoyaltyPopup";
import moment from 'moment';
import DOMPurify from "dompurify";


function LoyalityCalcRules(props) {
    const event = useSelector((state) => state);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [calcRules, setCalcRules] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const LoyalityCalcList = useSelector((state) => state.getloyalitycalcrules);
    const DeleteCalcRules = useSelector((state) => state.deleteloyalitycalcrules);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

    const AllexpiredCalcRules = useSelector((state) => state.allexpiredcalcrules);

    console.log("AllexpiredCalcRules",AllexpiredCalcRules);



  

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    
    useEffect(() => {
        debugger
        try {
            dispatch(eventActions.getMyAllExpiredCalcRules());   
        }
        catch {
            
        }
       
    },[0]);
 


    useEffect(() => {
        dispatch(eventActions.getLoyalityCalcRules(userName.countryCode, 1, 100000));
    }, []);






    const rows = LoyalityCalcList.getloyalitycalcrules ? LoyalityCalcList.getloyalitycalcrules.results : [];

    console.log("LoyalityCalcList", rows);

    const handleDelete = (event, customerType,groupCode,materialGroup,) => {
        setOpen(true);
        setCategoryDelete({ "customerType":customerType,"groupCode": groupCode, "materialGroup": materialGroup })
    }
    




    useEffect(() => {
        if (DeleteCalcRules && !DeleteCalcRules.loading &&
            (DeleteCalcRules.deleteloyalitycalcrules)) {
            dispatch(eventActions.getLoyalityCalcRules(userName.countryCode, 1, 100000));
            toast.success('Loyality CalcRules deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [DeleteCalcRules]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteLoyalityCalcRules());
            dispatch(eventActions.getLoyalityCalcRules());
        }
    }, [])



    const handlepen = (event, groupCode,materialGroup,customerType,points,startDate, endDate) => {
        console.log("event+++",customerType);
        setCalcRules({
            "groupCode": groupCode, "materialGroup": materialGroup, "customerType": customerType,
            "points": points, 'startDate': startDate, 'endDate': endDate
        });
        setPopupopen(true);
    }
 

    return (
        <>
            <div className="content-wrapper">
                <Header title="Loyalty Calc Rules" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AssignLoyaltyPopup title="Add Loyalty Point" />
                                    {/* <UploadLoyalityCalcRules title="Upload Loyality CalcRules" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                            <div className="fixTableHead">
                                <table class="table table-bordered guideline_table">
                                    <thead>
                                        <tr>
                                            <th>Action</th>
                                            <th>Company</th>
                                            <th>Material Group</th>
                                            <th>Type of Customer</th>
                                            <th>Loyalty Point</th>
                                            <th>Start date</th>
                                            <th>End date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {LoyalityCalcList && LoyalityCalcList.loading ? <Loader /> :
                                             rows && rows
                                             .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                             : rows && rows
                                               .slice()
                                               .reverse().map((loyality) => {
                                                return (
                                                    <tr>
                                                        <td>
                                                            <div className="action">
                                                                <span className="category_icon">
                                                                    <i className="fa fa-trash" onClick={(event) => handleDelete(event, loyality.customerType,loyality.groupCode,loyality.materialGroup)}></i>
                                                                </span>
                                                                <span className="category_icon edit_conwood">
                                                                    <i className="fa fa-edit" onClick={(event) => handlepen(event,
                                                                       loyality.groupCode,loyality.materialGroup,loyality.customerType,loyality.points,
                                                                       loyality.startDate, loyality.endDate

                                                                    )}></i>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(loyality.groupCode)}}></td>
                                                        <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(loyality.materialGroup)}}></td>
                                                        <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(loyality.customerType)}}></td>
                                                        <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(loyality.points)}}></td>
                                                        <td>{
                                                            moment(loyality.startDate).format('DD-MM-yyyy')
                                                        }</td>
                                                        <td>{moment(loyality.endDate).format('DD-MM-yyyy')
                                                        }</td>


                                                    </tr>
                                                );
                                            })
                                             
                                        }
                                    </tbody>
                                </table>
                            </div>
                            {/* <div className="pagination_sec">
                                <Pagination count={parseInt(LoyalityCalcList && LoyalityCalcList.totalCount / 6)} page={page} onChange={handleChangePage} />
                            </div> */}
                            <div className="button_popup float-left mt-2">
                                <Link className="add-button bg-dark" to="/Master">Back</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <EditLoyalityCalcRules calcRules={calcRules} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteLoyalityCalcRules(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(LoyalityCalcRules);