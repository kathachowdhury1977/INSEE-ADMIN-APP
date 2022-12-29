import { eventConstants } from "../_constants";

export function customeruserid(state = {}, action) {
  switch (action.type) {
    case eventConstants.CUSTOMER_USERID_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CUSTOMER_USERID_SUCCESS:
      return {
        customeruserid: action.customeruserid,
      };
    case eventConstants.CUSTOMER_USERID_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}