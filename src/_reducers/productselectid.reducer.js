import { eventConstants } from "../_constants";

export function productselectid(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_SELECT_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_SELECT_PRODUCT_SUCCESS:
      return {
        productselectid: action.productselectid,
      };
    case eventConstants.PRODUCT_SELECT_PRODUCT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}