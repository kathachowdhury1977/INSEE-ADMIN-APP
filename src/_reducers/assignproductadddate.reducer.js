import { eventConstants } from "../_constants";

export function assignproductadddate(state = {}, action) {
  switch (action.type) {
    case eventConstants.ASSIGN_PRODUCT_ADD_DATE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ASSIGN_PRODUCT_ADD_DATE_SUCCESS:
      return {
        assignproductadddate: action.assignproductadddate,
      };
    case eventConstants.ASSIGN_PRODUCT_ADD_DATE_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.ASSIGN_PRODUCT_ADD_DATE_CLEAR:
      return {
        assignproductadddate: '',
      };

    
    default:
      return state;
  }
}