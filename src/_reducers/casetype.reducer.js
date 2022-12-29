import { eventConstants } from "../_constants";

export function casetype(state = {}, action) {
  switch (action.type) {
    case eventConstants.CASE_TYPE_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CASE_TYPE_LIST_SUCCESS:
      return {
        casetype: action.casetype,
      };
    case eventConstants.CASE_TYPE_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}