import { eventConstants } from "../_constants";

export function soldtomanagmentsearch(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_SOLD_TO_SEARCH_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_SOLD_TO_SEARCH_SUCCESS:
      return {
        soldtomanagmentsearch: action.soldtomanagmentsearch,
      };
    case eventConstants.GET_SOLD_TO_SEARCH_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.GET_SOLD_TO_SEARCH_CLEAR_STATE:
        return {
          soldtomanagmentsearch: '',
      
        };

    
    default:
      return state;
  }
}