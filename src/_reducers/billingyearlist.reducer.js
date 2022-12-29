import { eventConstants } from "../_constants";

export function billingyearlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.BILLING_YEAR_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.BILLING_YEAR_LIST_SUCCESS:
      return {
        billingyearlist: action.billingyearlist,
      };
    case eventConstants.BILLING_YEAR_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}