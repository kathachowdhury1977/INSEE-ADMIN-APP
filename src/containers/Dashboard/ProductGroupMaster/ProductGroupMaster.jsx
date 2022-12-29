import React, { useEffect, useState } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import ProductGroupSearch from "../../../components/ProductGroupSearch/ProductGroupSearch";
import ProductGroupMasterTable from "../../../components/MaterialTable/ProductGroupMasterTable";
import AddProductGroupPopup from "../../../components/ModalPopup/AddProductGroupPopup";
import UploadProductGroupPopup from "../../../components/ModalPopup/UploadProductGroupPopup";
import { ToastContainer, toast } from 'react-toastify';

function ProductGroupMaster(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState([]);
    const productId = useSelector((state) => state.activeproduct);
    const StatusView = useSelector((state) => state.productgroupstatus);
    const DownloadProduct = useSelector((state) => state.downloadproductgroup.downloadproductgroup);
    const addProduct = useSelector((state) => state.addproductgroup);
    const updateproductgroup = useSelector((state) => state.modifiedproductgroup);
    const DeleteProduct = useSelector((state) => state.deleteproductgrouplist);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


    useEffect(() => {
        (!!addProduct && !!addProduct.addproductgroup) || (!!updateproductgroup && !!updateproductgroup.modifiedproductgroup) &&
            toast.success(`Product has been ${!!addProduct.addproductgroup ? 'Added' : 'Updated'} successfully`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
    }, [addProduct, updateproductgroup])



    useEffect(() => {
        return () => {
            dispatch(eventActions.AddProductGroup())
            dispatch(eventActions.modifiedProductGroup())
        }
    }, [])

    useEffect(() => {
        if (!!DeleteProduct.deleteproductgrouplist && !!DeleteProduct.deleteproductgrouplist !== undefined) {
            dispatch(eventActions.productGroupmasterList(500000, 1)); 
            toast.success(`Product has been Deleted successfully`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
      }, [DeleteProduct])

    
      useEffect(() => {
        return () => {
          dispatch(eventActions.deleteProductGroupList())
        }
      }, [])


    useEffect(() => {
        dispatch(eventActions.downloadProductGroup());
    }, []);

    
     console.log(DownloadProduct, "DownloadProduct")

    console.log("isChecked", isChecked);
    // useEffect(() => {
    //     if (productId !== undefined) {
    //         setIsChecked([...isChecked, productId])
    //     }

    // }, [productId])
    const handleClick = (event) => {

        const modalData = !!productId.activeproduct && productId.activeproduct.map(eachId => {
            return {
                "groupId": eachId,
                "status": event.target.value
            }
        })

        console.log("modalData",modalData);

        dispatch(eventActions.ProductGroupstatus(modalData, event.target.value));
        event.preventDefault();
    }

    useEffect(() => {
        if (StatusView && StatusView.productgroupstatus !== undefined) {
            dispatch(eventActions.productGroupmasterList(500000, 1));
        }
    }, [StatusView])


    return (
        <>
            <div className="content-wrapper">
                <Header title="Product Group Master" />

                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row" style={{alignItems: "center"}}>
                                <div className="col-xl-4 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                    <ProductGroupSearch placeholder="Search by Product Group Name" />
                                </div>
                                <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-xs-12 pr-2">
                                    <div className="button_popup">
                                        <button className="add-button ml-3" onClick={handleClick} value={"Active"}>Active</button>
                                        <button className="add-button" onClick={handleClick} value={"InActive"}>In Active</button>
                                        <UploadProductGroupPopup title="Product Group" />
                                        <AddProductGroupPopup title="Add Product Group" />
                                        <a className="add-button" title="Download Template" href={DownloadProduct && DownloadProduct} download> <i class="fa fa-download button-upload" aria-hidden="true"></i> Download</a>
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive table_design mt-2">
                                <ProductGroupMasterTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(ProductGroupMaster);
