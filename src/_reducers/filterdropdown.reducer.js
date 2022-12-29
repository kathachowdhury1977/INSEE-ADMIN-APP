import { eventConstants } from "../_constants";

export function filterDropdown(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_ALL_USER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_ALL_USER_LIST_SUCCESS:
      return {
        filterDropdown: action.filterDropdown,
      };
    case eventConstants.GET_ALL_USER_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}