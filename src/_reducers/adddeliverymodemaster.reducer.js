import { eventConstants } from "../_constants";

export function adddeliverymodemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_DELIVERY_MODE_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_DELIVERY_MODE_MASTER_SUCCESS:
      return {
        loading:false,
        adddeliverymode: action.adddeliverymode,
      };
    case eventConstants.ADD_DELIVERY_MODE_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_DELIVERY_MODE_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}