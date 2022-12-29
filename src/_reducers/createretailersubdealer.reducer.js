import { eventConstants } from "../_constants";

export function createretailersubdealer(state = {}, action) {
  switch (action.type) {
    case eventConstants.CREATE_RETAILER_SUBDEALER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CREATE_RETAILER_SUBDEALER_SUCCESS:
      return {
        createretailersubdealer: action.createretailersubdealer,
      };
    case eventConstants.CREATE_RETAILER_SUBDEALER_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.CREATE_RETAILER_SUBDEALER_CLEAR_TOAST:
        return {
          createretailersubdealer: undefined,
        };

    
    default:
      return state;
  }
}