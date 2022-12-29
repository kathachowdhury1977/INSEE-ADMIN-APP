import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import ContractMasterPopup from "../../../components/ModalPopup/ContractMasterPopup";
import { useLocation } from 'react-router-dom';
import moment from 'moment'

function ContractMaster(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();
    const { contractId } = location.state;
    const { accountName } = location.state;
    const { soldtoNumber } = location.state;

    const contractDetailList = useSelector((state) => state.contractdetaillist.contractdetaillist);
    useEffect(() => {
        dispatch(eventActions.ContractDetailList(contractId));
    }, []);

    console.log("contractDetailList", contractDetailList && contractDetailList.contractList);

    return (
        <>
            <div className="content-wrapper">
                <Header title={"Contract Id - " + contractId} />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">

                            <div className="row">
                                <div className="col-12 mt-2">
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

                            <div className="col-12 mt-3 product_master_detail">
                                <div className="row">

                                    <div className="col-12">
                                        <div className="product_right_section">
                                            <div className="col-12 pl-0">
                                                <div className="row">
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Customer Number</p>
                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Customer_Number}</span>
                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Customer Name</p>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <span className="title_value">{soldtoNumber}</span>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Contract Number</p>

                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Contract_Number}</span>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Contract Name</p>

                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.PO_Number}</span>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Overall Status</p>

                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Overall_Status}</span>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Contract Type</p>

                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Contract_Type}</span>
                                                    </div>


                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Collective Number</p>

                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Collective_Number}</span>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Sales Organization</p>

                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Sales_Organization}</span>
                                                    </div>


                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Distribution Channel</p>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Distribution_Channel}</span>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Division</p>

                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Division}</span>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Customer Group1</p>

                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Customer_Group1}</span>
                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Customer Group2</p>

                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Customer_Group2}</span>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Condition Group1</p>

                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Condition_Group1}</span>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Condition Group2</p>

                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Condition_Group2}</span>
                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Condition Group3</p>

                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Condition_Group3}</span>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Condition Group4</p>

                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Condition_Group4}</span>
                                                    </div>


                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Shipping Condition</p>

                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Shipping_Condition}</span>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Special Processing ID</p>

                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Special_Processing_ID}</span>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Shipping Type</p>

                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Shipping_Type}</span>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Sales Representative Number</p>

                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Sales_Representative_Number}</span>
                                                    </div>




                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Billing Date</p>

                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <span className="title_value">{moment(contractDetailList && contractDetailList.contractList.Billing_Date).format('DD-MM-yyyy')}</span>
                                                    </div>


                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Pricing Date</p>

                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{moment(contractDetailList && contractDetailList.contractList.Pricing_Date).format('DD-MM-yyyy')}</span>
                                                    </div>





                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Payment Term </p>

                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Payment_Term}</span>
                                                    </div>






                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Valid From</p>

                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{moment(contractDetailList && contractDetailList.contractList.Valid_From).format('DD-MM-yyyy')}</span>
                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Valid To</p>

                                                    </div>
                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{moment(contractDetailList && contractDetailList.contractList.Valid_To).format('DD-MM-yyyy')}</span>
                                                    </div>



                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">
                                                        <p className="title_key">Note from Contract</p>

                                                    </div>

                                                    <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-12 mb-3">

                                                        <span className="title_value">{contractDetailList && contractDetailList.contractList.Note_from_Contract}</span>
                                                    </div>



                                                </div>

                                            </div>

                                            <div className="row sales_dostributor">
                                                <div className="col-12 pl-0 pr-0">
                                                    <div className="row">
                                                        <h6>Contract Line Item List</h6>

                                                       
                                                            <div className="row" style={{display: "inline", width: "100%"}}>

                                                              <div className="col-12">
                                                                <div className="fixTableHead new_css" style={{ height: 'auto' }}>
                                                                    <table class="table table-bordered guideline_table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Contract_Line_Item_No.</th>
                                                                                <th>Line Item Order No</th>
                                                                                <th>Product Code</th>
                                                                                <th>Contract Volume</th>
                                                                                <th>Contract Number</th>
                                                                                <th>Plant Code</th>
                                                                                <th>Item Note</th>
                                                                                <th>Reason for rejection Code</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {contractDetailList && contractDetailList
                                                                                ? contractDetailList && contractDetailList.contractLineItemList.map((item) => {
                                                                                    return (
                                                                                        <tr>
                                                                                            <td>{item.Contract_Line_Item_No && item.Contract_Line_Item_No ? item.Contract_Line_Item_No : <div> ............</div>}</td>
                                                                                            <td>{item.Line_Item_Order_No && item.Line_Item_Order_No ? item.Line_Item_Order_No : <div> ............</div>}</td>
                                                                                            <td>{item.Product_Code && item.Product_Code ? item.Product_Code : <div> ............</div>}</td>
                                                                                            <td>{item.Contract_Volume && item.Contract_Volume ? item.Contract_Volume : <div> ............</div>}</td>
                                                                                            <td>{item.Contract_Number && item.Contract_Number ? item.Contract_Number : <div> ............</div>}</td>
                                                                                            <td>{item.Plant_Code && item.Plant_Code ? item.Plant_Code : <div> ............</div>}</td>
                                                                                            <td>{item.Item_Note && item.Item_Note ? item.Item_Note : <div> ............</div>}</td>
                                                                                            <td>{item.Reason_for_rejection_Code && item.Reason_for_rejection_Code ? item.Reason_for_rejection_Code : <div> ............</div>}</td>
                                                                                        </tr>

                                                                                    );
                                                                                })
                                                                                : null}
                                                                        </tbody>
                                                                    </table>
                                                                    </div>
                                                                </div>





                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="row mb-5" style={{display: "inline", width: "100%"}}>
                                                    <div className="">
                                                        <h6>Opportunity Ship To Member List</h6>
                                                        
                                                        <div className="fixTableHead new_css" style={{ height: 'auto' }}>
                                                            <table class="table table-bordered guideline_table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>ShipTo Account.</th>
                                                                        <th>Contract Number</th>
                                                                        <th>Key</th>
                                                                        <th>Partner Function</th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {contractDetailList && contractDetailList
                                                                        ? contractDetailList && contractDetailList.opptyShipToMemberList.map((oppitem) => {
                                                                            return (
                                                                                <tr>
                                                                                    <td>{oppitem.ShipTo_Account}</td>
                                                                                    <td>{oppitem.Contract_Number}</td>
                                                                                    <td>{oppitem.Key}</td>
                                                                                    <td>{oppitem.Partner_Function}</td>

                                                                                </tr>

                                                                            );
                                                                        })
                                                                        : null}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        

                                                    </div>
                                                </div>

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

export default withTranslation()(ContractMaster);
