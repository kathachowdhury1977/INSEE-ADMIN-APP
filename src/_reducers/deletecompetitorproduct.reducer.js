import { eventConstants } from "../_constants";

export function deletecompetitorproduct(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_COMPETITOR_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_COMPETITOR_PRODUCT_SUCCESS:
      return {
        deletecompetitorproduct: action.deletecompetitorproduct,
      };
    case eventConstants.DELETE_COMPETITOR_PRODUCT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}