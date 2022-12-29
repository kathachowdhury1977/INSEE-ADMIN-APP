import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddCaseType from "../../../components/MasterPopup/AddCaseType";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import EditCaseType from "../../../components/MasterPopup/EditCaseType";
import Loader from "../../../components/Loader/Loader";
import DOMPurify from "dompurify";



function CaseType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [caseStatus, setCaseStatus] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const casetypeList = useSelector((state) => state.casetype);
    const deletecasetypeReducer = useSelector((state) => state.deletecasetypemaster);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


 


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.CaseType(userName.countryCode));
    }, []);


    const rows =  casetypeList.casetype ? casetypeList.casetype : [];


    console.log("casetypeList", casetypeList);




    const handleDelete = (event, id) => {
        setOpen(true);
     
        setCategoryDelete({"id":id, 'country':userName.countryCode})
    }



    useEffect(() => {
        if (deletecasetypeReducer && !deletecasetypeReducer.loading &&
            (deletecasetypeReducer.deletecasetype)) {
                dispatch(eventActions.CaseType(userName.countryCode));
                toast.success('Case type deleted', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
           
        }
    }, [deletecasetypeReducer]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteCaseType())
        }
    }, [])



    const handlepen = (event, id, description, countryCode) => {
        setCaseStatus({ 'id':id ,'description': description, 'countryCode': countryCode });
        setPopupopen(true);
    }


    return (
        <>
            <div className="content-wrapper">
                <Header title="Case Type" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddCaseType title="Add Case Type" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                            <div className="fixTableHead">

                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Case Type</th>
                                        <th>Country Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {casetypeList && casetypeList.loading ? <Loader/> :
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
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event, unitItem.id,unitItem.description)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.id, unitItem.description, unitItem.countryCode)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.description)}}></td>
                                                    <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.countryCode)}}></td>
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
            <EditCaseType caseStatus={caseStatus} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteCaseType(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(CaseType);