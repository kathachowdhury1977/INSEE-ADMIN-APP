import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import UploadCustomerTier from "../../../components/ModalPopup/UploadCustomerTier";
import CustomerTierTable from "./CustomerTierTable";
import CustomerTierSearch from "../../../components/SearchBox/CustomerTierSearch";
import { ToastContainer, toast } from 'react-toastify';

function CustomerTierStatus(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const customerTierlist = useSelector((state) => state.customertierlist.customertierlist);
    const downloadCustomer = useSelector((state) => state.downloadcustomertier.downloadcustomertier);
    const updateCustomerTier = useSelector((state) => state.updatecustomertier);
    const uploasCustomerTier = useSelector((state) => state.uploadcustomertier);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);
    const FontChange = useSelector((state) => state.fontsizechanger.fontsizechanger);


    useEffect(() => {
        if (!!updateCustomerTier && !!updateCustomerTier.updatecustomertier && updateCustomerTier.updatecustomertier !== undefined) {
          
            
            toast.success(`Customer Tier has been updated successfully`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

           
        }
    }, [updateCustomerTier])

    useEffect(()=>{
        dispatch(eventActions.getCustomerTierList(49, '', 1)); 
    },[updateCustomerTier])


    useEffect(() => {
        return () => {
            dispatch(eventActions.updateCustomerTier())
        }
    }, [])

    useEffect(() => {
        dispatch(eventActions.DownloadCustomerTier());
       
    }, []);

   

    return (
        <>
            <div className="content-wrapper">
                <Header title="Customer Tier Status" />

                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 view_section">
                            <div className="row mt-2 mb-2" style={{alignItems: "center"}}>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12 text-left guide_month_year">
                                    <span><b>Year: </b>
                                    {customerTierlist && customerTierlist.results && customerTierlist.currentYear ? customerTierlist && customerTierlist.currentYear : ""}
                                    </span>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12 col-xs-12 mt-2 text-left">
                                    <CustomerTierSearch />
                                </div>
                                <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-xs-12 pr-2">
                                    <div className="button_popup">
                                        <a className="add-button" title="Download Template" href={downloadCustomer && downloadCustomer} download> <i class="fa fa-download button-upload" aria-hidden="true"></i> Download</a>
                                        <UploadCustomerTier className="ml-3 add-button" title="Customer Tier" />
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive table_design retaiter-table" style={{fontSize : `${FontChange}px`}}>
                                <CustomerTierTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(CustomerTierStatus);
