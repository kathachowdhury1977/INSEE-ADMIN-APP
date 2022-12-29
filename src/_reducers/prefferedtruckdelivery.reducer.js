import { eventConstants } from "../_constants";

export function prefferedtruckdelivery(state = {}, action) {
  switch (action.type) {
    case eventConstants.PREFFERED_TRUCK_DELIVERY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PREFFERED_TRUCK_DELIVERY_SUCCESS:
      return {
        prefferedtruckdelivery: action.prefferedtruckdelivery,
      };
    case eventConstants.PREFFERED_TRUCK_DELIVERY_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}