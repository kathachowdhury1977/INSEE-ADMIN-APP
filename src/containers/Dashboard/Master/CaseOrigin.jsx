import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddCaseOrigin from "../../../components/MasterPopup/AddCaseOrigin";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import EditCaseOrigin from "../../../components/MasterPopup/EditCaseOrigin";
import Loader from "../../../components/Loader/Loader";
import DOMPurify from "dompurify";



function AreaType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [caseOrigin, setCaseOrigin] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const caseOrginList = useSelector((state) => state.caseoriginmaster);
    const DeletecaseOrgin = useSelector((state) => state.deletecaseorigin);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


 


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getCaseOrigin(userName.countryCode));
    }, []);


    


    console.log("caseOrginList", caseOrginList);
    const rows = caseOrginList.getcaseorigin ? caseOrginList.getcaseorigin : [];





    const handleDelete = (event, id) => {
        setOpen(true);
        setCategoryDelete({"id":id, 'country':userName.countryCode})
    }




    useEffect(() => {
        if (DeletecaseOrgin && !DeletecaseOrgin.loading &&
            (DeletecaseOrgin.deletecaseorigin)) {
                dispatch(eventActions.getCaseOrigin(userName.countryCode));
            toast.success('Case Origin has been deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [DeletecaseOrgin]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.DeleteCaseOrigin())
        }
    }, [])



    const handlepen = (event, id, name, countryCode) => {
        setCaseOrigin({ 'id':id ,'name': name, 'countryCode': countryCode });
        setPopupopen(true);
    }


    return (
        <>
            <div className="content-wrapper">
                <Header title="Case Origin" />
                <div className={"row ipad_css " + MyNewClass }>
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddCaseOrigin title="Add Case Origin" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                          <div className="fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Case Origin Name</th>
                                        <th>Country Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {caseOrginList && caseOrginList.loading ? <Loader/> :
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
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event, unitItem.id, unitItem.name, unitItem.countryCode)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.id, unitItem.name, unitItem.countryCode)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.name)}}></td>
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
            <EditCaseOrigin caseOrigin={caseOrigin} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.DeleteCaseOrigin(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(AreaType);