import React, { useEffect, Suspense } from "react";
import "./App.scss";
import "./i18n";
// import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history } from "./_helpers";
import { alertActions } from "./_actions";
import Page404 from "./components/Page404/Page404";
import Login from "./containers/Login/Login";
import PrivateRoute from './containers/Login/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import UserManagment from "./containers/Dashboard/UserManagment";
import UserManagmentForm from "./containers/Dashboard/UserManagmentForm";
import GuidelineMatrix from "./containers/Dashboard/GuidelineMatrix/GuidelineMatrix";
import StrategyMatrix from "./containers/Dashboard/StrategyMatrix/StrategyMatrix";
import StrategyMatrixForm from "./containers/Dashboard/StrategyMatrix/StrategyMatrixForm";
import SoldToManagement from "./containers/Dashboard/SoldToManagement/SoldToManagement";
import SalesAreaList from "./containers/Dashboard/SoldToManagement/SalesAreaList";
import CompanyList from "./containers/Dashboard/SoldToManagement/CompanyList";
import GeographyMaster from "./containers/Dashboard/GeographyMaster/GeographyMaster";
import CustomerGroupMaster from "./containers/Dashboard/CustomerGroupMaster/CustomerGroupMaster";
import ProductMaster from "./containers/Dashboard/ProductMaster/ProductMaster";
import ProductMasterDetail from "./containers/Dashboard/ProductMaster/ProductMasterDetail";
import ProductGroupMaster from "./containers/Dashboard/ProductGroupMaster/ProductGroupMaster";
import ContractMaster from "./containers/Dashboard/ContractMaster/ContractMaster";
import ShipToMaster from "./containers/Dashboard/ShipToMaster/ShipToMaster";
import CompanyGroupMaster from "./containers/Dashboard/CompanyGroupMaster/CompanyGroupMaster";
import Master from "./containers/Dashboard/Master/Master";
import BusinessSegment from "./containers/Dashboard/Master/BusinessSegment";
import DistributionChannel from "./containers/Dashboard/Master/DistributionChannel";
import ShippingType from "./containers/Dashboard/Master/ShippingType";
import ShippingCondition from "./containers/Dashboard/Master/ShippingCondition";
import SpecialProcessing from "./containers/Dashboard/Master/SpecialProcessing";
import UnitMaster from "./containers/Dashboard/Master/UnitMaster";
import PriceTypeMaster from "./containers/Dashboard/Master/PriceTypeMaster";
import RetailerPaymentTermMaster from "./containers/Dashboard/Master/RetailerPaymentTermMaster";
import PackageTypeMaster from "./containers/Dashboard/Master/PackageTypeMaster";
import ProjectTypeMaster from "./containers/Dashboard/Master/ProjectTypeMaster";
import TypeProjectProduced from "./containers/Dashboard/Master/TypeProjectProduced";
import MarketIntelligenceInformationMaster from "./containers/Dashboard/Master/MarketIntelligenceInformationMaster";
import TrackTypeMaster from "./containers/Dashboard/Master/TrackTypeMaster";
import DeliveryMode from "./containers/Dashboard/Master/DeliveryMode";
import CaseType from "./containers/Dashboard/Master/CaseType";
import CaseStatus from "./containers/Dashboard/Master/CaseStatus";
import RolePermision from "./containers/Dashboard//RolePermision";
import ExternalManagment from "./containers/Dashboard/ExternalManagment/ExternalManagment";
import ExternalMangamentDetailList from "./containers/Dashboard/ExternalManagment/ExternalMangamentDetailList";
import SalesDistrict from "./containers/Dashboard/Master/SalesDistrict";
import Division from "./containers/Dashboard/Master/Division";
import OrderType from "./containers/Dashboard/Master/OrderType";
import PreferredTruckType from "./containers/Dashboard/Master/PreferredTruckType";
import SalesOrganization from "./containers/Dashboard/Master/SalesOrganization";
import ShippingStatus from "./containers/Dashboard/Master/ShippingStatus";
import SpecialProject from "./containers/Dashboard/Master/SpecialProject";
import Transportor from "./containers/Dashboard/Master/Transportor";
import TransportorZone from "./containers/Dashboard/Master/TransportorZone";
import OrderStatus from "./containers/Dashboard/Master/OrderStatus";
import ChooseTransportor from "./containers/Dashboard/Master/ChooseTransportor";
import ConwoodProductMaster from "./containers/Dashboard/ConwoodProductMaster/ConwoodProductMaster";
import ProductGroupMasterDetailList from "./containers/Dashboard/ProductGroupMaster/ProductGroupMasterDetailList";
import InseePrivilege from "./containers/Dashboard/InseePrivilege/InseePrivilege";
import CustomerTierStatus from "./containers/Dashboard/CustomerTierStatus/CustomerTierStatus";
import EditAccountForm from "./containers/Dashboard/ExternalManagment/EditAccountForm";
import Dashboard from "./containers/Dashboard/Dashboard";
import AreaType from "./containers/Dashboard/Master/AreaType";
import CustomerCategory from "./containers/Dashboard/Master/CustomerCategory";
import StrategyType from "./containers/Dashboard/Master/StrategyType";
import ProductType from "./containers/Dashboard/Master/ProductType";
import AddContactForm from "./containers/Dashboard/ExternalManagment/AddContactForm";
import RetailerSubDealer from "./containers/Dashboard/RetailerSubDealer/RetailerSubDealer";
import SoldToassignProductGroupList from "./containers/Dashboard/SoldToManagement/SoldToassignProductGroupList";
import ProductClassification from "./containers/Dashboard/ProductClassification/ProductClassification";
import SoldToProductGroupMasterDetailList from "./containers/Dashboard/ProductGroupMaster/SoldToProductGroupMasterDetailList";
import Cms from "./containers/Dashboard/CMS/Cms";
import CompatitorProduct from "./containers/Dashboard/Master/CompatitorProduct";
import CaseOrigin from "./containers/Dashboard/Master/CaseOrigin";
import Category from "./containers/Dashboard/Master/Category";
import constructionPhase from "./containers/Dashboard/Master/constructionPhase";
import UserRole from "./containers/Dashboard/Master/UserRole";
import TruckType from "./containers/Dashboard/Master/TruckType";
import PromotionType from "./containers/Dashboard/Master/PromotionType";
import PriceBook from "./containers/Dashboard/Master/PriceBook";
import ProductProduce from "./containers/Dashboard/Master/ProductProduce";
import DistributionAreaForCartageCost from "./containers/Dashboard/Master/DistributionAreaForCartageCost";
import SubCategory from "./containers/Dashboard/Master/SubCategory";
import Description from "./containers/Dashboard/Master/Description";
import DeliveryStatus from "./containers/Dashboard/Master/DeliveryStatus";
import ActionStatus from "./containers/Dashboard/Master/ActionStatus";
import ActionCategory from "./containers/Dashboard/Master/ActionCategory";
import Department from "./containers/Dashboard/Master/Department";
import FunctionalRole from "./containers/Dashboard/Master/FunctionalRole";
import LeadSource from "./containers/Dashboard/Master/LeadSource";
import LeadStage from "./containers/Dashboard/Master/LeadStage";
import RetailerDetailList from "./containers/Dashboard/RetailerSubDealer/RetailerDetailList";
import DistributorInseeVolume from "./containers/Dashboard/DistributorInseeVolume/DistributorInseeVolume";
import LeadInseeVolume from "./containers/Dashboard/LeadInseeVolume/LeadInseeVolume";
import DistributorForcast from "./containers/Dashboard/DistributorForcast/DistributorForcast";

