import { eventConstants } from "../_constants";

export function updateretailerlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_RETAILER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_RETAILER_LIST_SUCCESS:
      return {
        updateretailerlist: action.updateretailerlist,
      };
    case eventConstants.UPDATE_RETAILER_LIST_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_RETAILER_LIST_CLEAR_TOAST:
        return {
          error: undefined,
        };

    
    default:
      return state;
  }
}