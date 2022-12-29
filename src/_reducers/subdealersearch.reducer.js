import { eventConstants } from "../_constants";

export function subdealersearch(state = {}, action) {
  switch (action.type) {
    case eventConstants.SUB_DEALER_SEARCH_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SUB_DEALER_SEARCH_SUCCESS:
      return {
        subdealersearch: action.subdealersearch,
      };
    case eventConstants.SUB_DEALER_SEARCH_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}