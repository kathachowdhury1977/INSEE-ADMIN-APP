import { eventConstants } from "../_constants";

export function soldtopdpaforcustomer(state = {}, action) {
  switch (action.type) {
    case eventConstants.SOLDTO_PDPA_FOR_CUSTOMER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SOLDTO_PDPA_FOR_CUSTOMER_SUCCESS:
      return {
        soldtopdpaforcustomer: action.soldtopdpaforcustomer,
      };
    case eventConstants.SOLDTO_PDPA_FOR_CUSTOMER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}