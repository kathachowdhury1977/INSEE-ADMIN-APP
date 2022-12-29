import { eventConstants } from "../_constants";

export function shiptoselectid(state = {}, action) {
  switch (action.type) {
    case eventConstants.SHIPTO_SELECT_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SHIPTO_SELECT_PRODUCT_SUCCESS:
      return {
        shiptoselectid: action.shiptoselectid,
      };
    case eventConstants.SHIPTO_SELECT_PRODUCT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}