import { eventConstants } from "../_constants";

export function internalmanagmentfilter(state = {}, action) {
  switch (action.type) {
    case eventConstants.INTERNAL_MANAGMENT_FILTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.INTERNAL_MANAGMENT_FILTER_SUCCESS:
      return {
        internalmanagmentfilter: action.internalmanagmentfilter,
      };
    case eventConstants.INTERNAL_MANAGMENT_FILTER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}