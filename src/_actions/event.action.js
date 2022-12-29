import { eventConstants } from '../_constants';
import { eventService } from '../_services';


export const eventActions = {
  createNewEvent,
  getAllVisitMode,
  getAllVisitObjective,
  addUser,
  soldToManagmentList,
  productmasterList,
  productGroupmasterList,
  AddProductGroup,
  productGroupSearch,
  productMasterDetail,
  GeographyMasterUpload,
  insseDesUpdate,
  subDealerData,
  productMasterSearch,
  contactToggle,
  DownloadContact,
  AccountContactList,
  productGroupDetailList,
  productDetailImageUpload,
  getDivision,
  addDivision,
  getBusinessSegment,
  addBusinessSegment,
  getDistributionChannel,
  addDistributionChannel,
  getShippingCondition,
  addShippingCondition,
  SpecialProcessing,
  addSpecialProcessing,
  transportorZone,
  addTransportorZone,
  shppingType,
  addShippingType,
  CaseStatus,
  CheckboxToggle,
  addCaseStatus,
  CaseType,
  addCaseType,
  AssignProduct,
  ContactStatus,
  ProductGroupstatus,
  activeProduct,
  UpdateProductGroup,
  productSelectId,
  productmasterItemId,
  UnitMaster,
  addUnitMaster,
  SoldtoManagmentItemId,
  UpdateSoldToManagment,
  getRoleList,
  RegionList,
  ProvinceList,
  DistrictList,
  regionSelect,
  provinceSelect,
  SegmentList,
  getAllUser,
  SubDistrictList,
  districtSelect,
  subDistrictSelect,
  AssignProductGroupDetailList,
  GeographyMasterList,
  ProductImageGetList,
  SoldToManagmentSearch,
  AccountFormData,
  ProductActiveAssignList,
  ProductMasterActiveInactive,
  activeProductMaster,
  soldtoProductGroupList,
  GetcustomerGroup,
  addcustomerGroup,
  TruckMasterList,
  ShipToList,
  SoldToContractList,
  ContractDetailList,
  InseePrivilageList,
  AddRole,
  getAllRoleList,
  AddTruckMaster,
  getOwnerShip,
  vechileStatusList,
  vechileTypeList,
  GuideLinematrix,
  activeTruckMaster,
  updateTruckMaster,
  UploadGuideLinematrix,
  UploadRetailer,
  UploadInseePrivilage,
  UploadCustomerTier,
  getStrategyMatrix,
  addStrategyMatrix,
  InternalManagmentFilter,
  roleSelect,
  InternalManagmentSearch,
  CustomerUserId,
  getCustomerTierList,
  retailerList,
  loyaltyCustomerTypeList,
  postloyaltyPointForm,
  getloyaltyPointList,
  productClassificationList,
  addProductClassification,
  productGroupEditList,
  deleteAssignProductList,
  deleteSoldToProductGroupList,
  modifiedProductGroup,
  getWithVechileIdList,
  getAppType,
  getChannelType,
  addBannerImage,
  getBannerImageList,
  searchRetailer,
  retailerSubdealers,
  productMasterDeleteGroup,
  addConwoodMaster,
  dropdownParentCategory,
  getConwoodAllCategoryList,
  deleteCategoryList,
  editConwoodList,
  UploadProductGroup,
  uploadSoldToManagement,
  updateContactList,
  contactUserId,
  UpdatecontactToggle,
  autoFillContactForm,
  DownloadSoldTo,
  deleteBannerList,
  editBannerList,
  getDashboardImage,
  downloadProductGroup,
  UploadContact,
  getDeliveryMode,
  updateDivision,
  addPriceType,
  getPriceType,
  addRetailerPaymentTermMaster,
  getRetailerPaymentTermMaster,
  addPackageType,
  getPackageType,
  addProjectType,
  getProjectType,
  addMarketIntelligence,
  getMarketIntelligence,
  addDeliveryMode,
  getDeliveryMode,
  addSalesDistrict,
  getSalesDistrict,
  addPreferredTruckTypes,
  getPreferredTruckTypes,
  addSalesOrganization,
  getSalesOrganization,
  addSpecialProject,
  getSpecialProject,
  addAreaType,
  getAreaType,
  addStrategyType,
  getStrategyType,
  addCompatitorProduct,
  getCompatitorProduct,
  addOrderType,
  getOrderType,
  addProductType,
  getProductType,
  addTransporter,
  getTransporter,
  DownloadInseePrivilege,
  DownloadCustomerTier,
  ShipToSearch,
  ContractListBySearchValue,
  TruckMasterSearch,
  SubDealerSearch,
  ContactListBySearchValue,
  DownloadContactDetails,
  getCaseOrigin,
  addCaseOrigin,
  addCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  resetCategoryReducer,
  resetDeleteCategoryReducer,
  resetAddCategoryReducer,
  addConstructionPhase,
  getConstructionPhase,
  addUserRole,
  getUserRole,
  addTruckType,
  getTruckType,
  addPromotionType,
  getPromotionType,
  addPriceBook,
  getPriceBook,
  addProductProduce,
  getProductProduce,
  addDistributionArea,
  getDistributionArea,
  addSubCategory,
  resetAddSubCategoryReducer,
  getSubCategory,
  updateSubCategory,
  resetUpdateSubCategoryReducer,
  deleteSubCategory,
  resetDeleteSubCategoryReducer,
  getDescription,
  addDescription,
  resetAddDescriptionReducer,
  updateDescription,
  resetUpdateDescriptionReducer,
  deleteDescription,
  resetDeleteDescriptionReducer,
  getDeliveryStatus,
  addDeliveryStatus,
  getActionStatus,
  addActionStatus,
  getActionCategory,
  addActionCategory,
  getDepartment,
  addDepartment,
  getFunctionalRole,
  addFunctionalRole,
  getLeadSource,
  addLeadSource,
  getLeadStage,
  addLeadStage,
  resetAddCaseStatusReducer,
  resetUpdateCaseStatusReducer,
  resetDeleteCaseStatusReducer,
  updateCaseStatus,
  deleteCaseStatus,
  resetAddCaseTypeReducer,
  resetUpdateCaseTypeReducer,
  resetDeleteCaseTypeReducer,
  updateCaseType,
  deleteCaseType,
  resetAddCategoryReducer,
  resetCategoryReducer,
  resetDeleteCategoryReducer,
  updateCategory,
  deleteCategory,
  resetAddDivisionReducer,
  resetDeleteDivisionReducer,
  resetUpdateDivisionReducer,
  resetAddActionCategoryReducer,
  resetAddActionStatusReducer,
  resetAddAreaTypeReducer,
  resetAddCaseOriginReducer,
  resetAddCompatitorProductReducer,
  resetAddConstructionPhaseReducer,
  resetAddDeliveryModeReducer,
  resetAddDepartmentReducer,
  resetAddDistributionAreaReducer,
  resetAddDistributionChannelReducer,
  resetAddFunctionalRoleReducer,
  resetAddLeadSourceReducer,
  resetAddLeadStageReducer,
  resetAddMarketIntelligenceReducer,
  resetAddPackageTypeReducer,
  resetAddPreferredTruckTypesReducer,
  resetAddPriceTypeReducer,
  resetAddPriceBookReducer,
  resetProductProduceReducer,
  resetProductTypeReducer,
  resetProjectTypeReducer,
  resetAddPromotionTypeReducer,
  resetAddRetailerPaymentReducer,
  resetAddSalesDistrictReducer,
  resetAddSalesOrganizationReducer,
  resetAddShippingTypeReducer,
  resetAddSpecialProcessingReducer,
  resetAddSpecialProjectReducer,
  resetAddStrategyTypeReducer,
  resetAddTransporterReducer,
  resetAddTruckTypeReducer,
  resetAddUnitMasterReducer,
  resetAddUserRoleReducer,
  resetTransportorZoneReducer,
  resetAddShippingConditionReducer,
  deleteProductGroupList,
  updateCustomerTier,
  getautoCustomerTier,
  updateInseePrivilage,
  getautoInseePrivilege,
  deleteContactList,
  retailerDetailList,
  retailerAutoList,
  updateRetailerList,
  DownloadRetailerExcel,
  filterProductMaster,
  downloadRetailerSubDealer,
  resendEmailLoginCredential,
  assignProductItemId,
  assignProductAddDate,
  assignProductUpdateDate,
  getdateAssignbyId,
  assignSoldToProductUpdateDate,
  getdateAssignSoldTobyId,
  addProductDateUnderSoldTo,
  SoldToAssignProduct,
  updateProductDateUnderSoldTo,
  getAssignedProductListForSoldTo,
  deleteProductDateInSoldTo,
  getAssignedProductGroupByIdInSoldTo,
  uploadRetailerSubDealerExcel,
  uploadInseeVolume,
  uploadLeadInseeVolume,
  uploadForcastInseeVolume,
  conwoodAutofillCategory,
  getTotalInseeVolumeList,
  updateConwoodCategory,
  SoldtoAllEmail,
  downloadInseeVolumeTemplate,
  downloadCustomerGroupSoldTo,
  UpdateTotalInseeVolumeList,
  UploadCustomerGroupCode,
  SoldToDropdownContry,
   sendSMSformSoldTo,
   SoldToPdpaForCustomer,
   UpdateActionCategory,
   DeleteActionCategory,
   UpdateActionStatus,
   DeleteActionStatus,
   UpdateAreaType,
   DeleteAreaType,
   UpdateCaseOrigin,
   DeleteCaseOrigin,
   UpdateCompetitorProduct,
   DeleteCompetitorProduct,
   DeleteConsttuctionPhase,
   UpdateConstructionPhase,
   UpdateDeliverMode,
   DeleteDeliveryMode,
   SoldToSelectWithDivision,
   deleteDivision,
   getPrefferedTruckDelivery,
   postPrefferedTruckDelivery,
   uploadPrefferedTruckDelivery,
   deletePrefferedTruckDelivery,
   getChooseTransportorZone,
   postChooseTransportorZone,
   uploadChooseTransportorZone,
   deleteChooseTransportorZone,
   updatePrefferedTruckDelivery,
   updateChooseTransportorZone,
   uploadLoyalityCalcRules,
   uploadLoyalityCutOffRules,
   uploadAdjustLoyalityAdmin,
   getLoyalityCalcRules,
   getLoyalityCutOffRules,
   getAdjuctLoyalityAdmin,
   deleteSpecialProjectDelivery,
   uploadSpecialProjectDelivery,
   updateSpecialProjectDelivey,
   deleteLoyalityCalcRules,
   deleteLoyalityCutOffRules,
   deleteAdjectLoyalityAdmin,
   shiptToSelectId,
   productAssignListSearch,
   deleteUsermanagmentCustomer,
   updateUsermanagmentCustomer,
   SelectCustomerUserId,
   statusUsermanagmentCustomer,
   RetailerMakeInseePlus,
   RetailerContactList,
   UploadRetailerContact,
   RetailerUserId,
   loyaltyCompanyTypeList,
   updateloyaltyPointForm,
   updateloyaltyCutOff,
   LoyalityCategoryMasterList,
   addAdjustLoyalityAdmin,
   updateAdjustLoyalityAdmin,
   getRedemList,
   getEarnPointList,
   materialGroupList,
   DealerCustomerName,
   UploadContactVNandLK,
   getContactVNLKDownloadLink,
   deleteProductDetailImage,
   getAllHolidayMasterList,
   postAddHolidayMaster,
   updateAddHolidayMaster,
   deleteHolidayMaster,
   uploadHolidayMaster,
   getAllWeekendHolidayList,
   uploadWeekendMaster,
   deleteSubDealerSoldTo,
   updateSubDealerSoldTo,
   getVolumeAllocationList,
   deleteVolumeAllocation,
   createRetailerSubDealer,
   salesRepIdList,
   salesDistrictList,
   updateVolumeCutOffDate,
   retailerAutoField,
   retailerAllContactList,
   RetailerAccountFormData,
   updateRetailerSoldTo,
   deleteRetailerSoldTo,
   updateRetailerContactList,
   deleteRetailerContactList,
   autofillRetailerContact,
   getexistingCustomerCadence,
   uploadexistingCustomerCadence,
   deleteExistingCustomer,
   updateExistingCustomer,
   getNonCustomerInActive,
   uploadNonCustomerInActive,
   deleteCustomerInactive,
   updateCustomerInActive,
   getActivityTarget,
   uploadActivityTarget,
   updateActivityTarget,
   getBeatList,
   uploadBeatManagmentList,
   getRelationwithCustomerList,
   uploadRelationCustomerList,
   deleteActivityTarget,
   deleteBeatMaster,
   deleteCustomerRelation,
   downloadexistingCustomerCadence,
   downloadNonInactiveCustomer,
   downloadActivityTarget,
   downloadBeatMaster,
   getBeatMasterSearch,
   updateBeatMaster,
   downloadRelationWith,
   updateRelationCustomerMaster,
   getRelationSearch,
   addRetailerSoldTo,
   getRetailerLoyaltyList,
   updateRetailerLoyaltyPoint,
   getRetailerLoyaltySearch,
   deleteRetailerLoyaltyList,
   AddSoldTosubDealer,
   VNOrLKRetailerContactExcel,
   getAutoretailersubdealerCode,
   getDealerActivityPoint,
   getVolumeAllocationLoyalty,
   getSubDealerActivityPoint,
   getAdjustLoyaltyPoint,
   getAdjustReportList,
   getVolumeAllicationLoyaltyReports,
   getDealerActivityLoyaltyReports,
   getSubDealerLoyaltyReport,
   getBillingYearList,
   downloadDealerActivityXsl,
   downloadVolumeAllocationXsl,
   downloadSubDealerActivityXsl,
   downloadAdjustLoyaltyXsl,
   addClasswithStype,
   fontSizeChanger,
   InseePrivilageForMonthYear,
   adjustLoyltydeleteAdmin,
   selectMultiCheckbox,
   downloadAdjustLoyaltyAdmin,
   getAdjustLoyaltyAdminFilter,
   getMyAllExpiredCalcRules,
   RetailerProvince,
   RetailerDistrict,
   RetailerSubDistrict,
   salesSoldtoAreaList
   
};

function autoFillContactForm(soldToNumber, userId) {
  return dispatch => {
    dispatch(request());

    eventService.autoFillContactForm(soldToNumber, userId)
      .then(
        autofillcontactform => dispatch(success(autofillcontactform)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.AUTO_FILL_CONTACT_FORM_REQUEST } }
  function success(autofillcontactform) { return { type: eventConstants.AUTO_FILL_CONTACT_FORM_SUCCESS, autofillcontactform } }
  function failure(error) { return { type: eventConstants.AUTO_FILL_CONTACT_FORM_FAILURE, error } }

}

function createNewEvent() {
  return dispatch => {
    dispatch(request());

    eventService.createEvent()
      .then(
        event => dispatch(success(event)),
        error => dispatch(failure(error.toString()))
      );
  };


  function request(event) { return { type: eventConstants.REGISTER_REQUEST, event } }
  function success(event) { return { type: eventConstants.REGISTER_SUCCESS, event } }
  function failure(error) { return { type: eventConstants.REGISTER_FAILURE, error } }
}


// function allEvent() {
//     return dispatch => {
//       dispatch(request());

//       eventService.getAllEvent()
//           .then(
//               event => dispatch(success(event)),
//               error => dispatch(failure(error.toString()))
//           );
//   };

//   function request(event) { return { type: eventConstants.GETALL_REQUEST, event } }
//   function success(event) { return { type: eventConstants.GETALL_SUCCESS, event } }
//   function failure(error) { return { type: eventConstants.GETALL_FAILURE, error } }
// }

function getAllVisitMode() {
  return dispatch => {
    dispatch(request());

    eventService.getAllVisitMode()
      .then(
        eventMode => dispatch(success(eventMode)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GETALL_REQUEST } }
  function success(eventMode) { return { type: eventConstants.GETALL_SUCCESS, eventMode } }
  function failure(error) { return { type: eventConstants.GETALL_FAILURE, error } }

}
function getAllVisitObjective() {
  return dispatch => {
    dispatch(request());

    eventService.getAllVisitObjective()
      .then(
        eventObjective => dispatch(success(eventObjective)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GETALL_REQUEST } }
  function success(eventObjective) { return { type: eventConstants.GETALL_SUCCESS, eventObjective } }
  function failure(error) { return { type: eventConstants.GETALL_FAILURE, error } }

}

function addUser(data, loginID) {
  return dispatch => {
    dispatch(request());

    (!!data || !!loginID) ? eventService.addUser(data, loginID)
      .then(
        adduser => dispatch(success(adduser)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(ClearState());
  };
  function request() { return { type: eventConstants.ADD_USER_REQUEST } }
  function success(adduser) { return { type: eventConstants.ADD_USER_SUCCESS, adduser } }
  function failure(error) { return { type: eventConstants.ADD_USER_FAILURE, error } }
  function ClearState() { return { type: eventConstants.ADD_USER_CLEAR_STATE } }

}

function soldToManagmentList(endIndex, startIndex) {
  return dispatch => {
    dispatch(request());

   (!!endIndex || !!startIndex) ? eventService.soldToManagmentList(endIndex, startIndex)
      .then(
        soldtomanagment => dispatch(success(soldtomanagment)),
        error => dispatch(failure(error.toString()))
      ): dispatch(ClearState());
  };
  function request() { return { type: eventConstants.SOLD_TO_MANAGMENT_REQUEST } }
  function success(soldtomanagment) { return { type: eventConstants.SOLD_TO_MANAGMENT_SUCCESS, soldtomanagment } }
  function failure(error) { return { type: eventConstants.SOLD_TO_MANAGMENT_FAILURE, error } }
  function ClearState() { return { type: eventConstants.SOLD_TO_MANAGMENT_CLEAR  } }

}

function productmasterList(countryCode, endIndex,filterData, startIndex) {
  return dispatch => {
    dispatch(request());

    eventService.productmasterList(countryCode, endIndex,filterData, startIndex)
      .then(
        productmasterlist => dispatch(success(productmasterlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PRODUCT_MASTER_REQUEST } }
  function success(productmasterlist) { return { type: eventConstants.PRODUCT_MASTER_SUCCESS, productmasterlist } }
  function failure(error) { return { type: eventConstants.PRODUCT_MASTER_FAILURE, error } }

}

function productGroupmasterList(endIndex, startIndex) {
  return dispatch => {
    dispatch(request());

    (!!endIndex || !!startIndex) ? eventService.productGroupmasterList(endIndex, startIndex)
      .then(
        productgroupmasterlist => dispatch(success(productgroupmasterlist)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.PRODUCT_GROUP_MASTER_LIST_REQUEST } }
  function success(productgroupmasterlist) { return { type: eventConstants.PRODUCT_GROUP_MASTER_LIST_SUCCESS, productgroupmasterlist } }
  function failure(error) { return { type: eventConstants.PRODUCT_GROUP_MASTER_LIST_FAILURE, error } }
  function clearState() { return { type: eventConstants.PRODUCT_GROUP_MASTER_LIST_CLEAR_STATE } }

}

function AddProductGroup(data) {
  return dispatch => {
    dispatch(request());

    !!data ?
      eventService.AddProductGroup(data)
        .then(
          addproductgroup => dispatch(success(addproductgroup)),
          error => dispatch(failure(error.toString()))
        ) : dispatch(clearToast())
  };
  function request() { return { type: eventConstants.ADD_PRODUCT_GROUP_REQUEST } }
  function success(addproductgroup) { return { type: eventConstants.ADD_PRODUCT_GROUP_SUCCESS, addproductgroup } }
  function failure(error) { return { type: eventConstants.ADD_PRODUCT_GROUP_FAILURE, error } }
  function clearToast() { return { type: eventConstants.ADD_PRODUCT_GROUP_CLEAR_TOAST } }

}




function productMasterDetail(productID) {
  return dispatch => {
    dispatch(request());

    eventService.productMasterDetail(productID)
      .then(
        productmasterdetail => dispatch(success(productmasterdetail)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PRODUCT_MASTER_DETAIL_REQUEST } }
  function success(productmasterdetail) { return { type: eventConstants.PRODUCT_MASTER_DETAIL_SUCCESS, productmasterdetail } }
  function failure(error) { return { type: eventConstants.PRODUCT_MASTER_DETAIL_FAILURE, error } }

}



function productGroupSearch(endIndex, searchText, startIndex) {
  return dispatch => {
    dispatch(request());

   (!!endIndex || !!searchText || !!startIndex) ? eventService.productGroupSearch(endIndex, searchText, startIndex)
      .then(
        productgroupsearch => dispatch(success(productgroupsearch)),
        error => dispatch(failure(error.toString()))
      ): dispatch(ClearState());
  };
  function request() { return { type: eventConstants.PRODUCT_GROUP_SEARCH_REQUEST } }
  function success(productgroupsearch) { return { type: eventConstants.PRODUCT_GROUP_SEARCH_SUCCESS, productgroupsearch } }
  function failure(error) { return { type: eventConstants.PRODUCT_GROUP_SEARCH_FAILURE, error } }
  function ClearState() { return { type: eventConstants.PRODUCT_GROUP_SEARCH_CLEAR } }

}

function GeographyMasterUpload(contrycode, category, upload) {
  return dispatch => {
    dispatch(request());

    eventService.GeographyMasterUpload(contrycode, category, upload)
      .then(
        geographymasterupload => dispatch(success(geographymasterupload)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GEOGRAPHY_MASTER_UPLOAD_REQUEST } }
  function success(geographymasterupload) { return { type: eventConstants.GEOGRAPHY_MASTER_UPLOAD_SUCCESS, geographymasterupload } }
  function failure(error) { return { type: eventConstants.GEOGRAPHY_MASTER_UPLOAD_FAILURE, error } }

}


function insseDesUpdate(productID) {
  return dispatch => {
    dispatch(request());

    eventService.insseDesUpdate(productID)
      .then(
        inssedesupdate => dispatch(success(inssedesupdate)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.INSEE_DESC_UPDATE_REQUEST } }
  function success(inssedesupdate) { return { type: eventConstants.INSEE_DESC_UPDATE_SUCCESS, inssedesupdate } }
  function failure(error) { return { type: eventConstants.INSEE_DESC_UPDATE_FAILURE, error } }

}

function productMasterSearch(endIndex, productname, startIndex) {
  return dispatch => {
    dispatch(request());

    eventService.productMasterSearch(endIndex, productname, startIndex)
      .then(
        productmastersearch => dispatch(success(productmastersearch)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PRODUCT_MASTER_SEARCH_REQUEST } }
  function success(productmastersearch) { return { type: eventConstants.PRODUCT_MASTER_SEARCH_SUCCESS, productmastersearch } }
  function failure(error) { return { type: eventConstants.PRODUCT_MASTER_SEARCH_FAILURE, error } }

}


function contactToggle(UpdateData) {
  return dispatch => {
    dispatch(request());

   !!UpdateData ? eventService.contactToggle(UpdateData)
      .then(
        contacttoggle => dispatch(success(contacttoggle)),
        error => dispatch(failure(error.toString()))
      ): dispatch(clearToast());
  };
  function request() { return { type: eventConstants.CONTACT_TOGGLE_REQUEST } }
  function success(contacttoggle) { return { type: eventConstants.CONTACT_TOGGLE_SUCCESS, contacttoggle } }
  function failure(error) { return { type: eventConstants.CONTACT_TOGGLE_FAILURE, error } }
  function clearToast() { return { type: eventConstants.CONTACT_TOGGLE_CLEAR_TOAST } }

}

function AccountContactList(SoldToNumber) {
  return (dispatch) => {
    dispatch(request());

    eventService.AccountContactList(SoldToNumber).then(
      (accountcontactlist) => dispatch(success(accountcontactlist)),
      (error) => dispatch(failure(error.toString()))
    );
  };
  function request() {
    return { type: eventConstants.ACCOUNT_CONTACT_LIST_REQUEST };
  }
  function success(accountcontactlist) {
    return { type: eventConstants.ACCOUNT_CONTACT_LIST_SUCCESS, accountcontactlist };
  }
  function failure(error) {
    return { type: eventConstants.ACCOUNT_CONTACT_LIST_FAILURE, error };
  }
}

function productGroupDetailList(productgroupname) {
  return dispatch => {
    dispatch(request());

    eventService.productGroupDetailList(productgroupname)
      .then(
        productgroupdetaillist => dispatch(success(productgroupdetaillist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PRODUCT_GROUP_DETAIL_LIST_REQUEST } }
  function success(productgroupdetaillist) { return { type: eventConstants.PRODUCT_GROUP_DETAIL_LIST_SUCCESS, productgroupdetaillist } }
  function failure(error) { return { type: eventConstants.PRODUCT_GROUP_DETAIL_LIST_FAILURE, error } }

}


function productDetailImageUpload(files, productData, thumbnail) {
  return dispatch => {
    dispatch(request());

   (!!files || !!productData ||  !!thumbnail) ? eventService.productDetailImageUpload(files, productData, thumbnail)
      .then(
        productimageupload => dispatch(success(productimageupload)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.PRODUCT_IMAGE_UPLOAD_REQUEST } }
  function success(productimageupload) { return { type: eventConstants.PRODUCT_IMAGE_UPLOAD_SUCCESS, productimageupload } }
  function failure(error) { return { type: eventConstants.PRODUCT_IMAGE_UPLOAD_FAILURE, error } }
  function clearState() { return { type: eventConstants.PRODUCT_IMAGE_UPLOAD_CLEAR_STATE } }

}

function getDivision(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getDivision(countryCode)
      .then(
        getdivision => dispatch(success(getdivision)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DIVISION_LIST_REQUEST } }
  function success(getdivision) { return { type: eventConstants.DIVISION_LIST_SUCCESS, getdivision } }
  function failure(error) { return { type: eventConstants.DIVISION_LIST_FAILURE, error } }

}

function addDivision(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addDivision(countryCode, data)
      .then(
        adddivision => dispatch(success(adddivision)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_DIVISION_REQUEST } }
  function success(adddivision) { return { type: eventConstants.ADD_DIVISION_SUCCESS, adddivision } }
  function failure(error) { return { type: eventConstants.ADD_DIVISION_FAILURE, error } }

}

function resetAddDivisionReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_DIVISION_RESET};
  }
}

function updateDivision(dataList) {
  return dispatch => {
    dispatch(request());

    eventService.updateDivision(dataList && dataList.country, dataList && dataList.id,dataList && dataList.data)
      .then(
        updatedivision => dispatch(success(updatedivision)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_DIVISION_REQUEST } }
  function success(updatedivision) { return { type: eventConstants.UPDATE_DIVISION_SUCCESS, updatedivision } }
  function failure(error) { return { type: eventConstants.UPDATE_DIVISION_FAILURE, error } }
}

function resetUpdateDivisionReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.UPDATE_DIVISION_RESET};
  }
}

function deleteDivision(dataList) {
  console.log("Delete Dvision",dataList);
  return dispatch => {
    dispatch(request());

    eventService.deleteDivision(dataList && dataList.country,dataList && dataList.id,dataList && dataList.data)
      .then(
        deletedivision => dispatch(success(deletedivision)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_DIVISION_REQUEST } }
  function success(deletedivision) { return { type: eventConstants.DELETE_DIVISION_SUCCESS,deletedivision} }
  function failure(error) { return { type: eventConstants.DELETE_DIVISION_FAILURE, error } }

}

function resetDeleteDivisionReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.DELETE_DIVISION_RESET};
  }
}


function getBusinessSegment(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getBusinessSegment(countryCode)
      .then(
        businesssegment => dispatch(success(businesssegment)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.BUSINESS_SEGMENT_LIST_REQUEST } }
  function success(businesssegment) { return { type: eventConstants.BUSINESS_SEGMENT_LIST_SUCCESS, businesssegment } }
  function failure(error) { return { type: eventConstants.BUSINESS_SEGMENT_LIST_FAILURE, error } }

}

function addBusinessSegment(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addBusinessSegment(countryCode, data)
      .then(
        addbusinesssegment => dispatch(success(addbusinesssegment)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_BUSINESS_SEGMENT_REQUEST } }
  function success(addbusinesssegment) { return { type: eventConstants.ADD_BUSINESS_SEGMENT_SUCCESS, addbusinesssegment } }
  function failure(error) { return { type: eventConstants.ADD_BUSINESS_SEGMENT_FAILURE, error } }

}

function getDistributionChannel(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getDistributionChannel(countryCode)
      .then(
        distributionchannel => dispatch(success(distributionchannel)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DISTRIBUTION_CHANNEL_LIST_REQUEST } }
  function success(distributionchannel) { return { type: eventConstants.DISTRIBUTION_CHANNEL_LIST_SUCCESS, distributionchannel } }
  function failure(error) { return { type: eventConstants.DISTRIBUTION_CHANNEL_LIST_FAILURE, error } }

}

function addDistributionChannel(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addDistributionChannel(countryCode, data)
      .then(
        adddistributionchannel => dispatch(success(adddistributionchannel)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_DISTRIBUTION_CHANNEL_REQUEST } }
  function success(adddistributionchannel) { return { type: eventConstants.ADD_DISTRIBUTION_CHANNEL_SUCCESS, adddistributionchannel } }
  function failure(error) { return { type: eventConstants.ADD_DISTRIBUTION_CHANNEL_FAILURE, error } }

}


function getShippingCondition(countryCode, category) {
  return dispatch => {
    dispatch(request());

    eventService.getShippingCondition(countryCode, category)
      .then(
        shippingcondition => dispatch(success(shippingcondition)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SHIPPING_CONDITION_REQUEST } }
  function success(shippingcondition) { return { type: eventConstants.SHIPPING_CONDITION_SUCCESS, shippingcondition } }
  function failure(error) { return { type: eventConstants.SHIPPING_CONDITION_FAILURE, error } }

}

function addShippingCondition(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addShippingCondition(countryCode, data)
      .then(
        addshippingcondition => dispatch(success(addshippingcondition)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_SHIPPING_CONDITION_REQUEST } }
  function success(addshippingcondition) { return { type: eventConstants.ADD_SHIPPING_CONDITION_SUCCESS, addshippingcondition } }
  function failure(error) { return { type: eventConstants.ADD_SHIPPING_CONDITION_FAILURE, error } }

}

function SpecialProcessing(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.SpecialProcessing(countryCode)
      .then(
        specialprocessing => dispatch(success(specialprocessing)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SPECIAL_PROCESSING_REQUEST } }
  function success(specialprocessing) { return { type: eventConstants.SPECIAL_PROCESSING_SUCCESS, specialprocessing } }
  function failure(error) { return { type: eventConstants.SPECIAL_PROCESSING_FAILURE, error } }

}

function addSpecialProcessing(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addSpecialProcessing(countryCode, data)
      .then(
        addspecialprocessing => dispatch(success(addspecialprocessing)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_SPECIAL_PROCESSING_REQUEST } }
  function success(addspecialprocessing) { return { type: eventConstants.ADD_SPECIAL_PROCESSING_SUCCESS, addspecialprocessing } }
  function failure(error) { return { type: eventConstants.ADD_SPECIAL_PROCESSING_FAILURE, error } }

}



function transportorZone(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.transportorZone(countryCode)
      .then(
        transportorzone => dispatch(success(transportorzone)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.TRANSPORTOR_ZONE_REQUEST } }
  function success(transportorzone) { return { type: eventConstants.TRANSPORTOR_ZONE_SUCCESS, transportorzone } }
  function failure(error) { return { type: eventConstants.TRANSPORTOR_ZONE_FAILURE, error } }

}

function addTransportorZone(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addTransportorZone(countryCode, data)
      .then(
        addtransportorzone => dispatch(success(addtransportorzone)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_TRANSPORTOR_ZONE_REQUEST } }
  function success(addtransportorzone) { return { type: eventConstants.ADD_TRANSPORTOR_ZONE_SUCCESS, addtransportorzone } }
  function failure(error) { return { type: eventConstants.ADD_TRANSPORTOR_ZONE_FAILURE, error } }

}


function shppingType(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.shppingType(countryCode)
      .then(
        shippingtype => dispatch(success(shippingtype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SHIPPING_TYPE_REQUEST } }
  function success(shippingtype) { return { type: eventConstants.SHIPPING_TYPE_SUCCESS, shippingtype } }
  function failure(error) { return { type: eventConstants.SHIPPING_TYPE_FAILURE, error } }

}

function addShippingType(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addShippingType(countryCode, data)
      .then(
        addshippingtype => dispatch(success(addshippingtype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_SHIPPING_TYPE_REQUEST } }
  function success(addshippingtype) { return { type: eventConstants.ADD_SHIPPING_TYPE_SUCCESS, addshippingtype } }
  function failure(error) { return { type: eventConstants.ADD_SHIPPING_TYPE_FAILURE, error } }

}


function CaseStatus(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.CaseStatus(countryCode)
      .then(
        casestatus => dispatch(success(casestatus)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CASE_STATUS_LIST_REQUEST } }
  function success(casestatus) { return { type: eventConstants.CASE_STATUS_LIST_SUCCESS, casestatus } }
  function failure(error) { return { type: eventConstants.CASE_STATUS_LIST_FAILURE, error } }

}

function addCaseStatus(countryCode, data) {
  return dispatch => {
    dispatch(request());

    (!!countryCode || !!data) ? eventService.addCaseStatus(countryCode, data)
      .then(
        addcasestatus => dispatch(success(addcasestatus)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.ADD_CASE_STATUS_REQUEST } }
  function success(addcasestatus) { return { type: eventConstants.ADD_CASE_STATUS_SUCCESS, addcasestatus } }
  function failure(error) { return { type: eventConstants.ADD_CASE_STATUS_FAILURE, error } }
  function clearToast() { return { type: eventConstants.ADD_CASE_STATUS_CLEAR_TOAST } }

}

function resetAddCaseStatusReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_CASE_STATUS_RESET};
  }
}

function updateCaseStatus(dataList) {
  return dispatch => {
    dispatch(request());

    eventService.updateCaseStatus(dataList && dataList.country, dataList && dataList.id, dataList && dataList.name )
      .then(
        updatecasestatus => dispatch(success(updatecasestatus)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_CASE_STATUS_REQUEST } }
  function success(updatecasestatus) { return { type: eventConstants.UPDATE_CASE_STATUS_SUCCESS, updatecasestatus } }
  function failure(error) { return { type: eventConstants.UPDATE_CASE_STATUS_FAILURE, error } }

}

function resetUpdateCaseStatusReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.UPDATE_CASE_STATUS_RESET};
  }
}

function deleteCaseStatus(dataList) {
  console.log("mydeletecasestatus",dataList)
  return dispatch => {
    dispatch(request());

    eventService.deleteCaseStatus(dataList && dataList.country, dataList && dataList.id, dataList && dataList.data )
      .then(
        deletecasestatus => dispatch(success(deletecasestatus)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_CASE_STATUS_REQUEST } }
  function success(deletecasestatus) { return { type: eventConstants.DELETE_CASE_STATUS_SUCCESS,deletecasestatus} }
  function failure(error) { return { type: eventConstants.DELETE_CASE_STATUS_FAILURE, error } }

}

function resetDeleteCaseStatusReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.DELETE_CASE_STATUS_RESET};
  }
}


function CheckboxToggle(orderID) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID))
  };

  function request(checkboxtoggle) {
    return { type: eventConstants.CHECKBOX_TOGGLE_REQUEST, checkboxtoggle };
  }
  function success(checkboxtoggle) {
    return { type: eventConstants.CHECKBOX_TOGGLE_SUCCESS, checkboxtoggle };
  }
  function failure(error) {
    return { type: eventConstants.CHECKBOX_TOGGLE_FAILURE, error };

  }
}


function CaseType(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.CaseType(countryCode)
      .then(
        casetype => dispatch(success(casetype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CASE_TYPE_LIST_REQUEST } }
  function success(casetype) { return { type: eventConstants.CASE_TYPE_LIST_SUCCESS, casetype } }
  function failure(error) { return { type: eventConstants.CASE_TYPE_LIST_FAILURE, error } }

}

function addCaseType(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addCaseType(countryCode, data)
      .then(
        addcasetype => dispatch(success(addcasetype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_CASE_TYPE_REQUEST } }
  function success(addcasetype) { return { type: eventConstants.ADD_CASE_TYPE_SUCCESS, addcasetype } }
  function failure(error) { return { type: eventConstants.ADD_CASE_TYPE_FAILURE, error } }

}

function resetAddCaseTypeReducer() {
  return (dispatch) => {
      dispatch(reset());

  };
  function reset() {
      return { type: eventConstants.ADD_CASE_TYPE_RESET };
  }
}

function updateCaseType(dataList) {
  return dispatch => {
    dispatch(request());

    eventService.updateCaseType(dataList && dataList.country, dataList && dataList.id,dataList && dataList.data)
      .then(
        updatecasetype => dispatch(success(updatecasetype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_CASE_TYPE_REQUEST } }
  function success(updatecasetype) { return { type: eventConstants.UPDATE_CASE_TYPE_SUCCESS, updatecasetype } }
  function failure(error) { return { type: eventConstants.UPDATE_CASE_TYPE_FAILURE, error } }

}

function resetUpdateCaseTypeReducer() {
  return (dispatch) => {
      dispatch(reset());

  };
  function reset() {
      return { type: eventConstants.UPDATE_CASE_TYPE_RESET };
  }
}


function deleteCaseType(dataList) {
  return dispatch => {
    dispatch(request());

    eventService.deleteCaseType( dataList && dataList.country, dataList && dataList.id)
      .then(
        deletecasetype => dispatch(success(deletecasetype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_CASE_TYPE_REQUEST } }
  function success(deletecasetype) { return { type: eventConstants.DELETE_CASE_TYPE_SUCCESS,deletecasetype} }
  function failure(error) { return { type: eventConstants.DELETE_CASE_TYPE_FAILURE, error } }

}

function resetDeleteCaseTypeReducer() {
  return (dispatch) => {
      dispatch(reset());

  };
  function reset() {
      return { type: eventConstants.DELETE_CASE_TYPE_RESET };
  }
}


function AssignProduct(orderID) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID))
  };

  function request(assignproduct) {
    return { type: eventConstants.ASSIGN_PRODUCT_REQUEST, assignproduct };
  }
  function success(assignproduct) {
    return { type: eventConstants.ASSIGN_PRODUCT_SUCCESS, assignproduct };
  }
  function failure(error) {
    return { type: eventConstants.ASSIGN_PRODUCT_FAILURE, error };

  }
}

function ContactStatus(UpdateData, userId) {
  return dispatch => {
    dispatch(request());

    eventService.ContactStatus(UpdateData, userId)
      .then(
        contactstatus => dispatch(success(contactstatus)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CONTACT_STATUS_REQUEST } }
  function success(contactstatus) { return { type: eventConstants.CONTACT_STATUS_SUCCESS, contactstatus } }
  function failure(error) { return { type: eventConstants.CONTACT_STATUS_FAILURE, error } }

}

function ProductGroupstatus(data, status) {
  return dispatch => {
    dispatch(request());

    eventService.ProductGroupstatus(data, status)
      .then(
        productgroupstatus => dispatch(success(productgroupstatus)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PRODUCT_GROUP_STATUS_REQUEST } }
  function success(productgroupstatus) { return { type: eventConstants.PRODUCT_GROUP_STATUS_SUCCESS, productgroupstatus } }
  function failure(error) { return { type: eventConstants.PRODUCT_GROUP_STATUS_FAILURE, error } }

}


function activeProduct(orderID) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID))
  };

  function request(activeproduct) {
    return { type: eventConstants.ACTIVE_PRODUCT_REQUEST, activeproduct };
  }
  function success(activeproduct) {
    return { type: eventConstants.ACTIVE_PRODUCT_SUCCESS, activeproduct };
  }
  function failure(error) {
    return { type: eventConstants.ACTIVE_PRODUCT_FAILURE, error };

  }
}


function UpdateProductGroup(data, prodctid) {
  return dispatch => {
    dispatch(request());

    eventService.UpdateProductGroup(data, prodctid)
      .then(
        updateproductgroup => dispatch(success(updateproductgroup)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_PRODUCT_GROUP_REQUEST } }
  function success(updateproductgroup) { return { type: eventConstants.UPDATE_PRODUCT_GROUP_SUCCESS, updateproductgroup } }
  function failure(error) { return { type: eventConstants.UPDATE_PRODUCT_GROUP_FAILURE, error } }

}


function productSelectId(orderID) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID))
  };

  function request(productselectid) {
    return { type: eventConstants.PRODUCT_SELECT_PRODUCT_REQUEST, productselectid };
  }
  function success(productselectid) {
    return { type: eventConstants.PRODUCT_SELECT_PRODUCT_SUCCESS, productselectid };
  }
  function failure(error) {
    return { type: eventConstants.PRODUCT_SELECT_PRODUCT_FAILURE, error };

  }
}