// masters 16-08-2021
import PrefferdTruckDelivery from "./containers/Dashboard/Master/PrefferdTruckDelivery";
import LoyalityCalcRules from "./containers/Dashboard/Master/LoyalityCalcRules";
import LoyalityCutOffRules from "./containers/Dashboard/Master/LoyalityCutOffRules";
import AdjustLoyalityAdmin from "./containers/Dashboard/Master/AdjustLoyalityAdmin";
import HolidayMaster from "./containers/Dashboard/Master/HolidayMaster";
import AddRetailerSubDealer from "./containers/Dashboard/RetailerSubDealer/AddRetailerSubDealer";
import UpdateRetailerSubDealer from "./containers/Dashboard/RetailerSubDealer/UpdateRetailerSubDealer";
import AddRetailerContactForm from "./containers/Dashboard/RetailerSubDealer/AddRetailerContactForm";
import EditRetailerContactForm from "./containers/Dashboard/RetailerSubDealer/EditRetailerContactForm";
import ExistingCustomer from "./containers/Dashboard/Master/ExistingCustomer";
import NonCustomerInactive from "./containers/Dashboard/Master/NonCustomerInactive";
import ActivityTarget from "./containers/Dashboard/Master/ActivityTarget";
import BeatMaster from "./containers/Dashboard/Master/BeatMaster";
import LoyaltyReports from "./containers/Dashboard/Master/loyaltyReports/LoyaltyReports";
import SubDealerManagement from "./containers/Loyalty/subDealerManagement/SubDealerManagement";
import SubDealerList from "./containers/Loyalty/subDealerManagement/subdealer/main/Main";
import subDealerPoitActivityReport from "./containers/Loyalty/subDealerManagement/subdealer/reports/ReportContainer";
import PointCalculationContainer from "./containers/Loyalty/PointCalculation/PointCalculationContainer";
import AllocationInventoryContainer from "./containers/Loyalty/allocation/AllocationInventoryContainer";
import ItemDetails from "./containers/Loyalty/allocation/allocationInventory/ItemDetails";

