import { eventConstants } from "../_constants";

export function productactiveassignlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_PRODUCT_ACTIVE_ASSIGN_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_PRODUCT_ACTIVE_ASSIGN_LIST_SUCCESS:
      return {
        productactiveassignlist: action.productactiveassignlist,
      };
    case eventConstants.GET_PRODUCT_ACTIVE_ASSIGN_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}