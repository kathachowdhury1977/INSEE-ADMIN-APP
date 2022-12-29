import { eventConstants } from "../_constants";

export function salesdistrictlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.SALES_DISTRICT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SALES_DISTRICT_LIST_SUCCESS:
      return {
        salesdistrictlist: action.salesdistrictlist,
      };
    case eventConstants.SALES_DISTRICT_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}