import Wip from "./containers/Loyalty/Wip";
import { LicenseInfo } from '@mui/x-license-pro';

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    //adding data-grid-pro-license key.
    LicenseInfo.setLicenseKey('95ea54c6fb3796b6d0df648cbbdb20efTz01MjQ3NixFPTE2OTczNjYxNDgxNjMsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=');
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <div className="">
      <Suspense fallback={null}>
        {/* <LanguageSelector /> */}
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/Dashboard" exact component={Dashboard} />
            <PrivateRoute path="/UserManagment" exact component={UserManagment} />
            <PrivateRoute path ="/UserManagmentForm" exect component={UserManagmentForm}/>
            <PrivateRoute path ="/GuidelineMatrix" exect component={GuidelineMatrix}/>
            <PrivateRoute path ="/StrategyMatrix" exect component={StrategyMatrix}/>
            <PrivateRoute path ="/StrategyMatrixForm" exect component={StrategyMatrixForm}/>
            <PrivateRoute path ="/SoldToManagement" exect component={SoldToManagement}/>
            <PrivateRoute path ="/GeographyMaster" exect component={GeographyMaster}/>
            <PrivateRoute path ="/CustomerGroupMaster" exect component={CustomerGroupMaster}/>
            <PrivateRoute path ="/ProductMaster" exect component={ProductMaster}/>
            <PrivateRoute path ="/ProductMasterDetail" exect component={ProductMasterDetail}/>
            <PrivateRoute path ="/ProductGroupMaster" exect component={ProductGroupMaster}/>
            <PrivateRoute path ="/ContractMaster" exect component={ContractMaster}/>
            <PrivateRoute path ="/ShipToMaster" exect component={ShipToMaster}/>
            <PrivateRoute path ="/CompanyGroupMaster" exect component={CompanyGroupMaster}/>
            <PrivateRoute path ="/Master" exect component={Master}/>
            <PrivateRoute path ="/BusinessSegment" exect component={BusinessSegment}/>
            <PrivateRoute path ="/DistributionChannel" exect component={DistributionChannel}/>
            <PrivateRoute path ="/ShippingType" exect component={ShippingType}/>
            <PrivateRoute path ="/ShippingCondition" exect component={ShippingCondition}/>
            <PrivateRoute path ="/SpecialProcessing" exect component={SpecialProcessing}/>
            <PrivateRoute path ="/UnitMaster" exect component={UnitMaster}/>
            <PrivateRoute path ="/PriceTypeMaster" exect component={PriceTypeMaster}/>
            <PrivateRoute path ="/RetailerPaymentTermMaster" exect component={RetailerPaymentTermMaster}/>
            <PrivateRoute path ="/PackageTypeMaster" exect component={PackageTypeMaster}/>
            <PrivateRoute path ="/ProjectTypeMaster" exect component={ProjectTypeMaster}/>
            <PrivateRoute path ="/TypeProjectProduced" exect component={TypeProjectProduced}/>
            <PrivateRoute path ="/MarketIntelligenceInformationMaster" exect component={MarketIntelligenceInformationMaster}/>
            <PrivateRoute path ="/TrackTypeMaster" exect component={TrackTypeMaster}/>
            <PrivateRoute path="/DeliveryMode" exact component={DeliveryMode}/>
            <PrivateRoute path = "/CaseType" exact component={CaseType}/>
            <PrivateRoute path = "/CaseStatus" exact component={CaseStatus}/>
            <PrivateRoute path = "/RolePermision" exact component={RolePermision}/>
            <PrivateRoute path = "/ExternalManagment" exact component={ExternalManagment}/>
            <PrivateRoute path = "/ExternalMangamentDetailList" exact component={ExternalMangamentDetailList}/>
            <PrivateRoute path = "/SalesAreaList" exact component={SalesAreaList}/>
            <PrivateRoute path = "/CompanyList" exact component={CompanyList}/>
            <PrivateRoute path = "/SalesDistrict" exact component={SalesDistrict}/>
            <PrivateRoute path = "/Division" exact component={Division}/>
            <PrivateRoute path = "/OrderType" exact component={OrderType}/>
            <PrivateRoute path = "/PreferredTruckType" exact component={PreferredTruckType}/>
            <PrivateRoute path = "/SalesOrganization" exact component={SalesOrganization}/>
            <PrivateRoute path = "/ShippingStatus" exact component={ShippingStatus}/>
            <PrivateRoute path = "/SpecialProject" exact component={SpecialProject}/>
            <PrivateRoute path = "/Transportor" exact component={Transportor}/>
            <PrivateRoute path = "/TransportorZone" exact component={TransportorZone}/>
            <PrivateRoute path = "/OrderStatus" exact component={OrderStatus}/>
            <PrivateRoute path = "/ChooseTransportor" exact component={ChooseTransportor}/>
            <PrivateRoute path = "/ConwoodProductMaster" exact component={ConwoodProductMaster}/>
            <PrivateRoute path = "/ProductGroupMasterDetailList" exact component={ProductGroupMasterDetailList}/>
            <PrivateRoute path = "/InseePrivilege" exact component={InseePrivilege}/>
            <PrivateRoute path = "/CustomerTierStatus" exact component={CustomerTierStatus}/>
            <PrivateRoute path = "/AreaType" exact component={AreaType}/>
            <PrivateRoute path = "/CustomerCategory" exact component={CustomerCategory}/>
            <PrivateRoute path = "/StrategyType" exact component={StrategyType}/>
            <PrivateRoute path = "/CompetitorProduct" exact component={CompatitorProduct}/>
            <PrivateRoute path = "/ProductType" exact component={ProductType}/>
            <PrivateRoute path = "/AddContactForm" exact component={AddContactForm}/>
            <PrivateRoute path = "/RetailerSubDealer" exact component={RetailerSubDealer}/>
            <PrivateRoute path = "/ProductClassification" exact component={ProductClassification}/>
            <PrivateRoute path = "/SoldToassignProductGroupList" exact component={SoldToassignProductGroupList}/>
            <PrivateRoute path = "/SoldToProductGroupMasterDetailList" exact component={SoldToProductGroupMasterDetailList}/>
            <PrivateRoute path = "/EditAccountForm" exact component={EditAccountForm}/>
            <PrivateRoute path = "/Cms" exact component={Cms}/>
            <PrivateRoute path = "/CaseOrigin" exact component={CaseOrigin}/>
            <PrivateRoute path = "/Category" exact component={Category}/>
            <PrivateRoute path = "/ConstructionPhase" exact component={constructionPhase}/>
            <PrivateRoute path = "/UserRole" exact component={UserRole}/>
            <PrivateRoute path = "/TruckType" exact component={TruckType}/>
            <PrivateRoute path = "/PromotionType" exact component={PromotionType}/>
            <PrivateRoute path = "/PriceBook" exact component={PriceBook}/>
            <PrivateRoute path = "/ProductProduce" exact component={ProductProduce}/>
            <PrivateRoute path = "/DistributionArea" exact component={DistributionAreaForCartageCost}/>
            <PrivateRoute path = "/SubCategory" exact component={SubCategory}/>
            <PrivateRoute path = "/Description" exact component={Description}/>
            <PrivateRoute path = "/DeliveryStatus" exact component={DeliveryStatus}/>
            <PrivateRoute path = "/ActionStatus" exact component={ActionStatus}/>
            <PrivateRoute path = "/ActionCategory" exact component={ActionCategory}/>
            <PrivateRoute path = "/Department" exact component={Department}/>
            <PrivateRoute path = "/FunctionalRole" exact component={FunctionalRole}/>
            <PrivateRoute path = "/LeadSource" exact component={LeadSource}/>
            <PrivateRoute path = "/LeadStage" exact component={LeadStage}/>
            <PrivateRoute path = "/RetailerDetailList" exact component={RetailerDetailList}/>
            <PrivateRoute path = "/DistributorInseeVolume" exact component={DistributorInseeVolume}/>
            <PrivateRoute path = "/LeadInseeVolume" exact component={LeadInseeVolume}/>
            <PrivateRoute path = "/DistributorForcast" exact component={DistributorForcast}/>

            {/* 16-08-2021 */}
            <PrivateRoute path = "/PrefferdTruckDelivery" exact component={PrefferdTruckDelivery}/>
            <PrivateRoute path = "/LoyalityCalcRules" exact component={LoyalityCalcRules}/>
            <PrivateRoute path = "/LoyalityCutOffRules" exact component={LoyalityCutOffRules}/>
            <PrivateRoute path = "/AdjustLoyalityAdmin" exact component={AdjustLoyalityAdmin}/>
            <PrivateRoute path = "/HolidayMaster" exact component={HolidayMaster}/>
            <PrivateRoute path = "/AddRetailerSubDealer" exact component={AddRetailerSubDealer}/>
            <PrivateRoute path = "/UpdateRetailerSubDealer" exact component={UpdateRetailerSubDealer}/>
            <PrivateRoute path = "/AddRetailerContactForm" exact component={AddRetailerContactForm}/>
            <PrivateRoute path = "/EditRetailerContactForm" exact component={EditRetailerContactForm}/>
            <PrivateRoute path = "/ExistingCustomer" exact component = {ExistingCustomer} />
            <PrivateRoute path = "/NonCustomerInactive" exact component = {NonCustomerInactive}/>
            <PrivateRoute path = "/ActivityTarget" exact component = {ActivityTarget}/>
            <PrivateRoute path = "/BeatMaster" exact component = {BeatMaster}/>
            <PrivateRoute path = "/LoyaltyReports" exact component = {LoyaltyReports}/>
            <PrivateRoute path = "/SubDealerManagement" exact component = {SubDealerManagement}/>
            <PrivateRoute path = "/subDealer" exact component = {SubDealerList}/>
            <PrivateRoute path = "/subDealerPoitActivityReport" exact component = {subDealerPoitActivityReport}/>
            <PrivateRoute path = "/pointCalculation" exact component = {PointCalculationContainer}/>
            <PrivateRoute path = "/allocationInventory" exact component = {ItemDetails}/>
            <PrivateRoute path = "/wip" exact component = {Wip}/>
            <ToastContainer/>
            
            
            <Route component={Page404} />
          </Switch>
        </Router>
        
      </Suspense>
    
    </div>

  );
}

export { App };
