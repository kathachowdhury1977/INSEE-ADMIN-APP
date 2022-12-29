import { eventConstants } from "../_constants";

export function deletedeliverymode(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_DELIVERY_MODE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_DELIVERY_MODE_SUCCESS:
      return {
        deletedeliverymode: action.deletedeliverymode,
      };
    case eventConstants.DELETE_DELIVERY_MODE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}