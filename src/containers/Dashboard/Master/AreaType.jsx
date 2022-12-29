import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddAreaTypePopup from "../../../components/ModalPopup/AddAreaTypePopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditAreaType from "../../../components/MasterPopup/EditAreaType";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../../../components/Loader/Loader";
import DOMPurify from "dompurify";


function AreaType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [actionCategory, setActionCategory] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const deleteAreaType = useSelector((state) => state.deleteareatype);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


    const areatype = useSelector((state) => state.areatypemaster);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getAreaType(userName.countryCode));
    }, []);

    console.log("areatype", areatype);

    const rows = areatype.getareatype ? areatype.getareatype : [];


    const handleDelete = (event, id, name, status) => {
        console.log("delete are type",status)
        setOpen(true);

        let data = {
            "id": id,
            "name": name,
            "status": status
        }
        setCategoryDelete({'country':userName.countryCode, 'data':data})
    }

    useEffect(() => {
        if (deleteAreaType && !deleteAreaType.loading &&
            (deleteAreaType.deleteareatype)) {
             dispatch(eventActions.getAreaType(userName.countryCode));
            toast.success('Area Type has been deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
           
        }
    }, [deleteAreaType]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.DeleteAreaType())
        }
    }, [])


    const handlepen = (event, id, name, status) => {
        setActionCategory({ 'id':id, 'name': name, 'status': status });
        setPopupopen(true);
    }



    return (
        <>
            <div className="content-wrapper">
                <Header title="Area Type" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddAreaTypePopup title="Add Area Type" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                            <div className="fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Area Type Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {areatype && areatype.loading ? <Loader/> :
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
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event, unitItem.id, unitItem.name, unitItem.status)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.id, unitItem.name, unitItem.status)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.name)}}></td>
                                                    <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.status)}}></td>
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

            <EditAreaType actionCategory={actionCategory} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.DeleteAreaType(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(AreaType);
