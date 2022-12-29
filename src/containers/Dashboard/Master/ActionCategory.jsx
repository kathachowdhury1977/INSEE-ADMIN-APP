import React,{ useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddActionCategoryPopup from "../../../components/ModalPopup/AddActionCategoryPopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditActionCategory from "../../../components/MasterPopup/EditActionCategory";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import Loader from "../../../components/Loader/Loader";
import { ToastContainer, toast } from 'react-toastify';
import DOMPurify from "dompurify";


function AreaType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [actionCategory, setActionCategory] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


    const actioncategory = useSelector((state) => state.actioncategorymaster);
    const Deletecategory = useSelector((state) => state.deleteactioncategory);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getActionCategory());
    }, []);

    const rows = actioncategory.actioncategorymaster ? actioncategory.actioncategorymaster : [];
 

    const handlepen = (event,key,value) => {
        setActionCategory({'key':key,'value':value});
        setPopupopen(true);
    }

    const handleDelete = (event, key, value) => {
       
        setOpen(true);

        let data = {
            "key": key,
            "value": value
        }
        setCategoryDelete(data)
    }  

    useEffect(() => {
        if (Deletecategory && !Deletecategory.loading &&
            (Deletecategory.deleteactioncategory)) {
            dispatch(eventActions.getActionCategory());
            toast.success('Action Category has been deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
           
        }
    }, [Deletecategory]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.DeleteActionCategory())
        }
    }, [])





    return (    
        <>
            <div className="content-wrapper">
                <Header title="Action Category" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddActionCategoryPopup title="Add Action Category" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                            <div className="fixTableHead">
                            <table class="table table-bordered guideline_table">
                            <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Action Category </th>
                                        <th>value</th>
                                    </tr>
                                </thead>
                                <tbody>
                              {actioncategory && actioncategory.loading ? <Loader /> :
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
                                                               <i className="fa fa-trash" onClick={(event) => handleDelete(event,unitItem.key,unitItem.value)}></i>
                                                           </span>
                                                           <span className="category_icon edit_conwood">
                                                               <i className="fa fa-edit" onClick={(event) => handlepen(event,unitItem.key,unitItem.value)}></i>
                                                           </span>
                                                        </div>
                                                    </td>
                                                    <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.key)}}></td>
                                                    <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.value)}}></td>
                                                </tr>
                                            );
                                        })}
                                    
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
         <EditActionCategory actionCategory={actionCategory} popupopen={popupopen} setOpen={setPopupopen}/>
         <div>
         {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.DeleteActionCategory(categoryDelete)} open={open} setOpen={setOpen} />}
         </div>
        </>
    );
}

export default withTranslation()(AreaType);
