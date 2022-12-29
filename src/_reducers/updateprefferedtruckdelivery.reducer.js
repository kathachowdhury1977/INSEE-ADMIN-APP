import { eventConstants } from "../_constants";

export function updateprefferedtruckdelivery(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_PREFFERED_TRUCK_DELIVERY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_PREFFERED_TRUCK_DELIVERY_SUCCESS:
      return {
        updateprefferedtruckdelivery: action.updateprefferedtruckdelivery,
      };
    case eventConstants.UPDATE_PREFFERED_TRUCK_DELIVERY_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_PREFFERED_TRUCK_DELIVERY_CLEAR_TOAST:
      return {
        updateprefferedtruckdelivery: '',  
        error: '',
      };

    
    default:
      return state;
  }
}