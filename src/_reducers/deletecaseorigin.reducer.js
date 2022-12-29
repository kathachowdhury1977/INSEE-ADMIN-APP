import { eventConstants } from "../_constants";

export function deletecaseorigin(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_CASE_ORIGIN_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_CASE_ORIGIN_SUCCESS:
      return {
        deletecaseorigin: action.deletecaseorigin,
      };
    case eventConstants.DELETE_CASE_ORIGIN_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}