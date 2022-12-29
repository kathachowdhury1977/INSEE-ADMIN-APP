import { eventConstants } from "../_constants";

export function deliverymodemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELIVERY_MODE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELIVERY_MODE_MASTER_LIST_SUCCESS:
      return {
        getdeliverymode: action.getdeliverymode,
      };
    case eventConstants.DELIVERY_MODE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}