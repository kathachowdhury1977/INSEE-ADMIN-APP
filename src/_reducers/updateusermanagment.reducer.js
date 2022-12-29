import { eventConstants } from "../_constants";

export function updateusermanagment(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_CUSTOMER_USERMANAGMENT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_CUSTOMER_USERMANAGMENT_SUCCESS:
      return {
        updateusermanagment: action.updateusermanagment,
      };
    case eventConstants.UPDATE_CUSTOMER_USERMANAGMENT_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_CUSTOMER_USERMANAGMENT_CLEAR_STATE:
      return {
        updateusermanagment: undefined,
      };

    
    default:
      return state;
  }
}