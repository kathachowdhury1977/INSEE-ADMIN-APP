import { eventConstants } from "../_constants";

export function addprefferedtruckdelivery(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_PREFFERED_TRUCK_DELIVERY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_PREFFERED_TRUCK_DELIVERY_SUCCESS:
      return {
        addprefferedtruckdelivery: action.addprefferedtruckdelivery,
      };
    case eventConstants.ADD_PREFFERED_TRUCK_DELIVERY_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.AADD_PREFFERED_TRUCK_DELIVERY_CLEAR_TOAST:
        return {
          addprefferedtruckdelivery: '',
          error: '',
        };

    
    default:
      return state;
  }
}