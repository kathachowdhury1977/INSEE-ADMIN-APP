//import config from 'config';
import { API_URL_USER, API_URL_ADMIN,API_URL_VPS,API_URL_OMS} from "../Constant/index";

export const eventService = {
  createEvent,
  getAllEvent,
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
  productMasterSearch,
  contactToggle,
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
  addCaseStatus,
  CaseType,
  addCaseType,
  ContactStatus,
  ProductGroupstatus,
  UpdateProductGroup,
  UnitMaster,
  addUnitMaster,
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
  getWithVechileIdList

};


function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function createEvent() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contact: "saurabh",
      date: "22u",
      eventLocation: "Noida",
      eventName: "Test",
      inseeGrowthMom: "12",
      inseeStringSow: "13",
      lastVisit: "12-12-2020",
      leadId: "NA",
      mode: "Offline",
      month1: "NA",
      month2: "NA",
      month3: "NA",
      objective: "NAeeee",
      planId: "NA",
      prospectName: "NA",
      salesUserId: "12",
      salesValue: "12",
      time: "12:00",
      visitFor: "EVENT",
      visitType: "ADHOC",
      visiterName: "saurabh mundewal",
    }),
  };
  console.log(requestOptions, "bodybody");
  return fetch(
    `http://inseeapplb-2025958416.ap-south-1.elb.amazonaws.com/vps/visit/createVisit`,
    requestOptions
  )
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
}

function getAllEvent() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(
    `http://inseeapplb-2025958416.ap-south-1.elb.amazonaws.com/vps/visitplan/visitPlanCount/2`,
    requestOptions
  )
    .then((res) => res.json())
    .then((result) => {
      console.log(result, "SSSSSSSSSSSSSSSSSSSSSSSSSS");
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }

      return result.data;
    });
}

function getAllVisitMode() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(
    `http://inseeapplb-2025958416.ap-south-1.elb.amazonaws.com/vps/visit/getAllVisitMode
   `,
    requestOptions
  )
    .then((res) => res.json())
    .then((result) => {
      console.log(result.data, "resultdata");
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}
function getAllVisitObjective() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(
    `http://inseeapplb-2025958416.ap-south-1.elb.amazonaws.com/vps/visit/getAllVisitObjective
   `,
    requestOptions
  )
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}




