import { eventConstants } from "../_constants";

export function getrolelist(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_ROLE_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_ROLE_LIST_SUCCESS:
      return {
        getrolelist: action.getrolelist,
      };
    case eventConstants.GET_ROLE_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}