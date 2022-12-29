import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import AddSpecialProjectPopup from "../../../components/ModalPopup/AddSpecialProjectPopup";
import { Link } from "react-router-dom";
import EditCustomerInactive from "../../../components/MasterPopup/EditCustomerInactive";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import { ToastContainer, toast } from 'react-toastify'
import UploadNonCustomer from "../../../components/MasterPopup/UploadNonCustomer";
import Loader from "../../../components/Loader/Loader";
import ExistingCustomerSearch from "../../../components/SearchBox/ExistingCustomerSearch";

function NonCustomerInactive(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [customerInactive, setCustomerInactive] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const [searchValue, setSearchValue] = React.useState('');

    const nonCustomerInactive = useSelector((state) => state.noncustomerinactive);
    const downloadCustomerInactive = useSelector((state) => state.downloadnoninactivecustomer.downloadnoninactivecustomer);
    const deleteExistingNonActive = useSelector((state) => state.deletecustomerinactive);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

   console.log("downloadCustomerInactive",downloadCustomerInactive);

   
    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.downloadNonInactiveCustomer());
    }, []);


    useEffect(() => {

        let filterData = [{ searchKey: searchValue }];
        console.log('filterData', filterData);
        dispatch(eventActions.getNonCustomerInActive(filterData));
    }, [searchValue])


    // useEffect(() => {
    //     dispatch(eventActions.getNonCustomerInActive());
    // }, []);

   const rows = nonCustomerInactive.noncustomerinactive  && nonCustomerInactive.noncustomerinactive;
 

    const handleDelete = (event, id) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(id)
    }

    useEffect(() => {
        if (deleteExistingNonActive && !deleteExistingNonActive.loading &&
            (deleteExistingNonActive.deletecustomerinactive)) {
                dispatch(eventActions.getNonCustomerInActive());
            toast.success('Customer InActive deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
           
        }
    }, [deleteExistingNonActive]);

    const handlepen = (event, id, customerId, customerName,customerType, priority,cadence) => {
        setCustomerInactive({
          'id':id, 'customerId':customerId, 'customerName':customerName, 'customerType':customerType, 'priority':priority, 'cadence':cadence
        });
        setPopupopen(true);
    }

    console.log("nonCustomerInactive",nonCustomerInactive);

    return (
        <>
            <div className="content-wrapper">
                <Header title="Non Customer / Inactive" />

                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12  view_section mt-2">
                            <div className="row">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                    <ExistingCustomerSearch handleSearchValue={setSearchValue}/>
                                    <a className="add-button" title="Download Template" href={downloadCustomerInactive && downloadCustomerInactive.inactiveCustomerCadencePath} download> <i class="fa fa-download button-upload" aria-hidden="true"></i> Download</a>
                                        <UploadNonCustomer title="Upload Cadence" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 p-0">
                                <div className="fixTableHead">
                                    <table class="table table-bordered guideline_table">
                                        <thead>
                                            <tr>
                                                <th>Action</th>
                                                <th>Customer Id</th>
                                                <th>Customer Name</th>
                                                <th>Customer Type</th>
                                                <th>Priority</th>
                                                <th>Visit Cadence</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                             {nonCustomerInactive  && nonCustomerInactive.loading ? <Loader/> :
                                            rows ? rows.map((list) => {
                                                    return ( 
                                                        <tr>
                                                            <td>
                                                                <div className="action">
                                                                    <span className="category_icon">
                                                                        <i className="fa fa-trash" onClick={(event) => handleDelete(event,list.id)}></i>
                                                                    </span>
                                                                    <span className="category_icon edit_conwood">
                                                                        <i className="fa fa-edit" onClick={(event) => handlepen(event,list.id,list.customerId,list.customerName,list.customerType, list.priority,list.cadence)}></i>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>{list.customerId}</td>
                                                            <td>{list.customerName}</td>
                                                            <td>{list.customerType}</td>
                                                            <td>{list.priority}</td>
                                                            <td>{list.cadence}</td>
                                                           
                                                        
                                                         </tr>
                                                    );
                                                })
                                                : <div className="no_record">No Record Found</div>
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

            <EditCustomerInactive customerInactive={customerInactive} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteCustomerInactive(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>
        </>
    );
}

export default withTranslation()(NonCustomerInactive);
