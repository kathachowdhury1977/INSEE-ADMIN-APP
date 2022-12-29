import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import EditChooseTransportor from "../../../components/MasterPopup/EditChooseTransportor";
import AddChooseTransportorPopup from "../../../components/MasterPopup/AddChooseTransportorPopup";
import {Link} from 'react-router-dom';
import UploadChooseTranspostorZone from "../../../components/MasterPopup/UploadChooseTranspostorZone";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../../../components/Loader/Loader";
import DOMPurify from "dompurify";

function ChooseTransportor(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [chooseTransport, setChooseTransport] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const ChooseTranspotor = useSelector((state) => state.choosetransportorzone);
    const DeleteChooseTransportor = useSelector((state) => state.deletechoosetransportor);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getChooseTransportorZone(userName.countryCode));
    }, []);

    const rows =ChooseTranspotor.choosetransportorzone ? ChooseTranspotor.choosetransportorzone : [];
    
    const handleDelete = (event, id) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete({'country': userName.countryCode, 'id':id})
    }

    useEffect(() => {
        if (DeleteChooseTransportor && !DeleteChooseTransportor.loading &&
            (DeleteChooseTransportor.deletechoosetransportor)) {
                dispatch(eventActions.getChooseTransportorZone(userName.countryCode));
            toast.success('Choose transportor deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            
        }
    }, [DeleteChooseTransportor]);

    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteChooseTransportorZone())
        }
    }, [])

    const handlepen = (event, customerCode, customerName,transporterCode,transporterName,countryCode) => {
        setChooseTransport({ 'customerCode': customerCode, 'customerName':customerName,
         'transporterCode':transporterCode, 'transporterName':transporterName, 'countryCode': countryCode });
        setPopupopen(true);
    }

      

    return (
        <>
            <div className="content-wrapper">
                <Header title="Choose Transportor Zone" />
                
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                
                                <div className="col-12">
                                    <div className="button_popup add-button">
                                        <AddChooseTransportorPopup title="Add Choose Transportor Zone" />
                                        <UploadChooseTranspostorZone title="Upload Transportor Zone" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 view_section">
                                <div className="fixTableHead">
                                <table class="table table-bordered guideline_table">
                                    <thead>
                                        <tr>
                                            <th>Action</th>
                                            <th>Customer Code</th>
                                            <th>Customer Name</th>
                                             <th>Transporter Code</th> 
                                             <th>Transporter Name</th> 
                                            <th>Country Code</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ChooseTranspotor && ChooseTranspotor.loading ? <Loader/> :
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
                                                                    <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.customerCode, unitItem.customerName,unitItem.transporterCode,unitItem.transporterName,unitItem.countryCode)}></i>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.customerCode)}}></td>
                                                         <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.customerName)}}></td> 
                                                         <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.transporterCode)}}></td> 
                                                         <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.transporterName)}}></td> 
                                                        <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.countryCode)}}></td>
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
            <EditChooseTransportor chooseTransport={chooseTransport} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteChooseTransportorZone(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>
        </>
    );
}

export default withTranslation()(ChooseTransportor);
