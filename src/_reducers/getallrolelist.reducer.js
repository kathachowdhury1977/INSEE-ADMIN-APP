import { eventConstants } from "../_constants";

export function getallrolelist(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_ALL_ROLE_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_ALL_ROLE_LIST_SUCCESS:
      return {
        getallrolelist: action.getallrolelist,
      };
    case eventConstants.GET_ALL_ROLE_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}