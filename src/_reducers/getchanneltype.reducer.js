import { eventConstants } from "../_constants";

export function getchanneltype(state = {}, action) {
  switch (action.type) {
    case eventConstants.CUSTOMER_TYPE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CUSTOMER_TYPE_SUCCESS:
      return {
        getchanneltype: action.getchanneltype,
      };
    case eventConstants.CUSTOMER_TYPE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}
