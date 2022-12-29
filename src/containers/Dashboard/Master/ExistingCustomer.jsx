import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import AddSpecialProjectPopup from "../../../components/ModalPopup/AddSpecialProjectPopup";
import { Link } from "react-router-dom";
import EditExistingCustomer from "../../../components/MasterPopup/EditExistingCustomer";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import { ToastContainer, toast } from 'react-toastify'
import UploadExistingCadence from "../../../components/MasterPopup/UploadExistingCadence";
import Loader from "../../../components/Loader/Loader";
import ExistingCustomerSearch  from "../../../components/SearchBox/ExistingCustomerSearch";

function ExistingCustomer(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [exsitingCustomer, setExistingCustomer] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const [searchValue, setSearchValue] = React.useState('');

    const getExistingCustomer = useSelector((state) => state.existingcustomerlist);
    const downloadCustomerExcel = useSelector((state) => state.downloadexistingcustomer.downloadexistingcustomer);
    const deleteExisting = useSelector((state) => state.deleteexistingcustomer);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


   console.log("downloadCustomerExcel",downloadCustomerExcel && downloadCustomerExcel.existingCustomerCadencePath);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);


    useEffect(() => {
        dispatch(eventActions.downloadexistingCustomerCadence());
    }, []);


    useEffect(() => {

        let filterData = [{ searchKey: searchValue }];
        console.log('filterData', filterData);
        dispatch(eventActions.getexistingCustomerCadence(filterData));
    }, [searchValue])

    // useEffect(() => {
    //     dispatch(eventActions.getexistingCustomerCadence());
    // }, []);

  const rows = getExistingCustomer.existingcustomerlist  && getExistingCustomer.existingcustomerlist;
 

    const handleDelete = (event, id) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(id)
    }

    useEffect(() => {
        if (deleteExisting && !deleteExisting.loading &&
            (deleteExisting.deleteexistingcustomer)) {
                dispatch(eventActions.getexistingCustomerCadence());
            toast.success('Existing Customer deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }, [deleteExisting]);

    const handlepen = (event, id, customerId, customerName,customerType,category,cadence ) => {
        setExistingCustomer({'id': id, 'customerId':customerId, 'customerName':customerName, 'customerType':customerType, 'category':category, 'cadence':cadence});
        setPopupopen(true);
    }



    return (
        <>
            <div className="content-wrapper">
                <Header title="Existing Customer" />

                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9">
                                    
                                    <div className="button_popup add-button">
                                    <ExistingCustomerSearch handleSearchValue={setSearchValue}/>
                                    <a className="add-button" title="Download Template" href={downloadCustomerExcel && downloadCustomerExcel.existingCustomerCadencePath} download> <i class="fa fa-download button-upload" aria-hidden="true"></i> Download</a>
                                        <UploadExistingCadence title="Upload Cadence" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 view_section p-0">
                                <div className="fixTableHead">
                                    <table class="table table-bordered guideline_table">
                                        <thead>
                                            <tr>
                                                <th>Action</th>
                                                <th>Customer Id</th>
                                                <th>Customer Name</th>
                                                <th>Customer Type</th>
                                                <th>Category</th>
                                               
                                                <th>Visit Cadence</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {getExistingCustomer  && getExistingCustomer.loading ? <Loader/> :
                                            rows ? rows.map((list) => {
                                                    return (
                                                        <tr>
                                                            <td>
                                                                <div className="action">
                                                                    <span className="category_icon">
                                                                        <i className="fa fa-trash" onClick={(event) => handleDelete(event,list.id)}></i>
                                                                    </span>
                                                                    <span className="category_icon edit_conwood">
                                                                        <i className="fa fa-edit" onClick={(event) => handlepen(event, list.id,list.customerId,list.customerName,list.customerType,list.category,list.cadence)}></i>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>{list.customerId}</td>
                                                            <td>{list.customerName}</td>
                                                            <td>{list.customerType}</td>
                                                            <td>{list.category}</td>
                                                            <td>{list.cadence}</td>
                                                        
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
            </div>

            <EditExistingCustomer exsitingCustomer={exsitingCustomer} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteExistingCustomer(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>
        </>
    );
}

export default withTranslation()(ExistingCustomer);
