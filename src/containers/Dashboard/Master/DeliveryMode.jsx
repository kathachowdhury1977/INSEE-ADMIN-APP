import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import AddDeliveryModePopup from "../../../components/ModalPopup/AddDeliveryModePopup";
import {Link} from "react-router-dom";
import EditDeliveryMode from "../../../components/MasterPopup/EditDeliveryMode";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../../../components/Loader/Loader";
import DOMPurify from "dompurify";

function DeliveryMode(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [deliveryMode, setDeliveryMode] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const deliverymode = useSelector((state) => state.deliverymodemaster);
    const Deletedeliverymode = useSelector((state) => state.deletedeliverymode);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

    

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getDeliveryMode(userName.countryCode));
    }, []);

    console.log("deliverymode", deliverymode);

    const rows = deliverymode.getdeliverymode ? deliverymode.getdeliverymode : [];
  
    const handleDelete = (event, id) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete({'country':userName.countryCode, 'id':id})
    }


    useEffect(() => {
        if (Deletedeliverymode && !Deletedeliverymode.loading &&
            (Deletedeliverymode.deletedeliverymode)) {
                dispatch(eventActions.getDeliveryMode(userName.countryCode));
                toast.success('Delivery Mode has been deleted successfully', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
        }
    }, [Deletedeliverymode]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.DeleteDeliveryMode())
        }
    }, [])


    const handlepen = (event, id, name, satus) => {
        setDeliveryMode({'id':id, 'name': name, 'satus': satus });
        setPopupopen(true);
    }
      


    return (
        <>
            <div className="content-wrapper">
                <Header title="Delivery Mode" />

                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9">
                                    <div className="button_popup add-button">
                                        <AddDeliveryModePopup title="Add Delivery Mode" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 view_section">
                                <div className="fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Delivery Mode Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {deliverymode && deliverymode.loading ? <Loader/> :
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
                            {/* <BusinessTable tableData={tableData} comonscol={comonscol} /> */}

                            <div className="button_popup float-left mt-2">
                                    <Link className="add-button bg-dark" to="/Master">Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EditDeliveryMode deliveryMode={deliveryMode} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.DeleteDeliveryMode(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>
        </>
    );
}

export default withTranslation()(DeliveryMode);