function productmasterItemId(orderID) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID))
  };

  function request(productmasterid) {
    return { type: eventConstants.PRODUCT_MASTER_ID_REQUEST, productmasterid };
  }
  function success(productmasterid) {
    return { type: eventConstants.PRODUCT_MASTER_ID_SUCCESS, productmasterid };
  }
  function failure(error) {
    return { type: eventConstants.PRODUCT_MASTER_ID_FAILURE, error };

  }
}

function SoldtoManagmentItemId(orderID) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID))
  };

  function request(soldtomanagmentitemid) {
    return { type: eventConstants.SOLD_MANAGEMENT_ITEM_ID_REQUEST, soldtomanagmentitemid };
  }
  function success(soldtomanagmentitemid) {
    return { type: eventConstants.SOLD_MANAGEMENT_ITEM_ID_SUCCESS, soldtomanagmentitemid };
  }
  function failure(error) {
    return { type: eventConstants.SOLD_MANAGEMENT_ITEM_ID_FAILURE, error };

  }
}


function UnitMaster(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.UnitMaster(countryCode)
      .then(
        unitmaster => dispatch(success(unitmaster)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UNIT_MASTER_LIST_REQUEST } }
  function success(unitmaster) { return { type: eventConstants.UNIT_MASTER_LIST_SUCCESS, unitmaster } }
  function failure(error) { return { type: eventConstants.UNIT_MASTER_LIST_FAILURE, error } }

}

function addUnitMaster(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addUnitMaster(countryCode, data)
      .then(
        addunitmaster => dispatch(success(addunitmaster)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_UNIT_MASTER_REQUEST } }
  function success(addunitmaster) { return { type: eventConstants.ADD_UNIT_MASTER_SUCCESS, addunitmaster } }
  function failure(error) { return { type: eventConstants.ADD_UNIT_MASTER_FAILURE, error } }

}



