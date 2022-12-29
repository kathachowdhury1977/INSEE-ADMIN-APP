import { eventConstants } from "../_constants";

export function addadjustloyalityadmin(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_ADJUST_LOYALTY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_ADJUST_LOYALTY_SUCCESS:
      return {
        loading:false,
        addadjustloyalityadmin: action.addadjustloyalityadmin,
      };
    case eventConstants.ADD_ADJUST_LOYALTY_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.ADD_ADJUST_LOYALTY_CLEAR_STATE:
        return {
          addadjustloyalityadmin: '',
          error: ''
        };
    

    
    default:
      return state;
  }
}