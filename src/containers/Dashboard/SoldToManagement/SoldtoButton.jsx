import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import ".././Dashboard.scss";
import UploadXsl from "../../../components/ModalPopup/UploadXsl";
import AssignSoldtoItemwithProductGroup from "../../../components/ModalPopup/AssignSoldtoItemwithProductGroup";
import SoldToManagmentTable from "../../../components/MaterialTable/SoldToManagmentTable";
import SoldToManagmentSearch from "../../../components/SearchBox/SoldToManagmentSearch";
import { ToastContainer, toast } from 'react-toastify';
import PdpaSignedSoldTo from "../../../components/ModalPopup/PdpaSignedSoldTo";
import UploadContact from '../../../components/MaterialTable/UploadContact'
import UploadCustomerGroup from '../../../components/ModalPopup/UploadCustomerGroup';


function SoldtoButton(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [selectValue, setSelectValue] = React.useState('');

    const assigncheck = useSelector((state) => state.assignproduct.assignproduct);
    const downloadSoldto = useSelector((state) => state.downloadsoldto.downloadsoldto);
    const uploadedExcel = useSelector((state) => state.uploadsoldto)
    const downloadRetailer = useSelector((state) => state.downloadretailerexcel.downloadretailerexcel);
    const downloadCustomerGroup = useSelector((state) => state.downloadcustomergroupsoldto.downloadcustomergroupsoldto);
    const SendToEmail = useSelector((state) => state.soldtoallemail);
    const uploadContactList = useSelector((state) => state.uploadContact);
    const uploadContactListVN = useSelector((state) => state.uploadContactvnandlk);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.DownloadRetailerExcel(userName.countryCode));
    }, []);

    useEffect(() => {
        dispatch(eventActions.downloadCustomerGroupSoldTo(
        ));
    }, []);

    useEffect(() => {
        dispatch(eventActions.DownloadSoldTo(

        ));
    }, []);

    useEffect(() => {
        dispatch(eventActions.AssignProduct(

        ));
        return () => { dispatch(eventActions.uploadSoldToManagement()) }

    }, []);


    // const countryHandler = event => {
    //   console.log("Myselectvalue",event.target.value);
    //   dispatch(eventActions.SoldToDropdownContry(event.target.value, 50, 1));
    // }


    useEffect(() => {
        if (!!uploadedExcel && !!uploadedExcel.uploadsoldto && !!uploadedExcel.uploadsoldto && uploadedExcel.uploadsoldto !== undefined) {
            toast.success('Product Group Details has been uploaded successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } else if (!!uploadedExcel && uploadedExcel.error) {
            toast.success(!!uploadedExcel.error, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }, [uploadedExcel])


    const sendEmailAll = () => {
        dispatch(eventActions.SoldtoAllEmail(true));
    }

    useEffect(() => {
        if (!!SendToEmail && !!SendToEmail.soldtoallemail && !!SendToEmail.soldtoallemail && SendToEmail.soldtoallemail !== undefined) {
            toast.success('We have send  mail to the all successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }



    }, [SendToEmail])

    useEffect(() => {
        dispatch(eventActions.SoldtoAllEmail());
    }, [])


  

    useEffect(() => {
        if (!!uploadContactList && !!uploadContactList.uploadContact && !!uploadContactList.uploadContact !== undefined) {

            toast.success('Contact Details has been uploaded successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else if (!!uploadContactList && !!uploadContactList.error) {
            toast.success(uploadContactList.error, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }

    }, [uploadContactList])


    useEffect(() => {
        if (!!uploadContactListVN && !!uploadContactListVN.uploadContactvnandlk && !!uploadContactListVN.uploadContactvnandlk !== undefined) {

            toast.success('Contact Details has been uploaded successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else if (!!uploadContactListVN && !!uploadContactListVN.error) {
            toast.success(uploadContactListVN.error, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }

    }, [uploadContactListVN])

    useEffect(() => {
        return () => {
            dispatch(eventActions.UploadContact());
            dispatch(eventActions.UploadContactVNandLK());
            
        }
    }, [])



    return (
        <>
         

            <div className="button_popup list-soldto">
                <div className="main-btn">
                
                
                <UploadContact title="Upload Contact" />
                <AssignSoldtoItemwithProductGroup assigncheck={assigncheck} title="Assign Product Group" className="popup-width" />
                <UploadXsl title="Product Group" className="popup-width" />
                <PdpaSignedSoldTo assigncheck={assigncheck} title="PDPA Signed" />  
                {/* <UploadCustomerGroup title="Customer Group" /> */}
                
                </div>
                
                 <div className="main-btn">
                 <button className="add-button" onClick={sendEmailAll}>Send Email</button>
                <a className="add-button" title="Download Template" href={downloadRetailer && downloadRetailer} download> Export</a>
                {/* <a className="add-button" title="Download Template" href={downloadSoldto && downloadSoldto} download> <i class="fa fa-download button-upload" aria-hidden="true"></i> Download</a>
                 <a className="add-button" title="Download Template" href={downloadCustomerGroup && downloadCustomerGroup} download><i class="fa fa-download button-upload" aria-hidden="true"></i> Customer Group</a>  */}
               
                  
                </div> 
                
            </div>
        </>
    )
}
export default withTranslation()(SoldtoButton);