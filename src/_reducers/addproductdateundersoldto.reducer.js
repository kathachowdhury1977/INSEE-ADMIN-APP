import { eventConstants } from "../_constants";

export function addproductdateundersoldto(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_PRODUCT_DATE_UNDER_SOLDTO_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_PRODUCT_DATE_UNDER_SOLDTO_SUCCESS:
      return {
        addproductdateundersoldto: action.addproductdateundersoldto,
      };
    case eventConstants.ADD_PRODUCT_DATE_UNDER_SOLDTO_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}