import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddCategory from "../../../components/MasterPopup/AddCategory";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import EditCategory from "../../../components/MasterPopup/EditCategory";
import Loader from "../../../components/Loader/Loader";



function Category(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [caseStatus, setCaseStatus] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const category = useSelector((state) => state.categorymaster);
    const deletecategoryReducer = useSelector((state) => state.deletecategorymaster);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);




    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getCategory(userName.countryCode));
    }, []);

    const rows = category.getcategory && category.getcategory;
    


    console.log("category", category);




    const handleDelete = (event, id, description) => {
        setOpen(true);

        let data = {
            "id": id,
            "description": description
        }
     
        setCategoryDelete({"id":id, 'country':userName.countryCode , 'data':data})
    }



    useEffect(() => {
        if (deletecategoryReducer && !deletecategoryReducer.loading &&
            (deletecategoryReducer.deletecategory)) {
                dispatch(eventActions.getCategory(userName.countryCode));
                toast.success('Category deleted', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            
        }
    }, [deletecategoryReducer]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteCategory())
        }
    }, [])



    const handlepen = (event, id, description, countryCode) => {
        setCaseStatus({ 'id':id ,'description': description, 'countryCode': countryCode });
        setPopupopen(true);
    }


    return (
        <>
            <div className="content-wrapper">
                <Header title="Category" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddCategory title="Add Category" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                             <div className="fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Categry Name</th>
                                        <th>Country Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {category && category.loading ? <Loader/> :
                                    rows
                                        ? rows.map((unitItem) => {
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
                                                    <td>{unitItem.description}</td>
                                                    <td>{unitItem.countryCode}</td>
                                                </tr>
                                            );
                                        })
                                        : <div className="no_record">No Record Found</div>
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
            <EditCategory caseStatus={caseStatus} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteCategory(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(Category);