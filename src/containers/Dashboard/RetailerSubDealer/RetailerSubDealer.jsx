import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import RetailerSubDealerTable from "../../../components/MaterialTable/RetailerSubDealerTable";
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

function RetailerSubDealer(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = React.useState(''); 
    // const retailerData = useSelector((state) => state.retailerSubdealers.retailerSubdealers);
    const uploadRetailerExcel = useSelector((state) => state.uploadretailersubdealerexcel);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);
    
    let history = useHistory();    

    useEffect(() => {
        dispatch(eventActions.downloadRetailerSubDealer());
    }, []);

    useEffect(() => {
        dispatch(eventActions.AssignProduct());
    }, []);



    useEffect(() => {
        if (!!uploadRetailerExcel && !!uploadRetailerExcel.uploadretailersubdealerexcel && uploadRetailerExcel.uploadretailersubdealerexcel !== undefined) {
            dispatch(eventActions.retailerSubdealers(50, searchValue, 1));
            toast.success(`Retailer Sub Dealer excel has been uploaded successfully`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,


            });

        }

        else if (!!uploadRetailerExcel && uploadRetailerExcel.error) {
            toast.success(!!uploadRetailerExcel && !!uploadRetailerExcel.error, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }


    }, [uploadRetailerExcel])


    useEffect(() => {
        return () => {
            dispatch(eventActions.uploadRetailerSubDealerExcel());
        }
    }, [])


    const addSubDealerform = () => {
        history.push("/AddRetailerSubDealer");
    }


    return (
        <>
            <div className="content-wrapper">
                <Header title="Retailer / Sub Dealer Management" />

                <div className={"row view_section ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        {/* <div className="row mt-1 ml-1" style={{alignItems: "center"}}>
                            <div className="col-4 pl-2">
                                <RetailerSearch eventKeyUp={eventKeyUp} />
                            </div>
                            <div className="col-8">
                                <div className="button_popup mr-2">
                                    <a className="add-button" title="Download Template" href={DowloadRetailerSubDealer && DowloadRetailerSubDealer} download> <i class="fa fa-download button-upload" aria-hidden="true"></i> Download</a>
                                    <RetailerSubPopup title="Retailer Managment" />
                                    <button onClick={(event) => addSubDealerform(event)} className="add-button new-btn">Create Sub Dealer</button>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-12 mt-2">
                            <div className="table-responsive table_design retaiter-table">
                                <RetailerSubDealerTable/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(RetailerSubDealer);
