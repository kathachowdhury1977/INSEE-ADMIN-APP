import { eventConstants } from "../_constants";

export function casestatus(state = {}, action) {
  switch (action.type) {
    case eventConstants.CASE_STATUS_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CASE_STATUS_LIST_SUCCESS:
      return {
        casestatus: action.casestatus,
      };
    case eventConstants.CASE_STATUS_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}