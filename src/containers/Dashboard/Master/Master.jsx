import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";

function Master(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

    return (
        <>
            <div className="content-wrapper">
                <Header title="Master Categories List" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="row">
                        <div className="col-12 master_section">
                            <ul>
                               <li><Link to="/ActionCategory">Action Category</Link></li>
                                <li><Link to="/ActionStatus">Action Status</Link></li>
                                <li><Link to="/AreaType">Area Type</Link></li>
                                {/* <li><Link to="/BusinessSegment">Business Segment (Division)</Link></li> */}
                                <li><Link to="/CaseOrigin">Case Origin</Link></li>
                                <li><Link to="/CaseStatus">Case Status</Link></li>
                                <li><Link to="/CaseType">Case Type</Link></li>
                                <li><Link to="/Category">Category</Link></li>
                                <li><Link to="/CompetitorProduct">Competitor Product Brand</Link></li>
                                <li><Link to="/ConstructionPhase">Construction Phase</Link></li>
                                <li><Link to="/DeliveryMode">Delivery Mode</Link></li>
                                <li><Link to="/PrefferdTruckDelivery">Preffered Truck Type Delivery</Link></li>
                                 <li><Link to="/ChooseTransportor">Choose Transporter Zone</Link></li>
                                 {/* <li><Link to="/LoyalityCalcRules">Loyalty Calc Rules</Link></li> */}
                                 <li><Link to="/SpecialProject">Special Project Delivery</Link></li>
                                 {/* <li><Link to="/LoyalityCutoffRules">Loyalty Cut Off Rules</Link></li>
                                 <li><Link to="/AdjustLoyalityAdmin">Adjust Loyalty From Admin</Link></li> */}
                                 <li><Link to="/Division">Division</Link></li>
                                 <li><Link to="/SubCategory">Sub Category</Link></li>
                                 <li><Link to="/Description">Description</Link></li>
                                 {/* <li><Link to="/HolidayMaster">Holiday Master</Link></li>
                                 <li><Link to="/ExistingCustomer">Existing Customer</Link></li>
                                 <li><Link to="/NonCustomerInactive">Non Customer / Inactive</Link></li>
                                 <li><Link to="/ActivityTarget">Activity Target</Link></li>
                                 <li><Link to="/BeatMaster">Beat Master</Link></li>*/}
                                 <li><Link to="/LoyaltyReports">Loyalty Reports</Link></li> 
                                
                                 


                                
                                  {/* <li><Link to="/HolidayMaster">Holiday Master</Link></li>
                                 <li><Link to="/Department">Department</Link></li>           
                                <li><Link to="/DistributionArea">Distribution Area For Cartage Cost</Link></li>
                                <li><Link to="/DistributionChannel">Distribution Channel</Link></li>
                                <li><Link to="/FunctionalRole">Functional Role</Link></li>
                                <li><Link to="/LeadSource">Lead Source</Link></li>
                                <li><Link to="/LeadStage">Lead Stage</Link></li>
                                <li><Link to="/MarketIntelligenceInformationMaster">Market Intelligence Information</Link></li>
                                <li><Link to="/OrderType">Order Type</Link></li>
                                <li><Link to="/PackageTypeMaster">Package Type Master</Link></li>
                                <li><Link to="/PreferredTruckType">Preferred truck type</Link></li>
                                <li><Link to="/PriceBook">Price Book</Link></li>
                                <li><Link to="/PriceTypeMaster">Price Type Master</Link></li>
                                <li><Link to="/ProductProduce">Product Produce</Link></li>
                                <li><Link to="/ProductType">Product Type</Link></li>
                                <li><Link to="/ProjectTypeMaster">Project Type Master</Link></li>
                                <li><Link to="/PromotionType">Promotion Type</Link></li>
                                <li><Link to="/RetailerPaymentTermMaster">Retailer Payment Term Master</Link></li>
                                <li><Link to="/SalesDistrict">Sales District</Link></li>
                                <li><Link to="/SalesOrganization">Sales Organizations</Link></li>
                                <li><Link to="/ShippingCondition">Shipping Condition</Link></li>
                                <li><Link to="/ShippingType">Shipping Type</Link></li>
                                <li><Link to="/SpecialProcessing">Special Processing</Link></li>   
                                <li><Link to="/StrategyType">Strategy Type</Link></li>
                                <li><Link to="/Transportor">Transporter</Link></li>
                                <li><Link to="/TransportorZone">Transportation Zone</Link></li>
                                <li><Link to="/TruckType">Truck Type</Link></li>
                                <li><Link to="/UnitMaster">Unit Master</Link></li>
                                <li><Link to="/UserRole">User Role</Link></li>
                                  


  */}

 






                
                                {/* <li><Link to="/DeliveryStatus">Delivery Status</Link></li> */}
                                {/* <li><Link to="/TypeProjectProduced">Type of Products Produced</Link></li> */}
                                {/* <li><Link to="/TrackTypeMaster">Truck Type Master</Link></li> */}
                               
                                {/* <li><Link to="/OrderStatus">Order Status</Link></li> */}
                                {/* <li><Link to="/ShippingStatus">Shipment Status</Link></li> */}
                                {/* <li><Link to="/CustomerCategory">Customer Category</Link></li> */}
                                {/* <li><Link to="/">External Department</Link></li> */}
                                {/* <li><Link to="/">Company Group Master</Link></li> */}
                                {/* <li><Link to="/">Vechicle OwnerShip</Link></li> */}
                                {/* <li><Link to="/">Vechicle Status</Link></li> */}
                               
                               
                            </ul>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(Master);