function addPriceType(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addPriceType(countryCode, data)
      .then(
        addpricetype => dispatch(success(addpricetype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_PRICE_TYPE_REQUEST } }
  function success(addpricetype) { return { type: eventConstants.ADD_PRICE_TYPE_SUCCESS, addpricetype } }
  function failure(error) { return { type: eventConstants.ADD_PRICE_TYPE_FAILURE, error } }

}

function getPriceType(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getPriceType(countryCode)
      .then(
        getpricetype => dispatch(success(getpricetype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PRICE_TYPE_LIST_REQUEST } }
  function success(getpricetype) { return { type: eventConstants.PRICE_TYPE_LIST_SUCCESS, getpricetype } }
  function failure(error) { return { type: eventConstants.PRICE_TYPE_LIST_FAILURE, error } }

}

function addProductProduce(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addProductProduce(countryCode, data)
      .then(
        addproductproduce => dispatch(success(addproductproduce)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_PRODUCT_PRODUCE_MASTER_REQUEST } }
  function success(addproductproduce) { return { type: eventConstants.ADD_PRODUCT_PRODUCE_MASTER_SUCCESS, addproductproduce } }
  function failure(error) { return { type: eventConstants.ADD_PRODUCT_PRODUCE_MASTER_FAILURE, error } }

}

function getProductProduce(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getProductProduce(countryCode)
      .then(
        getproductproduce => dispatch(success(getproductproduce)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PRODUCT_PRODUCE_MASTER_LIST_REQUEST } }
  function success(getproductproduce) { return { type: eventConstants.PRODUCT_PRODUCE_MASTER_LIST_SUCCESS,getproductproduce } }
  function failure(error) { return { type: eventConstants.PRODUCT_PRODUCE_MASTER_LIST_FAILURE, error } }

}

function addRetailerPaymentTermMaster(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addRetailerPaymentTermMaster(countryCode, data)
      .then(
        retailerpaymenttermmaster => dispatch(success(retailerpaymenttermmaster)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_RETAILER_PAYMENT_MASTER_REQUEST } }
  function success(retailerpaymenttermmaster) { return { type: eventConstants.ADD_RETAILER_PAYMENT_MASTER_SUCCESS, retailerpaymenttermmaster } }
  function failure(error) { return { type: eventConstants.ADD_RETAILER_PAYMENT_MASTER_FAILURE, error } }
}

function getRetailerPaymentTermMaster(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getRetailerPaymentTermMaster(countryCode)
      .then(
        getretailerpaymenttermmaster => dispatch(success(getretailerpaymenttermmaster)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RETAILER_PAYMENT_MASTER_LIST_REQUEST } }
  function success(getretailerpaymenttermmaster) { return { type: eventConstants.RETAILER_PAYMENT_MASTER_LIST_SUCCESS, getretailerpaymenttermmaster } }
  function failure(error) { return { type: eventConstants.RETAILER_PAYMENT_MASTER_LIST_FAILURE, error } }
}

function addPackageType(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addPackageType(countryCode, data)
      .then(
        addpackagetype => dispatch(success(addpackagetype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_PACKAGE_TYPE_MASTER_REQUEST } }
  function success(addpackagetype) { return { type: eventConstants.ADD_PACKAGE_TYPE_MASTER_SUCCESS, addpackagetype } }
  function failure(error) { return { type: eventConstants.ADD_PACKAGE_TYPE_MASTER_FAILURE, error } }

}

function getPackageType(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getPackageType(countryCode)
      .then(
        getpackagetype => dispatch(success(getpackagetype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PACKAGE_TYPE_MASTER_LIST_REQUEST } }
  function success(getpackagetype) { return { type: eventConstants.PACKAGE_TYPE_MASTER_LIST_SUCCESS, getpackagetype } }
  function failure(error) { return { type: eventConstants.PACKAGE_TYPE_MASTER_LIST_FAILURE, error } }
}

function addProjectType(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addProjectType(countryCode, data)
      .then(
        addprojecttype => dispatch(success(addprojecttype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_PROJECT_TYPE_MASTER_REQUEST } }
  function success(addprojecttype) { return { type: eventConstants.ADD_PROJECT_TYPE_MASTER_SUCCESS, addprojecttype } }
  function failure(error) { return { type: eventConstants.ADD_PROJECT_TYPE_MASTER_FAILURE, error } }

}

function getProjectType(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getProjectType(countryCode)
      .then(
        getprojecttype => dispatch(success(getprojecttype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PROJECT_TYPE_MASTER_LIST_REQUEST } }
  function success(getprojecttype) { return { type: eventConstants.PROJECT_TYPE_MASTER_LIST_SUCCESS, getprojecttype } }
  function failure(error) { return { type: eventConstants.PROJECT_TYPE_MASTER_LIST_FAILURE, error } }
}

function addMarketIntelligence(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addMarketIntelligence(countryCode, data)
      .then(
        addmarketintelligence => dispatch(success(addmarketintelligence)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_MARKET_INTELLIGENCE_MASTER_REQUEST } }
  function success(addmarketintelligence) { return { type: eventConstants.ADD_MARKET_INTELLIGENCE_MASTER_SUCCESS, addmarketintelligence } }
  function failure(error) { return { type: eventConstants.ADD_MARKET_INTELLIGENCE_MASTER_FAILURE, error } }

}

function getMarketIntelligence(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getMarketIntelligence(countryCode)
      .then(
        getmarketintelligence => dispatch(success(getmarketintelligence)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.MARKET_INTELLIGENCE_MASTER_LIST_REQUEST } }
  function success(getmarketintelligence) { return { type: eventConstants.MARKET_INTELLIGENCE_MASTER_LIST_SUCCESS, getmarketintelligence } }
  function failure(error) { return { type: eventConstants.MARKET_INTELLIGENCE_MASTER_LIST_FAILURE, error } }
}

function addDeliveryMode(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addDeliveryMode(countryCode, data)
      .then(
        adddeliverymode => dispatch(success(adddeliverymode)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_DELIVERY_MODE_MASTER_REQUEST } }
  function success(adddeliverymode) { return { type: eventConstants.ADD_DELIVERY_MODE_MASTER_SUCCESS, adddeliverymode } }
  function failure(error) { return { type: eventConstants.ADD_DELIVERY_MODE_MASTER_FAILURE, error } }

}

function getDeliveryMode(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getDeliveryMode(countryCode)
      .then(
        getdeliverymode => dispatch(success(getdeliverymode)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELIVERY_MODE_MASTER_LIST_REQUEST } }
  function success(getdeliverymode) { return { type: eventConstants.DELIVERY_MODE_MASTER_LIST_SUCCESS, getdeliverymode } }
  function failure(error) { return { type: eventConstants.DELIVERY_MODE_MASTER_LIST_FAILURE, error } }
}

function addSalesDistrict(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addSalesDistrict(countryCode, data)
      .then(
        addsalesdistrict => dispatch(success(addsalesdistrict)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_SALES_DISTRICT_MASTER_REQUEST } }
  function success(addsalesdistrict) { return { type: eventConstants.ADD_SALES_DISTRICT_MASTER_SUCCESS, addsalesdistrict } }
  function failure(error) { return { type: eventConstants.ADD_SALES_DISTRICT_MASTER_FAILURE, error } }

}

function getSalesDistrict(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getSalesDistrict(countryCode)
      .then(
        getsalesdistrict => dispatch(success(getsalesdistrict)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SALES_DISTRICT_MASTER_LIST_REQUEST } }
  function success(getsalesdistrict) { return { type: eventConstants.SALES_DISTRICT_MASTER_LIST_SUCCESS, getsalesdistrict } }
  function failure(error) { return { type: eventConstants.SALES_DISTRICT_MASTER_LIST_FAILURE, error } }
}

function addPreferredTruckTypes(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addPreferredTruckTypes(countryCode, data)
      .then(
        addpreferredtrucktypes => dispatch(success(addpreferredtrucktypes)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_PREFERRED_TRUCK_TYPES_MASTER_REQUEST } }
  function success(addpreferredtrucktypes) { return { type: eventConstants.ADD_PREFERRED_TRUCK_TYPES_MASTER_SUCCESS, addpreferredtrucktypes } }
  function failure(error) { return { type: eventConstants.ADD_PREFERRED_TRUCK_TYPES_MASTER_FAILURE, error } }

}

function getPreferredTruckTypes(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getPreferredTruckTypes(countryCode)
      .then(
        getpreferredtrucktypes => dispatch(success(getpreferredtrucktypes)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PREFERRED_TRUCK_TYPES_MASTER_LIST_REQUEST } }
  function success(getpreferredtrucktypes) { return { type: eventConstants.PREFERRED_TRUCK_TYPES_MASTER_LIST_SUCCESS, getpreferredtrucktypes } }
  function failure(error) { return { type: eventConstants.PREFERRED_TRUCK_TYPES_MASTER_LIST_FAILURE, error } }
}

function addSalesOrganization(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addSalesOrganization(countryCode, data)
      .then(
        addsalesorganization => dispatch(success(addsalesorganization)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_SALES_ORGANIZATION_MASTER_REQUEST } }
  function success(addsalesorganization) { return { type: eventConstants.ADD_SALES_ORGANIZATION_MASTER_SUCCESS, addsalesorganization } }
  function failure(error) { return { type: eventConstants.ADD_SALES_ORGANIZATION_MASTER_FAILURE, error } }

}

function getSalesOrganization(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getSalesOrganization(countryCode)
      .then(
        getsalesorganization => dispatch(success(getsalesorganization)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SALES_ORGANIZATION_MASTER_LIST_REQUEST } }
  function success(getsalesorganization) { return { type: eventConstants.SALES_ORGANIZATION_MASTER_LIST_SUCCESS, getsalesorganization } }
  function failure(error) { return { type: eventConstants.SALES_ORGANIZATION_MASTER_LIST_FAILURE, error } }
}

function addSpecialProject(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addSpecialProject(countryCode, data)
      .then(
        addspecialproject => dispatch(success(addspecialproject)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_SPECIAL_PROJECT_MASTER_REQUEST } }
  function success(addspecialproject) { return { type: eventConstants.ADD_SPECIAL_PROJECT_MASTER_SUCCESS, addspecialproject } }
  function failure(error) { return { type: eventConstants.ADD_SPECIAL_PROJECT_MASTER_FAILURE, error } }

}

function getSpecialProject(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getSpecialProject(countryCode)
      .then(
        getspecialproject => dispatch(success(getspecialproject)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SPECIAL_PROJECT_MASTER_LIST_REQUEST } }
  function success(getspecialproject) { return { type: eventConstants.SPECIAL_PROJECT_MASTER_LIST_SUCCESS, getspecialproject } }
  function failure(error) { return { type: eventConstants.SPECIAL_PROJECT_MASTER_LIST_FAILURE, error } }
}

function addAreaType(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addAreaType(countryCode, data)
      .then(
        addareatype => dispatch(success(addareatype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_AREA_TYPE_MASTER_REQUEST } }
  function success(addareatype) { return { type: eventConstants.ADD_AREA_TYPE_MASTER_SUCCESS, addareatype } }
  function failure(error) { return { type: eventConstants.ADD_AREA_TYPE_MASTER_FAILURE, error } }

}

function getAreaType(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getAreaType(countryCode)
      .then(
        getareatype => dispatch(success(getareatype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.AREA_TYPE_MASTER_LIST_REQUEST } }
  function success(getareatype) { return { type: eventConstants.AREA_TYPE_MASTER_LIST_SUCCESS, getareatype } }
  function failure(error) { return { type: eventConstants.AREA_TYPE_MASTER_LIST_FAILURE, error } }
}

function addStrategyType(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addStrategyType(countryCode, data)
      .then(
        addstrategytype => dispatch(success(addstrategytype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_STRATEGY_TYPE_MASTER_REQUEST } }
  function success(addstrategytype) { return { type: eventConstants.ADD_STRATEGY_TYPE_MASTER_SUCCESS, addstrategytype } }
  function failure(error) { return { type: eventConstants.ADD_STRATEGY_TYPE_MASTER_FAILURE, error } }

}

function getStrategyType(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getStrategyType(countryCode)
      .then(
        getstrategytype => dispatch(success(getstrategytype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.STRATEGY_TYPE_MASTER_LIST_REQUEST } }
  function success(getstrategytype) { return { type: eventConstants.STRATEGY_TYPE_MASTER_LIST_SUCCESS, getstrategytype } }
  function failure(error) { return { type: eventConstants.STRATEGY_TYPE_MASTER_LIST_FAILURE, error } }
}

function addCompatitorProduct(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addCompatitorProduct(countryCode, data)
      .then(
        addcompatitorproduct => dispatch(success(addcompatitorproduct)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_COMPATITOR_PRODUCT_MASTER_REQUEST } }
  function success(addcompatitorproduct) { return { type: eventConstants.ADD_COMPATITOR_PRODUCT_MASTER_SUCCESS, addcompatitorproduct } }
  function failure(error) { return { type: eventConstants.ADD_COMPATITOR_PRODUCT_MASTER_FAILURE, error } }

}

function getCompatitorProduct(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getCompatitorProduct(countryCode)
      .then(
        getcompatitorproduct => dispatch(success(getcompatitorproduct)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.COMPATITOR_PRODUCT_MASTER_LIST_REQUEST } }
  function success(getcompatitorproduct) { return { type: eventConstants.COMPATITOR_PRODUCT_MASTER_LIST_SUCCESS, getcompatitorproduct } }
  function failure(error) { return { type: eventConstants.COMPATITOR_PRODUCT_MASTER_LIST_FAILURE, error } }
}

function addOrderType(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addOrderType(countryCode, data)
      .then(
        addordertype => dispatch(success(addordertype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_ORDER_TYPE_MASTER_REQUEST } }
  function success(addordertype) { return { type: eventConstants.ADD_ORDER_TYPE_MASTER_SUCCESS, addordertype } }
  function failure(error) { return { type: eventConstants.ADD_ORDER_TYPE_MASTER_FAILURE, error } }

}

function getOrderType(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getOrderType(countryCode)
      .then(
        getordertype => dispatch(success(getordertype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ORDER_TYPE_MASTER_LIST_REQUEST } }
  function success(getordertype) { return { type: eventConstants.ORDER_TYPE_MASTER_LIST_SUCCESS, getordertype } }
  function failure(error) { return { type: eventConstants.ORDER_TYPE_MASTER_LIST_FAILURE, error } }
}

function addProductType(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addProductType(countryCode, data)
      .then(
        addproducttype => dispatch(success(addproducttype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_PRODUCT_TYPE_MASTER_REQUEST } }
  function success(addproducttype) { return { type: eventConstants.ADD_PRODUCT_TYPE_MASTER_SUCCESS, addproducttype } }
  function failure(error) { return { type: eventConstants.ADD_PRODUCT_TYPE_MASTER_FAILURE, error } }

}

function getProductType(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getProductType(countryCode)
      .then(
        getproducttype => dispatch(success(getproducttype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PRODUCT_TYPE_MASTER_LIST_REQUEST } }
  function success(getproducttype) { return { type: eventConstants.PRODUCT_TYPE_MASTER_LIST_SUCCESS, getproducttype } }
  function failure(error) { return { type: eventConstants.PRODUCT_TYPE_MASTER_LIST_FAILURE, error } }
}

function addTransporter(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addTransporter(countryCode, data)
      .then(
        addtransporter => dispatch(success(addtransporter)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_TRANSPORTER_MASTER_REQUEST } }
  function success(addtransporter) { return { type: eventConstants.ADD_TRANSPORTER_MASTER_SUCCESS, addtransporter } }
  function failure(error) { return { type: eventConstants.ADD_TRANSPORTER_MASTER_FAILURE, error } }

}

function getTransporter(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getTransporter(countryCode)
      .then(
        gettransporter => dispatch(success(gettransporter)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.TRANSPORTER_MASTER_LIST_REQUEST } }
  function success(gettransporter) { return { type: eventConstants.TRANSPORTER_MASTER_LIST_SUCCESS, gettransporter } }
  function failure(error) { return { type: eventConstants.TRANSPORTER_MASTER_LIST_FAILURE, error } }
}

function addCaseOrigin(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addCaseOrigin(countryCode, data)
      .then(
        addcaseorigin => dispatch(success(addcaseorigin)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_CASE_ORIGIN_MASTER_REQUEST } }
  function success(addcaseorigin) { return { type: eventConstants.ADD_CASE_ORIGIN_MASTER_SUCCESS, addcaseorigin } }
  function failure(error) { return { type: eventConstants.ADD_CASE_ORIGIN_MASTER_FAILURE, error } }

}

function getCaseOrigin(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getCaseOrigin(countryCode)
      .then(
        getcaseorigin => dispatch(success(getcaseorigin)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CASE_ORIGIN_MASTER_LIST_REQUEST } }
  function success(getcaseorigin) { return { type: eventConstants.CASE_ORIGIN_MASTER_LIST_SUCCESS, getcaseorigin } }
  function failure(error) { return { type: eventConstants.CASE_ORIGIN_MASTER_LIST_FAILURE, error } }
}

function addCategory(countryCode, data) {
  return dispatch => {
    dispatch(request());

    (!!countryCode || !!data) ? eventService.addCategory(countryCode, data)
      .then(
        addcategory => dispatch(success(addcategory)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.ADD_CATEGORY_MASTER_REQUEST } }
  function success(addcategory) { return { type: eventConstants.ADD_CATEGORY_MASTER_SUCCESS, addcategory } }
  function failure(error) { return { type: eventConstants.ADD_CATEGORY_MASTER_FAILURE, error } }
  function clearToast() { return { type: eventConstants.ADD_CATEGORY_MASTER_CLEAR_TOAST } }

}

function getCategory(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getCategory(countryCode)
      .then(
        getcategory => dispatch(success(getcategory)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CATEGORY_MASTER_LIST_REQUEST } }
  function success(getcategory) { return { type: eventConstants.CATEGORY_MASTER_LIST_SUCCESS, getcategory } }
  function failure(error) { return { type: eventConstants.CATEGORY_MASTER_LIST_FAILURE, error } }
}

function updateCategory(dataList) {
  return dispatch => {
    dispatch(request());

    eventService.updateCategory(dataList && dataList.country, dataList && dataList.id, dataList && dataList.name)
      .then(
        updatecategory => dispatch(success(updatecategory)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_CATEGORY_REQUEST } }
  function success(updatecategory) { return { type: eventConstants.UPDATE_CATEGORY_SUCCESS, updatecategory} }
  function failure(error) { return { type: eventConstants.UPDATE_CATEGORY_FAILURE, error } }

}
function deleteCategory(dataList) {
  return dispatch => {
    dispatch(request());

    eventService.deleteCategory(dataList && dataList.country, dataList && dataList.id, dataList && dataList.data)
      .then(
        deletecategory => dispatch(success(deletecategory)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_CATEGORY_MASTER_REQUEST } }
  function success(deletecategory) { return { type: eventConstants.DELETE_CATEGORY_MASTER_SUCCESS, deletecategory} }
  function failure(error) { return { type: eventConstants.DELETE_CATEGORY_MASTER_FAILURE, error } }

}

function resetAddCategoryReducer() {
  return (dispatch) => {
      dispatch(reset());

  };
  function reset() {
      return { type: eventConstants.ADD_CATEGORY_MASTER_RESET };
  }
}

function resetCategoryReducer() {
  return (dispatch) => {
      dispatch(reset());

  };
  function reset() {
      return { type: eventConstants.UPDATE_CATEGORY_RESET };
  }
}

function resetDeleteCategoryReducer() {
  return (dispatch) => {
      dispatch(reset());

  };
  function reset() {
      return { type: eventConstants.DELETE_CATEGORY_MASTER_RESET };
  }
}

function addConstructionPhase(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addConstructionPhase(countryCode, data)
      .then(
        addconstructionphase => dispatch(success(addconstructionphase)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_CONSTRUCTION_PHASE_MASTER_REQUEST } }
  function success(addconstructionphase) { return { type: eventConstants.ADD_CONSTRUCTION_PHASE_MASTER_SUCCESS, addconstructionphase } }
  function failure(error) { return { type: eventConstants.ADD_CONSTRUCTION_PHASE_MASTER_FAILURE, error } }

}

function getConstructionPhase(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getConstructionPhase(countryCode)
      .then(
        getconstructionphase => dispatch(success(getconstructionphase)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CONSTRUCTION_PHASE_MASTER_LIST_REQUEST } }
  function success(getconstructionphase) { return { type: eventConstants.CONSTRUCTION_PHASE_MASTER_LIST_SUCCESS, getconstructionphase } }
  function failure(error) { return { type: eventConstants.CONSTRUCTION_PHASE_MASTER_LIST_FAILURE, error } }
}

function addUserRole(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addUserRole(countryCode, data)
      .then(
        adduserrole => dispatch(success(adduserrole)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_USER_ROLE_MASTER_REQUEST } }
  function success(adduserrole) { return { type: eventConstants.ADD_USER_ROLE_MASTER_SUCCESS, adduserrole } }
  function failure(error) { return { type: eventConstants.ADD_USER_ROLE_MASTER_FAILURE, error } }

}

function getUserRole(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getUserRole(countryCode)
      .then(
        getuserrole => dispatch(success(getuserrole)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.USER_ROLE_MASTER_LIST_REQUEST } }
  function success(getuserrole) { return { type: eventConstants.USER_ROLE_MASTER_LIST_SUCCESS, getuserrole } }
  function failure(error) { return { type: eventConstants.USER_ROLE_MASTER_LIST_FAILURE, error } }
}

function addTruckType(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addTruckType(countryCode, data)
      .then(
        addtrucktype => dispatch(success(addtrucktype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_TRUCK_TYPE_MASTER_REQUEST } }
  function success(addtrucktype) { return { type: eventConstants.ADD_TRUCK_TYPE_MASTER_SUCCESS, addtrucktype } }
  function failure(error) { return { type: eventConstants.ADD_TRUCK_TYPE_MASTER_FAILURE, error } }

}

function getTruckType(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getTruckType(countryCode)
      .then(
        gettrucktype => dispatch(success(gettrucktype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.TRUCK_TYPE_MASTER_LIST_REQUEST } }
  function success(gettrucktype) { return { type: eventConstants.TRUCK_TYPE_MASTER_LIST_SUCCESS, gettrucktype } }
  function failure(error) { return { type: eventConstants.TRUCK_TYPE_MASTER_LIST_FAILURE, error } }
}

function addPromotionType(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addPromotionType(countryCode, data)
      .then(
        addpromotiontype => dispatch(success(addpromotiontype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_PROMOTION_TYPE_MASTER_REQUEST } }
  function success(addpromotiontype) { return { type: eventConstants.ADD_PROMOTION_TYPE_MASTER_SUCCESS, addpromotiontype } }
  function failure(error) { return { type: eventConstants.ADD_PROMOTION_TYPE_MASTER_FAILURE, error } }

}

function getPromotionType(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getPromotionType(countryCode)
      .then(
        getpromotiontype => dispatch(success(getpromotiontype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PROMOTION_TYPE_MASTER_LIST_REQUEST } }
  function success(getpromotiontype) { return { type: eventConstants.PROMOTION_TYPE_MASTER_LIST_SUCCESS, getpromotiontype } }
  function failure(error) { return { type: eventConstants.PROMOTION_TYPE_MASTER_LIST_FAILURE, error } }
}

function addPriceBook(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addPriceBook(countryCode, data)
      .then(
        addpricebook => dispatch(success(addpricebook)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_PRICE_BOOK_MASTER_REQUEST } }
  function success(addpricebook) { return { type: eventConstants.ADD_PRICE_BOOK_MASTER_SUCCESS, addpricebook } }
  function failure(error) { return { type: eventConstants.ADD_PRICE_BOOK_MASTER_FAILURE, error } }

}

function getPriceBook(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getPriceBook(countryCode)
      .then(
        getpricebook => dispatch(success(getpricebook)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PRICE_BOOK_MASTER_LIST_REQUEST } }
  function success(getpricebook) { return { type: eventConstants.PRICE_BOOK_MASTER_LIST_SUCCESS, getpricebook } }
  function failure(error) { return { type: eventConstants.PRICE_BOOK_MASTER_LIST_FAILURE, error } }
}

function addDistributionArea(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addDistributionArea(countryCode, data)
      .then(
        adddistributionarea => dispatch(success(adddistributionarea)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_DISTRIBUTION_AREA_MASTER_REQUEST } }
  function success(adddistributionarea) { return { type: eventConstants.ADD_DISTRIBUTION_AREA_MASTER_SUCCESS, adddistributionarea } }
  function failure(error) { return { type: eventConstants.ADD_DISTRIBUTION_AREA_MASTER_FAILURE, error } }

}

function getDistributionArea(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getDistributionArea(countryCode)
      .then(
        getdistributionarea => dispatch(success(getdistributionarea)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DISTRIBUTION_AREA_MASTER_LIST_REQUEST } }
  function success(getdistributionarea) { return { type: eventConstants.DISTRIBUTION_AREA_MASTER_LIST_SUCCESS,getdistributionarea } }
  function failure(error) { return { type: eventConstants.DISTRIBUTION_AREA_MASTER_LIST_FAILURE, error } }
}

function addSubCategory(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addSubCategory(countryCode, data)
      .then(
        addsubcategory => dispatch(success(addsubcategory)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_SUB_CATEGORY_MASTER_REQUEST } }
  function success(addsubcategory) { return { type: eventConstants.ADD_SUB_CATEGORY_MASTER_SUCCESS, addsubcategory } }
  function failure(error) { return { type: eventConstants.ADD_SUB_CATEGORY_MASTER_FAILURE, error } }

}

function resetAddSubCategoryReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_SUB_CATEGORY_MASTER_RESET};
  }
}

function getSubCategory(countryCode,id) {
  return dispatch => {
    dispatch(request());

    eventService.getSubCategory(countryCode,id)
      .then(
        getsubcategory => dispatch(success(getsubcategory)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SUB_CATEGORY_MASTER_LIST_REQUEST } }
  function success(getsubcategory) { return { type: eventConstants.SUB_CATEGORY_MASTER_LIST_SUCCESS,getsubcategory} }
  function failure(error) { return { type: eventConstants.SUB_CATEGORY_MASTER_LIST_FAILURE, error } }
}

function updateSubCategory(countryCode,id,data) {
  return dispatch => {
    dispatch(request());

    eventService.updateSubCategory(countryCode,id,data)
      .then(
        updatesubcategory => dispatch(success(updatesubcategory)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_SUB_CATEGORY_REQUEST } }
  function success(updatesubcategory) { return { type: eventConstants.UPDATE_SUB_CATEGORY_SUCCESS, updatesubcategory} }
  function failure(error) { return { type: eventConstants.UPDATE_SUB_CATEGORY_FAILURE, error } }

}

function resetUpdateSubCategoryReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.UPDATE_SUB_CATEGORY_RESET};
  }
}

function deleteSubCategory(countryCode,id,data) {
  return dispatch => {
    dispatch(request());

    eventService.deleteSubCategory(countryCode,id,data)
      .then(
        deletesubcategory => dispatch(success(deletesubcategory)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_SUB_CATEGORY_REQUEST } }
  function success(deletesubcategory) { return { type: eventConstants.DELETE_SUB_CATEGORY_SUCCESS, deletesubcategory} }
  function failure(error) { return { type: eventConstants.DELETE_SUB_CATEGORY_FAILURE, error } }

}

function resetDeleteSubCategoryReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.DELETE_SUB_CATEGORY_RESET};
  }
}

function addDescription(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addDescription(countryCode, data)
      .then(
        adddescription => dispatch(success(adddescription)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_DESCRIPTION_MASTER_REQUEST } }
  function success(adddescription) { return { type: eventConstants.ADD_DESCRIPTION_MASTER_SUCCESS, adddescription } }
  function failure(error) { return { type: eventConstants.ADD_DESCRIPTION_MASTER_FAILURE, error } }

}

function resetAddDescriptionReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_DESCRIPTION_MASTER_RESET};
  }
}

function getDescription(countryCode,id) {
  return dispatch => {
    dispatch(request());

    eventService.getDescription(countryCode,id)
      .then(
        getdescription => dispatch(success(getdescription)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DESCRIPTION_MASTER_LIST_REQUEST } }
  function success(getdescription) { return { type: eventConstants.DESCRIPTION_MASTER_LIST_SUCCESS,getdescription} }
  function failure(error) { return { type: eventConstants.DESCRIPTION_MASTER_LIST_FAILURE, error } }
}

function updateDescription(countryCode,id,data) {
  return dispatch => {
    dispatch(request());

    eventService.updateDescription(countryCode,id,data)
      .then(
        updatedescription => dispatch(success(updatedescription)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_DESCRIPTION_REQUEST } }
  function success(updatedescription) { return { type: eventConstants.UPDATE_DESCRIPTION_SUCCESS, updatedescription} }
  function failure(error) { return { type: eventConstants.UPDATE_DESCRIPTION_FAILURE, error } }

}

function resetUpdateDescriptionReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.UPDATE_DESCRIPTION_RESET};
  }
}

function deleteDescription(countryCode,id,data) {
  return dispatch => {
    dispatch(request());

    eventService.deleteDescription(countryCode,id,data)
      .then(
        deletedescription => dispatch(success(deletedescription)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_DESCRIPTION_REQUEST } }
  function success(deletedescription) { return { type: eventConstants.DELETE_DESCRIPTION_SUCCESS,deletedescription} }
  function failure(error) { return { type: eventConstants.DELETE_DESCRIPTION_FAILURE, error } }

}

function resetDeleteDescriptionReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.DELETE_DESCRIPTION_RESET};
  }
}

function addDeliveryStatus(countryCode, data) {
  return dispatch => {
    dispatch(request());

    eventService.addDeliveryStatus(countryCode, data)
      .then(
        adddeliverystatus => dispatch(success(adddeliverystatus)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_DELIVERY_STATUS_MASTER_REQUEST } }
  function success(adddeliverystatus) { return { type: eventConstants.ADD_DELIVERY_STATUS_MASTER_SUCCESS, adddeliverystatus } }
  function failure(error) { return { type: eventConstants.ADD_DELIVERY_STATUS_MASTER_FAILURE, error } }

}

function getDeliveryStatus(countryCode,id) {
  return dispatch => {
    dispatch(request());

    eventService.getDeliveryStatus(countryCode,id)
      .then(
        getdeliverystatus => dispatch(success(getdeliverystatus)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELIVERY_STATUS_MASTER_LIST_REQUEST } }
  function success(getdeliverystatus) { return { type: eventConstants.DELIVERY_STATUS_MASTER_LIST_SUCCESS,getdeliverystatus} }
  function failure(error) { return { type: eventConstants.DELIVERY_STATUS_MASTER_LIST_FAILURE, error } }
}

function addActionStatus(data) {
  return dispatch => {
    dispatch(request());

    eventService.addActionStatus(data)
      .then(
        addactionstatus => dispatch(success(addactionstatus)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_ACTION_STATUS_MASTER_REQUEST } }
  function success(addactionstatus) { return { type: eventConstants.ADD_ACTION_STATUS_MASTER_SUCCESS, addactionstatus } }
  function failure(error) { return { type: eventConstants.ADD_ACTION_STATUS_MASTER_FAILURE, error } }

}

function getActionStatus() {
  return dispatch => {
    dispatch(request());

    eventService.getActionStatus()
      .then(
        getactionstatus => dispatch(success(getactionstatus)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ACTION_STATUS_MASTER_LIST_REQUEST } }
  function success(getactionstatus) { return { type: eventConstants.ACTION_STATUS_MASTER_LIST_SUCCESS,getactionstatus} }
  function failure(error) { return { type: eventConstants.ACTION_STATUS_MASTER_LIST_FAILURE, error } }
}


function addActionCategory(data) {
  return dispatch => {
    dispatch(request());

    eventService.addActionCategory(data)
      .then(
        addactioncategory => dispatch(success(addactioncategory)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_ACTION_CATEGORY_MASTER_REQUEST } }
  function success(addactioncategory) { return { type: eventConstants.ADD_ACTION_CATEGORY_MASTER_SUCCESS, addactioncategory } }
  function failure(error) { return { type: eventConstants.ADD_ACTION_CATEGORY_MASTER_FAILURE, error } }

}

function getActionCategory() {
  return dispatch => {
    dispatch(request());

    eventService.getActionCategory()
      .then(
        getactioncategory => dispatch(success(getactioncategory)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ACTION_CATEGORY_MASTER_LIST_REQUEST } }
  function success(getactioncategory) { return { type: eventConstants.ACTION_CATEGORY_MASTER_LIST_SUCCESS,getactioncategory} }
  function failure(error) { return { type: eventConstants.ACTION_CATEGORY_MASTER_LIST_FAILURE, error } }
}

function addDepartment(data) {
  return dispatch => {
    dispatch(request());

    eventService.addDepartment(data)
      .then(
        adddepartment => dispatch(success(adddepartment)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_DEPARTMENT_MASTER_REQUEST } }
  function success(adddepartment) { return { type: eventConstants.ADD_DEPARTMENT_MASTER_SUCCESS, adddepartment } }
  function failure(error) { return { type: eventConstants.ADD_DEPARTMENT_MASTER_FAILURE, error } }

}

function getDepartment() {
  return dispatch => {
    dispatch(request());

    eventService.getDepartment()
      .then(
        getdepartment => dispatch(success(getdepartment)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DEPARTMENT_MASTER_LIST_REQUEST } }
  function success(getdepartment) { return { type: eventConstants.DEPARTMENT_MASTER_LIST_SUCCESS,getdepartment} }
  function failure(error) { return { type: eventConstants.DEPARTMENT_MASTER_LIST_FAILURE, error } }
}


function addFunctionalRole(key,value) {
  return dispatch => {
    dispatch(request());

    eventService.addFunctionalRole(key,value)
      .then(
        addfunctionalrole => dispatch(success(addfunctionalrole)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_FUNCTIONAL_ROLE_MASTER_REQUEST } }
  function success(addfunctionalrole) { return { type: eventConstants.ADD_FUNCTIONAL_ROLE_MASTER_SUCCESS, addfunctionalrole } }
  function failure(error) { return { type: eventConstants.ADD_FUNCTIONAL_ROLE_MASTER_FAILURE, error } }

}

function getFunctionalRole() {
  return dispatch => {
    dispatch(request());

    eventService.getFunctionalRole()
      .then(
        getfunctionalrole => dispatch(success(getfunctionalrole)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.FUNCTIONAL_ROLE_MASTER_LIST_REQUEST } }
  function success(getfunctionalrole) { return { type: eventConstants.FUNCTIONAL_ROLE_MASTER_LIST_SUCCESS,getfunctionalrole} }
  function failure(error) { return { type: eventConstants.FUNCTIONAL_ROLE_MASTER_LIST_FAILURE, error } }
}

function addLeadSource(data) {
  return dispatch => {
    dispatch(request());

    eventService.addLeadSource(data)
      .then(
        addleadsource => dispatch(success(addleadsource)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_LEAD_SOURCE_MASTER_REQUEST } }
  function success(addleadsource) { return { type: eventConstants.ADD_LEAD_SOURCE_MASTER_SUCCESS, addleadsource } }
  function failure(error) { return { type: eventConstants.ADD_LEAD_SOURCE_MASTER_FAILURE, error } }

}

function getLeadSource() {
  return dispatch => {
    dispatch(request());

    eventService.getLeadSource()
      .then(
        getleadsource => dispatch(success(getleadsource)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.LEAD_SOURCE_MASTER_LIST_REQUEST } }
  function success(getleadsource) { return { type: eventConstants.LEAD_SOURCE_MASTER_LIST_SUCCESS,getleadsource} }
  function failure(error) { return { type: eventConstants.LEAD_SOURCE_MASTER_LIST_FAILURE, error } }
}


function addLeadStage(data) {
  return dispatch => {
    dispatch(request());

    eventService.addLeadStage(data)
      .then(
        addleadstage => dispatch(success(addleadstage)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_LEAD_STAGE_MASTER_REQUEST } }
  function success(addleadstage) { return { type: eventConstants.ADD_LEAD_STAGE_MASTER_SUCCESS, addleadstage } }
  function failure(error) { return { type: eventConstants.ADD_LEAD_STAGE_MASTER_FAILURE, error } }

}

function getLeadStage() {
  return dispatch => {
    dispatch(request());

    eventService.getLeadStage()
      .then(
        getleadstage => dispatch(success(getleadstage)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.LEAD_STAGE_MASTER_LIST_REQUEST } }
  function success(getleadstage) { return { type: eventConstants.LEAD_STAGE_MASTER_LIST_SUCCESS,getleadstage} }
  function failure(error) { return { type: eventConstants.LEAD_STAGE_MASTER_LIST_FAILURE, error } }
}


function UpdateSoldToManagment(data, prodctid) {
  return dispatch => {
    dispatch(request());

    eventService.UpdateSoldToManagment(data, prodctid)
      .then(
        updatesoldtomanagment => dispatch(success(updatesoldtomanagment)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_SOLD_MANAGMENT_REQUEST } }
  function success(updatesoldtomanagment) { return { type: eventConstants.UPDATE_SOLD_MANAGMENT_SUCCESS, updatesoldtomanagment } }
  function failure(error) { return { type: eventConstants.UPDATE_SOLD_MANAGMENT_FAILURE, error } }

}


function getRoleList() {
  return dispatch => {
    dispatch(request());

    eventService.getRoleList()
      .then(
        getrolelist => dispatch(success(getrolelist)),
        // error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_ROLE_LIST_REQUEST } }
  function success(getrolelist) { return { type: eventConstants.GET_ROLE_LIST_SUCCESS, getrolelist } }
  function failure(error) { return { type: eventConstants.GET_ROLE_LIST_FAILURE, error } }

}

function RegionList(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.RegionList(countryCode)
      .then(
        regionlist => dispatch(success(regionlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_REGION_LIST_REQUEST } }
  function success(regionlist) { return { type: eventConstants.GET_REGION_LIST_SUCCESS, regionlist } }
  function failure(error) { return { type: eventConstants.GET_REGION_LIST_FAILURE, error } }

}


function ProvinceList(region) {
  return dispatch => {
    dispatch(request());

    eventService.ProvinceList(region)
      .then(
        provincelist => dispatch(success(provincelist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_PROVINCE_LIST_REQUEST } }
  function success(provincelist) { return { type: eventConstants.GET_PROVINCE_LIST_SUCCESS, provincelist } }
  function failure(error) { return { type: eventConstants.GET_PROVINCE_LIST_FAILURE, error } }

}

function DistrictList(provice) {
  return dispatch => {
    dispatch(request());

    eventService.DistrictList(provice)
      .then(
        districtlist => dispatch(success(districtlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_DISTRICT_LIST_REQUEST } }
  function success(districtlist) { return { type: eventConstants.GET_DISTRICT_LIST_SUCCESS, districtlist } }
  function failure(error) { return { type: eventConstants.GET_DISTRICT_LIST_FAILURE, error } }

}


function regionSelect(orderID, key) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID, key))
  };

  function request(regionselect) {
    return { type: eventConstants.REGION_SELECT_VALUE_REQUEST, regionselect };
  }
  function success(regionselect) {
    return { type: eventConstants.REGION_SELECT_VALUE_SUCCESS, regionselect };
  }
  function failure(error) {
    return { type: eventConstants.REGION_SELECT_VALUE_FAILURE, error };

  }
}

function provinceSelect(orderID) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID))
  };

  function request(provinceselect) {
    return { type: eventConstants.PROVINCE_SELECT_VALUE_REQUEST, provinceselect };
  }
  function success(provinceselect) {
    return { type: eventConstants.PROVINCE_SELECT_VALUE_SUCCESS, provinceselect };
  }
  function failure(error) {
    return { type: eventConstants.PROVINCE_SELECT_VALUE_FAILURE, error };

  }
}


function SegmentList() {
  return dispatch => {
    dispatch(request());

    eventService.SegmentList()
      .then(
        segmentlist => dispatch(success(segmentlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_SEGMENT_LIST_REQUEST } }
  function success(segmentlist) { return { type: eventConstants.GET_SEGMENT_LIST_SUCCESS, segmentlist } }
  function failure(error) { return { type: eventConstants.GET_SEGMENT_LIST_FAILURE, error } }

}


function getAllUser() {
  return dispatch => {
    dispatch(request());

    eventService.getAllUser()
      .then(
        getalluser => dispatch(success(getalluser)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_ALL_USER_LIST_REQUEST } }
  function success(getalluser) { return { type: eventConstants.GET_ALL_USER_LIST_SUCCESS, getalluser } }
  function failure(error) { return { type: eventConstants.GET_ALL_USER_LIST_FAILURE, error } }

}


function SubDistrictList(district) {
  return dispatch => {
    dispatch(request());

    eventService.SubDistrictList(district)
      .then(
        subdistrictlist => dispatch(success(subdistrictlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_SUB_DISTRICT_LIST_REQUEST } }
  function success(subdistrictlist) { return { type: eventConstants.GET_SUB_DISTRICT_LIST_SUCCESS, subdistrictlist } }
  function failure(error) { return { type: eventConstants.GET_SUB_DISTRICT_LIST_FAILURE, error } }

}


function districtSelect(orderID) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID))
  };

  function request(districtselect) {
    return { type: eventConstants.DISTRICT_SELECT_VALUE_REQUEST, districtselect };
  }
  function success(districtselect) {
    return { type: eventConstants.DISTRICT_SELECT_VALUE_SUCCESS, districtselect };
  }
  function failure(error) {
    return { type: eventConstants.DISTRICT_SELECT_VALUE_FAILURE, error };

  }
}

function subDistrictSelect(orderID) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID))
  };

  function request(subdistrictselect) {
    return { type: eventConstants.SUB_DISTRICT_SELECT_VALUE_REQUEST, subdistrictselect };
  }
  function success(subdistrictselect) {
    return { type: eventConstants.SUB_DISTRICT_SELECT_VALUE_SUCCESS, subdistrictselect };
  }
  function failure(error) {
    return { type: eventConstants.SUB_DISTRICT_SELECT_VALUE_FAILURE, error };

  }
}


function AssignProductGroupDetailList(productgroupid) {
  return dispatch => {
    dispatch(request());

    !!productgroupid ? eventService.AssignProductGroupDetailList(productgroupid)
      .then(
        assignproductgroupidlist => dispatch(success(assignproductgroupidlist)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.GET_ASSIGN_PRODUCT_GROUP_DETAIL_REQUEST } }
  function success(assignproductgroupidlist) { return { type: eventConstants.GET_ASSIGN_PRODUCT_GROUP_DETAIL_SUCCESS, assignproductgroupidlist } }
  function failure(error) { return { type: eventConstants.GET_ASSIGN_PRODUCT_GROUP_DETAIL_FAILURE, error } }
  function clearState() { return { type: eventConstants.GET_ASSIGN_PRODUCT_GROUP_DETAIL_CLEAR_STATE } }

}


function GeographyMasterList(endIndex, startIndex) {
  return dispatch => {
    dispatch(request());

    eventService.GeographyMasterList(endIndex, startIndex)
      .then(
        geographymasterlist => dispatch(success(geographymasterlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_GEOGRAPHY_MASTER_LIST_REQUEST } }
  function success(geographymasterlist) { return { type: eventConstants.GET_GEOGRAPHY_MASTER_LIST_SUCCESS, geographymasterlist } }
  function failure(error) { return { type: eventConstants.GET_GEOGRAPHY_MASTER_LIST_FAILURE, error } }

}


function ProductImageGetList(productId) {
  return dispatch => {
    dispatch(request());

    eventService.ProductImageGetList(productId)
      .then(
        productimagegetlist => dispatch(success(productimagegetlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_PRODUCT_IMAGE_LIST_REQUEST } }
  function success(productimagegetlist) { return { type: eventConstants.GET_PRODUCT_IMAGE_LIST_SUCCESS, productimagegetlist } }
  function failure(error) { return { type: eventConstants.GET_PRODUCT_IMAGE_LIST_FAILURE, error } }

}


function SoldToManagmentSearch(country, endIndex, searchText, startIndex) {
  return dispatch => {
    dispatch(request());

    (!!country || !!endIndex || !!searchText || !!startIndex) ? eventService.SoldToManagmentSearch(country, endIndex, searchText, startIndex)
      .then(
        soldtomanagmentsearch => dispatch(success(soldtomanagmentsearch)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.GET_SOLD_TO_SEARCH_REQUEST } }
  function success(soldtomanagmentsearch) { return { type: eventConstants.GET_SOLD_TO_SEARCH_SUCCESS, soldtomanagmentsearch } }
  function failure(error) { return { type: eventConstants.GET_SOLD_TO_SEARCH_FAILURE, error } }
  function clearState() { return { type: eventConstants.GET_SOLD_TO_SEARCH_CLEAR_STATE } }

}


function AccountFormData(productData, mobile, upload) {
  return (dispatch) => {
    dispatch(request());

    (!!productData || !!mobile || !!upload) ? eventService.AccountFormData(productData, mobile, upload).then(
      (accountformdata) => {
        return dispatch(success(accountformdata))
      },
      (error) => {
        return dispatch(failure(error && error.toString()))
      }
    ) : dispatch(ClearState());
  };
  function request() {
    return { type: eventConstants.ACCOUNT_FORM_DATA_REQUEST };
  }
  function success(accountformdata) {
    return { type: eventConstants.ACCOUNT_FORM_DATA_SUCCESS, accountformdata };
  }
  function failure(error) {
    return { type: eventConstants.ACCOUNT_FORM_DATA_FAILURE, error };
  }
  function ClearState() {
    return { type: eventConstants.ACCOUNT_FORM_DATA_CLEAR };
  }
}


function ProductActiveAssignList() {
  return dispatch => {
    dispatch(request());

    eventService.ProductActiveAssignList()
      .then(
        productactiveassignlist => dispatch(success(productactiveassignlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_PRODUCT_ACTIVE_ASSIGN_LIST_REQUEST } }
  function success(productactiveassignlist) { return { type: eventConstants.GET_PRODUCT_ACTIVE_ASSIGN_LIST_SUCCESS, productactiveassignlist } }
  function failure(error) { return { type: eventConstants.GET_PRODUCT_ACTIVE_ASSIGN_LIST_FAILURE, error } }

}

function ProductMasterActiveInactive() {
  return dispatch => {
    dispatch(request());

    eventService.ProductMasterActiveInactive()
      .then(
        productmasteractiveinactive => dispatch(success(productmasteractiveinactive)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PRODUCT_MASTER_ACTIVE_INACTIVE_REQUEST } }
  function success(productmasteractiveinactive) { return { type: eventConstants.PRODUCT_MASTER_ACTIVE_INACTIVE_SUCCESS, productmasteractiveinactive } }
  function failure(error) { return { type: eventConstants.PRODUCT_MASTER_ACTIVE_INACTIVE_FAILURE, error } }

}


function activeProductMaster(orderID) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID))
  };

  function request(activeproductmaster) {
    return { type: eventConstants.ACTIVE_PRODUCT_MASTER_REQUEST, activeproductmaster };
  }
  function success(activeproductmaster) {
    return { type: eventConstants.ACTIVE_PRODUCT_MASTER_SUCCESS, activeproductmaster };
  }
  function failure(error) {
    return { type: eventConstants.ACTIVE_PRODUCT_MASTER_FAILURE, error };

  }
}


function soldtoProductGroupList(UpdateData, endIndex1, startIndex1) {
  return dispatch => {
    dispatch(request());

    eventService.soldtoProductGroupList(UpdateData, endIndex1, startIndex1)
      .then(
        soldtoproductgrouplist => dispatch(success(soldtoproductgrouplist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SOLD_PRODUCTGROUP_LIST_REQUEST } }
  function success(soldtoproductgrouplist) { return { type: eventConstants.SOLD_PRODUCTGROUP_LIST_SUCCESS, soldtoproductgrouplist } }
  function failure(error) { return { type: eventConstants.SOLD_PRODUCTGROUP_LIST_FAILURE, error } }

}


function GetcustomerGroup() {
  return dispatch => {
    dispatch(request());

    eventService.GetcustomerGroup()
      .then(
        getcustomergroup => dispatch(success(getcustomergroup)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_CUSTOMER_GROUP_LIST_REQUEST } }
  function success(getcustomergroup) { return { type: eventConstants.GET_CUSTOMER_GROUP_LIST_SUCCESS, getcustomergroup } }
  function failure(error) { return { type: eventConstants.GET_CUSTOMER_GROUP_LIST_FAILURE, error } }

}

function addcustomerGroup(data) {
  return dispatch => {
    dispatch(request());

    eventService.addcustomerGroup(data)
      .then(
        addcustomergroup => dispatch(success(addcustomergroup)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_CUSTOMER_GROUP_REQUEST } }
  function success(addcustomergroup) { return { type: eventConstants.ADD_CUSTOMER_GROUP_SUCCESS, addcustomergroup } }
  function failure(error) { return { type: eventConstants.ADD_CUSTOMER_GROUP_FAILURE, error } }

}

function TruckMasterList(data) {
  return dispatch => {
    dispatch(request());

    eventService.TruckMasterList(data)
      .then(
        truckmasterlist => dispatch(success(truckmasterlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.TRUCK_MASTER_LIST_REQUEST } }
  function success(truckmasterlist) { return { type: eventConstants.TRUCK_MASTER_LIST_SUCCESS, truckmasterlist } }
  function failure(error) { return { type: eventConstants.TRUCK_MASTER_LIST_FAILURE, error } }

}
function ShipToList(data) {
  return dispatch => {
    dispatch(request());

    eventService.ShipToList(data)
      .then(
        shiptolist => dispatch(success(shiptolist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SOLD_SHIP_TO_LIST_REQUEST } }
  function success(shiptolist) { return { type: eventConstants.SOLD_SHIP_TO_LIST_SUCCESS, shiptolist } }
  function failure(error) { return { type: eventConstants.SOLD_SHIP_TO_LIST_FAILURE, error } }

}


function subDealerData(fromIndex, needInactive, searchText, soldToNumber, toIndex) {
  return dispatch => {
    dispatch(request());

    eventService.subDealerData(fromIndex, needInactive, searchText, soldToNumber, toIndex)
      .then(
        subDealerData => dispatch(success(subDealerData)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SUB_DEALER_LIST_REQUEST } }
  function success(subDealerData) { return { type: eventConstants.SUB_DEALER_LIST_SUCCESS, subDealerData } }
  function failure(error) { return { type: eventConstants.SUB_DEALER_LIST_FAILURE, error } }

}




function SoldToContractList(data) {
  return dispatch => {
    dispatch(request());

    eventService.SoldToContractList(data)
      .then(
        soldtocontractlist => dispatch(success(soldtocontractlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SOLD_CONTRACT_LIST_REQUEST } }
  function success(soldtocontractlist) { return { type: eventConstants.SOLD_CONTRACT_LIST_SUCCESS, soldtocontractlist } }
  function failure(error) { return { type: eventConstants.SOLD_CONTRACT_LIST_FAILURE, error } }

}

function ContractDetailList(data) {
  return dispatch => {
    dispatch(request());

    eventService.ContractDetailList(data)
      .then(
        contractdetaillist => dispatch(success(contractdetaillist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CONTRACT_DETAIL_LIST_REQUEST } }
  function success(contractdetaillist) { return { type: eventConstants.CONTRACT_DETAIL_LIST_SUCCESS, contractdetaillist } }
  function failure(error) { return { type: eventConstants.CONTRACT_DETAIL_LIST_FAILURE, error } }

}

function InseePrivilageList(endIndex, soldToNumber, startIndex) {
  return dispatch => {
    dispatch(request());

    eventService.InseePrivilageList(endIndex, soldToNumber, startIndex)
      .then(
        inseeprivilagelist => dispatch(success(inseeprivilagelist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.INSEE_PRIVILAGE_LIST_REQUEST } }
  function success(inseeprivilagelist) { return { type: eventConstants.INSEE_PRIVILAGE_LIST_SUCCESS, inseeprivilagelist } }
  function failure(error) { return { type: eventConstants.INSEE_PRIVILAGE_LIST_FAILURE, error } }

}

function InseePrivilageForMonthYear(endIndex, soldToNumber, startIndex) {
  return dispatch => {
    dispatch(request());

    eventService.InseePrivilageForMonthYear(endIndex, soldToNumber, startIndex)
      .then(
        inseeprivilagemonthyear => dispatch(success(inseeprivilagemonthyear)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.INSEE_PRIVILAGE_MONTH_YEAR_REQUEST } }
  function success(inseeprivilagemonthyear) { return { type: eventConstants.INSEE_PRIVILAGE_MONTH_YEAR_SUCCESS, inseeprivilagemonthyear } }
  function failure(error) { return { type: eventConstants.INSEE_PRIVILAGE_MONTH_YEAR_FAILURE, error } }

}


function AddRole(data) {
  return dispatch => {
    dispatch(request());

    eventService.AddRole(data)
      .then(
        addrole => dispatch(success(addrole)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_ROLE_REQUEST } }
  function success(addrole) { return { type: eventConstants.ADD_ROLE_SUCCESS, addrole } }
  function failure(error) { return { type: eventConstants.ADD_ROLE_FAILURE, error } }

}

function getAllRoleList() {
  return dispatch => {
    dispatch(request());

    eventService.getAllRoleList()
      .then(
        getallrolelist => dispatch(success(getallrolelist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_ALL_ROLE_LIST_REQUEST } }
  function success(getallrolelist) { return { type: eventConstants.GET_ALL_ROLE_LIST_SUCCESS, getallrolelist } }
  function failure(error) { return { type: eventConstants.GET_ALL_ROLE_LIST_FAILURE, error } }

}


function AddTruckMaster(data) {
  return dispatch => {
    dispatch(request());

    !!data ?
      eventService.AddTruckMaster(data)
        .then(
          addtruckmaster => dispatch(success(addtruckmaster)),
          error => dispatch(failure(error && error.toString()))

        ) : dispatch(clearToast())
  };
  function request() { return { type: eventConstants.ADD_TRUCK_MASTER_REQUEST } }
  function success(addtruckmaster) { return { type: eventConstants.ADD_TRUCK_MASTER_SUCCESS, addtruckmaster } }
  function failure(error) { return { type: eventConstants.ADD_TRUCK_MASTER_FAILURE, error } }
  function clearToast() { return { type: eventConstants.ADD_TRUCK_MASTER_CLEAR_TOAST } }

}


function getOwnerShip() {
  return dispatch => {
    dispatch(request());

    eventService.getOwnerShip()
      .then(
        getownership => dispatch(success(getownership)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_OWNERSHIP_LIST_REQUEST } }
  function success(getownership) { return { type: eventConstants.GET_OWNERSHIP_LIST_SUCCESS, getownership } }
  function failure(error) { return { type: eventConstants.GET_OWNERSHIP_LIST_FAILURE, error } }

}

function vechileStatusList() {
  return dispatch => {
    dispatch(request());

    eventService.vechileStatusList()
      .then(
        vechilestatuslist => dispatch(success(vechilestatuslist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.VECHILE_STATUS_LIST_REQUEST } }
  function success(vechilestatuslist) { return { type: eventConstants.VECHILE_STATUS_LIST_SUCCESS, vechilestatuslist } }
  function failure(error) { return { type: eventConstants.VECHILE_STATUS_LIST_FAILURE, error } }

}
function vechileTypeList(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.vechileTypeList(countryCode)
      .then(
        vechiletypelist => dispatch(success(vechiletypelist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.VECHILE_TYPE_LIST_REQUEST } }
  function success(vechiletypelist) { return { type: eventConstants.VECHILE_TYPE_LIST_SUCCESS, vechiletypelist } }
  function failure(error) { return { type: eventConstants.VECHILE_TYPE_LIST_FAILURE, error } }

}


function GuideLinematrix(endIndex, startIndex) {
  return dispatch => {
    dispatch(request());

    eventService.GuideLinematrix(endIndex, startIndex)
      .then(
        guidelinematrix => dispatch(success(guidelinematrix)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GUIDELINE_MATRIX_LIST_REQUEST } }
  function success(guidelinematrix) { return { type: eventConstants.GUIDELINE_MATRIX_LIST_SUCCESS, guidelinematrix } }
  function failure(error) { return { type: eventConstants.GUIDELINE_MATRIX_LIST_FAILURE, error } }

}

function UploadGuideLinematrix(month, year, upload) {
  return dispatch => {
    dispatch(request());

    eventService.UploadGuideLinematrix(month, year, upload)
      .then(
        uploadguidelinematrix => dispatch(success(uploadguidelinematrix)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPLOAD_GUIDELINE_MATRIX_REQUEST } }
  function success(uploadguidelinematrix) { return { type: eventConstants.UPLOAD_GUIDELINE_MATRIX_SUCCESS, uploadguidelinematrix } }
  function failure(error) { return { type: eventConstants.UPLOAD_GUIDELINE_MATRIX_FAILURE, error } }

}



function activeTruckMaster(vechileId) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(vechileId))
  };

  function request(activetruckmaster) {
    return { type: eventConstants.ACTIVE_TRUCK_MASTER_REQUEST, activetruckmaster };
  }
  function success(activetruckmaster) {
    return { type: eventConstants.ACTIVE_TRUCK_MASTER_SUCCESS, activetruckmaster };
  }
  function failure(error) {
    return { type: eventConstants.ACTIVE_TRUCK_MASTER_FAILURE, error };

  }
}


function updateTruckMaster(data, vechileId) {
  return dispatch => {
    dispatch(request());
    (!!data || !!vechileId) ?
      eventService.updateTruckMaster(data, vechileId)
        .then(
          updatetruckmaster => dispatch(success(updatetruckmaster)),
          error => dispatch(failure(error.toString()))
        ) : dispatch(clearToast())
  };
  function request() { return { type: eventConstants.UPDATE_TRUCK_MASTER_REQUEST } }
  function success(updatetruckmaster) { return { type: eventConstants.UPDATE_TRUCK_MASTER_SUCCESS, updatetruckmaster } }
  function failure(error) { return { type: eventConstants.UPDATE_TRUCK_MASTER_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_TRUCK_MASTER_CLEAR_TOAST } }

}


function UploadRetailer(country, upload) {
  return dispatch => {
    dispatch(request());

    eventService.UploadRetailer(country, upload)
      .then(
        uploadretailer => dispatch(success(uploadretailer)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPLOAD_RETAILER_REQUEST } }
  function success(uploadretailer) { return { type: eventConstants.UPLOAD_RETAILER_SUCCESS, uploadretailer } }
  function failure(error) { return { type: eventConstants.UPLOAD_RETAILER_FAILURE, error } }

}

function UploadInseePrivilage(month, year, upload) {
  console.log("mylist",month, year, upload);
  return dispatch => {
    dispatch(request());

    (!!month || !!year || !!upload) ? eventService.UploadInseePrivilage(month, year, upload)
      .then(
        uploadinseeprivilage => dispatch(success(uploadinseeprivilage)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPLOAD_INSEE_PRIVILAGE_REQUEST } }
  function success(uploadinseeprivilage) { return { type: eventConstants.UPLOAD_INSEE_PRIVILAGE_SUCCESS, uploadinseeprivilage } }
  function failure(error) { return { type: eventConstants.UPLOAD_INSEE_PRIVILAGE_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPLOAD_INSEE_PRIVILAGE_CLEAR_TOAST } }

}

function UploadCustomerTier(year, upload) {
  return dispatch => {
    dispatch(request());

   (!!year || !!upload) ? eventService.UploadCustomerTier(year, upload)
      .then(
        uploadcustomertier => dispatch(success(uploadcustomertier)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPLOAD_CUSTOMER_TIER_REQUEST } }
  function success(uploadcustomertier) { return { type: eventConstants.UPLOAD_CUSTOMER_TIER_SUCCESS, uploadcustomertier } }
  function failure(error) { return { type: eventConstants.UPLOAD_CUSTOMER_TIER_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPLOAD_CUSTOMER_TIER_CLEAR_TOAST } }

}

function getStrategyMatrix() {
  return dispatch => {
    dispatch(request());

    eventService.getStrategyMatrix()
      .then(
        getstrategy => dispatch(success(getstrategy)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.STRATEGY_MATRIX_LIST_REQUEST } }
  function success(getstrategy) { return { type: eventConstants.STRATEGY_MATRIX_LIST_SUCCESS, getstrategy } }
  function failure(error) { return { type: eventConstants.STRATEGY_MATRIX_LIST_FAILURE, error } }

}

function addStrategyMatrix(data) {
  return dispatch => {
    dispatch(request());

    eventService.addStrategyMatrix(data)
      .then(
        addstrategymatrix => dispatch(success(addstrategymatrix)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_STRATEGY_MATRIX_REQUEST } }
  function success(addstrategymatrix) { return { type: eventConstants.ADD_STRATEGY_MATRIX_SUCCESS, addstrategymatrix } }
  function failure(error) { return { type: eventConstants.ADD_STRATEGY_MATRIX_FAILURE, error } }

}

function InternalManagmentFilter(filterData) {
  return dispatch => {
    dispatch(request());

    eventService.InternalManagmentFilter(filterData)
      .then(
        getalluser => dispatch(success(getalluser)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_ALL_USER_LIST_REQUEST } }
  function success(getalluser) { return { type: eventConstants.GET_ALL_USER_LIST_SUCCESS, getalluser } }
  function failure(error) { return { type: eventConstants.GET_ALL_USER_LIST_FAILURE, error } }

}


function roleSelect(orderID) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID))
  };

  function request(roleselect) {
    return { type: eventConstants.ROLE_SELECT_VALUE_REQUEST, roleselect };
  }
  function success(roleselect) {
    return { type: eventConstants.ROLE_SELECT_VALUE_SUCCESS, roleselect };
  }
  function failure(error) {
    return { type: eventConstants.ROLE_SELECT_VALUE_FAILURE, error };

  }
}

function InternalManagmentSearch(search) {
  return dispatch => {
    dispatch(request());

    eventService.InternalManagmentSearch(search)
      .then(
        internalmanagmentsearch => dispatch(success(internalmanagmentsearch)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.INTERNAL_MANAGMENT_SEARCH_REQUEST } }
  function success(internalmanagmentsearch) { return { type: eventConstants.INTERNAL_MANAGMENT_SEARCH_SUCCESS, internalmanagmentsearch } }
  function failure(error) { return { type: eventConstants.INTERNAL_MANAGMENT_SEARCH_FAILURE, error } }

}

function CustomerUserId(userid) {
  return dispatch => {
    dispatch(request());

    eventService.CustomerUserId(userid)
      .then(
        customeruserid => dispatch(success(customeruserid)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CUSTOMER_USERID_REQUEST } }
  function success(customeruserid) { return { type: eventConstants.CUSTOMER_USERID_SUCCESS, customeruserid } }
  function failure(error) { return { type: eventConstants.CUSTOMER_USERID_FAILURE, error } }

}


function getCustomerTierList(endIndex, soldToNumber, startIndex) {
  return dispatch => {
    dispatch(request());

    eventService.getCustomerTierList(endIndex, soldToNumber, startIndex)
      .then(
        customertierlist => dispatch(success(customertierlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CUSTOMER_TIER_LIST_REQUEST } }
  function success(customertierlist) { return { type: eventConstants.CUSTOMER_TIER_LIST_SUCCESS, customertierlist } }
  function failure(error) { return { type: eventConstants.CUSTOMER_TIER_LIST_FAILURE, error } }

}


function retailerList(endIndex, startIndex) {
  return dispatch => {
    dispatch(request());

    eventService.retailerList(endIndex, startIndex)
      .then(
        retailerlist => dispatch(success(retailerlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RETAILER_LIST_REQUEST } }
  function success(retailerlist) { return { type: eventConstants.RETAILER_LIST_SUCCESS, retailerlist } }
  function failure(error) { return { type: eventConstants.RETAILER_LIST_FAILURE, error } }

}


function searchRetailer(searchText) {
  return dispatch => {
    dispatch(request());

    eventService.searchRetailer(searchText)
      .then(
        searchretailer => dispatch(success(searchretailer)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SEARCH_RETAILER_REQUEST } }
  function success(searchretailer) { return { type: eventConstants.SEARCH_RETAILER_SUCCESS, searchretailer } }
  function failure(error) { return { type: eventConstants.SEARCH_RETAILER_FAILURE, error } }

}

function retailerSubdealers(endIndex1, searchText, startIndex1) {
  return dispatch => {
    dispatch(request());
    eventService.retailerSubdealers(endIndex1, searchText, startIndex1)
      .then(
        retailersubdealers => dispatch(success(retailersubdealers)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_RETAILER_DATA_REQUEST } }
  function success(retailersubdealers) { return { type: eventConstants.GET_RETAILER_DATA_SUCCESS, retailersubdealers } }
  function failure(error) { return { type: eventConstants.GET_RETAILER_DATA_FAILURE, error } }
}

function getAutoretailersubdealerCode(searchText) {
  return dispatch => {
    dispatch(request());
    eventService.getAutoretailersubdealerCode(searchText)
      .then(
        autosubdealerlist => dispatch(success(autosubdealerlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.AUTO_SUB_DEALER_LIST_REQUEST } }
  function success(autosubdealerlist) { return { type: eventConstants.AUTO_SUB_DEALER_LIST_SUCCESS, autosubdealerlist } }
  function failure(error) { return { type: eventConstants.AUTO_SUB_DEALER_LIST_FAILURE, error } }
}





function loyaltyCustomerTypeList() {
  return dispatch => {
    dispatch(request());

    eventService.loyaltyCustomerTypeList()
      .then(
        loyaltycustomerlist => dispatch(success(loyaltycustomerlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.LOYALTY_CUSTOMER_LIST_REQUEST } }
  function success(loyaltycustomerlist) { return { type: eventConstants.LOYALTY_CUSTOMER_LIST_SUCCESS, loyaltycustomerlist } }
  function failure(error) { return { type: eventConstants.LOYALTY_CUSTOMER_LIST_FAILURE, error } }

}


function postloyaltyPointForm(data) {
  return dispatch => {
    dispatch(request());

    !!data ? eventService.postloyaltyPointForm(data)
      .then(
        loyaltypointform => dispatch(success(loyaltypointform)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearTest());
  };
  function request() { return { type: eventConstants.LOYALTY_POINT_FORM_REQUEST } }
  function success(loyaltypointform) { return { type: eventConstants.LOYALTY_POINT_FORM_SUCCESS, loyaltypointform } }
  function failure(error) { return { type: eventConstants.LOYALTY_POINT_FORM_FAILURE, error } }
  function clearTest() { return { type: eventConstants.LOYALTY_POINT_FORM_CLEAR_TOAST } }

}

function getloyaltyPointList(productCode) {
  return dispatch => {
    dispatch(request());

    eventService.getloyaltyPointList(productCode)
      .then(
        getloyaltypointlist => dispatch(success(getloyaltypointlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.LOYALTY_POINT_LIST_REQUEST } }
  function success(getloyaltypointlist) { return { type: eventConstants.LOYALTY_POINT_LIST_SUCCESS, getloyaltypointlist } }
  function failure(error) { return { type: eventConstants.LOYALTY_POINT_LIST_FAILURE, error } }

}

function productClassificationList() {
  return dispatch => {
    dispatch(request());

    eventService.productClassificationList()
      .then(
        productclassificationlist => dispatch(success(productclassificationlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PRODUCT_CLASSIFICATION_LIST_REQUEST } }
  function success(productclassificationlist) { return { type: eventConstants.PRODUCT_CLASSIFICATION_LIST_SUCCESS, productclassificationlist } }
  function failure(error) { return { type: eventConstants.PRODUCT_CLASSIFICATION_LIST_FAILURE, error } }

}

function addProductClassification(data) {
  return dispatch => {
    dispatch(request());

    eventService.addProductClassification(data)
      .then(
        addproductclassification => dispatch(success(addproductclassification)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_PRODUCT_CLASSIFICATION_REQUEST } }
  function success(addproductclassification) { return { type: eventConstants.ADD_PRODUCT_CLASSIFICATION_SUCCESS, addproductclassification } }
  function failure(error) { return { type: eventConstants.ADD_PRODUCT_CLASSIFICATION_FAILURE, error } }

}

function productGroupEditList(ProductId) {
  return dispatch => {
    dispatch(request());

    eventService.productGroupEditList(ProductId)
      .then(
        productgroupeditlist => dispatch(success(productgroupeditlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PRODUCT_GROUP_EDIT_LIST_REQUEST } }
  function success(productgroupeditlist) { return { type: eventConstants.PRODUCT_GROUP_EDIT_LIST_SUCCESS, productgroupeditlist } }
  function failure(error) { return { type: eventConstants.PRODUCT_GROUP_EDIT_LIST_FAILURE, error } }

}

function modifiedProductGroup(data, productId) {
  return dispatch => {
    dispatch(request());
    ((data || productId) ?
      eventService.modifiedProductGroup(data, productId)
        .then(
          modifiedproductgroup => dispatch(success(modifiedproductgroup)),
          error => dispatch(failure(error.toString()))
        ) : dispatch(cleanToast()))
  };
  function request() { return { type: eventConstants.MODIFIED_PRODUCT_GROUP_REQUEST } }
  function success(modifiedproductgroup) { return { type: eventConstants.MODIFIED_PRODUCT_GROUP_SUCCESS, modifiedproductgroup } }
  function failure(error) { return { type: eventConstants.MODIFIED_PRODUCT_GROUP_FAILURE, error } }
  function cleanToast() {
    return { type: eventConstants.MODIFIED_PRODUCT_GROUP_CLEAN_TOAST }
  }

}


function deleteAssignProductList(data) {
  return dispatch => {
    dispatch(request());

    eventService.deleteAssignProductList(data)
      .then(
        deleteassignproduct => dispatch(success(deleteassignproduct)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_ASSIGN_PRODUCT_REQUEST } }
  function success(deleteassignproduct) { return { type: eventConstants.DELETE_ASSIGN_PRODUCT_SUCCESS, deleteassignproduct } }
  function failure(error) { return { type: eventConstants.DELETE_ASSIGN_PRODUCT_FAILURE, error } }

}

function getWithVechileIdList(data) {
  return dispatch => {
    dispatch(request());

    eventService.getWithVechileIdList(data)
      .then(
        vechicleidlist => dispatch(success(vechicleidlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.VECHILE_ID_LIST_REQUEST } }
  function success(vechicleidlist) { return { type: eventConstants.VECHILE_ID_LIST_SUCCESS, vechicleidlist } }
  function failure(error) { return { type: eventConstants.VECHILE_ID_LIST_FAILURE, error } }

}


function deleteSoldToProductGroupList(data) {
  console.log("my new data",data);
  return dispatch => {
    dispatch(request());
    
   {!!data &&  eventService.deleteSoldToProductGroupList(data.productGroupId,data.accountName)

      .then(
        deletesoldtoproductgroup => dispatch(success(deletesoldtoproductgroup)),
        error => dispatch(failure(error.toString()))

      );
    }
  };
  function request() { return { type: eventConstants.DELETE_SOLDTO_PRODUCT_REQUEST } }
  function success(deletesoldtoproductgroup) { return { type: eventConstants.DELETE_SOLDTO_PRODUCT_SUCCESS, deletesoldtoproductgroup } }
  function failure(error) { return { type: eventConstants.DELETE_SOLDTO_PRODUCT_FAILURE, error } }

}


function getAppType() {
  return dispatch => {
    dispatch(request());

    eventService.getAppType()
      .then(
        getapptype => dispatch(success(getapptype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.APP_TYPE_REQUEST } }
  function success(getapptype) { return { type: eventConstants.APP_TYPE_SUCCESS, getapptype } }
  function failure(error) { return { type: eventConstants.APP_TYPE_FAILURE, error } }

}

function getChannelType() {
  return dispatch => {
    dispatch(request());

    eventService.getChannelType()
      .then(
        getchanneltype => dispatch(success(getchanneltype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CUSTOMER_TYPE_REQUEST } }
  function success(getchanneltype) { return { type: eventConstants.CUSTOMER_TYPE_SUCCESS, getchanneltype } }
  function failure(error) { return { type: eventConstants.CUSTOMER_TYPE_FAILURE, error } }

}

function addBannerImage(country, edate, upload, apptype, channeltype, sdate) {
  return dispatch => {
    dispatch(request());

    (country || apptype || channeltype) ?
      eventService.addBannerImage(country, edate, upload, apptype, channeltype, sdate)
        .then(
          addbannerimage => dispatch(success(addbannerimage)),
          error => dispatch(failure(error.toString()))
        ) : dispatch(clearToast())
  };
  function request() { return { type: eventConstants.ADD_BANNER_IMAGE_REQUEST } }
  function success(addbannerimage) { return { type: eventConstants.ADD_BANNER_IMAGE_SUCCESS, addbannerimage } }
  function failure(error) { return { type: eventConstants.ADD_BANNER_IMAGE_FAILURE, error } }
  function clearToast() { return { type: eventConstants.ADD_BANNER_IMAGE_CLEAR_TOAST } }

}


function getBannerImageList(country) {
  return dispatch => {
    dispatch(request());

    eventService.getBannerImageList(country)
      .then(
        getbannerimagelist => dispatch(success(getbannerimagelist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.BANNER_IMAGE_LIST_REQUEST } }
  function success(getbannerimagelist) { return { type: eventConstants.BANNER_IMAGE_LIST_SUCCESS, getbannerimagelist } }
  function failure(error) { return { type: eventConstants.BANNER_IMAGE_LIST_FAILURE, error } }

}


function productMasterDeleteGroup(data, productGroupName) {
  return dispatch => {
    dispatch(request());

    eventService.productMasterDeleteGroup(data, productGroupName)
      .then(
        deleteproductmasterdelete => dispatch(success(deleteproductmasterdelete)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PRODUCT_MASTER_DELETE_GROUP_REQUEST } }
  function success(deleteproductmasterdelete) { return { type: eventConstants.PRODUCT_MASTER_DELETE_GROUP_SUCCESS, deleteproductmasterdelete } }
  function failure(error) { return { type: eventConstants.PRODUCT_MASTER_DELETE_GROUP_FAILURE, error } }

}

function addConwoodMaster(data) {
  return dispatch => {
    dispatch(request());

   !!data ? eventService.addConwoodMaster(data)
      .then(
        addconwoodmaster => dispatch(success(addconwoodmaster)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.ADD_CONWOOD_MASTER_REQUEST } }
  function success(addconwoodmaster) { return { type: eventConstants.ADD_CONWOOD_MASTER_SUCCESS, addconwoodmaster } }
  function failure(error) { return { type: eventConstants.ADD_CONWOOD_MASTER_FAILURE, error } }
  function clearState() { return { type: eventConstants.ADD_CONWOOD_MASTER_CLEAR_STATE } }

}

function dropdownParentCategory() {
  return dispatch => {
    dispatch(request());

    eventService.dropdownParentCategory()
      .then(
        dropdownparent => dispatch(success(dropdownparent)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DROPDOWN_PARENT_CATEGORY_REQUEST } }
  function success(dropdownparent) { return { type: eventConstants.DROPDOWN_PARENT_CATEGORY_SUCCESS, dropdownparent } }
  function failure(error) { return { type: eventConstants.DROPDOWN_PARENT_CATEGORY_FAILURE, error } }

}


function getConwoodAllCategoryList(level) {
  return dispatch => {
    dispatch(request());

    eventService.getConwoodAllCategoryList(level)
      .then(
        getconwoodcategory => dispatch(success(getconwoodcategory)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CONWOOD_CATEGORY_LIST_REQUEST } }
  function success(getconwoodcategory) { return { type: eventConstants.CONWOOD_CATEGORY_LIST_SUCCESS, getconwoodcategory } }
  function failure(error) { return { type: eventConstants.CONWOOD_CATEGORY_LIST_FAILURE, error } }

}

function deleteCategoryList(data, categoryId) {
  return dispatch => {
    dispatch(request());

    eventService.deleteCategoryList(data, categoryId)
      .then(
        deletecategorylist => dispatch(success(deletecategorylist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_CATEGORY_LIST_REQUEST } }
  function success(deletecategorylist) { return { type: eventConstants.DELETE_CATEGORY_LIST_SUCCESS, deletecategorylist } }
  function failure(error) { return { type: eventConstants.DELETE_CATEGORY_LIST_FAILURE, error } }

}

function editConwoodList(cateId, endDate, startDate) {
  return dispatch => {
    dispatch(request());

    eventService.editConwoodList(cateId, endDate, startDate)
      .then(
        editconwoodlist => dispatch(success(editconwoodlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.EDIT_CONWOOD_LIST_REQUEST } }
  function success(editconwoodlist) { return { type: eventConstants.EDIT_CONWOOD_LIST_SUCCESS, editconwoodlist } }
  function failure(error) { return { type: eventConstants.EDIT_CONWOOD_LIST_FAILURE, error } }

}


function UploadProductGroup(upload) {
  return dispatch => {
    dispatch(request());

    eventService.UploadProductGroup(upload)
      .then(
        uploadproductgroup => dispatch(success(uploadproductgroup)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPLOAD_PRODUCT_GROUP_REQUEST } }
  function success(uploadproductgroup) { return { type: eventConstants.UPLOAD_PRODUCT_GROUP_SUCCESS, uploadproductgroup } }
  function failure(error) { return { type: eventConstants.UPLOAD_PRODUCT_GROUP_FAILURE, error } }

}


function uploadSoldToManagement(upload) {
  return dispatch => {
    dispatch(request());

    !!upload ? (eventService.uploadSoldToManagement(upload)
      .then(
        uploadsoldto => dispatch(success(uploadsoldto)),
        error => dispatch(failure(error.toString()))
      )) : (
      dispatch(clearToast())
    )


  };
  function request() { return { type: eventConstants.UPLOAD_SOLDTO_MANAGEMENT_REQUEST } }
  function success(uploadsoldto) { return { type: eventConstants.UPLOAD_SOLDTO_MANAGEMENT_SUCCESS, uploadsoldto } }
  function failure(error) { return { type: eventConstants.UPLOAD_SOLDTO_MANAGEMENT_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPLOAD_SOLDTO_MANAGEMENT_CLEAR_TOAST } }

}


function updateContactList(data, mobile, upload) {
  return (dispatch) => {
    dispatch(request());

    (!!data || !!mobile || !!upload) ? eventService.updateContactList(data, mobile, upload).then(
      (updatecontactlist) => dispatch(success(updatecontactlist)),
      // (error) => dispatch(failure(error.toString()))
    ) : dispatch(clearState());
  };
  function request() {
    return { type: eventConstants.UPDATE_ACCOUNT_LIST_REQUEST };
  }
  function success(updatecontactlist) {
    return { type: eventConstants.UPDATE_ACCOUNT_LIST_SUCCESS, updatecontactlist };
  }
  function failure(error) {
    return { type: eventConstants.UPDATE_ACCOUNT_LIST_FAILURE, error };
  }

  function clearState() {
    return { type: eventConstants.UPDATE_ACCOUNT_LIST_CLEAR };
  }
}

function contactUserId() {
  return (dispatch) => {
    dispatch(request());
    dispatch(success())
  };

  function request(contactuserid) {
    return { type: eventConstants.CONTACT_USERID_REQUEST, contactuserid };
  }
  function success(contactuserid) {
    return { type: eventConstants.CONTACT_USERID_SUCCESS, contactuserid };
  }
  function failure(error) {
    return { type: eventConstants.CONTACT_USERID_FAILURE, error };

  }
}


function UpdatecontactToggle(UpdateData) {
  return dispatch => {
    dispatch(request());

    eventService.UpdatecontactToggle(UpdateData)
      .then(
        updatecontacttoggle => dispatch(success(updatecontacttoggle)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_CONTACT_TOGGLE_REQUEST } }
  function success(updatecontacttoggle) { return { type: eventConstants.UPDATE_CONTACT_TOGGLE_SUCCESS, updatecontacttoggle } }
  function failure(error) { return { type: eventConstants.UPDATE_CONTACT_TOGGLE_FAILURE, error } }

}


function DownloadSoldTo() {
  return dispatch => {
    dispatch(request());

    eventService.DownloadSoldTo()
      .then(
        downloadsoldto => dispatch(success(downloadsoldto)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_SOLDTO_REQUEST } }
  function success(downloadsoldto) { return { type: eventConstants.DOWNLOAD_SOLDTO_SUCCESS, downloadsoldto } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_SOLDTO_FAILURE, error } }

}

function DownloadContact() {
  return dispatch => {
    dispatch(request());

    eventService.DownloadContact()
      .then(
        DownloadContact => dispatch(success(DownloadContact)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_CONTACT_REQUEST } }
  function success(DownloadContact) { return { type: eventConstants.DOWNLOAD_CONTACT_SUCCESS, DownloadContact } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_CONTACT_FAILURE, error } }

}




function deleteBannerList(Id) {
  return dispatch => {
    dispatch(request());

    !!Id ?
      eventService.deleteBannerList(Id)
        .then(
          deletebannerlist => dispatch(success(deletebannerlist)),
          error => dispatch(failure(error.toString()))
        ) : dispatch(cleanToast());
  };

  function request() { return { type: eventConstants.DELETE_BANNER_LIST_REQUEST } }
  function success(deletebannerlist) { return { type: eventConstants.DELETE_BANNER_LIST_SUCCESS, deletebannerlist } }
  function failure(error) { return { type: eventConstants.DELETE_BANNER_LIST_FAILURE, error } }
  function cleanToast() { return { type: eventConstants.DELETE_BANNER_CLEAN_TOAST } }

}


function editBannerList(requestData) {
  return dispatch => {
    dispatch(request());

    requestData ?
      eventService.editBannerList(requestData)
        .then(
          editbannerlist => dispatch(success(editbannerlist)),
          error => dispatch(failure(error.toString()))
        ) : dispatch(clearToast())
  };

  function request() { return { type: eventConstants.EDIT_BANNER_LIST_REQUEST } }
  function success(editbannerlist) { return { type: eventConstants.EDIT_BANNER_LIST_SUCCESS, editbannerlist } }
  function failure(error) { return { type: eventConstants.EDIT_BANNER_LIST_FAILURE, error } }
  function clearToast() { return { type: eventConstants.EDIT_BANNER_LIST_CLEAR_TOAST } }

}

function getDashboardImage(id) {
  return dispatch => {
    dispatch(request());

    eventService.getDashboardImage(id)
      .then(
        dashboardImage => dispatch(success(dashboardImage)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: eventConstants.EDIT_DASHBOARD_IMAGE_REQUEST } }
  function success(dashboardImage) { return { type: eventConstants.EDIT_DASHBOARD_IMAGE_SUCCESS, dashboardImage } }
  function failure(error) { return { type: eventConstants.EDIT_DASHBOARD_IMAGE_FAILURE, error } }
}


function downloadProductGroup(upload) {
  return dispatch => {
    dispatch(request());

    eventService.downloadProductGroup(upload)
      .then(
        downloadproductgroup => dispatch(success(downloadproductgroup)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_PRODUCT_GROUP_REQUEST } }
  function success(downloadproductgroup) { return { type: eventConstants.DOWNLOAD_PRODUCT_GROUP_SUCCESS, downloadproductgroup } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_PRODUCT_GROUP_FAILURE, error } }

}
function UploadContact(upload) {
  return dispatch => {
    dispatch(request());

    !!upload ?
      eventService.UploadContact(upload)
        .then(
          uploadContact => dispatch(success(uploadContact)),
          error => dispatch(failure(error.toString()))
        ) : dispatch(clearToast())
  };
  function request() { return { type: eventConstants.UPLOAD_CONTACT_REQUEST } }
  function success(uploadContact) { return { type: eventConstants.UPLOAD_CONTACT_SUCCESS, uploadContact } }
  function failure(error) { return { type: eventConstants.UPLOAD_CONTACT_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPLOAD_CONTACT_CLEAR_TOAST } }

}

function DownloadInseePrivilege() {
  return dispatch => {
    dispatch(request());

    eventService.DownloadInseePrivilege()
      .then(
        downloadinsee => dispatch(success(downloadinsee)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_INSEE_PRIVILEGE_REQUEST } }
  function success(downloadinsee) { return { type: eventConstants.DOWNLOAD_INSEE_PRIVILEGE_SUCCESS, downloadinsee } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_INSEE_PRIVILEGE_FAILURE, error } }

}

function DownloadCustomerTier() {
  return dispatch => {
    dispatch(request());

    eventService.DownloadCustomerTier()
      .then(
        downloadcustomertier => dispatch(success(downloadcustomertier)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_CUSTOMER_TIER_REQUEST } }
  function success(downloadcustomertier) { return { type: eventConstants.DOWNLOAD_CUSTOMER_TIER_SUCCESS, downloadcustomertier } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_CUSTOMER_TIER_FAILURE, error } }

}

function ShipToSearch(accountnumber, search) {
  return dispatch => {
    dispatch(request());

    eventService.ShipToSearch(accountnumber, search)
      .then(
        shiptosearch => dispatch(success(shiptosearch)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SHIP_TO_SEARCH_REQUEST } }
  function success(shiptosearch) { return { type: eventConstants.SHIP_TO_SEARCH_SUCCESS, shiptosearch } }
  function failure(error) { return { type: eventConstants.SHIP_TO_SEARCH_FAILURE, error } }

}

function ContractListBySearchValue(accountnumber, searchKey) {
  return dispatch => {
    dispatch(request());

    eventService.ContractListBySearchValue(accountnumber, searchKey)
      .then(
        contractList => dispatch(success(contractList)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CONTRACT_LIST_SEARCH_REQUEST } }
  function success(contractList) { return { type: eventConstants.CONTRACT_LIST_SEARCH_SUCCESS, contractList } }
  function failure(error) { return { type: eventConstants.CONTRACT_LIST_SEARCH_FAILURE, error } }
}

function TruckMasterSearch(accountNumber, endIndex, searchText, startIndex) {
  return dispatch => {
    dispatch(request());

    eventService.TruckMasterSearch(accountNumber, endIndex, searchText, startIndex)
      .then(
        truckmastersearch => dispatch(success(truckmastersearch)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.TRUCK_MASTER_SEARCH_REQUEST } }
  function success(truckmastersearch) { return { type: eventConstants.TRUCK_MASTER_SEARCH_SUCCESS, truckmastersearch } }
  function failure(error) { return { type: eventConstants.TRUCK_MASTER_SEARCH_FAILURE, error } }

}


function SubDealerSearch(accountNumber, endIndex, searchText, startIndex) {
  return dispatch => {
    dispatch(request());

    eventService.SubDealerSearch(accountNumber, endIndex, searchText, startIndex)
      .then(
        subdealersearch => dispatch(success(subdealersearch)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SUB_DEALER_SEARCH_REQUEST } }
  function success(subdealersearch) { return { type: eventConstants.SUB_DEALER_SEARCH_SUCCESS, subdealersearch } }
  function failure(error) { return { type: eventConstants.SUB_DEALER__SEARCH_FAILURE, error } }

}



function ContactListBySearchValue(accountnumber, searchKey) {
  return dispatch => {
    dispatch(request());

    eventService.ContactListBySearchValue(accountnumber, searchKey)
      .then(
        contactList => dispatch(success(contactList)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CONTACT_LIST_SEARCH_REQUEST } }
  function success(contactList) { return { type: eventConstants.CONTACT_LIST_SEARCH_SUCCESS, contactList } }
  function failure(error) { return { type: eventConstants.CONTACT_LIST_SEARCH_FAILURE, error } }
}

function DownloadContactDetails() {
  return dispatch => {
    dispatch(request());

    eventService.DownloadContactDetails()
      .then(
        contactDetails => dispatch(success(contactDetails)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_CONTACT_DETAILS_REQUEST } }
  function success(contactDetails) { return { type: eventConstants.DOWNLOAD_CONTACT_DETAILS_SUCCESS, contactDetails } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_CONTACT_DETAILS_FAILURE, error } }
}

function resetAddActionCategoryReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_ACTION_CATEGORY_MASTER_RESET};
  }
}

function resetAddActionStatusReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_ACTION_STATUS_MASTER_RESET};
  }
}

function resetAddAreaTypeReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_AREA_TYPE_MASTER_RESET};
  }
}

function resetAddCaseOriginReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_CASE_ORIGIN_MASTER_RESET};
  }
}

function resetAddCompatitorProductReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_COMPATITOR_PRODUCT_MASTER_RESET};
  }
}

function resetAddConstructionPhaseReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_CONSTRUCTION_PHASE_MASTER_RESET};
  }
}

function resetAddDeliveryModeReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_DELIVERY_MODE_MASTER_RESET};
  }
}

function resetAddDepartmentReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_DEPARTMENT_MASTER_RESET};
  }
}

function resetAddDistributionAreaReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_DISTRIBUTION_AREA_MASTER_RESET};
  }
}

function resetAddDistributionChannelReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_DISTRIBUTION_CHANNEL_RESET};
  }
}

function resetAddFunctionalRoleReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_FUNCTIONAL_ROLE_MASTER_RESET};
  }
}

function resetAddLeadSourceReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_LEAD_SOURCE_MASTER_RESET};
  }
}
function resetAddLeadStageReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_LEAD_STAGE_MASTER_RESET};
  }
}

function resetAddMarketIntelligenceReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_MARKET_INTELLIGENCE_MASTER_RESET};
  }
}

function resetAddPackageTypeReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_PACKAGE_TYPE_MASTER_RESET};
  }
}

function resetAddPreferredTruckTypesReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_PREFERRED_TRUCK_TYPES_MASTER_RESET};
  }
}

function resetAddPriceTypeReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_PRICE_TYPE_RESET};
  }
}

function deleteProductGroupList(data) {
  return dispatch => {
    dispatch(request());

    eventService.deleteProductGroupList(data)
      .then(
        deleteproductgrouplist => dispatch(success(deleteproductgrouplist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_PRODUCT_GROUP_LIST_REQUEST } }
  function success(deleteproductgrouplist) { return { type: eventConstants.DELETE_PRODUCT_GROUP_LIST_SUCCESS, deleteproductgrouplist } }
  function failure(error) { return { type: eventConstants.DELETE_PRODUCT_GROUP_LIST_FAILURE, error } }
}


function updateCustomerTier(data, id) {
  return dispatch => {
    dispatch(request());

    eventService.updateCustomerTier(data, id)
      .then(
        updatecustomertier => dispatch(success(updatecustomertier)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_CUSTOMER_TIER_REQUEST } }
  function success(updatecustomertier) { return { type: eventConstants.UPDATE_CUSTOMER_TIER_SUCCESS, updatecustomertier } }
  function failure(error) { return { type: eventConstants.UPDATE_CUSTOMER_TIER_FAILURE, error } }
}

function getautoCustomerTier(id) {
  return dispatch => {
    dispatch(request());

    eventService.getautoCustomerTier(id)
      .then(
        getautocustomertier => dispatch(success(getautocustomertier)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CUSTOMER_AUTO_TIER_REQUEST } }
  function success(getautocustomertier) { return { type: eventConstants.CUSTOMER_AUTO_TIER_SUCCESS, getautocustomertier } }
  function failure(error) { return { type: eventConstants.CUSTOMER_AUTO_TIER_FAILURE, error } }
}


function updateInseePrivilage(data, id) {
  return dispatch => {
    dispatch(request());

    eventService.updateInseePrivilage(data, id)
      .then(
        updateinseeprivilege => dispatch(success(updateinseeprivilege)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_INSEE_PRIVILEGE_REQUEST } }
  function success(updateinseeprivilege) { return { type: eventConstants.UPDATE_INSEE_PRIVILEGE_SUCCESS, updateinseeprivilege } }
  function failure(error) { return { type: eventConstants.UPDATE_INSEE_PRIVILEGE_FAILURE, error } }
}

function getautoInseePrivilege(id) {
  return dispatch => {
    dispatch(request());

    eventService.getautoInseePrivilege(id)
      .then(
        getautoinseeprivilege => dispatch(success(getautoinseeprivilege)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.INSEE_AUTO_PRIVILEGE_REQUEST } }
  function success(getautoinseeprivilege) { return { type: eventConstants.INSEE_AUTO_PRIVILEGE_SUCCESS, getautoinseeprivilege } }
  function failure(error) { return { type: eventConstants.INSEE_AUTO_PRIVILEGE_FAILURE, error } }
}



function resetProductProduceReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_PRODUCT_PRODUCE_MASTER_RESET};
  }
}

function resetProductTypeReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_PRODUCT_TYPE_MASTER_RESET};
  }
}

function resetProjectTypeReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_PROJECT_TYPE_MASTER_RESET};
  }
}


function resetAddPromotionTypeReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_PROMOTION_TYPE_MASTER_RESET};
  }
}

function resetAddRetailerPaymentReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_RETAILER_PAYMENT_MASTER_RESET};
  }
}

function resetAddSalesDistrictReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_SALES_DISTRICT_MASTER_RESET};
  }
}

function resetAddSalesOrganizationReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_SALES_ORGANIZATION_MASTER_RESET};
  }
}

function resetAddShippingTypeReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_SHIPPING_TYPE_RESET};
  }
}

function resetAddSpecialProcessingReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_SPECIAL_PROCESSING_RESET};
  }
}

function resetAddSpecialProjectReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_SPECIAL_PROJECT_MASTER_RESET};
  }
}

function resetAddStrategyTypeReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_STRATEGY_TYPE_MASTER_RESET};
  }
}

function resetAddTransporterReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_TRANSPORTER_MASTER_RESET};
  }
}

function resetAddTruckTypeReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_TRUCK_TYPE_MASTER_RESET};
  }
}

function resetAddUnitMasterReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_UNIT_MASTER_RESET};
  }
}

function resetAddUserRoleReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_USER_ROLE_MASTER_RESET};
  }
}

function resetTransportorZoneReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_TRANSPORTOR_ZONE_RESET};
  }
}

function resetAddShippingConditionReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_SHIPPING_CONDITION_RESET};
  }
}
function resetAddPriceBookReducer() {
  return (dispatch) => {
      dispatch(reset());
  };
  function reset() {
      return { type: eventConstants.ADD_PRICE_BOOK_MASTER_RESET};
  }
}



