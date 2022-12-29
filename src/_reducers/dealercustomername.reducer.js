import { eventConstants } from "../_constants";

export function dealercustomername(state = {}, action) {
  switch (action.type) {
    case eventConstants.DEALER_CUSTOMER_NAME_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DEALER_CUSTOMER_NAME_SUCCESS:
      return {
        dealercustomername: action.dealercustomername,
      };
    case eventConstants.DEALER_CUSTOMER_NAME_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}