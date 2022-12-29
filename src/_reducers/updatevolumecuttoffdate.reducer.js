import { eventConstants } from "../_constants";

export function updatevolumecuttoffdate(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_VOLUME_CUT_OFF_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_VOLUME_CUT_OFF_SUCCESS:
      return {
        updatevolumecuttoffdate: action.updatevolumecuttoffdate,
      };
    case eventConstants.UPDATE_RETAILER_LIST_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_VOLUME_CUT_OFF_CLEAR_TOAST:
        return {
        updatevolumecuttoffdate: undefined,
        };

    
    default:
      return state;
  }
}