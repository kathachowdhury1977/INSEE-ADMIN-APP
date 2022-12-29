import { eventConstants } from "../_constants";

export function updatedeliverymode(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_DELIVERY_MODE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_DELIVERY_MODE_SUCCESS:
      return {
        updatedeliverymode: action.updatedeliverymode,
      };
    case eventConstants.UPDATE_DELIVERY_MODE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}