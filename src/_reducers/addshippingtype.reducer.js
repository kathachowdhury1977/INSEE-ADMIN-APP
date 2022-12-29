import { eventConstants } from "../_constants";

export function addshippingtype(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_SHIPPING_TYPE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_SHIPPING_TYPE_SUCCESS:
      return {
        loading:false,
        addshippingtype: action.addshippingtype,
      };
    case eventConstants.ADD_SHIPPING_TYPE_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_SHIPPING_TYPE_RESET:
        return {
        };

    
    default:
      return state;
  }
}