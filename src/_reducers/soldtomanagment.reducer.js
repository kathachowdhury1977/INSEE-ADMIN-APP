import { eventConstants } from "../_constants";

export function soldtomanagment(state = {}, action) {
  switch (action.type) {
    case eventConstants.SOLD_TO_MANAGMENT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SOLD_TO_MANAGMENT_SUCCESS:
      return {
        soldtomanagment: action.soldtomanagment,
      };
    case eventConstants.SOLD_TO_MANAGMENT_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.SOLD_TO_MANAGMENT_CLEAR:
        return {
          soldtomanagment: undefined,
        };

    
    default:
      return state;
  }
}