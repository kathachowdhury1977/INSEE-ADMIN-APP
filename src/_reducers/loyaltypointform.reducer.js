import { eventConstants } from "../_constants";

export function loyaltypointform(state = {}, action) {
  switch (action.type) {
    case eventConstants.LOYALTY_POINT_FORM_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.LOYALTY_POINT_FORM_SUCCESS:
      return {
        loyaltypointform: action.loyaltypointform,
      };
    case eventConstants.LOYALTY_POINT_FORM_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.LOYALTY_POINT_FORM_CLEAR_TOAST:
        return {
          loyaltypointform: '',
          error: '',
        };

    
    default:
      return state;
  }
}