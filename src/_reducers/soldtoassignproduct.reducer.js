import { eventConstants } from "../_constants";

export function soldtoassignproduct(state = {}, action) {
  switch (action.type) {
    case eventConstants.SOLDTO_ASSIGN_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SOLDTO_ASSIGN_PRODUCT_SUCCESS:
      return {
        soldtoassignproduct: action.soldtoassignproduct,
      };
    case eventConstants.SOLDTO_ASSIGN_PRODUCT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}