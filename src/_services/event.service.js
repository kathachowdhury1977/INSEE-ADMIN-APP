//import config from 'config';
import { API_URL_USER, API_URL_ADMIN, API_URL_VPS, API_URL_OMS, API_URL_AMS } from "../Constant/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from "axios";

export const eventService = {
  addUser,
  soldToManagmentList,
  productmasterList,
  productGroupmasterList,
  AddProductGroup,
  productGroupSearch,
  productMasterDetail,
  GeographyMasterUpload,
  insseDesUpdate,
  productMasterSearch,
  DownloadContact,
  contactToggle,
  AccountContactList,
  productGroupDetailList,
  productDetailImageUpload,
  getDivision,
  subDealerData,
  addDivision,
  updateDivision,
  deleteDivision,
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
  addCaseStatus,
  updateCaseStatus,
  deleteCaseStatus,
  CaseType,
  retailerSubdealers,
  addCaseType,
  updateCaseType,
  deleteCaseType,
  ContactStatus,
  ProductGroupstatus,
  UpdateProductGroup,
  UnitMaster,
  addUnitMaster,
  addPriceType,
  getPriceType,
  addRetailerPaymentTermMaster,
  getRetailerPaymentTermMaster,
  addPackageType,
  getPackageType,
  addProjectType,
  getProjectType,
  getMarketIntelligence,
  addMarketIntelligence,
  getDeliveryMode,
  addDeliveryMode,
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
  getCompatitorProduct,
  addCompatitorProduct,
  getOrderType,
  addOrderType,
  getProductType,
  addProductType,
  getTransporter,
  addTransporter,
  addCaseOrigin,
  getCaseOrigin,
  addCategory,
  getCategory,
  updateCategory,
  deleteCategory,
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
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
  addDescription,
  getDescription,
  updateDescription,
  deleteDescription,
  addDeliveryStatus,
  getDeliveryStatus,
  addActionStatus,
  getActionStatus,
  addActionCategory,
  getActionCategory,
  addDepartment,
  getDepartment,
  addFunctionalRole,
  getFunctionalRole,
  addLeadSource,
  getLeadSource,
  addLeadStage,
  getLeadStage,
  UpdateSoldToManagment,
  getRoleList,
  RegionList,
  ProvinceList,
  DistrictList,
  SegmentList,
  getAllUser,
  SubDistrictList,
  AssignProductGroupDetailList,
  GeographyMasterList,
  ProductImageGetList,
  SoldToManagmentSearch,
  AccountFormData,
  ProductActiveAssignList,
  ProductMasterActiveInactive,
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
  updateTruckMaster,
  UploadGuideLinematrix,
  UploadRetailer,
  UploadInseePrivilage,
  UploadCustomerTier,
  getStrategyMatrix,
  addStrategyMatrix,
  InternalManagmentFilter,
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
  logout,
  getWithVechileIdList,
  getChannelType,
  getAppType,
  addBannerImage,
  getBannerImageList,
  searchRetailer,
  productMasterDeleteGroup,
  addConwoodMaster,
  dropdownParentCategory,
  getConwoodAllCategoryList,
  deleteCategoryList,
  editConwoodList,
  UploadProductGroup,
  uploadSoldToManagement,
  updateContactList,
  UpdatecontactToggle,
  autoFillContactForm,
  DownloadSoldTo,
  deleteBannerList,
  editBannerList,
  getDashboardImage,
  downloadProductGroup,
  UploadContact,
  DownloadInseePrivilege,
  DownloadCustomerTier,
  ShipToSearch,
  ContractListBySearchValue,
  TruckMasterSearch,
  SubDealerSearch,
  ContactListBySearchValue,
  DownloadContactDetails,
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
  assignProductAddDate,
  assignProductUpdateDate,
  getdateAssignbyId,
  assignSoldToProductUpdateDate,
  getdateAssignSoldTobyId,
  addProductDateUnderSoldTo,
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
  uploadAdjustLoyalityAdmin,
  uploadLoyalityCutOffRules,
  getLoyalityCalcRules,
  getLoyalityCutOffRules,
  getAdjuctLoyalityAdmin,
  deleteSpecialProjectDelivery,
  uploadSpecialProjectDelivery,
  updateSpecialProjectDelivey,
  deleteLoyalityCalcRules,
  deleteLoyalityCutOffRules,
  deleteAdjectLoyalityAdmin,
  productAssignListSearch,
  deleteUsermanagmentCustomer,
  updateUsermanagmentCustomer,
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
  InseePrivilageForMonthYear,
  adjustLoyltydeleteAdmin,
  downloadAdjustLoyaltyAdmin,
  getAdjustLoyaltyAdminFilter,
  getMyAllExpiredCalcRules,
  RetailerProvince,
  RetailerDistrict,
  RetailerSubDistrict,
  salesSoldtoAreaList


};


function autoFillContactForm(soldToNumber, userId) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `mds/soldTo/getUsercontactDetails?soldToNumber=` + soldToNumber + `&userId=` + userId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}



