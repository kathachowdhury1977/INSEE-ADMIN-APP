import { eventConstants } from "../_constants";

export function assignproductupdatedate(state = {}, action) {
  switch (action.type) {
    case eventConstants.ASSIGN_PRODUCT_UPDATE_DATE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ASSIGN_PRODUCT_UPDATE_DATE_SUCCESS:
      return {
        assignproductupdatedate: action.assignproductupdatedate,
      };
    case eventConstants.ASSIGN_PRODUCT_UPDATE_DATE_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.ASSIGN_PRODUCT_UPDATE_DATE_CLEAR_TOAST:
      return {
        assignproductupdatedate: '',
        error: '',
      };

    
    default:
      return state;
  }
}