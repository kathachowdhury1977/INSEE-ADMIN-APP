import { eventConstants } from "../_constants";

export function deleteproductdateinsoldto(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_PRODUCT_DATE_SOLDTO_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_PRODUCT_DATE_SOLDTO_SUCCESS:
      return {
        deleteproductdateinsoldto: action.deleteproductdateinsoldto,
      };
    case eventConstants.DELETE_PRODUCT_DATE_SOLDTO_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}