function addUser(UpdateData, loginID) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_USER + `ums/internal-user/createUser?createdby=` + loginID, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function soldToManagmentList(endIndex, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `customer/soldToByIndex?endIndex=` + endIndex + `&startIndex=` + startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function productmasterList(countryCode, endIndex,filterData, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  let setQueryString = '';
  filterData && filterData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });

  return fetch(API_URL_ADMIN + `products/admin/pagination/getAllProductListByIndex?countryCode=`+countryCode+`&endIndex=`+endIndex+`${remove_second_occurrence(setQueryString, '&')}&startIndex=` + startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function productGroupmasterList(endIndex, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `product_group/getProductGroupByIndex?endIndex=` + endIndex + `&startIndex=` + startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function AddProductGroup(UpdateData) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `product_group`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function productGroupSearch(endIndex, searchText, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `product_group/searchByName?endIndex=` + endIndex + `&searchText=` + searchText + `&startIndex=` + startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function productMasterDetail(productID) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `products/getProductById/` + productID, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function GeographyMasterUpload(contrycode, category, upload) {
  const formData = new FormData();
  formData.append('file', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `geographical/${contrycode}/${category}`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function insseDesUpdate(UpdateData) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `admin/update`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function productMasterSearch(endIndex, productname, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `products/searchByName?endIndex=` + endIndex + `&searchText=` + productname + `&startIndex=` + startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function contactToggle(UpdateData) {
  console.log("myuserId", UpdateData.userId);
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", "X-USER-ID": UpdateData.userId,
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_USER + `ums/external-user`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      console.log("result++", result);
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}

function AccountContactList(SoldToNumber) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(
    API_URL_ADMIN + `soldTo/usercontactsUnderSoldTO/` + SoldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      console.log(result, "resultsss")
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function productGroupDetailList(productgroupname) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `products/admin/getProductGroupByName/` + productgroupname, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function productDetailImageUpload(files, productData, thumbnail) {
  const formData = new FormData();
  formData.append('productData', JSON.stringify(productData));
  formData.append('isThumbnailImg', thumbnail);
  formData.append('files', files);
  console.log('data validation check', files);
  const requestOptions = {
    method: "POST",
    headers: {
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: formData
  };

  return fetch(API_URL_ADMIN + `products/productid/attachments`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getDivision(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/division/get`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addDivision(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/division/create`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function updateDivision(countryCode, id, data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/division/update/` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function deleteDivision(countryCode, id, data) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/division/delete/` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getBusinessSegment(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/business-segment`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addBusinessSegment(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/business-segment`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getDistributionChannel(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/distributed-channels`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addDistributionChannel(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/distributed-channels`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getShippingCondition(countryCode, category) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/shipping-condition?productCategory=` + category, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addShippingCondition(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/shipping-condition`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function SpecialProcessing(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/special-processing`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addSpecialProcessing(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/special-processing`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function transportorZone(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/transporterZone`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addTransportorZone(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/transporterZone`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function shppingType(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/shipping-types`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addShippingType(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/shipping-types`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function CaseStatus(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/case-status/get`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function addCaseStatus(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/case-status/create?name=` + data, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function updateCaseStatus(countryCode, id, name) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/case-status/update/` + id + `?name=` + name, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function deleteCaseStatus(countryCode, id, data) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/case-status/delete/` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function CaseType(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/case-type/get`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function addCaseType(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/case-type/create`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function updateCaseType(countryCode, id, data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/case-type/update/` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function deleteCaseType(countryCode, id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    }
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/case-type/delete/` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function ContactStatus(UpdateData, userId) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_USER + `external-user/userstatus/` + userId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function ProductGroupstatus(UpdateData, productGroupId) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `product_group/updateProductGroupStatus/` + productGroupId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function UpdateProductGroup(UpdateData, userId) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `product_group/update-groups`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function UnitMaster(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/unit`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addUnitMaster(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/unit`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getPriceType(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/price_type`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function addPriceType(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/price_type`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function addRetailerPaymentTermMaster(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/retailer_payment`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getRetailerPaymentTermMaster(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/retailer_payment`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function getPackageType(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/package-type`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addPackageType(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/package-type`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getProjectType(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/project_type`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addProjectType(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/project_type`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getMarketIntelligence(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/market_intelligence`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addMarketIntelligence(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/market_intelligence`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function addDeliveryMode(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/delivery_mode`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getDeliveryMode(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/delivery_mode`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function getSalesDistrict(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/sales_district`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addSalesDistrict(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/sales_district`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getPreferredTruckTypes(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/preferred-truck-types`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addPreferredTruckTypes(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/preferred-truck-types`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function addSalesOrganization(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/sales-organizations/`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}
function getSalesOrganization(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/sales-organizations`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addSpecialProject(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/CreateSpecialProjectDelivery`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}
function getSpecialProject(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/getAllSpecialProjectDeliveryData`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getAreaType(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/area_type`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addAreaType(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/area_type`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getStrategyType(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/strategy_type`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addStrategyType(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/strategy_type`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getCompatitorProduct(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/competitorProductBrand`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addCompatitorProduct(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/competitorProductBrand`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getOrderType(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/order-types?countryCode=` + countryCode, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addOrderType(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/order-types`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getProductType(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/productType`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addProductType(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/productType`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getTransporter(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/transporter`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addTransporter(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/transporter`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function UpdateSoldToManagment(UpdateData) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `soldTo/product-groups`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getCaseOrigin(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/case_origin`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addCaseOrigin(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/case_origin`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getCategory(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/category/get`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addCategory(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/category/create?name=` + data, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}
function updateCategory(countryCode, id, data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/category/update/` + id + `?name=` + data, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function deleteCategory(countryCode, id, data) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/category/delete/` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function addConstructionPhase(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/constructionPhase`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getConstructionPhase(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/constructionPhase`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addUserRole(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/userRole`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getUserRole(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/userRole`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addTruckType(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/truck_type`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getTruckType(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/truck_type`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addPromotionType(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/promotiontype`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getPromotionType(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/promotiontype`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addPriceBook(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/pricebook`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getPriceBook(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/pricebook`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addProductProduce(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/product_produce`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getProductProduce(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/product_produce`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addDistributionArea(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/distributionareaforcartageCost`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getDistributionArea(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/distributionareaforcartageCost`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addSubCategory(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/sub-category/create`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getSubCategory(countryCode, id) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/sub-category/get/` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function updateSubCategory(countryCode, id, data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/sub-category/update/` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function deleteSubCategory(countryCode, id, data) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/sub-category/delete/` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function addDescription(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/description/create`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getDescription(countryCode, id) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/description/get/` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function updateDescription(countryCode, id, data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/description/update/` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function deleteDescription(countryCode, id, data) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/description/delete/` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function addDeliveryStatus(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/orderStatus`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getDeliveryStatus(countryCode, id) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/orderStatus` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addActionStatus(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_AMS + `lead/actionStatus`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getActionStatus() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_AMS + `lead/actionStatus`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addActionCategory(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_AMS + `lead/actionCategory`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getActionCategory() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_AMS + `lead/actionCategory`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addDepartment(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_AMS + `lead/department`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getDepartment() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_AMS + `lead/department`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addFunctionalRole(key, value) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_AMS + `lead/functional-role?key=` + key + `&value=` + value, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getFunctionalRole() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_AMS + `lead/functional-role`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addLeadSource(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_AMS + `lead/lead-source`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getLeadSource() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_AMS + `lead/lead-source`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function addLeadStage(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_AMS + `lead/lead-stage`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getLeadStage() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_AMS + `lead/lead-stage`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getRoleList() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')

    },
  };

  return fetch(API_URL_USER + `ums/roles`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function RegionList(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `geographical/country/getGeopgraphyByCountry?country=` + countryCode, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function ProvinceList(region) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `geographical/region/getGeopgraphyByRegion?region=` + region, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function DistrictList(province) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `geographical/province/getGeopgraphyByProvince?province=` + province, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function SegmentList() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `ums/internal-user/segment`, requestOptions)

    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getAllUser() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `ums/internal-user/salesUsersSearch?searchText=`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function SubDistrictList(district) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `geographical/province/getGeopgraphyByDistinct?district=` + district, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function AssignProductGroupDetailList(productgroupid) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `product_group/getById/` + productgroupid, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function GeographyMasterList(endIndex, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `geographical/getGeographyByIndex?endIndex=` + endIndex + `&startIndex=` + startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function ProductImageGetList(productId) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `products/getProductById/order/` + productId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function SoldToManagmentSearch(country, endIndex1, searchText, startIndex1) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `soldTo/searchByName?countryCode=` + country + `&endIndex=` + endIndex1 + `&searchText=` + searchText + `&startIndex=` + startIndex1, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

// function AccountFormData(data) {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json", 
//     "X-USER-ID": "X-USER-ID", 'X-AUTH-TOKEN':localStorage.getItem('x-auth-token')
//      },
//     body: JSON.stringify(data)
//   };

//   return fetch(
//     API_URL_ADMIN + `soldTo/addContact`, requestOptions)
//     .then((res) => res.json())
//     .then((result) => {
//       if (!result.status) {
//         const error = (result && result.message) || result.statusText;
//         return Promise.reject(error);
//       }
//       return result.data;
//     });
// }


function AccountFormData(productData, mobile, upload) {
  const formData = new FormData();
  formData.append('userData', JSON.stringify(productData));
  formData.append('userId', mobile);
  formData.append('contactImage', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  };

  return fetch(
    API_URL_ADMIN + `soldTo/addContact`, requestOptions)

    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });


}


function ProductActiveAssignList() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `product_group/getActiveProductGroupList`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function ProductMasterActiveInactive(UpdateData, status) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `admin/updateProductStatus/` + status, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

// function soldtoProductGroupList(UpdateData, endIndex1,startIndex1) {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(UpdateData),
//   };
//   console.log(UpdateData, "updatedata");

//   return fetch(API_URL_ADMIN + `customer/getProductGroupByIndex?endIndex=`+endIndex1+`&startIndex=`+startIndex1, requestOptions)
//     .then((res) => res.json())
//     .then((result) => {
//       return result.data;
//     });
// }

function soldtoProductGroupList(soldtoNumber) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `products/getAssignedProductGroupListForSoldTo?soldToNumber=` + soldtoNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function GetcustomerGroup() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `customer-group/`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function addcustomerGroup(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `customer-group/`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function TruckMasterList(soldToNumber) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `vehicle?soldToNumber=` + soldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function ShipToList(soldToNumber) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `ship-to/customer/` + soldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }

      return result.data;

    });
}

function subDealerData(fromIndex, needInactive, searchText, soldToNumber, toIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `retailer/retailer/search?fromIndex=` + fromIndex + `&needInactive=` + needInactive + `&searchText=` + searchText + `&soldToNumber=` + soldToNumber + `&toIndex=` + toIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }

      return result.data;

    });
}




function SoldToContractList(soldToNumber) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `contracts/account/` + soldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function ContractDetailList(contractId) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `contracts/` + contractId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function InseePrivilageList(endIndex, soldToNumber, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `admin/admin/getListOfInsseprivilage?endIndex=` + endIndex + `&soldToNumber=` + soldToNumber + `&startIndex=` + startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      console.log("insee list", result);
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function InseePrivilageForMonthYear(endIndex, soldToNumber, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `admin/admin/getListOfInsseprivilage?endIndex=` + endIndex + `&soldToNumber=` + soldToNumber + `&startIndex=` + startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      console.log("insee list", result);
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function AddRole(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", "X-USER-ID": "X-USER-ID",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `ums/roles`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getAllRoleList() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `metadata/%7BcountryCode%7D/userRole`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function AddTruckMaster(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `vehicle`, requestOptions)
    .then((res) => res.json())
    .then((result) => {

      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}

function getOwnerShip() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `vehicle/ownership`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function vechileStatusList() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `vehicle/vehicleStatus`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function vechileTypeList(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `vehicle/vehicletypes?countryCode=` + countryCode, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function GuideLinematrix(endIndex, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `guideline-matrix?endIndex=` + endIndex + `&startIndex=` + startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function updateTruckMaster(data, vechileId) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `vehicle/` + vechileId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function UploadGuideLinematrix(month, year, upload) {
  const formData = new FormData();
  formData.append('file', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `guideline-matrix/` + month + `/` + year, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function UploadRetailer(country, upload) {
  const formData = new FormData();
  formData.append('file', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `retailer/data/upload?countryCode=` + country, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function UploadInseePrivilage(month, year, upload) {
  const formData = new FormData();
  formData.append('file', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `admin/insseprivilage?month=` + month + `&year=` + year, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      console.log("insee Privilage", result);
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function UploadCustomerTier(year, upload) {
  const formData = new FormData();
  formData.append('file', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `admin/currentTierStatus?year=` + year, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}

function getStrategyMatrix() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_VPS + `strategyMatrix/getStrategyMatrix`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function addStrategyMatrix(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_VPS + `strategyMatrix/createStrategyMatrix`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function remove_first_occurrence(str, searchstr) {
  var index = str.indexOf(searchstr);
  if (index === -1) {
    return str;
  }
  return '?' + str.slice(index + searchstr.length);
}

function remove_second_occurrence(str, searchstr) {
  var index = str.indexOf(searchstr);
  if (index === -1) {
    return str;
  }
  return '&' + str.slice(index + searchstr.length);
}



function InternalManagmentFilter(filterData) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  let setQueryString = '';
  filterData && filterData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });
  ///console.log("service API",remove_first_occurrence(setQueryString,'&'));

  return fetch(API_URL_USER + `ums/internal-user/getAllSalesUserByFilter${remove_first_occurrence(setQueryString, '&')}`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function InternalManagmentSearch(searchName) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `ums/internal-user/salesUsersSearch?searchText=` + searchName, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function CustomerUserId(userid) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `ums/external-user/getCustomerByContactId/` + userid, requestOptions)
    .then((res) => res.json())
    .then((result) => {

      if (result.status === 401) {
        const error = result.error;

        return Promise.reject(error);
      }
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getCustomerTierList(endIndex, soldToNumber, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `admin/getListOfcurrenttierstatus?endIndex=` + endIndex + `&soldToNumber=` + soldToNumber + `&startIndex=` + startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function retailerList(fromIndex, toIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `retailer/all/data?fromIndex=` + fromIndex + `&toIndex=` + toIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function loyaltyCustomerTypeList() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_OMS + `loyalty-points/customerType`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function postloyaltyPointForm(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_OMS + `loyalty-points/newCalcRules`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getloyaltyPointList(productCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_OMS + `loyality-points/getCalcRules?productCode=` + productCode, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function productClassificationList() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `products/getAllProductExcel`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addProductClassification(upload) {
  const formData = new FormData();
  formData.append('file', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  };

  return fetch(API_URL_ADMIN + `products/uploadExcel`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function productGroupEditList(ProductId) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `product_group/findByProductId/` + ProductId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function deleteAssignProductList(data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `product_group/deleteAssignProduct`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function deleteSoldToProductGroupList(productGroupId, soldToNumber) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `products/deleteProductGroupDateInSoldTo?productGroupId=` + productGroupId + `&soldToNumber=` + soldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function modifiedProductGroup(data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `product_group/updateProductGroup`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}




function getWithVechileIdList(vechileId) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `vehicle/` + vechileId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getChannelType() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `admin/channelMaster`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getAppType() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `admin/appTypeMaster`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getBannerImageList(country) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `admin/dashboardImages/all?country=` + country, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addBannerImage(country, edate, upload, apptype, channeltype, sdate) {
  const formData = new FormData();
  formData.append('country', country);
  formData.append('endDate', edate);
  formData.append('files', upload);
  formData.append('appType', apptype);
  formData.append('channel', channeltype);
  formData.append('startDate', sdate);

  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `admin/dashboardImages/post`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      console.log("add bannerimage", result);
      return result.data;
    });
}



function searchRetailer(searchText) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `retailer/getByNameAndCode?endIndex=10000000&searchText=` + searchText + `&startIndex=1`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}






function retailerSubdealers(endIndex1, filterData, startIndex1) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  let setQueryString = '';
  filterData && filterData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });
  return fetch(
    API_URL_ADMIN + `retailer/getByNameAndCode?endIndex=` + endIndex1 + `${remove_second_occurrence(setQueryString, '&')}&startIndex=` + startIndex1,
    requestOptions
  )
    .then((res) => res.json())
    .then((result) => {
      console.log("My retailer result", result);
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function productMasterDeleteGroup(data, productGroupName) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `product_group/deleteByGroupName/` + productGroupName, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function addConwoodMaster(UpdateData) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `conwood/addCategoryAndSubCategory`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}

function dropdownParentCategory() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `conwood/getAllParentCategory`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getConwoodAllCategoryList(level) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `conwood/getCategoryListByCountryCode?level=` + level, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function deleteCategoryList(categoryIds) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(),
  };

  return fetch(API_URL_ADMIN + `conwood/deleteCategory?categoryId=` + categoryIds, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function editConwoodList(cateId, endDate, startDate) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(),
  };

  return fetch(API_URL_ADMIN + `conwood/update-date?categoryId=` + cateId + `&endDate=` + endDate + `&startDate=` + startDate, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function UploadProductGroup(upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "PUT",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `product_group/importingExcelSheet`, requestOptions)
    .then((res) => res.json())
    .then((result) => {

      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}

function uploadSoldToManagement(upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "PUT",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `soldTo/importingExcelSheet`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function updateContactList(productData, mobile, upload) {
  const formData = new FormData();
  formData.append('userData', JSON.stringify(productData));
  formData.append('userId', mobile);
  formData.append('contactImage', upload);
  const requestOptions = {
    method: "PUT",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  };

  return fetch(
    API_URL_ADMIN + `soldTo/update-contactInfo`, requestOptions)

    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });


}



function UpdatecontactToggle(UpdateData) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_USER + `ums/external-user/updateCustomer`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function DownloadSoldTo() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `soldTo/getUrlForSoldToProductGroupExcel`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function DownloadContact() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `retailer/getUrlForRetailerContactExcel`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}



function UploadContact(upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "PUT",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `soldTo/uploadExcelSheetForContact`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}





function deleteBannerList(Id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(),
  };

  return fetch(API_URL_ADMIN + `admin/deleteDashBoardItemById?id=` + Id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function editBannerList(requestData) {
  const formData = new FormData();
  formData.append('dashBoardImageData', JSON.stringify(requestData));
  const requestOptions = {
    method: "PUT",
    headers: {
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: formData,
  };

  return fetch(API_URL_ADMIN + `admin/dashboardImages/update`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getDashboardImage(id) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `admin/dashboardImages/getById?id=${id}`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function downloadProductGroup() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `product_group/getUrlForProductExcel`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function ContractListBySearchValue(accountNumber, searchKey) {
  const requestOptions = {
    method: "GET",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
  }

  return fetch(API_URL_ADMIN + `contracts/account/${accountNumber}?searchKey=${searchKey}`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function DownloadInseePrivilege() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `admin/getUrlForInseePrivilegeExcel`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function DownloadCustomerTier() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `admin/getUrlForCurrentTierExcel`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function ShipToSearch(accountnumber, search) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `ship-to/searchBy/` + accountnumber + `?searchKey=` + search, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function ContactListBySearchValue(accountNumber, searchKey) {
  const requestOptions = {
    method: "GET",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
  }

  return fetch(API_URL_ADMIN + `soldTo/searchForContact/${accountNumber}?searchKey=${searchKey}`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      console.log(result, "resultsss")
      return result.data;
    });
}



function TruckMasterSearch(accountNumber, endIndex, searchText, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `vehicle/searchByLicenceNo/` + accountNumber + `?endIndex=` + endIndex + `&searchText=` + searchText + `&startIndex=` + startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function SubDealerSearch(endIndex, searchText, soldToNumber, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `retailer/getByNameAndCode?endIndex=` + endIndex + `&searchText=` + searchText + `&soldToNumber=` + soldToNumber + `&startIndex=` + startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function DownloadContactDetails() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `soldTo/getUrlForContactExcel`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function deleteProductGroupList(data) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `product_group/deleteById`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function updateCustomerTier(data, id) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `admin/updateCustomerTierStatusRecord?Id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getautoCustomerTier(id) {
  const requestOptions = {
    method: "GET",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
  }

  return fetch(API_URL_ADMIN + `admin/getCustomerTierRecordById?id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      console.log(result, "resultsss")
      return result.data;
    });
}


function updateInseePrivilage(data, id) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `admin/updateInseePreviligeRecord?Id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getautoInseePrivilege(id) {
  const requestOptions = {
    method: "GET",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
  }

  return fetch(API_URL_ADMIN + `admin/getInseePreviligeRecordById?id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      console.log(result, "resultsss")
      return result.data;
    });
}


function deleteContactList(userName) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `soldTo/deleteById/` + userName, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function retailerDetailList(soldtonumber, searchValueSoldTo) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `retailer/getsoldTosByRetailerCode?retailerCode=${soldtonumber}&searchText=${searchValueSoldTo != undefined ? searchValueSoldTo : ''}`, requestOptions)
    .then((res) => res.json())
    .then((result) => {

      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }

      return result.data;
    });
}

function retailerAutoList(id) {
  const requestOptions = {
    method: "GET",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
  }

  return fetch(API_URL_ADMIN + `retailer/getRetailerRecordById?id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      console.log(result, "resultsss")
      return result.data;
    });
}


function updateRetailerList(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `retailer/update`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function DownloadRetailerExcel(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `soldTo/downloadExcelForSoldTo?countryCode=` + countryCode, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}




function filterProductMaster(division) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `products/admin/getAllProductsUnderDivision?division=` + division, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}



function downloadRetailerSubDealer() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `retailer/getUrlForRetailerExcel`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function resendEmailLoginCredential(userId) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },

  };

  return fetch(API_URL_USER + `ums/external-user/resendEmail?userId=` + userId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function assignProductAddDate(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `products/addDate`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function assignProductUpdateDate(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `products/updateDate`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getdateAssignbyId(productId, productGroupid) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `products/getAssignedProductByid/` + productId + `/` + productGroupid, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function assignSoldToProductUpdateDate(data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `products/updateProductGroupDatesUnderSoldTo`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getdateAssignSoldTobyId(productGroupId, soldToNumber) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `products/getAssignedProductGroupByIdInSoldTo?productGroupId=` + productGroupId + `&soldToNumber=` + soldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function addProductDateUnderSoldTo(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `products/addProductDatesUnderSoldTo`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function updateProductDateUnderSoldTo(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `products/updateProductDatesUnderSoldTo`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getAssignedProductListForSoldTo(productGroupId, soldToNumber) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `products/getAssignedProductListForSoldTo?productGroupId=` + productGroupId + `&soldToNumber=` + soldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function deleteProductDateInSoldTo(productGroupId, productId, soldToNumber) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `products/deleteProductDateInSoldTo?productGroupId=` + productGroupId + `&productId=` + productId + `&soldToNumber=` + soldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getAssignedProductGroupByIdInSoldTo(productGroupId, productId, soldToNumber) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `products/getAssignedProductByidInSoldTo?productGroupId=` + productGroupId + `&productId=` + productId + `&soldToNumber=` + soldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}



function uploadRetailerSubDealerExcel(country, upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "PUT",
    headers: {
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: formData,
  };
  // return fetch(API_URL_ADMIN + `retailer/uploadExcelSheetForRetailer?countryCode=`, requestOptions)
  return fetch(API_URL_ADMIN + `retailer/massContactExcelUploadForRetailer`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function uploadInseeVolume(year, upload) {
  const formData = new FormData();
  formData.append('file', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `admin/inseeVolumeUplaod?type=distributor&year=` + year, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function uploadLeadInseeVolume(year, upload) {
  const formData = new FormData();
  formData.append('file', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `admin/inseeVolumeUplaod?type=lead&year=` + year, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function uploadForcastInseeVolume(year, upload) {
  const formData = new FormData();
  formData.append('file', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `admin/inseeVolumeUplaod?type=forcast&year=` + year, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function conwoodAutofillCategory(categoryId) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `conwood/getCategoryDetailsForAutofill?categoryId=` + categoryId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getTotalInseeVolumeList(type) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `admin/totalInsseVolume?type=` + type, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}



function updateConwoodCategory(data, id) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `conwood/update-category?id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}



function SoldtoAllEmail(id) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  // console.log(requestOptions, "bodybody");

  return fetch(API_URL_USER + `ums/external-user/sendEmail?sendAllUsers=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {

      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}

function downloadInseeVolumeTemplate(type) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `admin/inseeVolumeTemplate?type=` + type, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function downloadCustomerGroupSoldTo() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `soldTo/getUrlForSoldCodeExcel`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}



function UpdateTotalInseeVolumeList(data) {

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: JSON.stringify(data)
  }

  return fetch(API_URL_ADMIN + `admin/update`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function UploadCustomerGroupCode(upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "PUT",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData
  }

  return fetch(API_URL_ADMIN + `soldTo/uploadCustomerGroupCode`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function SoldToDropdownContry(countryCode, endIndex, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `soldTo/searchByName?countryCode=` + countryCode + `&endIndex=` + endIndex + `&startIndex=` + startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function sendSMSformSoldTo(id) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  // console.log(requestOptions, "bodybody");

  return fetch(API_URL_USER + `ums/external-user/send-reset-sms/` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {

      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function SoldToPdpaForCustomer(data, boolenValue) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `soldTo/updatePdpStatusForCustomersUnderSoldTo?pdpConfirmed=` + boolenValue, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function UpdateActionCategory(data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `ams/lead/actionCategory`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function DeleteActionCategory(data) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_USER + `ams/lead/actionCategory`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}





function UpdateActionStatus(data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `ams/lead/actionStatus`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function DeleteActionStatus(data) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_USER + `ams/lead/actionStatus`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function UpdateAreaType(country, data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `metadata/` + country + `/area_type`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function DeleteAreaType(countryCode, data) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/area_type`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}




function UpdateCaseOrigin(Country, data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `metadata/` + Country + `/case_origin`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function DeleteCaseOrigin(Country, id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + Country + `/case_origin?id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}




function UpdateCompetitorProduct(country, data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `metadata/` + country + `/competitorProductBrand`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function DeleteCompetitorProduct(country, Id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + country + `/competitorProductBrand?competitorProductBrandId=` + Id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function UpdateConstructionPhase(country, data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `metadata/` + country + `/constructionPhase`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function DeleteConsttuctionPhase(country, Id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + country + `/constructionPhase?constructionPhaseId=` + Id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function UpdateDeliverMode(country, data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `metadata/` + country + `/delivery_mode`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function DeleteDeliveryMode(country, Id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + country + `/delivery_mode?id=` + Id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function SoldToSelectWithDivision(soldToNumber) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  return fetch(API_URL_ADMIN + `soldTo/soldToListWithDivision?soldToNUmber=`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}



function getPrefferedTruckDelivery(country) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `metadata/` + country + `/getPrefferredTruckDelivery`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function postPrefferedTruckDelivery(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/prefferred-truck-delivery`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function updatePrefferedTruckDelivery(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/prefferred-truck-delivery`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}




function uploadPrefferedTruckDelivery(contrycode, upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `metadata/` + contrycode + `/prefferredTruckDeliveryExcel`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function deletePrefferedTruckDelivery(country, Id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + country + `/delete-prefferredTruckDelivery?id=` + Id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getChooseTransportorZone(country) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `metadata/` + country + `/getChooseTransporter`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function postChooseTransportorZone(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/choose-transporter`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function uploadChooseTransportorZone(contrycode, upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `metadata/` + contrycode + `/excelfileChooseTransporter`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function deleteChooseTransportorZone(country, Id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `metadata/` + country + `/deleteChooseTransporter?id=` + Id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function updateChooseTransportorZone(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/choose-transporter`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}




function uploadLoyalityCalcRules(contrycode, upload) {
  const formData = new FormData();
  formData.append('country', contrycode);
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_USER + `oms/loyalty-points/uploadLoyaltyCalcRules`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}




function uploadAdjustLoyalityAdmin(upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_USER + `oms/loyalty-points/uploadAdjustLoyality`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}





function getLoyalityCalcRules(country, startIndex, endIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `oms/loyalty-points/getCalcRules/all?country=` + country + `&fromIndex=` + startIndex + `&toIndex=` + endIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getLoyalityCutOffRules(country, startIndex, endIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `oms/loyalty-points/getCutoffRules/all?country=` + country + `&fromIndex=` + startIndex + `&toIndex=` + endIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getAdjuctLoyalityAdmin(startIndex, endIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `oms/loyalty-points/getAllAdjustPoints?fromIndex=${startIndex}&toIndex=${endIndex}`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function deleteSpecialProjectDelivery(country, Id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(),
  };

  return fetch(API_URL_ADMIN + `metadata/` + country + `/deleteSpecialProjectDelivery?id=` + Id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function uploadSpecialProjectDelivery(contrycode, upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `metadata/` + contrycode + `/excelfileSpecialProjectDelivery`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function updateSpecialProjectDelivey(countryCode, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/CreateSpecialProjectDelivery`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function deleteLoyalityCalcRules(customerType, groupCode, materialGroup) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_USER + `oms/loyalty-points/newCalcRules/delete?customerType=` + customerType + `&groupCode=` + groupCode + `&materialGroup=` + materialGroup, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function deleteLoyalityCutOffRules(category, groupCode) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_USER + `oms/loyalty-points/newCutoffRules/delete?category=` + category + `&groupCode=` + groupCode, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function deleteAdjectLoyalityAdmin(category, soldToId) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_USER + `oms/loyalty-points/cutoffRules/delete?category=` + category + `&soldToId=` + soldToId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function productAssignListSearch(endIndex, productGroupId, searchText, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `products/serachProductsUnderProductGroup?endIndex=` + endIndex + `&productGroupId=` + productGroupId + `&searchText=` + searchText + `&startIndex=` + startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function deleteUsermanagmentCustomer(userId, status, updatedBy) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `ums/internal-user/` + userId + `/status/` + status + `?updatedBy=` + updatedBy, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function updateUsermanagmentCustomer(userId, updatedBy, data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  // ums/internal-user/xvsx?updatedBy=asds

  return fetch(API_URL_USER + `ums/internal-user/` + userId + `?updatedBy=` + updatedBy, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function statusUsermanagmentCustomer(userId, status, updatedBy) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `ums/internal-user/` + userId + `/status/` + status + `?updatedBy=` + updatedBy, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}



function RetailerMakeInseePlus(UpdateData) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", "X-USER-ID": UpdateData.userId,
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_USER + `ums/external-user`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      console.log("result++", result);
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}

function RetailerContactList(retailerCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(
    API_URL_ADMIN + `retailer/getRetailerDetails?retailerCode=` + retailerCode, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      console.log(result, "resultsss")
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function UploadRetailerContact(countryCode, upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "PUT",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `retailer/uploadExcelSheetForRetailer?countryCode=` + countryCode, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function RetailerUserId(userid) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `ums/external-user/getCustomerByUserId/` + userid, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result;
    });
}


function loyaltyCompanyTypeList() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_OMS + `loyalty-points/companyType`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function updateloyaltyPointForm(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_OMS + `loyalty-points/newCalcRules`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function updateloyaltyCutOff(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_OMS + `loyalty-points/postNewCutoffDate`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function uploadLoyalityCutOffRules(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_OMS + `loyalty-points/postNewCutoffDate`, requestOptions)
    .then((res) => res.json())
    .then((result) => {

      return result.data;
    });
}


function LoyalityCategoryMasterList() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_OMS + `loyalty-points/categoryMaster`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function addAdjustLoyalityAdmin(data) {
  debugger
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_OMS + `loyalty-points/postAdjustLoyaltyPoints`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function updateAdjustLoyalityAdmin(data) {
  debugger
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_OMS + `loyalty-points/postAdjustLoyaltyPoints`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (result.message === "Success") {
        toast.success(
          "Update Loyality Admin successfully",
          {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        )
        return result.data
      }

      return result.data;
    });
}


function getRedemList(soldTonumber, fromIndex, toIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_OMS + `loyalty-points/redeem/history?customerId=` + soldTonumber + `&fromIndex=` + fromIndex + `&toIndex=` + toIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getEarnPointList(soltoNumber, fromIndex, toIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_OMS + `loyalty-points/earnedPoints?customerId=` + soltoNumber + `&fromIndex=` + fromIndex + `&isDealer=true&toIndex=` + toIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function materialGroupList(materialGroup) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_OMS + `loyalty-points/getMaterialGroupMaster?salesOrganization=` + materialGroup, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function DealerCustomerName(customerId) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `customer/` + customerId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function UploadContactVNandLK(upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "PUT",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_ADMIN + `soldTo/uploadExcelSheetForContactVNOrLK`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function getContactVNLKDownloadLink() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `soldTo/getUrlForContactExcelForVNorLK`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function deleteProductDetailImage(productData, thumbnail) {
  const formData = new FormData();
  formData.append('productData', JSON.stringify(productData));
  formData.append('isThumbnailImg', thumbnail);
  // formData.append('files', files);
  console.log('data validation check', productData);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData
  };

  return fetch(API_URL_ADMIN + `products/productid/attachments`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function getAllHolidayMasterList() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `vps/visitplan/getAllHolidayMasterRecords`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function postAddHolidayMaster(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_USER + `vps/visitplan/postHolidaysMasterRecord`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function updateAddHolidayMaster(id, data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_USER + `vps/visitplan/updateHolidayMasterRecordByID?id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function deleteHolidayMaster(id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    }
  };
  return fetch(API_URL_USER + `vps/visitplan/deleteHolidayMasterRecordById?id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function uploadHolidayMaster(upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_USER + `vps/visitplan/uploadHolidayExcelSheet`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getAllWeekendHolidayList() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `vps/visitplan/getAllWeeklyHolidayMasterRecords`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function uploadWeekendMaster(upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  }

  return fetch(API_URL_USER + `vps/visitplan/uploadWeekHolidaysMaster`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function deleteSubDealerSoldTo(retailerCode, soldToNumber) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `retailer/retailer/updateStatus?retailerCode=` + retailerCode + `&soldToNumber=` + soldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function updateSubDealerSoldTo(markForDelete, retailerCode, soldToNumber) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `retailer/retailer/updateStatus?markForDelete=` + markForDelete + `&retailerCode=` + retailerCode + `&soldToNumber=` + soldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getVolumeAllocationList(solToNumber) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_OMS + `loyalty-points/getNewCutoffDate?solToNumber=` + solToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function deleteVolumeAllocation(category, groupCode, soldToNumber) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_USER + `oms/loyalty-points/newCutoffRules/delete?category=` + category + `&groupCode=` + groupCode + `&soldToNumber=` + soldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function createRetailerSubDealer(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `mds/retailer/create`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}



function salesRepIdList(country) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `ums/internal-user/getAllSalesUserByFilter?country=` + country, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function salesDistrictList(country) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `mds/metadata/` + country + `/sales_district`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function updateVolumeCutOffDate(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_OMS + `loyalty-points/postNewCutoffDate`, requestOptions)
    .then((res) => res.json())
    .then((result) => {

      return result.data;
    });
}


function retailerAutoField(retailerCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `retailer/getRetailerDetails?retailerCode=` + retailerCode, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function retailerAllContactList(retailerCode, searchValue) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `retailer/getAllRetailerContacts?retailerCode=${retailerCode}&searchText=${searchValue != undefined ? searchValue : ''}`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function RetailerAccountFormData(productData, userid, upload) {
  const formData = new FormData();
  formData.append('userData', JSON.stringify(productData));
  formData.append('userId', userid);
  formData.append('contactImage', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  };

  return fetch(
    API_URL_ADMIN + `retailer/addRetailerContact`, requestOptions)

    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });


}


function updateRetailerSoldTo(markDelete, retailerCode, soldToNumber) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `retailer/updateSoldToRetailerRecordStatus?markDelete=` + markDelete + `&retailerCode=` + retailerCode + `&soldToNumber=` + soldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function deleteRetailerSoldTo(retailerCode, soldToNumber) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `retailer/retailer/updateStatus?retailerCode=` + retailerCode + `&soldToNumber=` + soldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function updateRetailerContactList(productData, mobile, upload) {
  const formData = new FormData();
  formData.append('userData', JSON.stringify(productData));
  formData.append('userId', mobile);
  formData.append('contactImage', upload);
  const requestOptions = {
    method: "PUT",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  };

  return fetch(
    API_URL_ADMIN + `retailer/update-contactInfo`, requestOptions)

    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });


}


function deleteRetailerContactList(retailerCode, userId) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_ADMIN + `retailer/deleteRetailerContact?retailerCode=` + retailerCode + `&userId=` + userId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function autofillRetailerContact(retailerCode, userId) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `mds/retailer/getRetailerContactDetails?retailerCode=` + retailerCode + `&userId=` + userId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getexistingCustomerCadence(filterData) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  let setQueryString = '';
  filterData && filterData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });
  ///console.log("service API",remove_first_occurrence(setQueryString,'&'));

  return fetch(API_URL_USER + `vps/visitplan/existingCustomerCadence${remove_first_occurrence(setQueryString, '&')}`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });

}


function uploadexistingCustomerCadence(upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  };

  return fetch(API_URL_USER + `vps/visitplan/existingCustomerCadence`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function deleteExistingCustomer(customerId) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_USER + `vps/visitplan/existingCustomerCadence?id=` + customerId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function updateExistingCustomer(data, customerId) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `vps/visitplan/existingCustomerCadence?id=` + customerId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function getNonCustomerInActive(filterData) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  let setQueryString = '';
  filterData && filterData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });
  ///console.log("service API",remove_first_occurrence(setQueryString,'&'));

  return fetch(API_URL_USER + `vps/visitplan/inactiveCustomerCadence${remove_first_occurrence(setQueryString, '&')}`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });


}


function uploadNonCustomerInActive(upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  };

  return fetch(API_URL_USER + `vps/visitplan/inactiveCustomerCadence`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}



function deleteCustomerInactive(customerId) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_USER + `vps/visitplan/inactiveCustomerCadence?id=` + customerId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function updateCustomerInActive(data, customerId) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `vps/visitplan/inactiveCustomerCadence?customerId=` + customerId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function getActivityTarget() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `vps/visitplan/activityTargets`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function uploadActivityTarget(upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  };

  return fetch(API_URL_USER + `vps/visitplan/activityTargets`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function updateActivityTarget(data, id) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `vps/visitplan/activityTargets?id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}

function getBeatList() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `vps/visitplan/getDataForBeatMaster`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function uploadBeatManagmentList(upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  };

  return fetch(API_URL_USER + `vps/visitplan/uploadExcelForBeatMaster`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function getRelationwithCustomerList(filterData) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  let setQueryString = '';
  filterData && filterData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });
  ///console.log("service API",remove_first_occurrence(setQueryString,'&'));

  return fetch(API_URL_USER + `vps/visitplan/getBeatManagement${remove_first_occurrence(setQueryString, '&')}`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });


}


function uploadRelationCustomerList(upload) {
  const formData = new FormData();
  formData.append('excelfile', upload);
  const requestOptions = {
    method: "POST",
    headers: { 'X-AUTH-TOKEN': localStorage.getItem('x-auth-token') },
    body: formData,
  };

  return fetch(API_URL_USER + `vps/visitplan/uploadExcelForBeatManagement`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}

function deleteActivityTarget(id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_USER + `vps/visitplan/activityTargets?id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function deleteBeatMaster(id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_USER + `vps/visitplan/deleteDataForBeatMaster?id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function deleteCustomerRelation(id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_USER + `vps/visitplan/deleteBeatManagementData?id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function downloadexistingCustomerCadence() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `vps/visitplan/getExistingCustomerCadencePathFromS3`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function downloadNonInactiveCustomer() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `vps/visitplan/getInactiveCustomerCadencePathFromS3`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function downloadActivityTarget() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `vps/visitplan/getActivityTargetFromS3`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function downloadBeatMaster() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `vps/visitplan/getBeatMasterFromS3`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function getBeatMasterSearch(filterData) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };
  let setQueryString = '';
  filterData && filterData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });
  ///console.log("service API",remove_first_occurrence(setQueryString,'&'));

  return fetch(API_URL_USER + `vps/visitplan/getDataForBeatMaster${remove_first_occurrence(setQueryString, '&')}`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function updateBeatMaster(customerIdList, id) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `vps/visitplan/updateDataForBeatMaster?customerIdList=` + customerIdList + `&id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function downloadRelationWith() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `vps/visitplan/getBeatManagementFromS3`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function updateRelationCustomerMaster(id, customerIdList) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `vps/visitplan/updateBeatManagementData?customerId=` + id + `&customerIdList=` + customerIdList, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function getRelationSearch(search) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `vps/visitplan/getBeatManagement?key=` + search, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function addRetailerSoldTo(data, retailerCode) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `mds/retailer/addSoldToUnderRetailer?retailerCode=` + retailerCode, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function getRetailerLoyaltyList(RetailerCode, fromIndex, toIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `oms/loyalty-points/earnedPoints?customerId=` + RetailerCode + `&fromIndex=` + fromIndex + `&isDealer=false&toIndex=` + toIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function updateRetailerLoyaltyPoint(data, id) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `oms/loyalty-points/updateLoyalityPointDetailsById?id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function getRetailerLoyaltySearch(search, RetailerCode, fromIndex, toIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `oms/loyalty-points/getSubDealerEarnedLoyalityPoints?activityType=` + search + `&customerId=` + RetailerCode + `&fromIndex=` + fromIndex + `&toIndex=` + toIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function deleteRetailerLoyaltyList(id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `oms/loyalty-points/deleteLoyalityPointRetailsById?id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function AddSoldTosubDealer(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `mds/retailer/addSoldToUnderRetailer`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}

function VNOrLKRetailerContactExcel() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `retailer/getUrlForVNOrLKRetailerContactExcel`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getAutoretailersubdealerCode(retailerCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `retailer/getRetailerDetails?retailerCode=` + retailerCode, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getDealerActivityPoint(fromIndex, toIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_OMS + `loyalty-points/getAllDealerPointsForReport?fromIndex=` + fromIndex + `&toIndex=` + toIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function getDealerActivityLoyaltyReports(filterData) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  let setQueryString = '';
  filterData && filterData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });
  return fetch(API_URL_OMS + `loyalty-points/getAllDealerPointsForReport${remove_first_occurrence(setQueryString, '&')}&fromIndex=1&toIndex=4000`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 420) {
        const error = result.message;
        return Promise.reject(error);

      }
      return result.data;
    });
}


function getVolumeAllocationLoyalty(fromIndex, toIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_OMS + `loyalty-points/getVolumeAllocationForLoyalityReports?fromIndex=` + fromIndex + `&toIndex=` + toIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}



function getVolumeAllicationLoyaltyReports(filterData) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  let setQueryString = '';
  filterData && filterData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });
  return fetch(API_URL_OMS + `loyalty-points/getVolumeAllocationForLoyalityReports${remove_first_occurrence(setQueryString, '&')}&fromIndex=1&toIndex=4000`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}





function getSubDealerActivityPoint(fromIndex, toIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_OMS + `loyalty-points/getAllSubDealerPointsForReport?fromIndex=` + fromIndex + `&toIndex=` + toIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getSubDealerLoyaltyReport(filterData) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  let setQueryString = '';
  filterData && filterData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });
  return fetch(API_URL_OMS + `loyalty-points/getAllSubDealerPointsForReport${remove_first_occurrence(setQueryString, '&')}&fromIndex=1&toIndex=4000`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getAdjustLoyaltyPoint(filterData) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  let setQueryString = '';
  filterData && filterData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });
  return fetch(API_URL_OMS + `loyalty-points/getAllAdjustPointsForLoyalityReports${remove_first_occurrence(setQueryString, '&')}&fromIndex=1&toIndex=4000`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getAdjustReportList(fromIndex, toIndex) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_OMS + `loyalty-points/getAllAdjustPointsForLoyalityReports?fromIndex=` + fromIndex + `&toIndex=` + toIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function getBillingYearList() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_OMS + `loyalty-points/getYearDropDown?fromIndex=1&toIndex=5000`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}



function downloadDealerActivityXsl(downloadData) {
  let setQueryString = '';
  downloadData && downloadData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });
  Axios({
    method: "GET",
    url: API_URL_OMS + `loyalty-points/downloadDealerReport${remove_first_occurrence(setQueryString, '&')}&fromIndex=1&toIndex=500000000`, responseType: 'arraybuffer',
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token'),
    }
  })

    .then(async (response) => {
      var link = document.createElement('a');
      const file = new Blob([response.data], { type: 'application/xlsx' });
      const fileURL = await URL.createObjectURL(file);
      link.href = window.URL.createObjectURL(file);
      link.download = "DealerActivity.xlsx";
      link.click();
      return response.data;
    })
}


function downloadVolumeAllocationXsl(downloadData) {
  let setQueryString = '';
  downloadData && downloadData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });
  Axios({
    method: "GET",
    url: API_URL_OMS + `loyalty-points/downloadVolumeAllocationReport${remove_first_occurrence(setQueryString, '&')}&fromIndex=1&toIndex=500000000`, responseType: 'arraybuffer',
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token'),
    }
  })

    .then(async (response) => {
      var link = document.createElement('a');
      const file = new Blob([response.data], { type: 'application/xlsx' });
      const fileURL = await URL.createObjectURL(file);
      link.href = window.URL.createObjectURL(file);
      link.download = "VolumeAllocationReport.xlsx";
      link.click();
      return response.data;
    })
}

function downloadSubDealerActivityXsl(downloadData) {
  let setQueryString = '';
  downloadData && downloadData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });
  Axios({
    method: "GET",
    url: API_URL_OMS + `loyalty-points/downloadSubDealerReport${remove_first_occurrence(setQueryString, '&')}&fromIndex=1&toIndex=500000000`, responseType: 'arraybuffer',
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token'),
    }
  })

    .then(async (response) => {
      var link = document.createElement('a');
      const file = new Blob([response.data], { type: 'application/xlsx' });
      const fileURL = await URL.createObjectURL(file);
      link.href = window.URL.createObjectURL(file);
      link.download = "SubDealerActivityPoint.xlsx";
      link.click();
      return response.data;
    })
}


function downloadAdjustLoyaltyXsl(downloadData) {
  let setQueryString = '';
  downloadData && downloadData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });
  Axios({
    method: "GET",
    url: API_URL_OMS + `loyalty-points/downloadAdjustLoyalityReport${remove_first_occurrence(setQueryString, '&')}&fromIndex=1&toIndex=500000000`, responseType: 'arraybuffer',
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token'),
    }
  })

    .then(async (response) => {
      var link = document.createElement('a');
      const file = new Blob([response.data], { type: 'application/xlsx' });
      const fileURL = await URL.createObjectURL(file);
      link.href = window.URL.createObjectURL(file);
      link.download = "AdjustLoyaltyReport.xlsx";
      link.click();
      return response.data;
    })
}


function adjustLoyltydeleteAdmin(id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    // body: JSON.stringify(data),
  };
  return fetch(API_URL_USER + `oms/loyalty-points/deleteAdjustLoyaltyPoints?id=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function downloadAdjustLoyaltyAdmin() {
  ;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },

  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_OMS + `loyalty-points/getAdjustLoyalityExcelFromS3`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getAdjustLoyaltyAdminFilter(filterData) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  let setQueryString = '';
  filterData && filterData.forEach((data, index) => {
    if (data[Object.keys(data)[0]]) {
      setQueryString += '&' + Object.keys(data)[0] + '=' + data[Object.keys(data)[0]];
    }

  });
  return fetch(API_URL_OMS + `loyalty-points/getAllAdjustPoints${remove_first_occurrence(setQueryString, '&')}&fromIndex=1&toIndex=4000`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}





function getMyAllExpiredCalcRules() {
 

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },

  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_OMS + `loyalty-points/getAllExpiredCalcRules`, requestOptions)
  
    .then((res) => res.json())
    
    .then((result) => {

      
      
      if (result.status === 420) {
        
         toast.success ( result.message,
              {
                position: 'top-right',
                autoClose: 10000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
           
        
            return result.data;
      }
     
      return result.data;
    });
}


function RetailerProvince(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `province/get/byCountry?countryCode=` + countryCode, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function RetailerDistrict(district) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `province/get/district/ByProvince?province=` + district, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function RetailerSubDistrict(subDistrict) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `province/get/subDistrict/ByDistrict?district=` + subDistrict, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function salesSoldtoAreaList(soldToNumber) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_ADMIN + `soldTo/getSalesAreaListofSoldTo?soldToNumber=` + soldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


// function handleResponse(response) {
//   console.log('response ', response)
//   return response.text().then(text => {
//       const data = text && JSON.parse(text);
//       if(response.headers.get('X-AUTH-TOKEN')!==null)

//        {
//         localStorage.setItem('X-AUTH-TOKEN',response.headers.get("X-AUTH-TOKEN"));
//        }
//       if (!response.ok) {
//           if (response.status === 401) {
//               // auto logout if 401 response returned from api
//               logout();
//           }

//           const error = (data && data.message) || response.statusText;
//           return Promise.reject(error);
//       }

//       return data;
//   });
// }









