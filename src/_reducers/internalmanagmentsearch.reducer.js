import { eventConstants } from "../_constants";

export function internalmanagmentsearch(state = {}, action) {
  switch (action.type) {
    case eventConstants.INTERNAL_MANAGMENT_SEARCH_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.INTERNAL_MANAGMENT_SEARCH_SUCCESS:
      return {
        internalmanagmentsearch: action.internalmanagmentsearch,
      };
    case eventConstants.INTERNAL_MANAGMENT_SEARCH_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.INTERNAL_MANAGMENT_SEARCH_CLEAR_STATE:
      return {
        internalmanagmentsearch: undefined,
      };

    
    default:
      return state;
  }
}