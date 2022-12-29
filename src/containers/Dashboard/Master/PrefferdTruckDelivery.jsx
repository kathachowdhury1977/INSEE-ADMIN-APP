import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import AddPrefferdTypeDelivery from "../../../components/MasterPopup/AddPrefferdTypeDelivery";
import { Link } from "react-router-dom";
import EditPrefferedruckDelivery from "../../../components/MasterPopup/EditPrefferedruckDelivery";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import UploadPrefferedTruckDelivery from "../../../components/MasterPopup/UploadPrefferedTruckDelivery";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../../../components/Loader/Loader";
import DOMPurify from "dompurify";


function PrefferdTruckDelivery(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [truckType, setTruckType] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const preferredtruckDelivery = useSelector((state) => state.prefferedtruckdelivery);
    const deletepreferredtruckDelivery = useSelector((state) => state.deleteprefferedtruckdelivery);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

    

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getPrefferedTruckDelivery(userName.countryCode));
    }, []);

    console.log("preferredtruckDelivery", preferredtruckDelivery);

    const rows = preferredtruckDelivery.prefferedtruckdelivery ? preferredtruckDelivery.prefferedtruckdelivery : [];

    const handleDelete = (event, id) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete({'country':userName.countryCode, 'id':id})
    }


    useEffect(() => {
        if (deletepreferredtruckDelivery && !deletepreferredtruckDelivery.loading &&
            (deletepreferredtruckDelivery.deleteprefferedtruckdelivery)) {
                dispatch(eventActions.getPrefferedTruckDelivery(userName.countryCode));
            toast.success('Preferred truck deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            
        }
    }, [deletepreferredtruckDelivery]);

    useEffect(() => {
        return () => {
            dispatch(eventActions.deletePrefferedTruckDelivery())
        }
    }, [])



    const handlepen = (event, id, materialGroupCode, salesDistrictOfShipTo, shippingType, value) => {
        setTruckType({ 'id': id, 'materialGroupCode': materialGroupCode, 'salesDistrictOfShipTo':salesDistrictOfShipTo,
    'shippingType':shippingType, 'value':value });
        setPopupopen(true);
    }


    return (
        <>
            <div className="content-wrapper">
                <Header title="Preferred Truck Type Delivery" />

                <div className={"row ipad_css " + MyNewClass }>
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">
                               
                                <div className="col-12">
                                    <div className="button_popup add-button">
                                        <AddPrefferdTypeDelivery title="Add Preferred Truck Type Delivery" />
                                        <UploadPrefferedTruckDelivery title="Upload Delivery" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 view_section p-0">
                                <div className="fixTableHead">
                                    <table class="table table-bordered guideline_table">
                                        <thead>
                                            <tr>
                                                <th>Action</th>
                                                <th>Material Group Code</th>
                                                <th>Sales Distribution of ShipTo</th>
                                                <th>Shipping Type</th>
                                                <th>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {preferredtruckDelivery && preferredtruckDelivery.loading ? <Loader/> :
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
                                                                        <i className="fa fa-trash" onClick={(event) => handleDelete(event,unitItem.id)}></i>
                                                                    </span>
                                                                    <span className="category_icon edit_conwood">
                                                                        <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.id, unitItem.materialGroupCode, unitItem.salesDistrictOfShipTo,unitItem.shippingType,unitItem.value)}></i>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.materialGroupCode)}}></td>
                                                            <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.salesDistrictOfShipTo)}}></td>
                                                            <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.shippingType)}}></td>
                                                            <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.value)}}></td>
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
            <EditPrefferedruckDelivery truckType={truckType} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deletePrefferedTruckDelivery(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>
        </>
    );
}

export default withTranslation()(PrefferdTruckDelivery);
