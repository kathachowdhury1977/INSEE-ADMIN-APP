import { eventConstants } from "../_constants";

export function retaileruserid(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_USERID_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_USERID_SUCCESS:
      return {
        retaileruserid: action.retaileruserid,
      };
    case eventConstants.RETAILER_USERID_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}