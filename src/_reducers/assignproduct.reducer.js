import { eventConstants } from "../_constants";

export function assignproduct(state = {}, action) {
  switch (action.type) {
    case eventConstants.ASSIGN_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ASSIGN_PRODUCT_SUCCESS:
      return {
        assignproduct: action.assignproduct,
      };
    case eventConstants.ASSIGN_PRODUCT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}