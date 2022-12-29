import { eventConstants } from "../_constants";

export function addretailersoldto(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_RETAILER_SOLDTO_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_RETAILER_SOLDTO_SUCCESS:
      return {
        addretailersoldto: action.addretailersoldto,
      };
    case eventConstants.ADD_RETAILER_SOLDTO_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.ADD_RETAILER_SOLDTO_CLEAR_TOAST:
        return {
         addretailersoldto: undefined,
         error: ''
        };

    
    default:
      return state;
  }
}