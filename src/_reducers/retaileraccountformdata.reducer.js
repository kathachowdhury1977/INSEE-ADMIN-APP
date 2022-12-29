import { eventConstants } from "../_constants";

export function retaileraccountformdata(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_ACCOUNT_FORM_DATA_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_ACCOUNT_FORM_DATA_SUCCESS:
      return {
        retaileraccountformdata: action.retaileraccountformdata,
      };
    case eventConstants.RETAILER_ACCOUNT_FORM_DATA_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.RETAILER_ACCOUNT_FORM_DATA_CLEAR:
      return {
        retaileraccountformdata: undefined,
      };

    
    default:
      return state;
  }
}