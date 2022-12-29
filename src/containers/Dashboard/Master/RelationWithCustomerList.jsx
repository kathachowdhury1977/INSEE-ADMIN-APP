import React, { useEffect } from "react";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "../../../_actions";
import EditRelationshipCustomer from "../../../components/MasterPopup/EditRelationshipCustomer";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import UploadRelationWithCustomer from "../../../components/MasterPopup/UploadRelationWithCustomer";
import RelationShipSearch from "../../../components/SearchBox/RelationShipSearch";
import CustomerIdListPopup from "./CustomerIdListPopup";



const RelationWithCustomerList = (props) => {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [relationship, setRelationShip] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const [searchValue, setSeachValue] = React.useState('');
    const [customerIds, setCustomerIdList] = React.useState("");
    const [customerpop, setCustomerPop] = React.useState(false);

    const RelationCustomer = useSelector((state) => state.relationwithcustomer);
    const RelationSearch = useSelector((state) => state.relationsearch);
    const downloadRelation = useSelector((state) => state.downloadrelationwith.downloadrelationwith);
    const deleteCustomer = useSelector((state) => state.deletecustomerrelation);


    useEffect(() => {

        let filterData = [{ key: searchValue }];
        console.log('filterData', filterData);
        dispatch(eventActions.getRelationwithCustomerList(filterData));
    }, [searchValue])






    useEffect(() => {
        dispatch(eventActions.downloadRelationWith());
    }, []);


    console.log("downloadRelation", downloadRelation);

    const rows = RelationCustomer.relationwithcustomer ? RelationCustomer.relationwithcustomer : [];


    const handleDelete = (event, id) => {
        setOpen(true);
        setCategoryDelete(id)
    }

    const handlepen = (event, id, beatCode, customerId, customerName, salesRepId, salesOrganization) => {
        setRelationShip({ 'id': id, 'beatCode': beatCode, 'customerId': customerId, 'customerName': customerName, 'salesRepId': salesRepId, 'salesOrganization': salesOrganization });
        setPopupopen(true);
    }





    useEffect(() => {
        if (deleteCustomer && !deleteCustomer.loading &&
            (deleteCustomer.deletecustomerrelation)) {
            dispatch(eventActions.getRelationwithCustomerList());
            toast.success('Relationship Customer deleted', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [deleteCustomer]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteCustomerRelation())
        }
    }, [])

    const customerIdListR = (event, customerId) => {
        setCustomerIdList(customerId);
        setCustomerPop(true);
    }


    return (
        <>
            <div className="col-12 mt-2 view_section p-0">
                <div className="row mb-2">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12"></div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="button_popup add-button">
                            <RelationShipSearch handleSearchValue={setSeachValue} />
                            <a className="add-button" title="Download Template" href={downloadRelation && downloadRelation.beatManagementPath} download> <i class="fa fa-download button-upload" aria-hidden="true"></i> Download</a>
                            <UploadRelationWithCustomer title="Upload RelationShip Customer" />
                        </div>
                    </div>
                </div>
                <div className="fixTableHead" style={{ height: "calc(100vh - 270px)" }}>
                    <table class="table table-bordered guideline_table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Beat Code</th>
                                <th>Customer Id</th>
                                {/* <th>Sold To Sub-Dealer</th> */}
                                <th>Sales Rep ID</th>
                                <th>Sales Oraganization</th>

                            </tr>
                        </thead>
                        <tbody>
                            {RelationCustomer && RelationCustomer.loading ? <Loader /> :

                                rows && rows
                                    .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                    : rows && rows
                                        .slice()
                                        .reverse().map((list) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event, list.id)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, list.id, list.beatCode, list.customerId, list.customerName, list.salesRepId, list.salesOrganization)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>{list.beatCode}</td>
                                                    <td><span className="viewClick" onClick={(event) => customerIdListR(event, list.customerId)}>click view</span></td>
                                                    {/* <td>{list.customerName}</td> */}
                                                    <td>{list.salesRepId}</td>
                                                    <td>{list.salesOrganization}</td>


                                                </tr>
                                            );
                                        })
                                  
                            }

                        </tbody>
                    </table>
                </div>
                <EditRelationshipCustomer relationship={relationship} popupopen={popupopen} setOpen={setPopupopen} />
                <div>
                    {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteCustomerRelation(categoryDelete)} open={open} setOpen={setOpen} />}
                </div>
                <div className="button_popup float-left mt-2">
                    <Link className="add-button bg-dark" to="/Master">Back</Link>
                </div>
                <div>
                    <CustomerIdListPopup customerIds={customerIds} customerpop={customerpop} setOpen={setCustomerPop} />
                </div>
            </div>

        </>
    )
}

export default RelationWithCustomerList;