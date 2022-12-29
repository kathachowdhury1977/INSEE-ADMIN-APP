import { eventConstants } from "../_constants";

export function updateproductgroup(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_PRODUCT_GROUP_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_PRODUCT_GROUP_SUCCESS:
      return {
        updateproductgroup: action.updateproductgroup,
      };
    case eventConstants.UPDATE_PRODUCT_GROUP_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}