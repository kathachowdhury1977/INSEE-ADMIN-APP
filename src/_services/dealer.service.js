import Axios from "axios";
import { API_URL_ADMIN } from "../Constant/index";

export function getSubDealerRelationUnderSoldToService(dealernumber) {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
    },
  };
  return Axios.get(
    API_URL_ADMIN +
      "retailer/getsubDealerWithSoldtO?soldToNumber=" +
      dealernumber,
    requestOptions
  )
    .then((response) => response)
    .catch((error) => error);
}

export function getSubDealerInfoService(subdealerNumber) {
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
    },
  };
  return Axios.get(
    API_URL_ADMIN + "retailer/subdealer-soldto/" + subdealerNumber,
    requestOptions
  )
    .then((response) => response)
    .catch((error) => error);
}
