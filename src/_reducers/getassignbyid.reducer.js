import { eventConstants } from "../_constants";

export function getassignbyid(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_ASSIGN_PRODUCT_DATE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_ASSIGN_PRODUCT_DATE_SUCCESS:
      return {
        getassignbyid: action.getassignbyid,
      };
    case eventConstants.GET_ASSIGN_PRODUCT_DATE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}