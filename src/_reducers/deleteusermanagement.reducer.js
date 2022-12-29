import { eventConstants } from "../_constants";

export function deleteusermanagment(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_CUSTOMER_USERMANAGMENT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_CUSTOMER_USERMANAGMENT_SUCCESS:
      return {
        deleteusermanagment: action.deleteusermanagment,
      };
    case eventConstants.DELETE_CUSTOMER_USERMANAGMENT_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.DELETE_CUSTOMER_USERMANAGMENT_CLEAR_STATE:
      return {
        deleteusermanagment: undefined,
      };

    
    default:
      return state;
  }
}