import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import AddSpecialProjectPopup from "../../../components/ModalPopup/AddSpecialProjectPopup";
import { Link } from "react-router-dom";
import EditSpecialProject from "../../../components/MasterPopup/EditSpecialProject";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import { ToastContainer, toast } from 'react-toastify'
import UploadSepcialProject from "../../../components/MasterPopup/UploadSepcialProject";
import Loader from "../../../components/Loader/Loader";

function SpecialProject(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [specialProjectI, setSpecialProjectI] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const specialproject = useSelector((state) => state.specialproject);
    const deletespecialproject = useSelector((state) => state.deletespecialProjectdelivery);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);




    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getSpecialProject(userName.countryCode));
    }, []);

   const rows = specialproject.getspecialproject  ? specialproject.getspecialproject : [];
 

    const handleDelete = (event, id) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete({ 'country': userName.countryCode, 'id': id })
    }

    useEffect(() => {
        if (deletespecialproject && !deletespecialproject.loading &&
            (deletespecialproject.deletespecialProjectdelivery)) {
            toast.success('Special Project deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            dispatch(eventActions.resetAddSpecialProjectReducer());
            dispatch(eventActions.getSpecialProject(userName.countryCode));
        }
    }, [deletespecialproject]);

    const handlepen = (event, id, value, productCode, productDescription, salesDistrictOfShipTo, shippingType) => {
        setSpecialProjectI({
            'id': id, 'value': value, 'productCode': productCode, 'productDescription': productDescription,
            'salesDistrictOfShipTo': salesDistrictOfShipTo, 'shippingType': shippingType
        });
        setPopupopen(true);
    }


    return (
        <>
            <div className="content-wrapper">
                <Header title="Special Project Delivery" />

                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                        <AddSpecialProjectPopup title="Add Special Project Delivery" />
                                        <UploadSepcialProject title="Upload Project Delivery" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 view_section">
                                <div className="fixTableHead">
                                    <table class="table table-bordered guideline_table">
                                        <thead>
                                            <tr>
                                                <th>Action</th>
                                                <th>Special Project Name</th>
                                                <th>Product Code</th>
                                                <th>Product Description</th>
                                                <th>Sales Discription of shipto</th>
                                                <th>Shipping Type</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {specialproject  && specialproject.loading ? <Loader/> :
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
                                                                        <i className="fa fa-trash" onClick={(event) => handleDelete(event, unitItem.id)}></i>
                                                                    </span>
                                                                    <span className="category_icon edit_conwood">
                                                                        <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.id, unitItem.value, unitItem.productCode, unitItem.productDescription, unitItem.salesDistrictOfShipTo, unitItem.shippingType)}></i>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>{unitItem.value}</td>
                                                            <td>{unitItem.productCode}</td>
                                                            <td>{unitItem.productDescription}</td>
                                                            <td>{unitItem.salesDistrictOfShipTo}</td>
                                                            <td>{unitItem.shippingType}</td>
                                                        </tr>
                                                    );
                                                })
                                                
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                {/* <BusinessTable tableData={tableData} comonscol={comonscol} /> */}

                                <div className="button_popup float-left mt-2">
                                    <Link className="add-button bg-dark" to="/Master">Back</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <EditSpecialProject specialProjectI={specialProjectI} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteSpecialProjectDelivery(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>
        </>
    );
}

export default withTranslation()(SpecialProject);
