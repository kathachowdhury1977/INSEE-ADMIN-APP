import { eventConstants } from "../_constants";

export function updateloyaltycutoff(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_LOYALTY_CUT_OFF_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_LOYALTY_CUT_OFF_SUCCESS:
      return {
        updateloyaltycutoff: action.updateloyaltycutoff,
      };
    case eventConstants.UPDATE_LOYALTY_CUT_OFF_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_LOYALTY_CUT_OFF_CLEAR_TOAST:
      return {
        updateloyaltycutoff: '',
        error: '',
      };

    
    default:
      return state;
  }
}