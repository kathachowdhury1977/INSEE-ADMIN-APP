import { eventConstants } from "../_constants";

export function modifiedproductgroup(state = {}, action) {
  switch (action.type) {
    case eventConstants.MODIFIED_PRODUCT_GROUP_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.MODIFIED_PRODUCT_GROUP_SUCCESS:
      return {
        modifiedproductgroup: action.modifiedproductgroup,
      };
    case eventConstants.MODIFIED_PRODUCT_GROUP_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.MODIFIED_PRODUCT_GROUP_CLEAN_TOAST:
      return {
        modifiedproductgroup: ''
      }


    default:
      return state;
  }
}
