import React,{ useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import AddDivision from "../../../components/ModalPopup/AddDivision";
import EditDivision from "../../../components/MasterPopup/EditDivision";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import { ToastContainer, toast } from 'react-toastify'
import Loader from "../../../components/Loader/Loader";
import DOMPurify from "dompurify";


function Division(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [actionCategory, setActionCategory] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const deletedivisionReducer = useSelector((state) => state.deletedivisionmaster);
    const divisionList = useSelector((state) => state.getdivision);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getDivision(userName.countryCode));
    }, []);

    const rows = divisionList.getdivision ? divisionList.getdivision : [];

    const handleDelete = (event, id, value, description, countryCode) => {
        console.log("mydeletecontent",id, value, description, countryCode);
        setOpen(true);

        let data = {
            "countryCode": countryCode,
            "id": id,
            "key": value,
            "value": description
          }
        setCategoryDelete({'country':countryCode, 'id':id, 'data':data})
    }
 

    useEffect(() => {
        if (deletedivisionReducer && !deletedivisionReducer.loading &&
            (deletedivisionReducer.deletedivision)) {
                dispatch(eventActions.getDivision(userName.countryCode));
                toast.success('Division deleted', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            
        }
    }, [deletedivisionReducer]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteDivision())
        }
    }, [])


    const handlepen = (event,id, value,description,countryCode) => {
        setActionCategory({"id":id, 'value':value, 'description':description, 'countryCode':countryCode });
        setPopupopen(true);
    }

    return (
        <>
            <div className="content-wrapper">
                <Header title="Division" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className=" mt-2">
                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddDivision title="Add Division" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                            <div className="fixTableHead">
                            <table class="table table-bordered guideline_table">
                            <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Division Code</th>
                                        <th>Division Name</th>
                                        <th>Country Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {divisionList  && divisionList.loading ? <Loader/> :
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
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event,unitItem.id, unitItem.value,unitItem.description,unitItem.countryCode)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.id, unitItem.value,unitItem.description,unitItem.countryCode)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.value)}}></td>
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
            <EditDivision actionCategory={actionCategory} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteDivision(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(Division);
