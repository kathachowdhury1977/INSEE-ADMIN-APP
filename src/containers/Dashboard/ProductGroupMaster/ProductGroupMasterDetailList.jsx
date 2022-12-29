import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ProductGroupTabs from "../../../components/Tabs/ProductGroupTabs";
import ".././Dashboard.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductGroupMasterDetailList(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const deleteAssign = useSelector((state) => state.deleteassignproduct);
    const addDate = useSelector((state) => state.assignproductadddate);
    const UpdateDate = useSelector((state) => state.assignproductupdatedate);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);
    const dispatch = useDispatch();
    const [searchValue, setSeachValue] = React.useState('');

    const location = useLocation();

    const { productGroupId } = location.state;
    const { productGroupName } = location.state;

    useEffect(() => {
        if (deleteAssign && !deleteAssign.loading &&
            (deleteAssign.deleteassignproduct)) {
                dispatch(eventActions.productAssignListSearch(1000000, productGroupId, searchValue, 1));
                toast.success('Product is delete successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
           
        }
    }, [deleteAssign]);


    useEffect(() => {
        if (addDate && !addDate.loading &&
            (addDate.assignproductadddate)) {
                dispatch(eventActions.productAssignListSearch(1000000, productGroupId, searchValue, 1));
                toast.success('Product Start Date & End Date has been added successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
           
        }
    }, [addDate]);

    

    useEffect(() => {
        return () => {
            dispatch(eventActions.assignProductAddDate());
        }
    }, [])


    useEffect(() => {
        if (UpdateDate && !UpdateDate.loading &&
            (UpdateDate.assignproductupdatedate)) {
                dispatch(eventActions.productAssignListSearch(1000000, productGroupId, searchValue, 1));
                toast.success('Product Start Date & End Date updated successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
           
        }
    }, [UpdateDate]);



      useEffect(() => {
        return () => {
            dispatch(eventActions.assignProductUpdateDate());
        }
    }, [])


    return (
        <>
            <div className="content-wrapper">
                <Header title="Assigned Product" />

                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">

                        <div className="col-12 view_section retaiter-table">
                            <ProductGroupTabs productGroupId={productGroupId} productGroupName={productGroupName} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(ProductGroupMasterDetailList);
