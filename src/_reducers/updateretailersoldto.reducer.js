import { eventConstants } from "../_constants";

export function updateretailersoldto(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_RETAILER_SOLDTO_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_RETAILER_SOLDTO_SUCCESS:
      return {
        updateretailersoldto: action.updateretailersoldto,
      };
    case eventConstants.UPDATE_RETAILER_SOLDTO_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_RETAILER_SOLDTO_CLEAR_TOAST:
        return {
          error: undefined,
        };

    
    default:
      return state;
  }
}