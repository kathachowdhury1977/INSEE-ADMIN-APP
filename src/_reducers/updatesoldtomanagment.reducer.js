
import { eventConstants } from "../_constants";

export function updatesoldtomanagment(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_SOLD_MANAGMENT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_SOLD_MANAGMENT_SUCCESS:
      return {
        updatesoldtomanagment: action.updatesoldtomanagment,
      };
    case eventConstants.UPDATE_SOLD_MANAGMENT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}