function deleteContactList(userName) {
  return dispatch => {
    dispatch(request());

    eventService.deleteContactList(userName)
      .then(
        deletecontactlist => dispatch(success(deletecontactlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_CONTACT_LIST_REQUEST } }
  function success(deletecontactlist) { return { type: eventConstants.DELETE_CONTACT_LIST_SUCCESS, deletecontactlist } }
  function failure(error) { return { type: eventConstants.DELETE_CONTACT_LIST_FAILURE, error } }
}



function retailerDetailList( soldtonumber, searchValueSoldTo) {
  return dispatch => {
    dispatch(request());

   !!soldtonumber ?  eventService.retailerDetailList(soldtonumber, searchValueSoldTo)
      .then(
        retailerdetaillist => dispatch(success(retailerdetaillist)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.RETAILER_DETAIL_LIST_REQUEST } }
  function success(retailerdetaillist) { return { type: eventConstants.RETAILER_DETAIL_LIST_SUCCESS, retailerdetaillist } }
  function failure(error) { return { type: eventConstants.RETAILER_DETAIL_LIST_FAILURE, error } }
  function clearState() { return { type: eventConstants.RETAILER_DETAIL_LIST_CLEAR_STATE } }

}

function retailerAutoList(id) {
  return dispatch => {
    dispatch(request());

    eventService.retailerAutoList(id)
      .then(
        retailerautolist => dispatch(success(retailerautolist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RETAILER_AUTO_LIST_REQUEST } }
  function success(retailerautolist) { return { type: eventConstants.RETAILER_AUTO_LIST_SUCCESS, retailerautolist } }
  function failure(error) { return { type: eventConstants.RETAILER_AUTO_LIST_FAILURE, error } }

}


function updateRetailerList(data) {
  return dispatch => {
    dispatch(request());

   !!data ? eventService.updateRetailerList(data)
      .then(
        updateretailerlist => dispatch(success(updateretailerlist)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPDATE_RETAILER_LIST_REQUEST } }
  function success(updateretailerlist) { return { type: eventConstants.UPDATE_RETAILER_LIST_SUCCESS, updateretailerlist } }
  function failure(error) { return { type: eventConstants.UPDATE_RETAILER_LIST_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_RETAILER_LIST_CLEAR_TOAST } }

}


function DownloadRetailerExcel(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.DownloadRetailerExcel(countryCode)
      .then(
        downloadretailerexcel => dispatch(success(downloadretailerexcel)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_RETAILER_EXCEL_REQUEST } }
  function success(downloadretailerexcel) { return { type: eventConstants.DOWNLOAD_RETAILER_EXCEL_SUCCESS, downloadretailerexcel } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_RETAILER_EXCEL_FAILURE, error } }
}


function filterProductMaster(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.filterProductMaster(countryCode)
      .then(
        filterproductmaster => dispatch(success(filterproductmaster)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.FILTER_PRODUCT_MASTER_REQUEST } }
  function success(filterproductmaster) { return { type: eventConstants.FILTER_PRODUCT_MASTER_SUCCESS, filterproductmaster } }
  function failure(error) { return { type: eventConstants.FILTER_PRODUCT_MASTER_FAILURE, error } }
}


function downloadRetailerSubDealer() {
  return dispatch => {
    dispatch(request());

    eventService.downloadRetailerSubDealer()
      .then(
        downloadretailersubdealer => dispatch(success(downloadretailersubdealer)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_RETAILER_SUBDEALER_REQUEST } }
  function success(downloadretailersubdealer) { return { type: eventConstants.DOWNLOAD_RETAILER_SUBDEALER_SUCCESS, downloadretailersubdealer } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_RETAILER_SUBDEALER_FAILURE, error } }
}


function resendEmailLoginCredential( id) {
  return dispatch => {
    dispatch(request());

    eventService.resendEmailLoginCredential(id)
      .then(
        resendlogincredential => dispatch(success(resendlogincredential)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RESEND_LOGIN_CREDENTIAL_REQUEST } }
  function success(resendlogincredential) { return { type: eventConstants.RESEND_LOGIN_CREDENTIAL_SUCCESS, resendlogincredential } }
  function failure(error) { return { type: eventConstants.RESEND_LOGIN_CREDENTIAL_FAILURE, error } }
}



function assignProductItemId(orderID) {
  return (dispatch) => {
    dispatch(request());
    !!orderID && orderID.length > 0 ? dispatch(success(orderID)) : dispatch(ClearState())
  };

  function request(assignproductitemid) {
    return { type: eventConstants.ASSIGN_PRODUCT_ITEM_ID_REQUEST, assignproductitemid };
  }
  function success(assignproductitemid) {
    return { type: eventConstants.ASSIGN_PRODUCT_ITEM_ID_SUCCESS, assignproductitemid };
  }
  function failure(error) {
    return { type: eventConstants.ASSIGN_PRODUCT_ITEM_ID_FAILURE, error };

  }
  function ClearState() {
    return { type: eventConstants.ASSIGN_PRODUCT_ITEM_ID_CLEAR_STATE };
  }
}


function assignProductAddDate(data) {
  return dispatch => {
    dispatch(request());

   !!data ? eventService.assignProductAddDate(data)
      .then(
        assignproductadddate => dispatch(success(assignproductadddate)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(ClearState())
  };
  function request() { return { type: eventConstants.ASSIGN_PRODUCT_ADD_DATE_REQUEST } }
  function success(assignproductadddate) { return { type: eventConstants.ASSIGN_PRODUCT_ADD_DATE_SUCCESS, assignproductadddate } }
  function failure(error) { return { type: eventConstants.ASSIGN_PRODUCT_ADD_DATE_FAILURE, error } }
  function ClearState() { return { type: eventConstants.ASSIGN_PRODUCT_ADD_DATE_CLEAR } }
}


function assignProductUpdateDate(data) {
  return dispatch => {
    dispatch(request());

    !!data ? eventService.assignProductUpdateDate(data)
      .then(
        assignproductupdatedate => dispatch(success(assignproductupdatedate)),
        error => dispatch(failure(error.toString()))
      ):dispatch(clearToast());
  };
  function request() { return { type: eventConstants.ASSIGN_PRODUCT_UPDATE_DATE_REQUEST } }
  function success(assignproductupdatedate) { return { type: eventConstants.ASSIGN_PRODUCT_UPDATE_DATE_SUCCESS, assignproductupdatedate } }
  function failure(error) { return { type: eventConstants.ASSIGN_PRODUCT_UPDATE_DATE_FAILURE, error } }
  function clearToast() { return { type: eventConstants.ASSIGN_PRODUCT_UPDATE_DATE_CLEAR_TOAST } }
}

function getdateAssignbyId(productId,productGroupid) {
  return dispatch => {
    dispatch(request());

    eventService.getdateAssignbyId(productId,productGroupid)
      .then(
        getassignbyid => dispatch(success(getassignbyid)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_ASSIGN_PRODUCT_DATE_REQUEST } }
  function success(getassignbyid) { return { type: eventConstants.GET_ASSIGN_PRODUCT_DATE_SUCCESS, getassignbyid } }
  function failure(error) { return { type: eventConstants.GET_ASSIGN_PRODUCT_DATE_FAILURE, error } }
}



function assignSoldToProductUpdateDate(data) {
  return dispatch => {
    dispatch(request());

    eventService.assignSoldToProductUpdateDate(data)
      .then(
        assignsoldtoproductupdatedate => dispatch(success(assignsoldtoproductupdatedate)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ASSIGN_SOLDTO_PRODUCT_UPDATE_DATE_REQUEST } }
  function success(assignsoldtoproductupdatedate) { return { type: eventConstants.ASSIGN_SOLDTO_PRODUCT_UPDATE_DATE_SUCCESS, assignsoldtoproductupdatedate } }
  function failure(error) { return { type: eventConstants.ASSIGN_SOLDTO_PRODUCT_UPDATE_DATE_FAILURE, error } }
}


function getdateAssignSoldTobyId(productId,productGroupid) {
  return dispatch => {
    dispatch(request());

    eventService.getdateAssignSoldTobyId(productId,productGroupid)
      .then(
        getassignsoldtobyid => dispatch(success(getassignsoldtobyid)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_ASSIGN_SOLD_TO_DATE_REQUEST } }
  function success(getassignsoldtobyid) { return { type: eventConstants.GET_ASSIGN_SOLD_TO_DATE_SUCCESS, getassignsoldtobyid } }
  function failure(error) { return { type: eventConstants.GET_ASSIGN_SOLD_TO_DATE_FAILURE, error } }
}


function addProductDateUnderSoldTo(data) {
  return dispatch => {
    dispatch(request());

    eventService.addProductDateUnderSoldTo(data)
      .then(
        addproductdateundersoldto => dispatch(success(addproductdateundersoldto)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADD_PRODUCT_DATE_UNDER_SOLDTO_REQUEST } }
  function success(addproductdateundersoldto) { return { type: eventConstants.ADD_PRODUCT_DATE_UNDER_SOLDTO_SUCCESS, addproductdateundersoldto } }
  function failure(error) { return { type: eventConstants.ADD_PRODUCT_DATE_UNDER_SOLDTO_FAILURE, error } }
}


function SoldToAssignProduct(myid) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(myid))
  };

  function request(soldtoassignproduct) {
    return { type: eventConstants.SOLDTO_ASSIGN_PRODUCT_REQUEST, soldtoassignproduct };
  }
  function success(soldtoassignproduct) {
    return { type: eventConstants.SOLDTO_ASSIGN_PRODUCT_SUCCESS, soldtoassignproduct };
  }
  function failure(error) {
    return { type: eventConstants.SOLDTO_ASSIGN_PRODUCT_FAILURE, error };

  }
}

function updateProductDateUnderSoldTo(data) {
  return dispatch => {
    dispatch(request());

    eventService.updateProductDateUnderSoldTo(data)
      .then(
        updateproductdateundersoldto => dispatch(success(updateproductdateundersoldto)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_PRODUCT_DATE_UNDER_SOLDTO_REQUEST } }
  function success(updateproductdateundersoldto) { return { type: eventConstants.UPDATE_PRODUCT_DATE_UNDER_SOLDTO_SUCCESS, updateproductdateundersoldto } }
  function failure(error) { return { type: eventConstants.UPDATE_PRODUCT_DATE_UNDER_SOLDTO_FAILURE, error } }
}


function getAssignedProductListForSoldTo(productGroupId,soldToNumber) {
  return dispatch => {
    dispatch(request());

    eventService.getAssignedProductListForSoldTo(productGroupId,soldToNumber)
      .then(
        getassignproductlistforsoldto => dispatch(success(getassignproductlistforsoldto)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_ASSIGN_PRODUCT_FOR_SOLDTO_REQUEST } }
  function success(getassignproductlistforsoldto) { return { type: eventConstants.GET_ASSIGN_PRODUCT_FOR_SOLDTO_SUCCESS, getassignproductlistforsoldto } }
  function failure(error) { return { type: eventConstants.GET_ASSIGN_PRODUCT_FOR_SOLDTO_FAILURE, error } }
}


function deleteProductDateInSoldTo(data) {
  console.log("undersoldto",data);
  return dispatch => {
    dispatch(request());

    {!!data && eventService.deleteProductDateInSoldTo(data.productGroupId,data.productId,data.accountName)
      .then(
        deleteproductdateinsoldto => dispatch(success(deleteproductdateinsoldto)),
        error => dispatch(failure(error.toString()))
      );
    }
  };
  function request() { return { type: eventConstants.DELETE_PRODUCT_DATE_SOLDTO_REQUEST } }
  function success(deleteproductdateinsoldto) { return { type: eventConstants.DELETE_PRODUCT_DATE_SOLDTO_SUCCESS, deleteproductdateinsoldto } }
  function failure(error) { return { type: eventConstants.DELETE_PRODUCT_DATE_SOLDTO_FAILURE, error } }
}


function getAssignedProductGroupByIdInSoldTo(productGroupId,productId,soldToNumber) {
  return dispatch => {
    dispatch(request());

    eventService.getAssignedProductGroupByIdInSoldTo(productGroupId,productId,soldToNumber)
      .then(
        assignbyproductinsoldto => dispatch(success(assignbyproductinsoldto)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ASSIGNBY_PRODUCT_INSOLDTO_REQUEST } }
  function success(assignbyproductinsoldto) { return { type: eventConstants.ASSIGNBY_PRODUCT_INSOLDTO_SUCCESS, assignbyproductinsoldto } }
  function failure(error) { return { type: eventConstants.ASSIGNBY_PRODUCT_INSOLDTO_FAILURE, error } }
}


function uploadRetailerSubDealerExcel(country,upload) {
  return dispatch => {
    dispatch(request());

    eventService.uploadRetailerSubDealerExcel(country,upload)
      .then(
        uploadretailersubdealerexcel => dispatch(success(uploadretailersubdealerexcel)),
        error => dispatch(failure(error && error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPLOAD_RETAILER_SUBDEALER_EXCEL_REQUEST } }
  function success(uploadretailersubdealerexcel) { return { type: eventConstants.UPLOAD_RETAILER_SUBDEALER_EXCEL_SUCCESS, uploadretailersubdealerexcel } }
  function failure(error) { return { type: eventConstants.UPLOAD_RETAILER_SUBDEALER_EXCEL_FAILURE, error } }
}


function uploadInseeVolume(year,upload) {
  return dispatch => {
    dispatch(request());

   (!!year, !!upload) ? eventService.uploadInseeVolume(year,upload)
      .then(
        uploadinseevolume => dispatch(success(uploadinseevolume)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPLOAD_INSEE_VOLUME_EXCEL_REQUEST } }
  function success(uploadinseevolume) { return { type: eventConstants.UPLOAD_INSEE_VOLUME_EXCEL_SUCCESS, uploadinseevolume } }
  function failure(error) { return { type: eventConstants.UPLOAD_INSEE_VOLUME_EXCEL_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPLOAD_INSEE_VOLUME_EXCEL_CLEARTOAST } }
}

function uploadLeadInseeVolume(year,upload) {
  return dispatch => {
    dispatch(request());

    (!!year,!!upload) ? eventService.uploadLeadInseeVolume(year,upload)
      .then(
        uploadleadinseevolume => dispatch(success(uploadleadinseevolume)),
        error => dispatch(failure(error.toString()))
      ): dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPLOAD_LEAD_INSEE_VOLUME_REQUEST } }
  function success(uploadleadinseevolume) { return { type: eventConstants.UPLOAD_LEAD_INSEE_VOLUME_SUCCESS, uploadleadinseevolume } }
  function failure(error) { return { type: eventConstants.UPLOAD_LEAD_INSEE_VOLUME_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPLOAD_LEAD_INSEE_VOLUME_CLEAR_TOAST } }
}

function uploadForcastInseeVolume(year,upload) {
  return dispatch => {
    dispatch(request());

    (!!year,!!upload) ? eventService.uploadForcastInseeVolume(year,upload)
      .then(
        uploadforcastinseevolume => dispatch(success(uploadforcastinseevolume)),
        error => dispatch(failure(error.toString()))
      ): dispatch(clearToast());;
  };
  function request() { return { type: eventConstants.UPLOAD_FORCAST_INSEE_VOLUME_REQUEST } }
  function success(uploadforcastinseevolume) { return { type: eventConstants.UPLOAD_FORCAST_INSEE_VOLUME_SUCCESS, uploadforcastinseevolume } }
  function failure(error) { return { type: eventConstants.UPLOAD_FORCAST_INSEE_VOLUME_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPLOAD_FORCAST_INSEE_VOLUME_CLEAR_TOAST } }
}


function conwoodAutofillCategory(categoryId) {
  return dispatch => {
    dispatch(request());

    eventService.conwoodAutofillCategory(categoryId)
      .then(
        conwoodautofillcategory => dispatch(success(conwoodautofillcategory)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CONWOOD_AUTOFILL_CATEGORY_REQUEST } }
  function success(conwoodautofillcategory) { return { type: eventConstants.CONWOOD_AUTOFILL_CATEGORY_SUCCESS, conwoodautofillcategory } }
  function failure(error) { return { type: eventConstants.CONWOOD_AUTOFILL_CATEGORY_FAILURE, error } }
}


function getTotalInseeVolumeList(type) {
  return dispatch => {
    dispatch(request());

    eventService.getTotalInseeVolumeList(type)
      .then(
        gettotalinseevolumelist => dispatch(success(gettotalinseevolumelist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.TOTAL_INSEE_VOLUME_LIST_REQUEST } }
  function success(gettotalinseevolumelist) { return { type: eventConstants.TOTAL_INSEE_VOLUME_LIST_SUCCESS, gettotalinseevolumelist } }
  function failure(error) { return { type: eventConstants.TOTAL_INSEE_VOLUME_LIST_FAILURE, error } }
}



function updateConwoodCategory(data, id) {
  return dispatch => {
    dispatch(request());

    eventService.updateConwoodCategory(data, id)
      .then(
        updateconwoodcategory => dispatch(success(updateconwoodcategory)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_CONWOOD_CATEGORY_REQUEST } }
  function success(updateconwoodcategory) { return { type: eventConstants.UPDATE_CONWOOD_CATEGORY_SUCCESS, updateconwoodcategory } }
  function failure(error) { return { type: eventConstants.UPDATE_CONWOOD_CATEGORY_FAILURE, error } }
}


function SoldtoAllEmail(id) {
  return dispatch => {
    dispatch(request());

    !!id ? eventService.SoldtoAllEmail(id)
      .then(
        soldtoallemail => dispatch(success(soldtoallemail)),
        error => dispatch(failure(error.toString()))
      ): dispatch(clearToast());
  };
  function request() { return { type: eventConstants.SOLD_TO_ALL_EMAIL_REQUEST } }
  function success(soldtoallemail) { return { type: eventConstants.SOLD_TO_ALL_EMAIL_SUCCESS, soldtoallemail } }
  function failure(error) { return { type: eventConstants.SOLD_TO_ALL_EMAIL_FAILURE, error } }
  function clearToast() { return { type: eventConstants.SOLD_TO_ALL_EMAIL_CLEAR_TOAST } }
}


function downloadInseeVolumeTemplate(id) {
  return dispatch => {
    dispatch(request());

    eventService.downloadInseeVolumeTemplate(id)
      .then(
        inseevolumetemplate => dispatch(success(inseevolumetemplate)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_INSEE_VOLUME_TEMPLATE_REQUEST } }
  function success(inseevolumetemplate) { return { type: eventConstants.DOWNLOAD_INSEE_VOLUME_TEMPLATE_SUCCESS, inseevolumetemplate } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_INSEE_VOLUME_TEMPLATE_FAILURE, error } }
}

function downloadCustomerGroupSoldTo() {
  return dispatch => {
    dispatch(request());

    eventService.downloadCustomerGroupSoldTo()
      .then(
        downloadcustomergroupsoldto => dispatch(success(downloadcustomergroupsoldto)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_CUSTOMER_GROUP_REQUEST } }
  function success(downloadcustomergroupsoldto) { return { type: eventConstants.DOWNLOAD_CUSTOMER_GROUP_SUCCESS, downloadcustomergroupsoldto } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_CUSTOMER_GROUP_FAILURE, error } }
}


function UpdateTotalInseeVolumeList(data) {
  return dispatch => {
    dispatch(request());

    !!data ? eventService.UpdateTotalInseeVolumeList(data)
      .then(
        updatetotalinseevolume => dispatch(success(updatetotalinseevolume)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPDATE_TOTAL_INSEE_VOLUME_REQUEST } }
  function success(updatetotalinseevolume) { return { type: eventConstants.UPDATE_TOTAL_INSEE_VOLUME_SUCCESS, updatetotalinseevolume } }
  function failure(error) { return { type: eventConstants.UPDATE_TOTAL_INSEE_VOLUME_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_TOTAL_INSEE_VOLUME_CLEAR_TOAST } }
}


function UploadCustomerGroupCode(data) {
  return dispatch => {
    dispatch(request());

    !!data ? eventService.UploadCustomerGroupCode(data)
      .then(
        uploadcustomergroupcode => dispatch(success(uploadcustomergroupcode)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPLOAD_CUSTOMER_GROUP_CODE_REQUEST } }
  function success(uploadcustomergroupcode) { return { type: eventConstants.UPLOAD_CUSTOMER_GROUP_CODE_SUCCESS, uploadcustomergroupcode } }
  function failure(error) { return { type: eventConstants.UPLOAD_CUSTOMER_GROUP_CODE_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPLOAD_CUSTOMER_GROUP_CODE_CLEAR_TOAST } }
}


function SoldToDropdownContry(country, endIndex, searchText) {
  return dispatch => {
    dispatch(request());

    (!!country || !!endIndex || !!searchText) ? eventService.SoldToDropdownContry(country, endIndex, searchText)
      .then(
        soldtodropdowncountry => dispatch(success(soldtodropdowncountry)),
        error => dispatch(failure(error.toString()))
      ) :dispatch(ClearState());
  };
  function request() { return { type: eventConstants.SOLDTO_DROPDOWN_COUNTRY_REQUEST } }
  function success(soldtodropdowncountry) { return { type: eventConstants.SOLDTO_DROPDOWN_COUNTRY_SUCCESS, soldtodropdowncountry } }
  function failure(error) { return { type: eventConstants.SOLDTO_DROPDOWN_COUNTRY_FAILURE, error } }
  function ClearState() { return { type: eventConstants.SOLDTO_DROPDOWN_COUNTRY_CLEAR_STATE } }

}


function sendSMSformSoldTo(userId) {
  return dispatch => {
    dispatch(request());

    !!userId ? eventService.sendSMSformSoldTo(userId)
      .then(
        sendsmsfromsoldto => dispatch(success(sendsmsfromsoldto)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.SEND_SMS_FROM_SOLDTO_REQUEST } }
  function success(sendsmsfromsoldto) { return { type: eventConstants.SEND_SMS_FROM_SOLDTO_SUCCESS, sendsmsfromsoldto } }
  function failure(error) { return { type: eventConstants.SEND_SMS_FROM_SOLDTO_FAILURE, error } }
  function clearToast() { return { type: eventConstants.SEND_SMS_FROM_SOLDTO_CLEAR_TOAST } }
}


function SoldToPdpaForCustomer(data,boolenValue) {
  return dispatch => {
    dispatch(request());

    eventService.SoldToPdpaForCustomer(data,boolenValue)
      .then(
        soldtopdpaforcustomer => dispatch(success(soldtopdpaforcustomer)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SOLDTO_PDPA_FOR_CUSTOMER_REQUEST } }
  function success(soldtopdpaforcustomer) { return { type: eventConstants.SOLDTO_PDPA_FOR_CUSTOMER_SUCCESS, soldtopdpaforcustomer } }
  function failure(error) { return { type: eventConstants.SOLDTO_PDPA_FOR_CUSTOMER_FAILURE, error } }

}

function UpdateActionCategory(data) {
  return dispatch => {
    dispatch(request());

    eventService.UpdateActionCategory(data)
      .then(
        updateactioncategory => dispatch(success(updateactioncategory)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_ACTION_CATEGORY_REQUEST } }
  function success(updateactioncategory) { return { type: eventConstants.UPDATE_ACTION_CATEGORY_SUCCESS, updateactioncategory } }
  function failure(error) { return { type: eventConstants.UPDATE_ACTION_CATEGORY_FAILURE, error } }

}

function DeleteActionCategory(data) {
  return dispatch => {
    dispatch(request());

    eventService.DeleteActionCategory(data)
      .then(
        deleteactioncategory => dispatch(success(deleteactioncategory)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_ACTION_CATEGORY_REQUEST } }
  function success(deleteactioncategory) { return { type: eventConstants.DELETE_ACTION_CATEGORY_SUCCESS, deleteactioncategory } }
  function failure(error) { return { type: eventConstants.DELETE_ACTION_CATEGORY_FAILURE, error } }

}



function UpdateActionStatus(data) {
  return dispatch => {
    dispatch(request());

    eventService.UpdateActionStatus(data)
      .then(
        updateactionstatus => dispatch(success(updateactionstatus)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_ACTION_STATUS_REQUEST } }
  function success(updateactionstatus) { return { type: eventConstants.UPDATE_ACTION_STATUS_SUCCESS, updateactionstatus } }
  function failure(error) { return { type: eventConstants.UPDATE_ACTION_STATUS_FAILURE, error } }

}

function DeleteActionStatus(data) {
  return dispatch => {
    dispatch(request());

    eventService.DeleteActionStatus(data)
      .then(
        deleteactionstatus => dispatch(success(deleteactionstatus)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_ACTION_STATUS_REQUEST } }
  function success(deleteactionstatus) { return { type: eventConstants.DELETE_ACTION_STATUS_SUCCESS, deleteactionstatus } }
  function failure(error) { return { type: eventConstants.DELETE_ACTION_STATUS_FAILURE, error } }

}




function UpdateAreaType(country, data) {
  return dispatch => {
    dispatch(request());

    eventService.UpdateAreaType(country, data)
      .then(
        updateareatype => dispatch(success(updateareatype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_AREA_TYPE_REQUEST } }
  function success(updateareatype) { return { type: eventConstants.UPDATE_AREA_TYPE_SUCCESS, updateareatype } }
  function failure(error) { return { type: eventConstants.UPDATE_AREA_TYPE_FAILURE, error } }

}

function DeleteAreaType(dataList) {
  return dispatch => {
    dispatch(request());

    eventService.DeleteAreaType(dataList && dataList.country, dataList && dataList.data )
      .then(
        deleteareatype => dispatch(success(deleteareatype)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_AREA_TYPE_REQUEST } }
  function success(deleteareatype) { return { type: eventConstants.DELETE_AREA_TYPE_SUCCESS, deleteareatype } }
  function failure(error) { return { type: eventConstants.DELETE_AREA_TYPE_FAILURE, error } }

}


function UpdateCaseOrigin(Country,data) {
  return dispatch => {
    dispatch(request());

    (Country || data) ? eventService.UpdateCaseOrigin(Country,data)
      .then(
        updatecaseorigin => dispatch(success(updatecaseorigin)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(ClearState());
  };
  function request() { return { type: eventConstants.UPDATE_CASE_ORIGIN_REQUEST } }
  function success(updatecaseorigin) { return { type: eventConstants.UPDATE_CASE_ORIGIN_SUCCESS, updatecaseorigin } }
  function failure(error) { return { type: eventConstants.UPDATE_CASE_ORIGIN_FAILURE, error } }
  function ClearState() { return { type: eventConstants.UPDATE_CASE_ORIGIN_CLEAR } }

}

function DeleteCaseOrigin(data) {
  console.log("delete case origin",data)
  return dispatch => {
    dispatch(request());

    eventService.DeleteCaseOrigin(data && data.country,data && data.id)
      .then(
        deletecaseorigin => dispatch(success(deletecaseorigin)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_CASE_ORIGIN_REQUEST } }
  function success(deletecaseorigin) { return { type: eventConstants.DELETE_CASE_ORIGIN_SUCCESS, deletecaseorigin } }
  function failure(error) { return { type: eventConstants.DELETE_CASE_ORIGIN_FAILURE, error } }

}






function UpdateCompetitorProduct(dataList) {
  console.log("myCompetitor",dataList);
  return dispatch => {
    dispatch(request());

    eventService.UpdateCompetitorProduct(dataList && dataList.country, dataList && dataList.data)
      .then(
        competitorproduct => dispatch(success(competitorproduct)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_COMPETITOR_PRODUCT_REQUEST } }
  function success(competitorproduct) { return { type: eventConstants.UPDATE_COMPETITOR_PRODUCT_SUCCESS, competitorproduct } }
  function failure(error) { return { type: eventConstants.UPDATE_COMPETITOR_PRODUCT_FAILURE, error } }

}

function DeleteCompetitorProduct(data) {
  console.log("delete compo origin",data)
  return dispatch => {
    dispatch(request());

    eventService.DeleteCompetitorProduct(data && data.country,data && data.competitorProductBrandId)
      .then(
        deletecompetitorproduct => dispatch(success(deletecompetitorproduct)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_COMPETITOR_PRODUCT_REQUEST } }
  function success(deletecompetitorproduct) { return { type: eventConstants.DELETE_COMPETITOR_PRODUCT_SUCCESS, deletecompetitorproduct } }
  function failure(error) { return { type: eventConstants.DELETE_COMPETITOR_PRODUCT_FAILURE, error } }

}


function UpdateConstructionPhase(dataList) {
  console.log("myCompetitor",dataList);
  return dispatch => {
    dispatch(request());

    eventService.UpdateConstructionPhase(dataList && dataList.country, dataList && dataList.data)
      .then(
        updateconstructionphase => dispatch(success(updateconstructionphase)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_CONSTRUCTION_PHASE_REQUEST } }
  function success(updateconstructionphase) { return { type: eventConstants.UPDATE_CONSTRUCTION_PHASE_SUCCESS, updateconstructionphase } }
  function failure(error) { return { type: eventConstants.UPDATE_CONSTRUCTION_PHASE_FAILURE, error } }

}



function DeleteConsttuctionPhase(data) {
  console.log("delete compo origin",data)
  return dispatch => {
    dispatch(request());

    eventService.DeleteConsttuctionPhase(data &&data.country,data && data.constructionPhaseId)
      .then(
        deleteconstructionphase => dispatch(success(deleteconstructionphase)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_CONSTRUCTION_PHASE_REQUEST } }
  function success(deleteconstructionphase) { return { type: eventConstants.DELETE_CONSTRUCTION_PHASE_SUCCESS, deleteconstructionphase } }
  function failure(error) { return { type: eventConstants.DELETE_CONSTRUCTION_PHASE_FAILURE, error } }

}


function UpdateDeliverMode(dataList) {
  console.log("myCompetitor",dataList);
  return dispatch => {
    dispatch(request());

    eventService.UpdateDeliverMode(dataList && dataList.country, dataList && dataList.data)
      .then(
        updatedeliverymode => dispatch(success(updatedeliverymode)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_DELIVERY_MODE_REQUEST } }
  function success(updatedeliverymode) { return { type: eventConstants.UPDATE_DELIVERY_MODE_SUCCESS, updatedeliverymode } }
  function failure(error) { return { type: eventConstants.UPDATE_DELIVERY_MODE_FAILURE, error } }

}



function DeleteDeliveryMode(data) {
  console.log("delete compo origin",data)
  return dispatch => {
    dispatch(request());

    eventService.DeleteDeliveryMode(data &&data.country,data && data.id)
      .then(
        deletedeliverymode => dispatch(success(deletedeliverymode)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_DELIVERY_MODE_REQUEST } }
  function success(deletedeliverymode) { return { type: eventConstants.DELETE_DELIVERY_MODE_SUCCESS, deletedeliverymode } }
  function failure(error) { return { type: eventConstants.DELETE_DELIVERY_MODE_FAILURE, error } }

}

function SoldToSelectWithDivision(soldToNumber) {
  return dispatch => {
    dispatch(request());

    eventService.SoldToSelectWithDivision(soldToNumber)
      .then(
        soldtoselectwithdivision => dispatch(success(soldtoselectwithdivision)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SOLDTO_SELECT_DIVISION_REQUEST } }
  function success(soldtoselectwithdivision) { return { type: eventConstants.SOLDTO_SELECT_DIVISION_SUCCESS, soldtoselectwithdivision } }
  function failure(error) { return { type: eventConstants.SOLDTO_SELECT_DIVISION_FAILURE, error } }

}


function getPrefferedTruckDelivery(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getPrefferedTruckDelivery(countryCode)
      .then(
        prefferedtruckdelivery => dispatch(success(prefferedtruckdelivery)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PREFFERED_TRUCK_DELIVERY_REQUEST } }
  function success(prefferedtruckdelivery) { return { type: eventConstants.PREFFERED_TRUCK_DELIVERY_SUCCESS, prefferedtruckdelivery } }
  function failure(error) { return { type: eventConstants.PREFFERED_TRUCK_DELIVERY_FAILURE, error } }

}


function postPrefferedTruckDelivery(countryCode,data) {
  return dispatch => {
    dispatch(request());

    (!!countryCode || !!data) ? eventService.postPrefferedTruckDelivery(countryCode,data)
      .then(
        addprefferedtruckdelivery => dispatch(success(addprefferedtruckdelivery)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.ADD_PREFFERED_TRUCK_DELIVERY_REQUEST } }
  function success(addprefferedtruckdelivery) { return { type: eventConstants.ADD_PREFFERED_TRUCK_DELIVERY_SUCCESS, addprefferedtruckdelivery } }
  function failure(error) { return { type: eventConstants.ADD_PREFFERED_TRUCK_DELIVERY_FAILURE, error } }
  function clearToast() { return { type: eventConstants.ADD_PREFFERED_TRUCK_DELIVERY_CLEAR_TOAST } }

}

function updatePrefferedTruckDelivery(dataList) {
  return dispatch => {
    dispatch(request());

    !!dataList ? eventService.updatePrefferedTruckDelivery(dataList && dataList.country, dataList && dataList.data)
      .then(
        updateprefferedtruckdelivery => dispatch(success(updateprefferedtruckdelivery)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPDATE_PREFFERED_TRUCK_DELIVERY_REQUEST } }
  function success(updateprefferedtruckdelivery) { return { type: eventConstants.UPDATE_PREFFERED_TRUCK_DELIVERY_SUCCESS, updateprefferedtruckdelivery } }
  function failure(error) { return { type: eventConstants.UPDATE_PREFFERED_TRUCK_DELIVERY_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_PREFFERED_TRUCK_DELIVERY_CLEAR_TOAST } }

}


function uploadPrefferedTruckDelivery(contrycode, upload) {
  return dispatch => {
    dispatch(request());

    eventService.uploadPrefferedTruckDelivery(contrycode, upload)
      .then(
        uploadprefferdtruckdelivery => dispatch(success(uploadprefferdtruckdelivery)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPLOAD_PREFFERED_TRUCK_DELIVERY_REQUEST } }
  function success(uploadprefferdtruckdelivery) { return { type: eventConstants.UPLOAD_PREFFERED_TRUCK_DELIVERY_SUCCESS, uploadprefferdtruckdelivery } }
  function failure(error) { return { type: eventConstants.UPLOAD_PREFFERED_TRUCK_DELIVERY_FAILURE, error } }

}


function deletePrefferedTruckDelivery(dataList) {
  return dispatch => {
    dispatch(request());

    eventService.deletePrefferedTruckDelivery(dataList && dataList.country, dataList && dataList.id)
      .then(
        deleteprefferedtruckdelivery => dispatch(success(deleteprefferedtruckdelivery)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DELETE_PREFFERED_TRUCK_DELIVERY_REQUEST } }
  function success(deleteprefferedtruckdelivery) { return { type: eventConstants.DELETE_PREFFERED_TRUCK_DELIVERY_SUCCESS, deleteprefferedtruckdelivery } }
  function failure(error) { return { type: eventConstants.DELETE_PREFFERED_TRUCK_DELIVERY_FAILURE, error } }

}



function getChooseTransportorZone(countryCode) {
  return dispatch => {
    dispatch(request());

    eventService.getChooseTransportorZone(countryCode)
      .then(
        choosetransportorzone => dispatch(success(choosetransportorzone)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CHOOSE_TRANSPORTOR_ZONE_REQUEST } }
  function success(choosetransportorzone) { return { type: eventConstants.CHOOSE_TRANSPORTOR_ZONE_SUCCESS, choosetransportorzone } }
  function failure(error) { return { type: eventConstants.CHOOSE_TRANSPORTOR_ZONE_FAILURE, error } }

}


function postChooseTransportorZone(countryCode,data) {
  return dispatch => {
    dispatch(request());

    (!!countryCode || !!data) ? eventService.postChooseTransportorZone(countryCode,data)
      .then(
        addchoosetransportorzone => dispatch(success(addchoosetransportorzone)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.ADD_CHOOSE_TRANSPORTOR_ZONE_REQUEST } }
  function success(addchoosetransportorzone) { return { type: eventConstants.ADD_CHOOSE_TRANSPORTOR_ZONE_SUCCESS, addchoosetransportorzone } }
  function failure(error) { return { type: eventConstants.ADD_CHOOSE_TRANSPORTOR_ZONE_FAILURE, error } }
  function clearToast() { return { type: eventConstants.ADD_CHOOSE_TRANSPORTOR_ZONE_CLEAR_TOAST } }
  
}



function uploadChooseTransportorZone(countryCode,data) {
  return dispatch => {
    dispatch(request());

    (!!countryCode || !!data) ? eventService.uploadChooseTransportorZone(countryCode,data)
      .then(
        uploadchoosetransportor => dispatch(success(uploadchoosetransportor)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPLOAD_CHOOSE_TRANSPORTOR_ZONE_REQUEST } }
  function success(uploadchoosetransportor) { return { type: eventConstants.UPLOAD_CHOOSE_TRANSPORTOR_ZONE_SUCCESS, uploadchoosetransportor } }
  function failure(error) { return { type: eventConstants.UPLOAD_CHOOSE_TRANSPORTOR_ZONE_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPLOAD_CHOOSE_TRANSPORTOR_ZONE_CLEAR_TOAST } }

}


function deleteChooseTransportorZone(dataList) {
  return dispatch => {
    dispatch(request());

    !!dataList ? eventService.deleteChooseTransportorZone(dataList && dataList.country, dataList && dataList.id)
      .then(
        deletechoosetransportor => dispatch(success(deletechoosetransportor)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.DELETE_CHOOSE_TRANSPORTOR_ZONE_REQUEST } }
  function success(deletechoosetransportor) { return { type: eventConstants.DELETE_CHOOSE_TRANSPORTOR_ZONE_SUCCESS, deletechoosetransportor } }
  function failure(error) { return { type: eventConstants.DELETE_CHOOSE_TRANSPORTOR_ZONE, error } }
  function clearToast() { return { type: eventConstants.DELETE_CHOOSE_TRANSPORTOR_ZONE_CLEAR_TOAST } }

}


function updateChooseTransportorZone(dataList) {
  return dispatch => {
    dispatch(request());

    !!dataList ? eventService.updateChooseTransportorZone(dataList && dataList.country, dataList && dataList.data)
      .then(
        updatechoosetransportorzone => dispatch(success(updatechoosetransportorzone)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPDATE_CHOOSE_TRANSPORTOR_REQUEST } }
  function success(updatechoosetransportorzone) { return { type: eventConstants.UPDATE_CHOOSE_TRANSPORTOR_SUCCESS, updatechoosetransportorzone } }
  function failure(error) { return { type: eventConstants.UPDATE_CHOOSE_TRANSPORTOR_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_CHOOSE_TRANSPORTOR_CLEAR_TOAST } }

}

function uploadLoyalityCalcRules(countryCode,data) {
  return dispatch => {
    dispatch(request());

    (!!countryCode || !!data) ? eventService.uploadLoyalityCalcRules(countryCode,data)
      .then(
        uploadloyalitycalcrules => dispatch(success(uploadloyalitycalcrules)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPLOAD_LOYALITY_CALC_RULES_REQUEST } }
  function success(uploadloyalitycalcrules) { return { type: eventConstants.UPLOAD_LOYALITY_CALC_RULES_SUCCESS, uploadloyalitycalcrules } }
  function failure(error) { return { type: eventConstants.UPLOAD_LOYALITY_CALC_RULES_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPLOAD_LOYALITY_CALC_RULES_CLEAR_TOAST } }

}


function uploadLoyalityCutOffRules(data) {
  return dispatch => {
    dispatch(request());

    data ? eventService.uploadLoyalityCutOffRules(data)
      .then(
        uploadloyalitycutoffrules => dispatch(success(uploadloyalitycutoffrules)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPLOAD_LOYALITY_CUTOFF_RULES_REQUEST } }
  function success(uploadloyalitycutoffrules) { return { type: eventConstants.UPLOAD_LOYALITY_CUTOFF_RULES_SUCCESS, uploadloyalitycutoffrules } }
  function failure(error) { return { type: eventConstants.UPLOAD_LOYALITY_CUTOFF_RULES_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPLOAD_LOYALITY_CUTOFF_RULES_CLEAR_TOAST } }

}


function uploadAdjustLoyalityAdmin(countryCode,data) {
  return dispatch => {
    dispatch(request());

    (!!countryCode || !!data) ? eventService.uploadAdjustLoyalityAdmin(countryCode,data)
      .then(
        uploadadjustloyalityadmin => dispatch(success(uploadadjustloyalityadmin)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPLOAD_ADJUST_LOYALITY_ADMIN_REQUEST } }
  function success(uploadadjustloyalityadmin) { return { type: eventConstants.UPLOAD_ADJUST_LOYALITY_ADMIN_SUCCESS, uploadadjustloyalityadmin } }
  function failure(error) { return { type: eventConstants.UPLOAD_ADJUST_LOYALITY_ADMIN_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPLOAD_ADJUST_LOYALITY_ADMIN_CLEAR_TOAST } }

}



function getLoyalityCalcRules(country,fromIndex,toIndex) {
  return dispatch => {
    dispatch(request());

    eventService.getLoyalityCalcRules(country,fromIndex,toIndex)
      .then(
        getloyalitycalcrules => dispatch(success(getloyalitycalcrules)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_LOYALITY_CALC_RULES_REQUEST } }
  function success(getloyalitycalcrules) { return { type: eventConstants.GET_LOYALITY_CALC_RULES_SUCCESS, getloyalitycalcrules } }
  function failure(error) { return { type: eventConstants.GET_LOYALITY_CALC_RULES_FAILURE, error } }

}


function getLoyalityCutOffRules(country,startIndex,endIndex) {
  return dispatch => {
    dispatch(request());

    eventService.getLoyalityCutOffRules(country,startIndex,endIndex)
      .then(
        getloyalitycutoffrules => dispatch(success(getloyalitycutoffrules)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_LOYALITY_CUTOFF_RULES_REQUEST } }
  function success(getloyalitycutoffrules) { return { type: eventConstants.GET_LOYALITY_CUTOFF_RULES_SUCCESS, getloyalitycutoffrules } }
  function failure(error) { return { type: eventConstants.GET_LOYALITY_CUTOFF_RULES_FAILURE, error } }

}


function getAdjuctLoyalityAdmin(startIndex,endIndex) {
  return dispatch => {
    dispatch(request());

    eventService.getAdjuctLoyalityAdmin(startIndex,endIndex)
      .then(
        getadjustloyalityadmin => dispatch(success(getadjustloyalityadmin)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_ADJUCT_LOYALITY_ADMIN_REQUEST } }
  function success(getadjustloyalityadmin) { return { type: eventConstants.GET_ADJUCT_LOYALITY_ADMIN_SUCCESS, getadjustloyalityadmin } }
  function failure(error) { return { type: eventConstants.GET_ADJUCT_LOYALITY_ADMIN_FAILURE, error } }

}

function deleteSpecialProjectDelivery(dataList) {
  return dispatch => {
    dispatch(request());

    !!dataList ? eventService.deleteSpecialProjectDelivery(dataList && dataList.country, dataList && dataList.id)
      .then(
        deletespecialProjectdelivery => dispatch(success(deletespecialProjectdelivery)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.DELETE_SPECIAL_PROJECT_DELIVERY_REQUEST } }
  function success(deletespecialProjectdelivery) { return { type: eventConstants.DELETE_SPECIAL_PROJECT_DELIVERY_SUCCESS, deletespecialProjectdelivery } }
  function failure(error) { return { type: eventConstants.DELETE_SPECIAL_PROJECT_DELIVERY_FAILURE, error } }
  function clearToast() { return { type: eventConstants.DELETE_SPECIAL_PROJECT_DELIVERY_CLEAR_TOAST } }

}


function uploadSpecialProjectDelivery(countryCode,data) {
  return dispatch => {
    dispatch(request());

    (!!countryCode || !!data) ? eventService.uploadSpecialProjectDelivery(countryCode,data)
      .then(
        uploadspecialprojectdelivery => dispatch(success(uploadspecialprojectdelivery)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPLOAD_SPECIAL_PROJECT_DELIVERY_REQUEST } }
  function success(uploadspecialprojectdelivery) { return { type: eventConstants.UPLOAD_SPECIAL_PROJECT_DELIVERY_SUCCESS, uploadspecialprojectdelivery } }
  function failure(error) { return { type: eventConstants.UPLOAD_SPECIAL_PROJECT_DELIVERY_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPLOAD_SPECIAL_PROJECT_DELIVERY_CLEAR_TOAST } }
}


function updateSpecialProjectDelivey(dataList) {
  return dispatch => {
    dispatch(request());

    !!dataList ? eventService.updateSpecialProjectDelivey(dataList && dataList.country, dataList && dataList.data)
      .then(
        updatespecialprojectdelivery => dispatch(success(updatespecialprojectdelivery)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPDATE_SPECIAL_PROJECT_DELIVERY_REQUEST } }
  function success(updatespecialprojectdelivery) { return { type: eventConstants.UPDATE_SPECIAL_PROJECT_DELIVERY_SUCCESS, updatespecialprojectdelivery } }
  function failure(error) { return { type: eventConstants.UPDATE_SPECIAL_PROJECT_DELIVERY_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_SPECIAL_PROJECT_DELIVERY_CLEAR_TOAST } }

}


function deleteLoyalityCalcRules(LoyalitycalcList) {
  console.log("LoyalitycalcList++",LoyalitycalcList)
  return dispatch => {
    dispatch(request());

    !!LoyalitycalcList ? eventService.deleteLoyalityCalcRules(LoyalitycalcList && LoyalitycalcList.customerType,LoyalitycalcList && LoyalitycalcList.groupCode, LoyalitycalcList && LoyalitycalcList.materialGroup)
      .then(
        deleteloyalitycalcrules => dispatch(success(deleteloyalitycalcrules)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.DELETE_LOYALITY_CALC_RULES_REQUEST } }
  function success(deleteloyalitycalcrules) { return { type: eventConstants.DELETE_LOYALITY_CALC_RULES_SUCCESS, deleteloyalitycalcrules } }
  function failure(error) { return { type: eventConstants.DELETE_LOYALITY_CALC_RULES_FAILURE, error } }
  function clearToast() { return { type: eventConstants.DELETE_LOYALITY_CALC_RULES_CLEAR_TOAST } }

}


function deleteLoyalityCutOffRules(dataList) {
  return dispatch => {
    dispatch(request());

    !!dataList ? eventService.deleteLoyalityCutOffRules(dataList && dataList.category, dataList && dataList.groupCode)
      .then(
        deleteloyalitycutoffrules => dispatch(success(deleteloyalitycutoffrules)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.DELETE_LOYALITY_CUTOFF_RULES_REQUEST } }
  function success(deleteloyalitycutoffrules) { return { type: eventConstants.DELETE_LOYALITY_CUTOFF_RULES_SUCCESS, deleteloyalitycutoffrules } }
  function failure(error) { return { type: eventConstants.DELETE_LOYALITY_CUTOFF_RULES_FAILURE, error } }
  function clearToast() { return { type: eventConstants.DELETE_LOYALITY_CUTOFF_RULES_CLEAR_TOAST } }

}



function deleteAdjectLoyalityAdmin(dataList) {
  return dispatch => {
    dispatch(request());

    !!dataList ? eventService.deleteAdjectLoyalityAdmin(dataList && dataList.country, dataList && dataList.id)
      .then(
        deleteadjectloyalityadmin => dispatch(success(deleteadjectloyalityadmin)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.DELETE_ADUJECT_LOYALITY_REQUEST } }
  function success(deleteadjectloyalityadmin) { return { type: eventConstants.DELETE_ADUJECT_LOYALITY_SUCCESS, deleteadjectloyalityadmin } }
  function failure(error) { return { type: eventConstants.DELETE_ADUJECT_LOYALITY_FAILURE, error } }
  function clearToast() { return { type: eventConstants.DELETE_ADUJECT_LOYALITY_CLEAR_TOAST } }

}


function shiptToSelectId(orderID) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID))
  };

  function request(shiptoselectid) {
    return { type: eventConstants.SHIPTO_SELECT_PRODUCT_REQUEST, shiptoselectid };
  }
  function success(shiptoselectid) {
    return { type: eventConstants.SHIPTO_SELECT_PRODUCT_SUCCESS, shiptoselectid };
  }
  function failure(error) {
    return { type: eventConstants.SHIPTO_SELECT_PRODUCT_FAILURE, error };

  }
}


function productAssignListSearch(endIndex,productGroupId,searchText,startIndex) {
  return dispatch => {
    dispatch(request());

    eventService.productAssignListSearch(endIndex,productGroupId,searchText,startIndex)
      .then(
        productassignlistsearch => dispatch(success(productassignlistsearch)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.PRODUCT_ASSIGN_LIST_SEARCH_REQUEST } }
  function success(productassignlistsearch) { return { type: eventConstants.PRODUCT_ASSIGN_LIST_SEARCH_SUCCESS, productassignlistsearch } }
  function failure(error) { return { type: eventConstants.PRODUCT_ASSIGN_LIST_SEARCH_FAILURE, error } }

}


function deleteUsermanagmentCustomer(dataList) {
  console.log("deletecutomerList",dataList);
  return dispatch => {
    dispatch(request());

   !!dataList ? eventService.deleteUsermanagmentCustomer(dataList && dataList.userId, dataList && dataList.status, dataList && dataList.updatedby)
      .then(
        deleteusermanagment => dispatch(success(deleteusermanagment)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(ClearState());
  };
  function request() { return { type: eventConstants.DELETE_CUSTOMER_USERMANAGMENT_REQUEST } }
  function success(deleteusermanagment) { return { type: eventConstants.DELETE_CUSTOMER_USERMANAGMENT_SUCCESS, deleteusermanagment } }
  function failure(error) { return { type: eventConstants.DELETE_CUSTOMER_USERMANAGMENT_FAILURE, error } }
  function ClearState() { return { type: eventConstants.DELETE_CUSTOMER_USERMANAGMENT_CLEAR_STATE } }


}

function updateUsermanagmentCustomer(dataList) {
  console.log("updatecustomerList",dataList);
  return dispatch => {
    dispatch(request());

    !!dataList ? eventService.updateUsermanagmentCustomer(dataList && dataList.userid,dataList && dataList.updateby, dataList && dataList.data)
      .then(
        updateusermanagment => dispatch(success(updateusermanagment)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(ClearState());
  };
  function request() { return { type: eventConstants.UPDATE_CUSTOMER_USERMANAGMENT_REQUEST } }
  function success(updateusermanagment) { return { type: eventConstants.UPDATE_CUSTOMER_USERMANAGMENT_SUCCESS, updateusermanagment } }
  function failure(error) { return { type: eventConstants.UPDATE_CUSTOMER_USERMANAGMENT_FAILURE, error } }
  function ClearState() { return { type: eventConstants.UPDATE_CUSTOMER_USERMANAGMENT_CLEAR_STATE } }

}


function SelectCustomerUserId(userId) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(userId))
  };

  function request(selectcustomeruserid) {
    return { type: eventConstants.CUSTOMER_USERID_REQUEST, selectcustomeruserid };
  }
  function success(selectcustomeruserid) {
    return { type: eventConstants.CUSTOMER_USERID_SUCCESS, selectcustomeruserid };
  }
  function failure(error) {
    return { type: eventConstants.CUSTOMER_USERID_FAILURE, error };

  }
}


function statusUsermanagmentCustomer(dataList) {
  console.log("deletecutomerList",dataList);
  return dispatch => {
    dispatch(request());

   !!dataList ? eventService.statusUsermanagmentCustomer(dataList && dataList.userId, dataList && dataList.status, dataList && dataList.updatedby)
      .then(
        statususermanagmenttype => dispatch(success(statususermanagmenttype)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(ClearState());
  };
  function request() { return { type: eventConstants.STATUS_USERMANAGMENT_TYPE_REQUEST } }
  function success(statususermanagmenttype) { return { type: eventConstants.STATUS_USERMANAGMENT_TYPE_SUCCESS, statususermanagmenttype } }
  function failure(error) { return { type: eventConstants.STATUS_USERMANAGMENT_TYPE_FAILURE, error } }
  function ClearState() { return { type: eventConstants.STATUS_USERMANAGMENT_TYPE_CLEAR_STATE } }

}


function RetailerContactList(retailerCode) {
  return (dispatch) => {
    dispatch(request());

    eventService.RetailerContactList(retailerCode).then(
      (retailercontactlist) => dispatch(success(retailercontactlist)),
      (error) => dispatch(failure(error.toString()))
    );
  };
  function request() {
    return { type: eventConstants.RETAILER_CONTACT_LIST_REQUEST };
  }
  function success(retailercontactlist) {
    return { type: eventConstants.RETAILER_CONTACT_LIST_SUCCESS, retailercontactlist };
  }
  function failure(error) {
    return { type: eventConstants.RETAILER_CONTACT_LIST_FAILURE, error };
  }
}


function UploadRetailerContact(countryCode,upload) {
  return dispatch => {
    dispatch(request());

    (!!countryCode || !!upload) ?
      eventService.UploadRetailerContact(countryCode,upload)
        .then(
          uploadretailercontact => dispatch(success(uploadretailercontact)),
          error => dispatch(failure(error.toString()))
        ) : dispatch(clearToast())
  };
  function request() { return { type: eventConstants.UPLOAD__RETAILER_CONTACT_REQUEST } }
  function success(uploadretailercontact) { return { type: eventConstants.UPLOAD__RETAILER_CONTACT_SUCCESS, uploadretailercontact } }
  function failure(error) { return { type: eventConstants.UPLOAD__RETAILER_CONTACT_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPLOAD__RETAILER_CONTACT_CLEAR_TOAST } }

}


function RetailerMakeInseePlus(UpdateData) {
  return dispatch => {
    dispatch(request());

   UpdateData ? eventService.RetailerMakeInseePlus(UpdateData)
      .then(
        retailermakeinseeplus => dispatch(success(retailermakeinseeplus)),
        error => dispatch(failure(error && error.toString()))
      ): dispatch(clearToast());
  };
  function request() { return { type: eventConstants.RETAILER_MAKE_INSEE_PLUS_REQUEST } }
  function success(retailermakeinseeplus) { return { type: eventConstants.RETAILER_MAKE_INSEE_PLUS_SUCCESS, retailermakeinseeplus } }
  function failure(error) { return { type: eventConstants.RETAILER_MAKE_INSEE_PLUS_FAILURE, error } }
  function clearToast() { return { type: eventConstants.RETAILER_MAKE_INSEE_PLUS_CLEAR_TOAST } }

}


function RetailerUserId(userid) {
  return dispatch => {
    dispatch(request());

    eventService.RetailerUserId(userid)
      .then(
        retaileruserid => dispatch(success(retaileruserid)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RETAILER_USERID_REQUEST } }
  function success(retaileruserid) { return { type: eventConstants.RETAILER_USERID_SUCCESS, retaileruserid } }
  function failure(error) { return { type: eventConstants.RETAILER_USERID_FAILURE, error } }

}

function loyaltyCompanyTypeList() {
  return dispatch => {
    dispatch(request());

    eventService.loyaltyCompanyTypeList()
      .then(
        loyalitycompanytypelist => dispatch(success(loyalitycompanytypelist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.LOYALTY_COMPANY_TYPE_LIST_REQUEST } }
  function success(loyalitycompanytypelist) { return { type: eventConstants.LOYALTY_COMPANY_TYPE_LIST_SUCCESS, loyalitycompanytypelist } }
  function failure(error) { return { type: eventConstants.LOYALTY_COMPANY_TYPE_LIST_FAILURE, error } }

}

function updateloyaltyPointForm(data) {
  return dispatch => {
    dispatch(request());

    !!data ? eventService.updateloyaltyPointForm(data)
      .then(
        updateloyaltypointform => dispatch(success(updateloyaltypointform)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPDATE_LOYALTY_POINT_FORM_REQUEST } }
  function success(updateloyaltypointform) { return { type: eventConstants.UPDATE_LOYALTY_POINT_FORM_SUCCESS, updateloyaltypointform } }
  function failure(error) { return { type: eventConstants.UPDATE_LOYALTY_POINT_FORM_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_LOYALTY_POINT_FORM_CLEAR_TOAST } }

}


function updateloyaltyCutOff(data) {
  return dispatch => {
    dispatch(request());

    !!data ? eventService.updateloyaltyCutOff(data)
      .then(
        updateloyaltycutoff => dispatch(success(updateloyaltycutoff)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPDATE_LOYALTY_CUT_OFF_REQUEST } }
  function success(updateloyaltycutoff) { return { type: eventConstants.UPDATE_LOYALTY_CUT_OFF_SUCCESS, updateloyaltycutoff } }
  function failure(error) { return { type: eventConstants.UPDATE_LOYALTY_CUT_OFF_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_LOYALTY_CUT_OFF_CLEAR_TOAST } }

}


function LoyalityCategoryMasterList(data) {
  return dispatch => {
    dispatch(request());

    eventService.LoyalityCategoryMasterList(data)
      .then(
        loyaltycategorymaster => dispatch(success(loyaltycategorymaster)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.LOYALTY_CATEGORY_MASTER_REQUEST } }
  function success(loyaltycategorymaster) { return { type: eventConstants.LOYALTY_CATEGORY_MASTER_SUCCESS, loyaltycategorymaster } }
  function failure(error) { return { type: eventConstants.LOYALTY_CATEGORY_MASTER_FAILURE, error } }

}

function addAdjustLoyalityAdmin(data) {
  return dispatch => {
    dispatch(request());

    !!data ? eventService.addAdjustLoyalityAdmin(data)
      .then(
        addadjustloyalityadmin => dispatch(success(addadjustloyalityadmin)),
        error => dispatch(failure(error.toString()))
      ):dispatch(clearState());
  };
  function request() { return { type: eventConstants.ADD_ADJUST_LOYALTY_REQUEST } }
  function success(addadjustloyalityadmin) { return { type: eventConstants.ADD_ADJUST_LOYALTY_SUCCESS, addadjustloyalityadmin } }
  function failure(error) { return { type: eventConstants.ADD_ADJUST_LOYALTY_FAILURE, error } }
  function clearState() { return { type: eventConstants.ADD_ADJUST_LOYALTY_CLEAR_STATE } }


}

function updateAdjustLoyalityAdmin(data) {
  return dispatch => {
    dispatch(request());

    eventService.updateAdjustLoyalityAdmin(data)
      .then(
        updateAdjustLoyalityAdmin => dispatch(success(updateAdjustLoyalityAdmin)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.UPDATE_ADJUST_LOYALTY_REQUEST } }
  function success(updateAdjustLoyalityAdmin) { return { type: eventConstants.UPDATE_ADJUST_LOYALTY_SUCCESS, addAdjustLoyalityAdmin } }
  function failure(error) { return { type: eventConstants.UPDATE_ADJUST_LOYALTY_FAILURE, error } }


}


function getRedemList(soldTonumber,fromIndex,toIndex) {
  return dispatch => {
    dispatch(request());

    eventService.getRedemList(soldTonumber,fromIndex,toIndex)
      .then(
        getredemlist => dispatch(success(getredemlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_REDAM_LIST_REQUEST } }
  function success(getredemlist) { return { type: eventConstants.GET_REDAM_LIST_SUCCESS, getredemlist } }
  function failure(error) { return { type: eventConstants.GET_REDAM_LIST_FAILURE, error } }


}


function getEarnPointList(soldTonumber,fromIndex,toIndex) {
  return dispatch => {
    dispatch(request());

    eventService.getEarnPointList(soldTonumber,fromIndex,toIndex)
      .then(
        getearnpointlist => dispatch(success(getearnpointlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.GET_EARN_POINT_LIST_REQUEST } }
  function success(getearnpointlist) { return { type: eventConstants.GET_EARN_POINT_LIST_SUCCESS, getearnpointlist } }
  function failure(error) { return { type: eventConstants.GET_EARN_POINT_LIST_FAILURE, error } }


}


function materialGroupList(materialGroup) {
  return dispatch => {
    dispatch(request());

    eventService.materialGroupList(materialGroup)
      .then(
        materialgrouplist => dispatch(success(materialgrouplist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.MATERIAL_GROUP_LIST_REQUEST } }
  function success(materialgrouplist) { return { type: eventConstants.MATERIAL_GROUP_LIST_SUCCESS, materialgrouplist } }
  function failure(error) { return { type: eventConstants.MATERIAL_GROUP_LIST_FAILURE, error } }
}


function DealerCustomerName(customerId) {
  return dispatch => {
    dispatch(request());

    eventService.DealerCustomerName(customerId)
      .then(
        dealercustomername => dispatch(success(dealercustomername)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DEALER_CUSTOMER_NAME_REQUEST } }
  function success(dealercustomername) { return { type: eventConstants.DEALER_CUSTOMER_NAME_SUCCESS, dealercustomername } }
  function failure(error) { return { type: eventConstants.DEALER_CUSTOMER_NAME_FAILURE, error } }
}


function UploadContactVNandLK(upload) {
  return dispatch => {
    dispatch(request());

    !!upload ?
      eventService.UploadContactVNandLK(upload)
        .then(
          uploadContactvnandlk => dispatch(success(uploadContactvnandlk)),
          error => dispatch(failure(error.toString()))
        ) : dispatch(clearToast())
  };
  function request() { return { type: eventConstants.UPLOAD_CONTACT_VNLK_REQUEST } }
  function success(uploadContactvnandlk) { return { type: eventConstants.UPLOAD_CONTACT_VNLK_SUCCESS, uploadContactvnandlk } }
  function failure(error) { return { type: eventConstants.UPLOAD_CONTACT_VNLK_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPLOAD_CONTACT_VNLK_CLEAR_TOAST } }

}


function getContactVNLKDownloadLink() {
  return dispatch => {
    dispatch(request());

    eventService.getContactVNLKDownloadLink()
      .then(
        contactvnlkLink => dispatch(success(contactvnlkLink)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_VNLK_URL_REQUEST } }
  function success(contactvnlkLink) { return { type: eventConstants.DOWNLOAD_VNLK_URL_SUCCESS, contactvnlkLink } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_VNLK_URL_FAILURE, error } }
}


function deleteProductDetailImage(ImageDataList) {
  console.log("ImageDataList+++",ImageDataList);
  return dispatch => {
    dispatch(request());

    !!ImageDataList ? eventService.deleteProductDetailImage(ImageDataList && ImageDataList.productData,ImageDataList && ImageDataList.thumbnail)
      .then(
        deleteproductimage => dispatch(success(deleteproductimage)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.DELETE_PRODUCT_IMAGE_REQUEST } }
  function success(deleteproductimage) { return { type: eventConstants.DELETE_PRODUCT_IMAGE_SUCCESS, deleteproductimage } }
  function failure(error) { return { type: eventConstants.DELETE_PRODUCT_IMAGE_FAILURE, error } }
  function clearState() { return { type: eventConstants.DELETE_PRODUCT_IMAGE_CLEAR_STATE } }

}


function getAllHolidayMasterList() {
  return dispatch => {
    dispatch(request());

    eventService.getAllHolidayMasterList()
      .then(
        allholidaymasterlist => dispatch(success(allholidaymasterlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.HOLIDAY_MASTER_LIST_REQUEST } }
  function success(allholidaymasterlist) { return { type: eventConstants.HOLIDAY_MASTER_LIST_SUCCESS, allholidaymasterlist } }
  function failure(error) { return { type: eventConstants.HOLIDAY_MASTER_LIST_FAILURE, error } }
}

function postAddHolidayMaster(data) {
  return dispatch => {
    dispatch(request());

   !!data ? eventService.postAddHolidayMaster(data)
      .then(
        addholidaymaster => dispatch(success(addholidaymaster)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.ADD_HOLIDAY_MASTER_REQUEST } }
  function success(addholidaymaster) { return { type: eventConstants.ADD_HOLIDAY_MASTER_SUCCESS, addholidaymaster } }
  function failure(error) { return { type: eventConstants.ADD_HOLIDAY_MASTER_FAILURE, error } }
  function clearState() { return { type: eventConstants.ADD_HOLIDAY_MASTER_CLEAR_STATE } }
}


function updateAddHolidayMaster(dataList) {
  return dispatch => {
    dispatch(request());

   !!dataList ? eventService.updateAddHolidayMaster(dataList && dataList.id, dataList && dataList.data)
      .then(
        updateholidaymaster => dispatch(success(updateholidaymaster)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.UPDATE_HOLIDAY_MASTER_REQUEST } }
  function success(updateholidaymaster) { return { type: eventConstants.UPDATE_HOLIDAY_MASTER_SUCCESS, updateholidaymaster } }
  function failure(error) { return { type: eventConstants.UPDATE_HOLIDAY_MASTER_FAILURE, error } }
  function clearState() { return { type: eventConstants.UPDATE_HOLIDAY_MASTER_CLEAR_STATE } }
}


function deleteHolidayMaster(id) {
  return dispatch => {
    dispatch(request());

   !!id ? eventService.deleteHolidayMaster(id)
      .then(
        deleteholidaymaster => dispatch(success(deleteholidaymaster)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.DELETE_HOLIDAY_MASTER_REQUEST } }
  function success(deleteholidaymaster) { return { type: eventConstants.DELETE_HOLIDAY_MASTER_SUCCESS, deleteholidaymaster } }
  function failure(error) { return { type: eventConstants.DELETE_HOLIDAY_MASTER_FAILURE, error } }
  function clearState() { return { type: eventConstants.DELETE_HOLIDAY_MASTER_CLEAR_STATE } }
}


function uploadHolidayMaster(data) {
  return dispatch => {
    dispatch(request());

   !!data ? eventService.uploadHolidayMaster(data)
      .then(
        uploadholidaymaster => dispatch(success(uploadholidaymaster)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.UPLOAD_HOLIDAY_MASTER_REQUEST } }
  function success(uploadholidaymaster) { return { type: eventConstants.UPLOAD_HOLIDAY_MASTER_SUCCESS, uploadholidaymaster } }
  function failure(error) { return { type: eventConstants.UPLOAD_HOLIDAY_MASTER_FAILURE, error } }
  function clearState() { return { type: eventConstants.UPLOAD_HOLIDAY_MASTER_CLEAR_STATE } }
}


function getAllWeekendHolidayList() {
  return dispatch => {
    dispatch(request());

    eventService.getAllWeekendHolidayList()
      .then(
        weekendholidaylist => dispatch(success(weekendholidaylist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.WEEKEND_HOLIDAY_LIST_REQUEST } }
  function success(weekendholidaylist) { return { type: eventConstants.WEEKEND_HOLIDAY_LIST_SUCCESS, weekendholidaylist } }
  function failure(error) { return { type: eventConstants.WEEKEND_HOLIDAY_LIST_FAILURE, error } }
}


function uploadWeekendMaster(data) {
  return dispatch => {
    dispatch(request());

   !!data ? eventService.uploadWeekendMaster(data)
      .then(
        uploadweekendmaster => dispatch(success(uploadweekendmaster)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.UPLOAD_WEEKEND_MASTER_REQUEST } }
  function success(uploadweekendmaster) { return { type: eventConstants.UPLOAD_WEEKEND_MASTER_SUCCESS, uploadweekendmaster } }
  function failure(error) { return { type: eventConstants.UPLOAD_WEEKEND_MASTER_FAILURE, error } }
  function clearState() { return { type: eventConstants.UPLOAD_WEEKEND_MASTER_CLEAR_STATE } }
}


function deleteSubDealerSoldTo(deletelist) {
  return dispatch => {
    dispatch(request());

   !!deletelist ? eventService.deleteSubDealerSoldTo(deletelist && deletelist.retailerCode,deletelist && deletelist.soldtonumber)
      .then(
        deletesubdealersoldto => dispatch(success(deletesubdealersoldto)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.DELETE_SUB_DEALER_SOLDTO_REQUEST } }
  function success(deletesubdealersoldto) { return { type: eventConstants.DELETE_SUB_DEALER_SOLDTO_SUCCESS, deletesubdealersoldto } }
  function failure(error) { return { type: eventConstants.DELETE_SUB_DEALER_SOLDTO_FAILURE, error } }
  function clearState() { return { type: eventConstants.DELETE_SUB_DEALER_SOLDTO_CLEAR_STATE } }
}

function updateSubDealerSoldTo(updateList) {
  console.log("updateList",updateList);
  return dispatch => {
    dispatch(request());

   !!updateList ? eventService.updateSubDealerSoldTo(updateList && updateList.markDelete, updateList && updateList.retailerCode, updateList && updateList.soldtonumber)
      .then(
        updatesubdealersoldto => dispatch(success(updatesubdealersoldto)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.UPDATE_SUB_DEALER_SOLDTO_REQUEST } }
  function success(updatesubdealersoldto) { return { type: eventConstants.UPDATE_SUB_DEALER_SOLDTO_SUCCESS, updatesubdealersoldto } }
  function failure(error) { return { type: eventConstants.UPDATE_SUB_DEALER_SOLDTO_FAILURE, error } }
  function clearState() { return { type: eventConstants.UPDATE_SUB_DEALER_SOLDTO_CLEAR_STATE } }
}


function getVolumeAllocationList(solToNumber) {
  return dispatch => {
    dispatch(request());

    eventService.getVolumeAllocationList(solToNumber)
      .then(
        volumeallocationlist => dispatch(success(volumeallocationlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.VOLUME_ALLOCATION_LIST_REQUEST } }
  function success(volumeallocationlist) { return { type: eventConstants.VOLUME_ALLOCATION_LIST_SUCCESS, volumeallocationlist } }
  function failure(error) { return { type: eventConstants.VOLUME_ALLOCATION_LIST_FAILURE, error } }
}


function deleteVolumeAllocation(deletelist) {
  return dispatch => {
    dispatch(request());

   !!deletelist ? eventService.deleteVolumeAllocation(deletelist && deletelist.category, deletelist && deletelist.groupCode, deletelist && deletelist.soldToNumber)
      .then(
        deletevolumeallocation => dispatch(success(deletevolumeallocation)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.DELETE_VOLUME_ALLOCATION_REQUEST } }
  function success(deletevolumeallocation) { return { type: eventConstants.DELETE_VOLUME_ALLOCATION_SUCCESS, deletevolumeallocation } }
  function failure(error) { return { type: eventConstants.DELETE_VOLUME_ALLOCATION_FAILURE, error } }
  function clearState() { return { type: eventConstants.DELETE_VOLUME_ALLOCATION_CLEAR_STATE } }
}


function createRetailerSubDealer(data) {
  return dispatch => {
    dispatch(request());

    !!data ? eventService.createRetailerSubDealer(data)
      .then(
        createretailersubdealer => dispatch(success(createretailersubdealer)),
        error => dispatch(failure(error && error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.CREATE_RETAILER_SUBDEALER_REQUEST } }
  function success(createretailersubdealer) { return { type: eventConstants.CREATE_RETAILER_SUBDEALER_SUCCESS, createretailersubdealer } }
  function failure(error) { return { type: eventConstants.CREATE_RETAILER_SUBDEALER_FAILURE, error } }
  function clearToast() { return { type: eventConstants.CREATE_RETAILER_SUBDEALER_CLEAR_TOAST } }
}

function salesRepIdList(country) {
  return dispatch => {
    dispatch(request());

    eventService.salesRepIdList(country)
      .then(
        salesrepidlist => dispatch(success(salesrepidlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SALES_REP_LIST_REQUEST } }
  function success(salesrepidlist) { return { type: eventConstants.SALES_REP_LIST_SUCCESS, salesrepidlist } }
  function failure(error) { return { type: eventConstants.SALES_REP_LIST_FAILURE, error } }

}


function salesDistrictList(country) {
  return dispatch => {
    dispatch(request());

    eventService.salesDistrictList(country)
      .then(
        salesdistrictlist => dispatch(success(salesdistrictlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SALES_DISTRICT_LIST_REQUEST } }
  function success(salesdistrictlist) { return { type: eventConstants.SALES_DISTRICT_LIST_SUCCESS, salesdistrictlist } }
  function failure(error) { return { type: eventConstants.SALES_DISTRICT_LIST_FAILURE, error } }

}


function updateVolumeCutOffDate(data) {
  return dispatch => {
    dispatch(request());

    data ? eventService.updateVolumeCutOffDate(data)
      .then(
        updatevolumecuttoffdate => dispatch(success(updatevolumecuttoffdate)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPDATE_VOLUME_CUT_OFF_REQUEST } }
  function success(updatevolumecuttoffdate) { return { type: eventConstants.UPDATE_VOLUME_CUT_OFF_SUCCESS, updatevolumecuttoffdate } }
  function failure(error) { return { type: eventConstants.UPDATE_VOLUME_CUT_OFF_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_VOLUME_CUT_OFF_CLEAR_TOAST } }

}


function retailerAutoField(code) {
  return dispatch => {
    dispatch(request());

    eventService.retailerAutoField(code)
      .then(
        retailerautofield => dispatch(success(retailerautofield)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RETAILER_AUTO_FIELD_REQUEST } }
  function success(retailerautofield) { return { type: eventConstants.RETAILER_AUTO_FIELD_SUCCESS, retailerautofield } }
  function failure(error) { return { type: eventConstants.RETAILER_AUTO_FIELD_FAILURE, error } }

}


function retailerAllContactList(code, searchValue) {
  return dispatch => {
    dispatch(request());

    eventService.retailerAllContactList(code, searchValue)
      .then(
        retailerallcontactlist => dispatch(success(retailerallcontactlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RETAILER_ALL_CONTACT_LIST_REQUEST } }
  function success(retailerallcontactlist) { return { type: eventConstants.RETAILER_ALL_CONTACT_LIST_SUCCESS, retailerallcontactlist } }
  function failure(error) { return { type: eventConstants.RETAILER_ALL_CONTACT_LIST_FAILURE, error } }

}


function RetailerAccountFormData(productData, userid, upload) {
  return (dispatch) => {
    dispatch(request());

    (!!productData || !!userid || !!upload) ? eventService.RetailerAccountFormData(productData, userid, upload).then(
      (retaileraccountformdata) => {
        return dispatch(success(retaileraccountformdata))
      },
      (error) => {
        return dispatch(failure(error && error.toString()))
      }
    ) : dispatch(ClearState());
  };
  function request() {
    return { type: eventConstants.RETAILER_ACCOUNT_FORM_DATA_REQUEST };
  }
  function success(retaileraccountformdata) {
    return { type: eventConstants.RETAILER_ACCOUNT_FORM_DATA_SUCCESS, retaileraccountformdata };
  }
  function failure(error) {
    return { type: eventConstants.RETAILER_ACCOUNT_FORM_DATA_FAILURE, error };
  }
  function ClearState() {
    return { type: eventConstants.RETAILER_ACCOUNT_FORM_DATA_CLEAR };
  }
}


function updateRetailerSoldTo(dataList) {
  return dispatch => {
    dispatch(request());

    dataList ? eventService.updateRetailerSoldTo(dataList && dataList.markDelete,dataList && dataList.retailerCode, dataList && dataList.soldtonumber)
      .then(
        updateretailersoldto => dispatch(success(updateretailersoldto)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPDATE_RETAILER_SOLDTO_REQUEST } }
  function success(updateretailersoldto) { return { type: eventConstants.UPDATE_RETAILER_SOLDTO_SUCCESS, updateretailersoldto } }
  function failure(error) { return { type: eventConstants.UPDATE_RETAILER_SOLDTO_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_RETAILER_SOLDTO_CLEAR_TOAST } }

}


function deleteRetailerSoldTo(deletelist) {
  return dispatch => {
    dispatch(request());

   !!deletelist ? eventService.deleteRetailerSoldTo(deletelist && deletelist.retailerCode, deletelist && deletelist.soldtoNumber)
      .then(
        deleteretailersoldto => dispatch(success(deleteretailersoldto)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.DELETE_RETAILER_SOLDTO_REQUEST } }
  function success(deleteretailersoldto) { return { type: eventConstants.DELETE_RETAILER_SOLDTO_SUCCESS, deleteretailersoldto } }
  function failure(error) { return { type: eventConstants.DELETE_RETAILER_SOLDTO_FAILURE, error } }
  function clearState() { return { type: eventConstants.DELETE_RETAILER_SOLDTO_CLEAR_TOAST } }
}


function updateRetailerContactList(data, mobile, upload) {
  return (dispatch) => {
    dispatch(request());

    (!!data || !!mobile || !!upload) ? eventService.updateRetailerContactList(data, mobile, upload).then(
      (updateretailercontactlist) => dispatch(success(updateretailercontactlist)),
      // (error) => dispatch(failure(error.toString()))
    ) : dispatch(clearState());
  };
  function request() {
    return { type: eventConstants.UPDATE_RETAILER_ACCOUNT_LIST_REQUEST };
  }
  function success(updateretailercontactlist) {
    return { type: eventConstants.UPDATE_RETAILER_ACCOUNT_LIST_SUCCESS, updateretailercontactlist };
  }
  function failure(error) {
    return { type: eventConstants.UPDATE_RETAILER_ACCOUNT_LIST_FAILURE, error };
  }

  function clearState() {
    return { type: eventConstants.UPDATE_RETAILER_ACCOUNT_LIST_CLEAR };
  }
}


function deleteRetailerContactList(deletelist) {
  return dispatch => {
    dispatch(request());

   !!deletelist ? eventService.deleteRetailerContactList(deletelist && deletelist.retailerCode, deletelist && deletelist.userId)
      .then(
        deleteretailercontactlist => dispatch(success(deleteretailercontactlist)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.DELETE_RETAILER_CONTACT_LIST_REQUEST } }
  function success(deleteretailercontactlist) { return { type: eventConstants.DELETE_RETAILER_CONTACT_LIST_SUCCESS, deleteretailercontactlist } }
  function failure(error) { return { type: eventConstants.DELETE_RETAILER_CONTACT_LIST_FAILURE, error } }
  function clearState() { return { type: eventConstants.DELETE_RETAILER_CONTACT_LIST_CLEAR_TOAST } }
}


function autofillRetailerContact(retailerCode,userId) {
  return dispatch => {
    dispatch(request());

    eventService.autofillRetailerContact(retailerCode,userId)
      .then(
        autoretailercontact => dispatch(success(autoretailercontact)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.AUTOFILL_RETAILER_CONTACT_REQUEST } }
  function success(autoretailercontact) { return { type: eventConstants.AUTOFILL_RETAILER_CONTACT_SUCCESS, autoretailercontact } }
  function failure(error) { return { type: eventConstants.AUTOFILL_RETAILER_CONTACT_FAILURE, error } }
}



function getexistingCustomerCadence(filterData) {
  return dispatch => {
    dispatch(request());

    eventService.getexistingCustomerCadence(filterData)
      .then(
        existingcustomerlist => dispatch(success(existingcustomerlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.EXISTING_CUSTOMER_LIST_REQUEST } }
  function success(existingcustomerlist) { return { type: eventConstants.EXISTING_CUSTOMER_LIST_SUCCESS, existingcustomerlist } }
  function failure(error) { return { type: eventConstants.EXISTING_CUSTOMER_LIST_FAILURE, error } }
}


function uploadexistingCustomerCadence(data) {
  return dispatch => {
    dispatch(request());

    !!data ? eventService.uploadexistingCustomerCadence(data)
      .then(
        uploadexistingcustomer => dispatch(success(uploadexistingcustomer)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.UPLOAD_EXISTING_CUSTOMER_REQUEST } }
  function success(uploadexistingcustomer) { return { type: eventConstants.UPLOAD_EXISTING_CUSTOMER_SUCCESS, uploadexistingcustomer } }
  function failure(error) { return { type: eventConstants.UPLOAD_EXISTING_CUSTOMER_FAILURE, error } }
  function clearState() { return { type: eventConstants.UPLOAD_EXISTING_CUSTOMER_CLEAR_STATE } }
}


function deleteExistingCustomer(customerId) {
  return dispatch => {
    dispatch(request());

   !!customerId ? eventService.deleteExistingCustomer(customerId)
      .then(
        deleteexistingcustomer => dispatch(success(deleteexistingcustomer)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.DELETE_EXISTING_CUSTOMER_REQUEST } }
  function success(deleteexistingcustomer) { return { type: eventConstants.DELETE_EXISTING_CUSTOMER_SUCCESS, deleteexistingcustomer } }
  function failure(error) { return { type: eventConstants.DELETE_EXISTING_CUSTOMER_FAILURE, error } }
  function clearState() { return { type: eventConstants.DELETE_EXISTING_CUSTOMER_CLEAR_TOAST } }
}


function updateExistingCustomer(dataList) {
  return dispatch => {
    dispatch(request());

    dataList ? eventService.updateExistingCustomer(dataList && dataList.data, dataList && dataList.id)
      .then(
        updateexistingcustomer => dispatch(success(updateexistingcustomer)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPDATE_EXISTING_CUSTOMER_REQUEST } }
  function success(updateexistingcustomer) { return { type: eventConstants.UPDATE_EXISTING_CUSTOMER_SUCCESS, updateexistingcustomer } }
  function failure(error) { return { type: eventConstants.UPDATE_EXISTING_CUSTOMER_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_EXISTING_CUSTOMER_CLEAR_TOAST } }

}



function getNonCustomerInActive(filterData) {
  return dispatch => {
    dispatch(request());

    eventService.getNonCustomerInActive(filterData)
      .then(
        noncustomerinactive => dispatch(success(noncustomerinactive)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.NON_CUSTOMER_INACTIVE_REQUEST } }
  function success(noncustomerinactive) { return { type: eventConstants.NON_CUSTOMER_INACTIVE_SUCCESS, noncustomerinactive } }
  function failure(error) { return { type: eventConstants.NON_CUSTOMER_INACTIVE_FAILURE, error } }
}


function uploadNonCustomerInActive(data) {
  return dispatch => {
    dispatch(request());

    !!data ? eventService.uploadNonCustomerInActive(data)
      .then(
        uploadcustomerinactive => dispatch(success(uploadcustomerinactive)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.UPLOAD_CUSTOMER_INACTIVE_REQUEST } }
  function success(uploadcustomerinactive) { return { type: eventConstants.UPLOAD_CUSTOMER_INACTIVE_SUCCESS, uploadcustomerinactive } }
  function failure(error) { return { type: eventConstants.UPLOAD_CUSTOMER_INACTIVE_FAILURE, error } }
  function clearState() { return { type: eventConstants.UPLOAD_CUSTOMER_INACTIVE_CLEAR_STATE } }
}



function deleteCustomerInactive(customerId) {
  return dispatch => {
    dispatch(request());

   !!customerId ? eventService.deleteCustomerInactive(customerId)
      .then(
        deletecustomerinactive => dispatch(success(deletecustomerinactive)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.DELETE_CUSTOMER_INACTIVE_REQUEST } }
  function success(deletecustomerinactive) { return { type: eventConstants.DELETE_CUSTOMER_INACTIVE_SUCCESS, deletecustomerinactive } }
  function failure(error) { return { type: eventConstants.DELETE_CUSTOMER_INACTIVE_FAILURE, error } }
  function clearState() { return { type: eventConstants.DELETE_CUSTOMER_INACTIVE_CLEAR_TOAST } }
}


function updateCustomerInActive(dataList) {
  return dispatch => {
    dispatch(request());

    dataList ? eventService.updateCustomerInActive(dataList && dataList.data, dataList && dataList.customerId)
      .then(
        updatecustomerinactive => dispatch(success(updatecustomerinactive)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPDATE_CUSTOMER_INACTIVE_REQUEST } }
  function success(updatecustomerinactive) { return { type: eventConstants.UPDATE_CUSTOMER_INACTIVE_SUCCESS, updatecustomerinactive } }
  function failure(error) { return { type: eventConstants.UPDATE_CUSTOMER_INACTIVE_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_CUSTOMER_INACTIVE_CLEAR_TOAST } }

}

function getActivityTarget() {
  return dispatch => {
    dispatch(request());

    eventService.getActivityTarget()
      .then(
        activitytarget => dispatch(success(activitytarget)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ACTIVITY_TARGET_LIST_REQUEST } }
  function success(activitytarget) { return { type: eventConstants.ACTIVITY_TARGET_LIST_SUCCESS, activitytarget } }
  function failure(error) { return { type: eventConstants.ACTIVITY_TARGET_LIST_FAILURE, error } }
}


function uploadActivityTarget(data) {
  return dispatch => {
    dispatch(request());

    !!data ? eventService.uploadActivityTarget(data)
      .then(
        uploadactivitytarget => dispatch(success(uploadactivitytarget)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.UPLOAD_ACTIVITY_TARGET_REQUEST } }
  function success(uploadactivitytarget) { return { type: eventConstants.UPLOAD_ACTIVITY_TARGET_SUCCESS, uploadactivitytarget } }
  function failure(error) { return { type: eventConstants.UPLOAD_ACTIVITY_TARGET_FAILURE, error } }
  function clearState() { return { type: eventConstants.UPLOAD_ACTIVITY_TARGET_CLEAR_STATE } }
}

function updateActivityTarget(dataList) {
  return dispatch => {
    dispatch(request());

    dataList ? eventService.updateActivityTarget(dataList && dataList.data, dataList && dataList.id)
      .then(
        updateactivitytarget => dispatch(success(updateactivitytarget)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPDATE_ACTIVITY_TARGET_REQUEST } }
  function success(updateactivitytarget) { return { type: eventConstants.UPDATE_ACTIVITY_TARGET_SUCCESS, updateactivitytarget } }
  function failure(error) { return { type: eventConstants.UPDATE_ACTIVITY_TARGET_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_ACTIVITY_TARGET_CLEAR_TOAST } }

}



function getBeatList() {
  return dispatch => {
    dispatch(request());

    eventService.getBeatList()
      .then(
        beatlist => dispatch(success(beatlist)),
        error => dispatch(failure(error && error.toString()))
      );
  };
  function request() { return { type: eventConstants.BEAT_LIST_REQUEST } }
  function success(beatlist) { return { type: eventConstants.BEAT_LIST_SUCCESS, beatlist } }
  function failure(error) { return { type: eventConstants.BEAT_LIST_LIST_FAILURE, error } }
}

function uploadBeatManagmentList(data) {
  return dispatch => {
    dispatch(request());

    !!data ? eventService.uploadBeatManagmentList(data)
      .then(
        uploadbeatList => dispatch(success(uploadbeatList)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.UPLOAD_BEAT_LIST_REQUEST } }
  function success(uploadbeatList) { return { type: eventConstants.UPLOAD_BEAT_LIST_SUCCESS, uploadbeatList } }
  function failure(error) { return { type: eventConstants.UPLOAD_BEAT_LIST_FAILURE, error } }
  function clearState() { return { type: eventConstants.UPLOAD_BEAT_LIST_CLEAR_STATE } }
}


function getRelationwithCustomerList(filterData) {
  return dispatch => {
    dispatch(request());

    eventService.getRelationwithCustomerList(filterData)
      .then(
        relationwithcustomer => dispatch(success(relationwithcustomer)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RELATION_WITH_CUSTOMER_REQUEST } }
  function success(relationwithcustomer) { return { type: eventConstants.RELATION_WITH_CUSTOMER_SUCCESS, relationwithcustomer } }
  function failure(error) { return { type: eventConstants.RELATION_WITH_CUSTOMER_FAILURE, error } }
}


function uploadRelationCustomerList(data) {
  return dispatch => {
    dispatch(request());

    !!data ? eventService.uploadRelationCustomerList(data)
      .then(
        uploadrelationcustomerlist => dispatch(success(uploadrelationcustomerlist)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.UPLOAD_RELATION_CUSTOMER_REQUEST } }
  function success(uploadrelationcustomerlist) { return { type: eventConstants.UPLOAD_RELATION_CUSTOMER_SUCCESS, uploadrelationcustomerlist } }
  function failure(error) { return { type: eventConstants.UPLOAD_RELATION_CUSTOMER_FAILURE, error } }
  function clearState() { return { type: eventConstants.UPLOAD_RELATION_CUSTOMER_CLEAR_STATE } }
}



function deleteActivityTarget(customerId) {
  return dispatch => {
    dispatch(request());

   !!customerId ? eventService.deleteActivityTarget(customerId)
      .then(
        deleteactivitytarget => dispatch(success(deleteactivitytarget)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.DELETE_ACTIVITY_TARGET_REQUEST } }
  function success(deleteactivitytarget) { return { type: eventConstants.DELETE_ACTIVITY_TARGET_SUCCESS, deleteactivitytarget } }
  function failure(error) { return { type: eventConstants.DELETE_ACTIVITY_TARGET_FAILURE, error } }
  function clearState() { return { type: eventConstants.DELETE_ACTIVITY_TARGET_CLEAR_TOAST } }
}

function deleteBeatMaster(customerId) {
  return dispatch => {
    dispatch(request());

   !!customerId ? eventService.deleteBeatMaster(customerId)
      .then(
        deletebeatmaster => dispatch(success(deletebeatmaster)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.DELETE_BEAT_MASTER_REQUEST } }
  function success(deletebeatmaster) { return { type: eventConstants.DELETE_BEAT_MASTER_SUCCESS, deletebeatmaster } }
  function failure(error) { return { type: eventConstants.DELETE_BEAT_MASTER_FAILURE, error } }
  function clearState() { return { type: eventConstants.DELETE_BEAT_MASTER_CLEAR_TOAST } }
}


function deleteCustomerRelation(customerId) {
  return dispatch => {
    dispatch(request());

   !!customerId ? eventService.deleteCustomerRelation(customerId)
      .then(
        deletecustomerrelation => dispatch(success(deletecustomerrelation)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.DELETE_CUSTOMER_RELATION_REQUEST } }
  function success(deletecustomerrelation) { return { type: eventConstants.DELETE_CUSTOMER_RELATION_SUCCESS, deletecustomerrelation } }
  function failure(error) { return { type: eventConstants.DELETE_CUSTOMER_RELATION_FAILURE, error } }
  function clearState() { return { type: eventConstants.DELETE_CUSTOMER_RELATION_CLEAR_TOAST } }
}


function downloadexistingCustomerCadence() {
  return dispatch => {
    dispatch(request());

    eventService.downloadexistingCustomerCadence()
      .then(
        downloadexistingcustomer => dispatch(success(downloadexistingcustomer)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_EXISTING_CUSTOMER_REQUEST } }
  function success(downloadexistingcustomer) { return { type: eventConstants.DOWNLOAD_EXISTING_CUSTOMER_SUCCESS, downloadexistingcustomer } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_EXISTING_CUSTOMER_FAILURE, error } }
}


function downloadNonInactiveCustomer() {
  return dispatch => {
    dispatch(request());

    eventService.downloadNonInactiveCustomer()
      .then(
        downloadnoninactivecustomer => dispatch(success(downloadnoninactivecustomer)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_INACTIVE_CUSTOMER_REQUEST } }
  function success(downloadnoninactivecustomer) { return { type: eventConstants.DOWNLOAD_INACTIVE_CUSTOMER_SUCCESS, downloadnoninactivecustomer } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_INACTIVE_CUSTOMER_FAILURE, error } }
}


function downloadActivityTarget() {
  return dispatch => {
    dispatch(request());

    eventService.downloadActivityTarget()
      .then(
        downloadactivtytarget => dispatch(success(downloadactivtytarget)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_ACTIVITY_TARGET_REQUEST } }
  function success(downloadactivtytarget) { return { type: eventConstants.DOWNLOAD_ACTIVITY_TARGET_SUCCESS, downloadactivtytarget } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_ACTIVITY_TARGET_FAILURE, error } }
}



function downloadBeatMaster() {
  return dispatch => {
    dispatch(request());

    eventService.downloadBeatMaster()
      .then(
        downloadbeatmaster => dispatch(success(downloadbeatmaster)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_BEAT_MASTER_REQUEST } }
  function success(downloadbeatmaster) { return { type: eventConstants.DOWNLOAD_BEAT_MASTER_SUCCESS, downloadbeatmaster } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_BEAT_MASTER_FAILURE, error } }
}

function getBeatMasterSearch(search) {
  return dispatch => {
    dispatch(request());

    eventService.getBeatMasterSearch(search)
      .then(
        beatmastersearch => dispatch(success(beatmastersearch)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.BEAT_MASTER_SEARCH_REQUEST } }
  function success(beatmastersearch) { return { type: eventConstants.BEAT_MASTER_SEARCH_SUCCESS, beatmastersearch } }
  function failure(error) { return { type: eventConstants.BEAT_MASTER_SEARCH_FAILURE, error } }
}


function updateBeatMaster(dataList) {
  return dispatch => {
    dispatch(request());

    dataList ? eventService.updateBeatMaster(dataList && dataList.customerIdList, dataList && dataList.id)
      .then(
        updatebeatmaster => dispatch(success(updatebeatmaster)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPDATE_BEAT_MASTER_REQUEST } }
  function success(updatebeatmaster) { return { type: eventConstants.UPDATE_BEAT_MASTER_SUCCESS, updatebeatmaster } }
  function failure(error) { return { type: eventConstants.UPDATE_BEAT_MASTER_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_BEAT_MASTER_CLEAR_TOAST } }

}

function downloadRelationWith() {
  return dispatch => {
    dispatch(request());

    eventService.downloadRelationWith()
      .then(
        downloadrelationwith => dispatch(success(downloadrelationwith)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_RELATION_CUSTOMER_REQUEST } }
  function success(downloadrelationwith) { return { type: eventConstants.DOWNLOAD_RELATION_CUSTOMER_SUCCESS, downloadrelationwith } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_RELATION_CUSTOMER_FAILURE, error } }
}

function updateRelationCustomerMaster(dataList) {
  return dispatch => {
    dispatch(request());

    dataList ? eventService.updateRelationCustomerMaster(dataList && dataList.id, dataList && dataList.customerIdList)
      .then(
        updaterelationcustomer => dispatch(success(updaterelationcustomer)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPDATE_RELATION_CUSTOMER_REQUEST } }
  function success(updaterelationcustomer) { return { type: eventConstants.UPDATE_RELATION_CUSTOMER_SUCCESS, updaterelationcustomer } }
  function failure(error) { return { type: eventConstants.UPDATE_RELATION_CUSTOMER_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_RELATION_CUSTOMER_CLEAR_TOAST } }

}

function getRelationSearch(search) {
  return dispatch => {
    dispatch(request());

    eventService.getRelationSearch(search)
      .then(
        relationsearch => dispatch(success(relationsearch)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RELATION_SEARCH_REQUEST } }
  function success(relationsearch) { return { type: eventConstants.RELATION_SEARCH_SUCCESS, relationsearch } }
  function failure(error) { return { type: eventConstants.RELATION_SEARCH_FAILURE, error } }
}

function addRetailerSoldTo(data, retailerCode) {
  return dispatch => {
    dispatch(request());

   (!!data || !!retailerCode) ? eventService.addRetailerSoldTo(data, retailerCode)
      .then(
        addretailersoldto => dispatch(success(addretailersoldto)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.ADD_RETAILER_SOLDTO_REQUEST } }
  function success(addretailersoldto) { return { type: eventConstants.ADD_RETAILER_SOLDTO_SUCCESS, addretailersoldto } }
  function failure(error) { return { type: eventConstants.ADD_RETAILER_SOLDTO_FAILURE, error } }
  function clearToast() { return { type: eventConstants.ADD_RETAILER_SOLDTO_CLEAR_TOAST } }
}


function getRetailerLoyaltyList(RetailerCode,fromIndex,toIndex) {
  return dispatch => {
    dispatch(request());

    eventService.getRetailerLoyaltyList(RetailerCode,fromIndex,toIndex)
      .then(
        retailerloyaltylist => dispatch(success(retailerloyaltylist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RETAILER_LOYALTY_LIST_REQUEST } }
  function success(retailerloyaltylist) { return { type: eventConstants.RETAILER_LOYALTY_LIST_SUCCESS, retailerloyaltylist } }
  function failure(error) { return { type: eventConstants.RETAILER_LOYALTY_LIST_FAILURE, error } }
}


function getRetailerLoyaltySearch(search, RetailerCode,fromIndex,toIndex) {
  return dispatch => {
    dispatch(request());

    eventService.getRetailerLoyaltySearch(search, RetailerCode,fromIndex,toIndex)
      .then(
        retailerloyaltysearch => dispatch(success(retailerloyaltysearch)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RETAILER_LOYALTY_SEARCH_REQUEST } }
  function success(retailerloyaltysearch) { return { type: eventConstants.RETAILER_LOYALTY_SEARCH_SUCCESS, retailerloyaltysearch } }
  function failure(error) { return { type: eventConstants.RETAILER_LOYALTY_SEARCH_FAILURE, error } }
}




function updateRetailerLoyaltyPoint(dataList) {
  return dispatch => {
    dispatch(request());

    dataList ? eventService.updateRetailerLoyaltyPoint(dataList && dataList.data, dataList && dataList.id)
      .then(
        updateretailerloyaltypoint => dispatch(success(updateretailerloyaltypoint)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.UPDATE_RETAILER_LOYALTY_POINT_REQUEST } }
  function success(updateretailerloyaltypoint) { return { type: eventConstants.UPDATE_RETAILER_LOYALTY_POINT_SUCCESS, updateretailerloyaltypoint } }
  function failure(error) { return { type: eventConstants.UPDATE_RETAILER_LOYALTY_POINT_FAILURE, error } }
  function clearToast() { return { type: eventConstants.UPDATE_RETAILER_LOYALTY_POINT_CLEAR_TOAST } }

}


function deleteRetailerLoyaltyList(customerId) {
  return dispatch => {
    dispatch(request());

   !!customerId ? eventService.deleteRetailerLoyaltyList(customerId)
      .then(
        deleteretailerloyalty => dispatch(success(deleteretailerloyalty)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.DELETE_RETAILER_LOYALTY_REQUEST } }
  function success(deleteretailerloyalty) { return { type: eventConstants.DELETE_RETAILER_LOYALTY_SUCCESS, deleteretailerloyalty } }
  function failure(error) { return { type: eventConstants.DELETE_RETAILER_LOYALTY_FAILURE, error } }
  function clearState() { return { type: eventConstants.DELETE_RETAILER_LOYALTY_CLEAR_TOAST } }
}




function AddSoldTosubDealer(customerId) {
  return dispatch => {
    dispatch(request());

   !!customerId ? eventService.AddSoldTosubDealer(customerId)
      .then(
        addsoldtosubdealer => dispatch(success(addsoldtosubdealer)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.ADD_SOLD_TO_SUBDEALER_REQUEST } }
  function success(addsoldtosubdealer) { return { type: eventConstants.ADD_SOLD_TO_SUBDEALER_SUCCESS, addsoldtosubdealer } }
  function failure(error) { return { type: eventConstants.ADD_SOLD_TO_SUBDEALER_FAILURE, error } }
  function clearState() { return { type: eventConstants.ADD_SOLD_TO_SUBDEALER_CLEAR_TOAST } }
}



function VNOrLKRetailerContactExcel() {
  return dispatch => {
    dispatch(request());

    eventService.VNOrLKRetailerContactExcel()
      .then(
        retailervnlkcontactexcel => dispatch(success(retailervnlkcontactexcel)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RETAILER_DOWNLOAD_CONTACT_VNLK_REQUEST } }
  function success(retailervnlkcontactexcel) { return { type: eventConstants.RETAILER_DOWNLOAD_CONTACT_VNLK_SUCCESS, retailervnlkcontactexcel } }
  function failure(error) { return { type: eventConstants.RETAILER_DOWNLOAD_CONTACT_VNLK_FAILURE, error } }

}


function getDealerActivityPoint(fromIndex,toIndex) {
  return dispatch => {
    dispatch(request());

    eventService.getDealerActivityPoint(fromIndex,toIndex)
      .then(
        dealeractivityPoint => dispatch(success(dealeractivityPoint)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DEALER_ACTIVITY_POINT_REQUEST } }
  function success(dealeractivityPoint) { return { type: eventConstants.DEALER_ACTIVITY_POINT_SUCCESS, dealeractivityPoint } }
  function failure(error) { return { type: eventConstants.DEALER_ACTIVITY_POINT_FAILURE, error } }
}


function getDealerActivityLoyaltyReports(filterData) {
  return dispatch => {
    dispatch(request());

    eventService.getDealerActivityLoyaltyReports(filterData)
      .then(
        dealeractivityloyaltyreport => dispatch(success(dealeractivityloyaltyreport)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DEALER_ACTIVITY_LOYALTY_REPORT_REQUEST } }
  function success(dealeractivityloyaltyreport) { return { type: eventConstants.DEALER_ACTIVITY_LOYALTY_REPORT_SUCCESS, dealeractivityloyaltyreport } }
  function failure(error) { return { type: eventConstants.DEALER_ACTIVITY_LOYALTY_REPORT_FAILURE, error } }
}


function getVolumeAllocationLoyalty(fromIndex,toIndex) {
  return dispatch => {
    dispatch(request());

    eventService.getVolumeAllocationLoyalty(fromIndex,toIndex)
      .then(
        volumeallocationloyalty => dispatch(success(volumeallocationloyalty)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.VOLUME_ALLOCATION_LOYALTY_REQUEST } }
  function success(volumeallocationloyalty) { return { type: eventConstants.VOLUME_ALLOCATION_LOYALTY_SUCCESS, volumeallocationloyalty } }
  function failure(error) { return { type: eventConstants.VOLUME_ALLOCATION_LOYALTY_FAILURE, error } }
}

function getVolumeAllicationLoyaltyReports(filterData) {
  return dispatch => {
    dispatch(request());

    eventService.getVolumeAllicationLoyaltyReports(filterData)
      .then(
        volumeallocationloyaltyreport => dispatch(success(volumeallocationloyaltyreport)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.VOLUME_ALLOCATION_LOYALTY_REPORT_REQUEST } }
  function success(volumeallocationloyaltyreport) { return { type: eventConstants.VOLUME_ALLOCATION_LOYALTY_REPORT_SUCCESS, volumeallocationloyaltyreport } }
  function failure(error) { return { type: eventConstants.VOLUME_ALLOCATION_LOYALTY_REPORT_FAILURE, error } }
}

function getSubDealerLoyaltyReport(filterData) {
  return dispatch => {
    dispatch(request());

    eventService.getSubDealerLoyaltyReport(filterData)
      .then(
        subdealerloyaltyreport => dispatch(success(subdealerloyaltyreport)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SUB_DEALER_LOYALTY_REPORT_REQUEST } }
  function success(subdealerloyaltyreport) { return { type: eventConstants.SUB_DEALER_LOYALTY_REPORT_SUCCESS, subdealerloyaltyreport } }
  function failure(error) { return { type: eventConstants.SUB_DEALER_LOYALTY_REPORT_FAILURE, error } }
}

function getSubDealerActivityPoint(fromIndex,toIndex) {
  return dispatch => {
    dispatch(request());

    eventService.getSubDealerActivityPoint(fromIndex,toIndex)
      .then(
        subdealeractivitypoint => dispatch(success(subdealeractivitypoint)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SUB_DEALER_ACTIVITY_POINT_REQUEST } }
  function success(subdealeractivitypoint) { return { type: eventConstants.SUB_DEALER_ACTIVITY_POINT_SUCCESS, subdealeractivitypoint } }
  function failure(error) { return { type: eventConstants.SUB_DEALER_ACTIVITY_POINT_FAILURE, error } }
}


function getAdjustLoyaltyPoint(filterData) {
  return dispatch => {
    dispatch(request());

    eventService.getAdjustLoyaltyPoint(filterData)
      .then(
        adjustloyaltyreport => dispatch(success(adjustloyaltyreport)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADJUST_LOYALTY_REPORT_REQUEST } }
  function success(adjustloyaltyreport) { return { type: eventConstants.ADJUST_LOYALTY_REPORT_SUCCESS, adjustloyaltyreport } }
  function failure(error) { return { type: eventConstants.ADJUST_LOYALTY_REPORT_FAILURE, error } }
}


function getAdjustReportList(fromIndex, toIndex) {
  return dispatch => {
    dispatch(request());

    eventService.getAdjustReportList(fromIndex, toIndex)
      .then(
        adjustreportlist => dispatch(success(adjustreportlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADJUST_REPORT_LIST_REQUEST } }
  function success(adjustreportlist) { return { type: eventConstants.ADJUST_REPORT_LIST_SUCCESS, adjustreportlist } }
  function failure(error) { return { type: eventConstants.ADJUST_REPORT_LIST_FAILURE, error } }
}

function getBillingYearList() {
  return dispatch => {
    dispatch(request());

    eventService.getBillingYearList()
      .then(
        billingyearlist => dispatch(success(billingyearlist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.BILLING_YEAR_LIST_REQUEST } }
  function success(billingyearlist) { return { type: eventConstants.BILLING_YEAR_LIST_SUCCESS, billingyearlist } }
  function failure(error) { return { type: eventConstants.BILLING_YEAR_LIST_FAILURE, error } }
}


function downloadDealerActivityXsl(downloadData) {
  return dispatch => {
    dispatch(request());

    eventService.downloadDealerActivityXsl(downloadData)
      // .then(
      //   downloaddealeractivity => dispatch(success(downloaddealeractivity)),
      //   error => dispatch(failure(error.toString()))
      // );
  };
  function request() { return { type: eventConstants.DOWNLOAD_DEALER_ACTIVITY_REQUEST } }
  function success(downloaddealeractivity) { return { type: eventConstants.DOWNLOAD_DEALER_ACTIVITY_SUCCESS, downloaddealeractivity } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_DEALER_ACTIVITY_FAILURE, error } }
}

function downloadVolumeAllocationXsl(downloadData) {
  return dispatch => {
    dispatch(request());

    eventService.downloadVolumeAllocationXsl(downloadData)
      // .then(
      //   downloadvolumeallocation => dispatch(success(downloadvolumeallocation)),
      //   error => dispatch(failure(error.toString()))
      // );
  };
  function request() { return { type: eventConstants.DOWNLOAD_VOLUME_ALLOCATION_REQUEST } }
  function success(downloadvolumeallocation) { return { type: eventConstants.DOWNLOAD_VOLUME_ALLOCATION_SUCCESS, downloadvolumeallocation } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_VOLUME_ALLOCATION_FAILURE, error } }
}

function downloadSubDealerActivityXsl(downloadData) {
  return dispatch => {
    dispatch(request());

    eventService.downloadSubDealerActivityXsl(downloadData)
      // .then(
      //   downloadsubdealeractivity => dispatch(success(downloadsubdealeractivity)),
      //   error => dispatch(failure(error.toString()))
      // );
  };
  function request() { return { type: eventConstants.DOWNLOAD_SUB_DEALER_ACTIVITY_REQUEST } }
  function success(downloadsubdealeractivity) { return { type: eventConstants.DOWNLOAD_SUB_DEALER_ACTIVITY_SUCCESS, downloadsubdealeractivity } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_SUB_DEALER_ACTIVITY_FAILURE, error } }
}

function downloadAdjustLoyaltyXsl(downloadData) {
  return dispatch => {
    dispatch(request());

    eventService.downloadAdjustLoyaltyXsl(downloadData)
      // .then(
      //   downloadadjustloyalty => dispatch(success(downloadadjustloyalty)),
      //   error => dispatch(failure(error.toString()))
      // );
  };
  function request() { return { type: eventConstants.DOWNLOAD_ADJUST_LOYALTY_REQUEST } }
  function success(downloadadjustloyalty) { return { type: eventConstants.DOWNLOAD_ADJUST_LOYALTY_SUCCESS, downloadadjustloyalty } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_ADJUST_LOYALTY_FAILURE, error } }
}

function addClasswithStype(styleClass) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(styleClass))
  };

  function request(addclasswithstyle) {
    return { type: eventConstants.ADD_CLASS_WITH_STYLE_REQUEST, addclasswithstyle };
  }
  function success(addclasswithstyle) {
    return { type: eventConstants.ADD_CLASS_WITH_STYLE_SUCCESS, addclasswithstyle };
  }
  function failure(error) {
    return { type: eventConstants.ADD_CLASS_WITH_STYLE_FAILURE, error };

  }
}


function fontSizeChanger(fontsize) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(fontsize))
  };

  function request(fontsizechanger) {
    return { type: eventConstants.FONT_SIZE_CHANGER_REQUEST, fontsizechanger };
  }
  function success(fontsizechanger) {
    return { type: eventConstants.FONT_SIZE_CHANGER_SUCCESS, fontsizechanger };
  }
  function failure(error) {
    return { type: eventConstants.FONT_SIZE_CHANGER_FAILURE, error };

  }
}


function adjustLoyltydeleteAdmin(id) {
  return dispatch => {
    dispatch(request());

    !!id ? eventService.adjustLoyltydeleteAdmin(id)
      .then(
        adjustloyaltydeleteadmin => dispatch(success(adjustloyaltydeleteadmin)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearToast());
  };
  function request() { return { type: eventConstants.ADJUST_LOYALTY_DELETE_ADMIN_REQUEST } }
  function success(adjustloyaltydeleteadmin) { return { type: eventConstants.ADJUST_LOYALTY_DELETE_ADMIN_SUCCESS, adjustloyaltydeleteadmin } }
  function failure(error) { return { type: eventConstants.ADJUST_LOYALTY_DELETE_ADMIN_FAILURE, error } }
  function clearToast() { return { type: eventConstants.ADJUST_LOYALTY_DELETE_ADMIN_CLEAR_TOAST } }
}


function selectMultiCheckbox(data) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(data))
  };

  function request(selectmulticheckbox) {
    return { type: eventConstants.MULTI_CHECK_BOX_REQUEST, selectmulticheckbox };
  }
  function success(selectmulticheckbox) {
    return { type: eventConstants.MULTI_CHECK_BOX_SUCCESS, selectmulticheckbox };
  }
  function failure(error) {
    return { type: eventConstants.MULTI_CHECK_BOX_FAILURE, error };

  }
}

function downloadAdjustLoyaltyAdmin() {
  return dispatch => {
    dispatch(request());

    eventService.downloadAdjustLoyaltyAdmin()
      .then(
        downloadadjustloyaltyadmin => dispatch(success(downloadadjustloyaltyadmin)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DOWNLOAD_ADJUST_LOYALTY_ADMIN_REQUEST } }
  function success(downloadadjustloyaltyadmin) { return { type: eventConstants.DOWNLOAD_ADJUST_LOYALTY_ADMIN_SUCCESS, downloadadjustloyaltyadmin } }
  function failure(error) { return { type: eventConstants.DOWNLOAD_ADJUST_LOYALTY_ADMIN_FAILURE, error } }
}



function getAdjustLoyaltyAdminFilter(filterData) {
  return dispatch => {
    dispatch(request());

    eventService.getAdjustLoyaltyAdminFilter(filterData)
      .then(
        adjustloyaltyadminfilter => dispatch(success(adjustloyaltyadminfilter)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ADJUST_LOYALTY_ADMIN_FILTER_REQUEST } }
  function success(adjustloyaltyadminfilter) { return { type: eventConstants.ADJUST_LOYALTY_ADMIN_FILTER_SUCCESS, adjustloyaltyadminfilter } }
  function failure(error) { return { type: eventConstants.ADJUST_LOYALTY_ADMIN_FILTER_FAILURE, error } }
}



function getMyAllExpiredCalcRules() {
  return dispatch => {
    dispatch(request());

   eventService.getMyAllExpiredCalcRules()
      .then(
        allexpiredcalcrules => dispatch(success(allexpiredcalcrules)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.ALL_EXPIRED_EXPIRE_RULES_REQUEST } }
  function success(allexpiredcalcrules) { return { type: eventConstants.ALL_EXPIRED_EXPIRE_RULES_SUCCESS, allexpiredcalcrules } }
  function failure(error) { return { type: eventConstants.ALL_EXPIRED_EXPIRE_RULES_FAILURE, error } }

}


function RetailerProvince(countryCode) {
  return dispatch => {
    dispatch(request());

   eventService.RetailerProvince(countryCode)
      .then(
        retailerprovince => dispatch(success(retailerprovince)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RETAILER_PROVINCE_REQUEST } }
  function success(retailerprovince) { return { type: eventConstants.RETAILER_PROVINCE_SUCCESS, retailerprovince } }
  function failure(error) { return { type: eventConstants.RETAILER_PROVINCE_FAILURE, error } }

}

function RetailerDistrict(district) {
  return dispatch => {
    dispatch(request());

   eventService.RetailerDistrict(district)
      .then(
        retailerdistrict => dispatch(success(retailerdistrict)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RETAILER_DISTRICT_REQUEST } }
  function success(retailerdistrict) { return { type: eventConstants.RETAILER_DISTRICT_SUCCESS, retailerdistrict } }
  function failure(error) { return { type: eventConstants.RETAILER_DISTRICT_FAILURE, error } }

}

function RetailerSubDistrict(subdistrict) {
  return dispatch => {
    dispatch(request());

   eventService.RetailerSubDistrict(subdistrict)
      .then(
        retailersubdistrict => dispatch(success(retailersubdistrict)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RETAILER_SUB_DISTRICT_REQUEST } }
  function success(retailersubdistrict) { return { type: eventConstants.RETAILER_SUB_DISTRICT_SUCCESS, retailersubdistrict } }
  function failure(error) { return { type: eventConstants.RETAILER_SUB_DISTRICT_FAILURE, error } }

}


function salesSoldtoAreaList(soldtonumber) {
  return dispatch => {
    dispatch(request());

   eventService.salesSoldtoAreaList(soldtonumber)
      .then(
        salessoldtoarealist => dispatch(success(salessoldtoarealist)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.SALES_SOLDTO_AREALIST_REQUEST } }
  function success(salessoldtoarealist) { return { type: eventConstants.SALES_SOLDTO_AREALIST_SUCCESS, salessoldtoarealist } }
  function failure(error) { return { type: eventConstants.SALES_SOLDTO_AREALIST_FAILURE, error } }

}

