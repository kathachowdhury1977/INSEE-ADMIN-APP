import Axios from "axios";
import { API_URL_ADMIN, API_URL_LMS } from "../Constant/index";

export function getSubDealerContactService(subdealerNumber) {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
    },
  };
  return Axios.get(
    API_URL_ADMIN +
      "retailer/subdealer-contact?subDealerCode=" +
      subdealerNumber,
    requestOptions
  )
    .then((response) => response)
    .catch((error) => error);
}

export function getSubDealerService() {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
    },
  };
  return Axios.get(API_URL_ADMIN + "retailer/subdealer", requestOptions)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export function getDealerRetationShipList(subdealerNumber) {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
    },
  };
  return Axios.get(
    API_URL_ADMIN +
      "retailer/getsoldToBySubDealerNumber?subDealerNumber=" +
      subdealerNumber,
    requestOptions
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}


export function getPointCalulationList(requestObj) {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
    },
  };
  return Axios.get(
    API_URL_LMS +
      `loyalty/point-calc-rule${requestObj}`,
    requestOptions
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export function getAllocationInventoryList(requestObj) {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
    },
  };
  return Axios.get(
    API_URL_LMS +
      `loyalty/inventory?customerId=${requestObj}`,
    requestOptions
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}