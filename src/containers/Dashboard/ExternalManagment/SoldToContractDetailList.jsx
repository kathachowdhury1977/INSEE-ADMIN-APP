import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import ".././Dashboard.scss";
import "../ProductMaster/ProductMasterDetail.scss";

function SoldToContractDetailList(props) {
    const event = useSelector((state) => state);
    const location = useLocation();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const ProductMasterDetail = useSelector((state) => state.productmasterdetail.productmasterdetail);
    const productimageList = useSelector((state) => state.productimagegetlist.productimagegetlist);
    const { productId } = location.state;

    // ccrz__ProductId__c
    useEffect(() => {
        dispatch(eventActions.ProductImageGetList(productId && productId));
    }, []);

    console.log("detail List", productimageList && productimageList);


    return (
        <>

            <div className="col-12 mt-3 product_master_detail">
                <div className="row">

                    <div className="col-12">
                        <div className="product_right_section">
                            <div className="row">
                                <div className="col-3 mb-3">
                                    <p className="title_key">Product Name</p>
                                    <span className="title_value">{productimageList && productimageList.ProductList.Product_Name_EN__c}</span>
                                </div>
                                <div className="col-3 mb-3">
                                    <p className="title_key">Country</p>
                                    <span className="title_value">{ProductMasterDetail && ProductMasterDetail.Country}</span>
                                </div>
                                <div className="col-3 mb-3">
                                    <p className="title_key">Division</p>
                                    <span className="title_value">{productimageList && productimageList.ProductList.Division__Code_c}</span>
                                </div>
                                <div className="col-3 mb-3">
                                    <p className="title_key">Product Id</p>
                                    <span className="title_value">{productimageList && productimageList.ProductList.ccrz__ProductId__c}</span>
                                </div>
                                <div className="col-3 mb-3">
                                    <p className="title_key">Category</p>
                                    <span className="title_value">{ProductMasterDetail && ProductMasterDetail.Category}</span>
                                </div>
                                <div className="col-3 mb-3">
                                    <p className="title_key">Sub-Category</p>
                                    <span className="title_value">{ProductMasterDetail && ProductMasterDetail.Category}</span>
                                </div>
                                <div className="col-3 mb-3">
                                    <p className="title_key">Base Unit of Measure</p>
                                    <span className="title_value">{productimageList && productimageList.ProductList.ccrz__UnitOfMeasure__c}</span>
                                </div>
                                <div className="col-3 mb-3">
                                    <p className="title_key">Material Group</p>
                                    <span className="title_value">{productimageList && productimageList.ProductList.Material_Pricing_Group__c}</span>
                                </div>
                                <div className="col-3 mb-3">
                                    <p className="title_key">Weight Unit</p>
                                    <span className="title_value">{productimageList && productimageList.ProductList.Weight_Unit__c}</span>
                                </div>
                                <div className="col-3 mb-3">
                                    <p className="title_key">Volume Unit</p>
                                    <span className="title_value">{productimageList && productimageList.ProductList.Volume_Unit__c}</span>
                                </div>
                                <div className="col-3 mb-3">
                                    <p className="title_key">Gross Weight</p>
                                    <span className="title_value">{productimageList && productimageList.ProductList.Gross_Weight__c}</span>
                                </div>
                                <div className="col-3 mb-3">
                                    <p className="title_key">Net Weight</p>
                                    <span className="title_value">{productimageList && productimageList.ProductList.Net_Weight__c}</span>
                                </div>
                                <div className="col-3 mb-3">
                                    <p className="title_key">Volume </p>
                                    <span className="title_value">{productimageList && productimageList.ProductList.Volume__c}</span>
                                </div>
                                {/* <div className="col-3 mb-3">
                                                <p className="title_key">Product Status</p>
                                                <span className="title_value">{ProductMasterDetail && ProductMasterDetail.Product_Status}</span>
                                            </div> */}
                            </div>
                            <div className="row sales_dostributor">
                                <div className="col-6">
                                    <div className="row">
                                        <h6>Sales Organization & Distribution Channel</h6>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-4">
                                                    <label>Sales Org.</label>

                                                </div>
                                                <div className="col-4">
                                                    <label>Distribution Channel</label>

                                                </div>
                                                <div className="col-4">
                                                    <label>Name</label>
                                                </div>
                                            </div>

                                            <div className="col-12 small_scroll">

                                                {productimageList && productimageList
                                                    ? productimageList && productimageList.priceList.map((sales) => {
                                                        return (

                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <p>{sales.Sales_Organization__Code_c}</p>
                                                                </div>
                                                                <div className="col-2">
                                                                    <p>{sales.Distribution_Channel__rCode_c}</p>
                                                                </div>
                                                                <div className="col-6">
                                                                    <p>{sales.Name}</p>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                    : null}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="row">
                                        <h6>Plants</h6>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-6">
                                                    <label>Plant</label>
                                                </div>
                                                <div className="col-6">
                                                    <label>Plant Name</label>
                                                </div>
                                            </div>
                                            <div className="col-12 small_scroll">
                                                {productimageList && productimageList
                                                    ? productimageList && productimageList.rawMaterialCostList.map((plant) => {
                                                        return (
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <p>{plant.Plant_Code__c}</p>
                                                                </div>
                                                                <div className="col-6">
                                                                    <p>{plant.Name}</p>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                    : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default withTranslation()(SoldToContractDetailList);