function addUser(UpdateData, loginID) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_USER + `salesuser/createUser?createdby=` + loginID, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function soldToManagmentList(endIndex, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
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


function productmasterList(endIndex, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `products/admin/pagination/getAllProductListByIndex?endIndex=` + endIndex + `&startIndex=` + startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function productGroupmasterList() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `product_group`, requestOptions)
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `product_group`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function productGroupSearch(groupname) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `product_group/searchByName?searchText=` + groupname, requestOptions)
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `admin/update`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function productMasterSearch(productname) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `products/searchByName?searchText=` + productname, requestOptions)
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
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-USER-ID": "X-USER-ID" },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_USER + `external-user`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function AccountContactList(SoldToNumber) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(
    API_URL_ADMIN + `soldTo/usercontact/` + SoldToNumber, requestOptions)
    .then((res) => res.json())
    .then((result) => {
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
    headers: { "Content-Type": "application/json" },
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

function productDetailImageUpload(files, productData) {
  const formData = new FormData();
  formData.append('productData', JSON.stringify(productData));
  formData.append('files', files);
  console.log('data validation check', files);
  const requestOptions = {
    method: "POST",
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/divisions`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getBusinessSegment(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/case-status`, requestOptions)
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/case-status`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function CaseType(countryCode) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/case-type`, requestOptions)
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/case-type`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}



function ContactStatus(UpdateData, userId) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `metadata/` + countryCode + `/unit`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function UpdateSoldToManagment(UpdateData) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(UpdateData),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_ADMIN + `soldTo/product-groups`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getRoleList() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json",
    'X-AUTH-TOKEN':localStorage.getItem('X-AUTH-TOKEN')},
  };

  return fetch(API_URL_USER + `ums/roles`, requestOptions)
  .then(handleResponse)
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json",
    'X-AUTH-TOKEN':localStorage.getItem('X-AUTH-TOKEN')
   },
  };

  return fetch(API_URL_USER + `salesuser/segment`, requestOptions)
   .then(handleResponse)
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
    headers: { "Content-Type": "application/json",
    'X-AUTH-TOKEN':localStorage.getItem('X-AUTH-TOKEN') },
  };

  return fetch(API_URL_USER + `salesuser/getalluser`, requestOptions)
  .then(handleResponse)
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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

function GeographyMasterList(endIndex,startIndex) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `geographical/getGeographyByIndex?endIndex=`+ endIndex +`&startIndex=`+startIndex, requestOptions)
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
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `products/getProductById/order/`+productId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function SoldToManagmentSearch(searchName) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `soldTo/searchByName?searchText=`+searchName, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function AccountFormData(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-USER-ID": "X-USER-ID"},
    body: JSON.stringify(data)
  };

  return fetch(
    API_URL_ADMIN + `soldTo/addContact`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function ProductActiveAssignList() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `soldTo/getById/`+soldtoNumber, requestOptions)
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `vehicle?soldToNumber=`+soldToNumber, requestOptions)
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
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `ship-to/customer/`+soldToNumber, requestOptions)
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
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `contracts/account/`+soldToNumber, requestOptions)
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
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `contracts/`+contractId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function InseePrivilageList(endIndex,startIndex) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `admin/admin/getListOfInsseprivilage?endIndex=`+endIndex+`&startIndex=`+startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
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
    headers: { "Content-Type": "application/json", "X-USER-ID": "X-USER-ID" },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_USER + `roles`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getAllRoleList() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `vehicle`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getOwnerShip() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `vehicle/vehicletypes?countryCode=`+countryCode, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function GuideLinematrix(endIndex,startIndex) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `guideline-matrix?endIndex=`+endIndex+`&startIndex=`+startIndex, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function updateTruckMaster(data,vechileId) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `vehicle/`+vechileId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function UploadGuideLinematrix(month, year, upload) {
  const formData = new FormData();
  formData.append('file', upload);
  const requestOptions = {
    method: "POST",
    body: formData,
  }

  return fetch(API_URL_ADMIN + `guideline-matrix/`+month+`/`+year, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function UploadRetailer(country,upload) {
  const formData = new FormData();
  formData.append('file', upload);
  const requestOptions = {
    method: "POST",
    body: formData,
  }

  return fetch(API_URL_ADMIN + `retailer/data/upload?countryCode=`+country, requestOptions)
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
    body: formData,
  }

  return fetch(API_URL_ADMIN + `admin/insseprivilage%7D?month=`+month+`&year=`+year, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function UploadCustomerTier(year, upload) {
  const formData = new FormData();
  formData.append('file', upload);
  const requestOptions = {
    method: "POST",
    body: formData,
  }

  return fetch(API_URL_ADMIN + `admin/currentTierStatus?year=`+year, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function getStrategyMatrix() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_VPS + `strategyMatrix/createStrategyMatrix`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return  '?'+ str.slice(index + searchstr.length);
}

function InternalManagmentFilter(filterData) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", 
    'X-AUTH-TOKEN':localStorage.getItem('X-AUTH-TOKEN')},
  };
  let setQueryString='';
  filterData.forEach((data,index)=>{
    if(data[Object.keys(data)[0]])
    {
      setQueryString+='&'+Object.keys(data)[0]+'='+data[Object.keys(data)[0]];
    }
    
  });
  ///console.log("service API",remove_first_occurrence(setQueryString,'&'));

  return fetch(API_URL_USER + `salesuser/getAllSalesUserByFilter${remove_first_occurrence(setQueryString,'&')}`, requestOptions)
     .then(handleResponse)
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
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_USER + `salesuser/salesUsersSearch?searchText=`+searchName, requestOptions)
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
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_USER + `ums/external-user/getCustomerByContactId/`+userid, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function getCustomerTierList(endIndex, startIndex) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `admin/getListOfcurrenttierstatus?endIndex=`+endIndex+`&startIndex=` + startIndex, requestOptions)
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
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `retailer/all/data?fromIndex=`+fromIndex+`&toIndex=` + toIndex, requestOptions)
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
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_OMS + `loyality-points/customerType`, requestOptions)
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_OMS + `loyality-points/calcRules`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getloyaltyPointList(productCode) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_OMS + `loyality-points/getCalcRules?productCode=`+productCode, requestOptions)
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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `product_group/findByProductId/`+ProductId, requestOptions)
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `product_group/deleteAssignProduct`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function deleteSoldToProductGroupList(data) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `soldTo/deleteAssignProduct`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function modifiedProductGroup(data,productId) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(API_URL_ADMIN + `product_group/`+ productId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}




function getWithVechileIdList(vechileId) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(API_URL_ADMIN + `vehicle/`+vechileId, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}



function handleResponse(response) {
  console.log('response ', response)
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if(response.headers.get('X-AUTH-TOKEN')!==null)
       
       {
        localStorage.setItem('X-AUTH-TOKEN',response.headers.get("X-AUTH-TOKEN"));
       }
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}









