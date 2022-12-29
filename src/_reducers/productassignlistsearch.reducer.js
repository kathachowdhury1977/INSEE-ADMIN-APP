import { eventConstants } from "../_constants";

export function productassignlistsearch(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_ASSIGN_LIST_SEARCH_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_ASSIGN_LIST_SEARCH_SUCCESS:
      return {
        productassignlistsearch: action.productassignlistsearch,
      };
    case eventConstants.PRODUCT_ASSIGN_LIST_SEARCH_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}