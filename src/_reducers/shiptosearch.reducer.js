import { eventConstants } from "../_constants";

export function shiptosearch(state = {}, action) {
  switch (action.type) {
    case eventConstants.SHIP_TO_SEARCH_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SHIP_TO_SEARCH_SUCCESS:
      return {
        shiptosearch: action.shiptosearch,
      };
    case eventConstants.SHIP_TO_SEARCH_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}