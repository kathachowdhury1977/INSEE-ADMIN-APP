import { eventConstants } from "../_constants";

export function selectcustomeruserid(state = {}, action) {
  switch (action.type) {
    case eventConstants.CUSTOMER_USERID_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CUSTOMER_USERID_SUCCESS:
      return {
        selectcustomeruserid: action.selectcustomeruserid,
      };
    case eventConstants.CUSTOMER_USERID_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}