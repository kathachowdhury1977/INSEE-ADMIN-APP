import { eventConstants } from "../_constants";

export function addshippingcondition(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_SHIPPING_CONDITION_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_SHIPPING_CONDITION_SUCCESS:
      return {
        loading:false,
        addshippingcondition: action.addshippingcondition,
      };
    case eventConstants.ADD_SHIPPING_CONDITION_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_SHIPPING_CONDITION_RESET:
        return {
        };

    
    default:
      return state;
  }
}