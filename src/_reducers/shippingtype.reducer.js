import { eventConstants } from "../_constants";

export function shippingtype(state = {}, action) {
  switch (action.type) {
    case eventConstants.SHIPPING_TYPE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SHIPPING_TYPE_SUCCESS:
      return {
        shippingtype: action.shippingtype,
      };
    case eventConstants.SHIPPING_TYPE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}