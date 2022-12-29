import { eventConstants } from "../_constants";

export function deleteproductmasterdelete(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_MASTER_DELETE_GROUP_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_MASTER_DELETE_GROUP_SUCCESS:
      return {
        deleteproductmasterdelete: action.deleteproductmasterdelete,
      };
    case eventConstants.PRODUCT_MASTER_DELETE_GROUP_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}