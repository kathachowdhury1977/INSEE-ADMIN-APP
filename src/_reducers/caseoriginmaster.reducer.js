import { eventConstants } from "../_constants";

export function caseoriginmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.CASE_ORIGIN_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CASE_ORIGIN_MASTER_LIST_SUCCESS:
      return {
        getcaseorigin: action.getcaseorigin,
      };
    case eventConstants.CASE_ORIGIN_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}