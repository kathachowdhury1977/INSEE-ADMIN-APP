import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import ProductDetailImagePopup from "../../../components/ModalPopup/ProductDetailImagePopup";
import "./ProductMasterDetail.scss";
import Slideshow from "../../../components/Slider/Slider";
import AddDescriptionInsee from "../../../components/ModalPopup/AddDescriptionInsee";
import AssignLoyaltyPopup from "../../../components/ModalPopup/AssignLoyaltyPopup";
import moment from 'moment';
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import { ToastContainer, toast } from 'react-toastify';

function ProductMasterDetail(props) {
    const event = useSelector((state) => state);
    const location = useLocation();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [productDelete, setProductDelete] = React.useState('');
    const ProductMasterDetail = useSelector((state) => state.productmasterdetail.productmasterdetail);
    const productimageList = useSelector((state) => state.productimagegetlist.productimagegetlist);
    const loyaltyPointList = useSelector((state) => state.getloyaltypointlist.getloyaltypointlist);
    const deleteProductgroup = useSelector((state) => state.deleteproductmasterdelete);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);
    const { productId } = location.state;
    const { category } = location.state;
    const { subCategory } = location.state;
    console.log("categoires",subCategory,category);

    // ccrz__ProductId__c
    useEffect(() => {
        dispatch(eventActions.ProductImageGetList(productId && productId));
    }, []);

    useEffect(() => {
        dispatch(eventActions.productMasterDetail(productId && productId));
    }, []);

    useEffect(() => {
        dispatch(eventActions.getloyaltyPointList(productId && productId));
    }, []);



    const removeProductGroup = (event, productGroupName, productId) => {
        setOpen(true)
        let data = {

            "endDate": "string",
            "productGroupId": "string",
            "productGroupList": [
                "string"
            ],
            "productGroupName": productGroupName,
            "productList": [
                productId
            ],
            "startDate": "string",
            "status": "string"
        }
        setProductDelete(data, productGroupName)
        // dispatch(eventActions.productMasterDeleteGroup(data, productGroupName));

    }

    console.log("ProductMasterDetail+++",productimageList);


    useEffect(() => {
        if (!!deleteProductgroup && !!deleteProductgroup.deleteproductmasterdelete && !!deleteProductgroup.deleteproductmasterdelete !== undefined) {
            dispatch(eventActions.productMasterDetail(productId && productId));
            dispatch(eventActions.ProductImageGetList(productId && productId));
            dispatch(eventActions.getloyaltyPointList(productId && productId));

            toast.success(`Product Group has been deleted successfully`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [deleteProductgroup])

    useEffect(() => {
        return () => {
            dispatch(eventActions.productMasterDeleteGroup())
        }
    }, [])

   console.log("ProductMasterDetail+++",ProductMasterDetail);
    return (
        <>
            <div className="content-wrapper">
                <Header title="Product Master Detail" />

                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 mt-3 product_master_detail">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-xs-12">
                                    <div className="product_left_section">
                                        <div className="slider_section">
                                            <Slideshow sapDesc={productimageList} imageproductId={productimageList && productimageList.imageUrl} />
                                            <div className="uploadImage col-12 text-right"><ProductDetailImagePopup sapDesc={productimageList} title="Upload Image" /></div>
                                        </div>
                                        <div className="product_desc">
                                            <h5>Sales Text Descrption(EN)</h5>
                                            <p>{productimageList && productimageList.ProductList.Material_Description_Sales_Text__c} </p>
                                        </div>
                                        <div className="product_desc">
                                            <h5>Sales Text Descrption(TH)</h5>
                                            <p>{productimageList && productimageList.ProductList.Material_Description_Sales_Text_EN__c} </p>
                                        </div>
                                        <div className="product_desc mt-2">
                                            <h5>Insee Description
                                                <AddDescriptionInsee productmasterId={productimageList && productimageList.ProductList.ccrz__ProductId__c} />
                                            </h5>
                                            <p>{productimageList && productimageList.ProductList.Material_Description_Sales_Text__c} </p>
                                        </div>

                                        <div className="product_desc">
                                            <h5>Product Description (EN)</h5>
                                            <p>{ProductMasterDetail && ProductMasterDetail.CommercialText && ProductMasterDetail.CommercialText.length > 0 && ProductMasterDetail.CommercialText[2] && ProductMasterDetail.CommercialText[2].Text[0].Description}
                                              {ProductMasterDetail && ProductMasterDetail.CommercialText && ProductMasterDetail.CommercialText.length > 0 && ProductMasterDetail.CommercialText[2] && ProductMasterDetail.CommercialText[2].Text[1].Description}
                                            {ProductMasterDetail && ProductMasterDetail.CommercialText && ProductMasterDetail.CommercialText.length > 0  && ProductMasterDetail.CommercialText[2] && ProductMasterDetail.CommercialText[2].Text[2].Description}</p>
                                        </div>

                                        <div className="product_desc">
                                            <h5>Product Description (TH)</h5>
                                            <p>{ProductMasterDetail &&  ProductMasterDetail.CommercialText && ProductMasterDetail.CommercialText.length > 0 && ProductMasterDetail.CommercialText[3] && ProductMasterDetail.CommercialText[3].Text[0].Description}
                                            {ProductMasterDetail &&  ProductMasterDetail.CommercialText && ProductMasterDetail.CommercialText.length > 0 && ProductMasterDetail.CommercialText[3] && ProductMasterDetail.CommercialText[3].Text[1].Description}
                                            {ProductMasterDetail &&  ProductMasterDetail.CommercialText && ProductMasterDetail.CommercialText.length > 0 && ProductMasterDetail.CommercialText[3] && ProductMasterDetail.CommercialText[3].Text[2].Description}</p>
                                        </div>

                                    </div>



                                </div>
                                <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-xs-12">
                                    <div className="product_right_section">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Product Name</p>
                                                <span className="title_value">{productimageList && productimageList.ProductList.Product_Name_EN__c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Country</p>
                                                <span className="title_value">{ProductMasterDetail && ProductMasterDetail.Country}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Division</p>
                                                <span className="title_value">{productimageList && productimageList.ProductList.Division__Code_c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Product Id</p>
                                                <span className="title_value">{productimageList && productimageList.ProductList.ccrz__ProductId__c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Category</p>
                                                <span className="title_value">{category}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Sub-Category</p>
                                                <span className="title_value">{subCategory}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Base Unit of Measure</p>
                                                <span className="title_value">{productimageList && productimageList.ProductList.ccrz__UnitOfMeasure__c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Material Group</p>
                                                <span className="title_value">{productimageList && productimageList.ProductList.Material_Pricing_Group__c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Weight Unit</p>
                                                <span className="title_value">{productimageList && productimageList.ProductList.Weight_Unit__c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Volume Unit</p>
                                                <span className="title_value">{productimageList && productimageList.ProductList.Volume_Unit__c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Gross Weight</p>
                                                <span className="title_value">{productimageList && productimageList.ProductList.Gross_Weight__c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Net Weight</p>
                                                <span className="title_value">{productimageList && productimageList.ProductList.Net_Weight__c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Volume </p>
                                                <span className="title_value">{productimageList && productimageList.ProductList.Volume__c}</span>
                                            </div>




                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Material Pricing Group Code </p>
                                                <span className="title_value">{ProductMasterDetail && ProductMasterDetail.ProductList.Material_Pricing_Group__c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Material Pricing Group Description</p>
                                                <span className="title_value"></span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Material Group Code</p>
                                                <span className="title_value">{ProductMasterDetail && ProductMasterDetail.ProductList.Product_Group__c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Material Group Description</p>
                                                <span className="title_value"></span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Material Group 1 Code</p>
                                                <span className="title_value">{ProductMasterDetail && ProductMasterDetail.ProductList.Product_Type__c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Material Group 1 Description</p>
                                                <span className="title_value">{ProductMasterDetail && ProductMasterDetail.ProductList.Material_Group_1_Description__c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Material Group 2 Code</p>
                                                <span className="title_value">{ProductMasterDetail && ProductMasterDetail.ProductList.Material_group_2__c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Material Group 2 Description</p>
                                                <span className="title_value"></span>
                                            </div>

                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Material Group 3 Code</p>
                                                <span className="title_value">{ProductMasterDetail && ProductMasterDetail.ProductList.Material_group_3__c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Material Group 3 Description</p>
                                                <span className="title_value"></span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Material Group 4 Code</p>
                                                <span className="title_value">{ProductMasterDetail && ProductMasterDetail.ProductList.Material_group_4__c}</span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Material Group 4 Description</p>
                                                <span className="title_value"></span>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Material Group 5 Code</p>
                                                <span className="title_value">{ProductMasterDetail && ProductMasterDetail.ProductList.Material_group_5__c}</span>
                                            </div>

                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Material Group 5 Description</p>
                                                <span className="title_value"></span>
                                            </div>

                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Product Hierarchy Code</p>
                                                <span className="title_value">{ProductMasterDetail && ProductMasterDetail.ProductList.Product_Hierarchy_c}</span>
                                            </div>

                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                                                <p className="title_key">Product Hierarchy Description</p>
                                                <span className="title_value">{ProductMasterDetail && ProductMasterDetail.ProductList.Product_Family__c}</span>
                                            </div>


                                           
                                        </div>

                                        <div className="row">
                                            <div className="col-12 new_table">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Product Group Name</th>
                                                            <th className="text-center">Start Date</th>
                                                            <th className="text-center">End Date</th>
                                                            <th className="text-center">Status</th>
                                                            {/* <th className="text-center">Action</th> */}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {productimageList && productimageList
                                                            ? productimageList && productimageList.length > 0 && productimageList.productGroupDetails.map((list) => {
                                                                return (
                                                                    <tr>
                                                                        <td>{list.productGroupName}</td>
                                                                        <td className="text-center">{list.startDate} </td>
                                                                        <td className="text-center">{list.endDate} </td>
                                                                        <td className="text-center">{list.status}</td>
                                                                        {/* <td className="text-center"><span className="delete_product" onClick={(event) => removeProductGroup(event, list.productGroupName, productId)}><i className="fa fa-trash"></i></span></td> */}
                                                                    </tr>
                                                                );
                                                            })
                                                            : <div style={{ fontSize: "11px" }}>No data found</div>
                                                        }


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="row sales_dostributor">
                                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="row">
                                                    <h6>Sales Area</h6>
                                                    <div className="col-12 p-0">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                <label>Sales Org.</label>

                                                            </div>
                                                            <div className="col-5">
                                                                <label>Distribution Channel</label>

                                                            </div>
                                                            <div className="col-4 pl-0">
                                                                <label>Division</label>
                                                            </div>
                                                        </div>

                                                        <div className="col-12 p-0 mb-3">

                                                            {productimageList && productimageList
                                                                ? productimageList && productimageList.priceList.map((sales) => {
                                                                    return (

                                                                        <div className="row">
                                                                            <div className="col-4">
                                                                                <p>{sales.Sales_Organization__Code_c}</p>
                                                                            </div>
                                                                            <div className="col-4">
                                                                                <p>{sales.Distribution_Channel__rCode_c}</p>
                                                                            </div>
                                                                            <div className="col-4">
                                                                                <p>{sales.Division__rCode__c}</p>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                })
                                                                : null}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="row">
                                                    <h6>Plants</h6>
                                                    <div className="col-12 p-0">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <label>Plant</label>
                                                            </div>
                                                            <div className="col-6">
                                                                <label>Plant Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 ">
                                                            {productimageList && productimageList
                                                                ? productimageList && productimageList.rawMaterialCostList.map((plant) => {
                                                                    return (
                                                                        <div className="row">
                                                                            <div className="col-6 pl-0">
                                                                                <p>{plant.Plant_Code__c}</p>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                {/* <p>{plant.Name}</p> */}
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                })
                                                                : null}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="col-12 mt-2 mb-4">
                                                <div className="row">
                                                    <h6 className="loyality_sec">Loyalty Point
                                                        <span className="assign_points">
                                                            <AssignLoyaltyPopup title="Assign Loyalty Point" />
                                                        </span>

                                                       
                                                    </h6>
                                                    <div className="col-12 p-0">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                <label>Customer Type</label>
                                                            </div>
                                                            <div className="col-3">
                                                                <label>Loyalty Point</label>
                                                            </div>
                                                            <div className="col-3">
                                                                <label>Start Date</label>
                                                            </div>
                                                            <div className="col-3">
                                                                <label>End Date</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 p-0">
                                                          
                                                            <div className="row">
                                                                <div className="col-3">
                                                                    <p>Dealer</p>
                                                                </div>
                                                                <div className="col-3">
                                                                    <p>{loyaltyPointList && loyaltyPointList.dealerPoints && loyaltyPointList && loyaltyPointList.dealerPoints ? loyaltyPointList && loyaltyPointList.dealerPoints : <span>no data</span>}</p>
                                                                </div>
                                                                <div className="col-3">
                                                                    <p>{loyaltyPointList && loyaltyPointList.dstartDate && loyaltyPointList && loyaltyPointList.dstartDate ? loyaltyPointList && loyaltyPointList.dstartDate : <span>no added start date</span>}</p>
                                                                </div>
                                                                <div className="col-3">
                                                                    <p>{loyaltyPointList && loyaltyPointList.dendDate && loyaltyPointList && loyaltyPointList.dendDate ? loyaltyPointList && loyaltyPointList.dendDate : <span>no added end date</span>}</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-3">
                                                                    <p>Sub Dealer</p>
                                                                </div>
                                                                <div className="col-3">
                                                                    <p>{loyaltyPointList && loyaltyPointList.subDealerPoints && loyaltyPointList && loyaltyPointList.subDealerPoints ? loyaltyPointList && loyaltyPointList.subDealerPoints : <span>no data</span>}</p>
                                                                </div>
                                                                <div className="col-3">
                                                                    <p>{loyaltyPointList && loyaltyPointList.sdStartDate && loyaltyPointList && loyaltyPointList.sdStartDate ? loyaltyPointList && loyaltyPointList.sdStartDate : <span>no start date</span>}</p>
                                                                </div>
                                                                <div className="col-3">
                                                                    <p>{loyaltyPointList && loyaltyPointList.sdEndDate && loyaltyPointList && loyaltyPointList.sdEndDate ? loyaltyPointList && loyaltyPointList.sdEndDate : <span>no end date</span>}</p>
                                                                </div>
                                                            </div>
                                                           
                                                        </div>
                                                    </div>

                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            {productDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.productMasterDeleteGroup(productDelete)} open={open} setOpen={setOpen} />}
            </div>
        </>
    );
}

export default withTranslation()(ProductMasterDetail);
