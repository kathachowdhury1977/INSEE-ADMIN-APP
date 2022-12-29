import { eventConstants } from "../_constants";

export function productgroupsearch(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_GROUP_SEARCH_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_GROUP_SEARCH_SUCCESS:
      return {
        productgroupsearch: action.productgroupsearch,
      };
    case eventConstants.PRODUCT_GROUP_SEARCH_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.PRODUCT_GROUP_SEARCH_CLEAR:
        return {
          productgroupsearch: '',
          error: ''
        };

    
    default:
      return state;
  }
}