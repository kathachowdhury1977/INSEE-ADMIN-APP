import { eventConstants } from "../_constants";

export function updateproductdateundersoldto(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_PRODUCT_DATE_UNDER_SOLDTO_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_PRODUCT_DATE_UNDER_SOLDTO_SUCCESS:
      return {
        updateproductdateundersoldto: action.updateproductdateundersoldto,
      };
    case eventConstants.UPDATE_PRODUCT_DATE_UNDER_SOLDTO_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}