import { eventConstants } from "../_constants";

export function shippingcondition(state = {}, action) {
  switch (action.type) {
    case eventConstants.SHIPPING_CONDITION_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SHIPPING_CONDITION_SUCCESS:
      return {
        shippingcondition: action.shippingcondition,
      };
    case eventConstants.SHIPPING_CONDITION_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}