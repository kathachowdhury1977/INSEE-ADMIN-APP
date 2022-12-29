import { eventConstants } from "../_constants";

export function competitorproduct(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_COMPETITOR_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_COMPETITOR_PRODUCT_SUCCESS:
      return {
        competitorproduct: action.competitorproduct,
      };
    case eventConstants.UPDATE_COMPETITOR_PRODUCT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}