import Axios from "axios";
import moment from "moment";
import { API_URL_LMS } from "../Constant/index";

export function getLoyaltyPointsManualAdjustService(filterData) {
  let filterDates =
    filterData.createdDateFrom != null && filterData.createdDateTo != null
      ? "startDate=" +
        moment(filterData.createdDateFrom).format("DD-MM-yyyy") +
        "&endDate=" +
        moment(filterData.createdDateTo).format("DD-MM-yyyy") +
        "&"
      : "";
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
    },
  };
  return Axios.get(
    API_URL_LMS +
      "loyalty/manual-adjust?" +
      filterDates +
      "activityType=" +
      filterData.activityType,
    requestOptions
  )
    .then((response) => response)
    .catch((error) => error);
}

export function getSubdealerLoyaltyTransactionService(
  filterData,
  dealerOrSubDealerNo,
  isDealer
) {
  let filterDates =
    filterData.createdDateFrom != null && filterData.createdDateTo != null
      ? "createDateFrom=" +
        moment(filterData.createdDateFrom).format("DD-MM-yyyy") +
        "&createDateTo=" +
        moment(filterData.createdDateTo).format("DD-MM-yyyy") +
        "&"
      : "";
  let filterType = filterData.activityType
    ? "activityType=" + filterData.activityType + "&"
    : "";
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
    },
  };
  return Axios.get(
    API_URL_LMS +
      "admin/dealerOrSubDealerLylTxn?" +
      filterType +
      filterDates +
      "dealerOrSubDealerNo=" +
      dealerOrSubDealerNo +
      "&IsDealer=" +
      isDealer,
    requestOptions
  )
    .then((response) => response)
    .catch((error) => error);
}
