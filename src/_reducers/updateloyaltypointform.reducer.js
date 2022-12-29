import { eventConstants } from "../_constants";

export function updateloyaltypointform(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_LOYALTY_POINT_FORM_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_LOYALTY_POINT_FORM_SUCCESS:
      return {
        updateloyaltypointform: action.updateloyaltypointform,
      };
    case eventConstants.UPDATE_LOYALTY_POINT_FORM_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_LOYALTY_POINT_FORM_CLEAR_TOAST:
      return {
        updateloyaltypointform: '',
        error: '',
      };

    
    default:
      return state;
  }
}