import { eventConstants } from "../_constants";

export function deleteprefferedtruckdelivery(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_PREFFERED_TRUCK_DELIVERY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_PREFFERED_TRUCK_DELIVERY_SUCCESS:
      return {
        deleteprefferedtruckdelivery: action.deleteprefferedtruckdelivery,
      };
    case eventConstants.DELETE_PREFFERED_TRUCK_DELIVERY_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}