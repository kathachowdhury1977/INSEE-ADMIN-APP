import { eventConstants } from "../_constants";

export function retailerpaymentmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_PAYMENT_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_PAYMENT_MASTER_LIST_SUCCESS:
      return {
        getretailerpaymenttermmaster : action.getretailerpaymenttermmaster,
      };
    case eventConstants.RETAILER_PAYMENT_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}