import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
 import DistributorForcastTable from "./DistributorForcastTable";
import { ToastContainer, toast } from 'react-toastify';
import UploadDistributorForcast from "../../../components/ModalPopup/UploadDistributorForcast";
import Axios from "axios";
import { API_URL_ADMIN } from "../../../Constant/index";

function DistributorForcast(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const uploasForcast = useSelector((state) => state.uploadforcastinseevolume);
    const TotalVolumeList = useSelector((state) => state.gettotalinseevolumelist);
    const updateTotalInsee = useSelector((state) => state.updatetotalinseevolume);

    useEffect(() => {
        dispatch(eventActions.getTotalInseeVolumeList("forcast"));
    }, []);
   
    useEffect(() => {
        !!updateTotalInsee && !!updateTotalInsee.updatetotalinseevolume && 
             toast.success(`Distributor forcast has been Updated successfully`, {
                 position: "top-right",
                 autoClose: 4000,
                 hideProgressBar: true,
                 closeOnClick: true,
                 pauseOnHover: true,
                 draggable: true,
                 progress: undefined,
             });
        
     }, [updateTotalInsee])

     useEffect(() => {
        return () => {
            dispatch(eventActions.UpdateTotalInseeVolumeList())
        }
    }, [])


    useEffect(() => {
        !!uploasForcast && !!uploasForcast.uploadforcastinseevolume && 
            toast.success(`Distributor forcast has been upload successfully`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        
    }, [uploasForcast])

    useEffect(() => {
        return () => {
            dispatch(eventActions.uploadForcastInseeVolume())
        }
    }, [])

    const downloadInsee = (type) => {
           
        Axios({method: "GET",url: API_URL_ADMIN + `admin/inseeVolumeTemplate?type=${type}`,responseType: 'arraybuffer',headers: { "Content-Type": "application/json",
        'X-AUTH-TOKEN':localStorage.getItem('x-auth-token'),
    }})
       
        .then(async(response) => {  
            var link=document.createElement('a');
            const file = new Blob([response.data], { type: 'application/xlsx' });
            const fileURL = await URL.createObjectURL(file);
            link.href=window.URL.createObjectURL(file);
            link.download="InseeTemplate"+type+".xlsx";
            link.click();    
            return response.data;                   
        })   
       
}



    return (
        <>
            <div className="content-wrapper">
                <Header title="Distributor Forcast" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 view_section">
                            <div className="row mt-2 mb-2">
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12 text-left guide_month_year">
                                <span><b>Year: </b>{TotalVolumeList.gettotalinseevolumelist && TotalVolumeList.gettotalinseevolumelist[0] && TotalVolumeList.gettotalinseevolumelist[0].year}</span>
                                </div>
                               
                                <div className="col-xl-10 col-lg-9 col-md-8 col-sm-12 col-xs-12 pr-2">
                                    <div className="button_popup">
                                        <button className="add-button" onClick={() => downloadInsee('forcast')}><i class="fa fa-download button-upload" aria-hidden="true"></i> Download</button>
                                        {/* <a className="add-button" title="Download Template" href="" download> <i class="fa fa-download button-upload" aria-hidden="true"></i> Download</a> */}
                                         <UploadDistributorForcast className="ml-3 add-button" title="Distributor Forcast" /> 
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive table_design retaiter-table">
                                 <DistributorForcastTable /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(DistributorForcast);
