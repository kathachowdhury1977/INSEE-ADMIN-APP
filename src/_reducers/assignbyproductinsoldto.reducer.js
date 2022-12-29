import { eventConstants } from "../_constants";

export function assignbyproductinsoldto(state = {}, action) {
  switch (action.type) {
    case eventConstants.ASSIGNBY_PRODUCT_INSOLDTO_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ASSIGNBY_PRODUCT_INSOLDTO_SUCCESS:
      return {
        assignbyproductinsoldto: action.assignbyproductinsoldto,
      };
    case eventConstants.ASSIGNBY_PRODUCT_INSOLDTO_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}