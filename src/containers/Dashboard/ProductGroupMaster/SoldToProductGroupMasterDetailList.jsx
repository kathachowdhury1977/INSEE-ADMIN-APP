import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import SoldProductGroupTabs from "../../../components/Tabs/SoldProductGroupTabs";
import ".././Dashboard.scss";
import { ToastContainer, toast } from 'react-toastify';

function SoldToProductGroupMasterDetailList(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    // const productgroupid = props.location.productGroupId;
    // const productgroupnames = props.location.productGroupName;
    const location = useLocation();
    const dispatch = useDispatch();
    const { productGroupId } = location.state;
    const { productGroupName } = location.state;
    const { accountName } = location.state;
    const { soldtoNumber } = location.state;
    const soldtoaddDate = useSelector((state) => state.addproductdateundersoldto);
    const UpdateSoldDate = useSelector((state) => state.updateproductdateundersoldto);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

    console.log("productGroupId", productGroupId);


    useEffect(() => {
        !!soldtoaddDate && !!soldtoaddDate.addproductdateundersoldto && 
        toast.success('Product Start Date & End Date has been added successfully', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });


       
    }, [soldtoaddDate])

    useEffect(() => {
        return () => {
            dispatch(eventActions.addProductDateUnderSoldTo());
        }
    }, [])


    useEffect(() => {
        !!UpdateSoldDate && !!UpdateSoldDate.updateproductdateundersoldto && 
            toast.success('Product Start Date & End Date has been updated successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
    


        
    }, [UpdateSoldDate])

    useEffect(() => {
        return () => {
            dispatch(eventActions.updateProductDateUnderSoldTo());
        }
    }, [])


    return (
        <>
            <div className="content-wrapper">
                <Header title="Assigned Product" />

                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 row mt-2">
                            <div className="col-9 mt-2">
                                <div className="header_head">
                                    <h6>Sold To Number<br />
                                        <span className="account_dt text-danger">{accountName}</span>
                                    </h6>

                                    <h6 className="">
                                        Account Name<br />
                                        <span className="account_dt text-danger">{soldtoNumber}</span>
                                    </h6>
                                </div>

                            </div>

                        </div>

                        <div className="col-12 view_section">
                            <SoldProductGroupTabs productGroupId={productGroupId} productGroupName={productGroupName} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(SoldToProductGroupMasterDetailList);
