import { eventConstants } from "../_constants";

export function retailerautofield(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_AUTO_FIELD_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_AUTO_FIELD_SUCCESS:
      return {
        retailerautofield: action.retailerautofield,
      };
    case eventConstants.RETAILER_AUTO_FIELD_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}