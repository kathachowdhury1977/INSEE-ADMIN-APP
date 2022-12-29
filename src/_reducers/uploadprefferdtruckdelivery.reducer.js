import { eventConstants } from "../_constants";

export function uploadprefferdtruckdelivery(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_PREFFERED_TRUCK_DELIVERY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_PREFFERED_TRUCK_DELIVERY_SUCCESS:
      return {
        uploadprefferdtruckdelivery: action.uploadprefferdtruckdelivery,
      };
    case eventConstants.UPLOAD_PREFFERED_TRUCK_DELIVERY_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}