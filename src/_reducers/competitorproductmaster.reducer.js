import { eventConstants } from "../_constants";

export function competitorproductmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.COMPATITOR_PRODUCT_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.COMPATITOR_PRODUCT_MASTER_LIST_SUCCESS:
      return {
        getcompetitorproduct: action.getcompatitorproduct,
      };
    case eventConstants.COMPATITOR_PRODUCT_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}