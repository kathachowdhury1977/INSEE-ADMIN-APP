import { eventConstants } from "../_constants";

export function getownership(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_OWNERSHIP_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_OWNERSHIP_LIST_SUCCESS:
      return {
        getownership: action.getownership,
      };
    case eventConstants.GET_OWNERSHIP_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}