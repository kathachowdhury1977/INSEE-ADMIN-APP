import { eventConstants } from "../_constants";

export function addsoldtosubdealer(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_SOLD_TO_SUBDEALER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_SOLD_TO_SUBDEALER_SUCCESS:
      return {
        addsoldtosubdealer: action.addsoldtosubdealer,
      };
    case eventConstants.ADD_SOLD_TO_SUBDEALER_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.ADD_SOLD_TO_SUBDEALER_CLEAR_TOAST:
        return {
            addsoldtosubdealer: undefined,
        };

    
    default:
      return state;
  }
}