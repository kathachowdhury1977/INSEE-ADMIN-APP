import { eventConstants } from "../_constants";

export function getredemlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_REDAM_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_REDAM_LIST_SUCCESS:
      return {
        getredemlist: action.getredemlist,
      };
    case eventConstants.GET_REDAM_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}