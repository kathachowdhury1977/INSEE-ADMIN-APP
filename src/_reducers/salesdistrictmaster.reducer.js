import { eventConstants } from "../_constants";

export function salesdistrictmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.SALES_DISTRICT_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SALES_DISTRICT_MASTER_LIST_SUCCESS:
      return {
        getsalesdistrict : action.getsalesdistrict,
      };
    case eventConstants.SALES_DISTRICT_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}