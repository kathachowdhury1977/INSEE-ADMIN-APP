import { eventConstants } from "../_constants";

export function salesrepidlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.SALES_REP_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SALES_REP_LIST_SUCCESS:
      return {
        salesrepidlist: action.salesrepidlist,
      };
    case eventConstants.SALES_REP_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}