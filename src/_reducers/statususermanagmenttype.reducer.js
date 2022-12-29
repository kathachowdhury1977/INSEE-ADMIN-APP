import { eventConstants } from "../_constants";

export function statususermanagmenttype(state = {}, action) {
  switch (action.type) {
    case eventConstants.STATUS_USERMANAGMENT_TYPE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.STATUS_USERMANAGMENT_TYPE_SUCCESS:
      return {
        statususermanagmenttype: action.statususermanagmenttype,
      };
    case eventConstants.STATUS_USERMANAGMENT_TYPE_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.STATUS_USERMANAGMENT_TYPE_CLEAR_STATE:
        return {
          statususermanagmenttype: undefined,
        };

    
    default:
      return state;
  }
}