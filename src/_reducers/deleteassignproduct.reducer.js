import { eventConstants } from "../_constants";

export function deleteassignproduct(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_ASSIGN_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_ASSIGN_PRODUCT_SUCCESS:
      return {
        deleteassignproduct: action.deleteassignproduct,
      };
    case eventConstants.DELETE_ASSIGN_PRODUCT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}