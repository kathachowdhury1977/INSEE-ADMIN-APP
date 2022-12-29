import { eventConstants } from "../_constants";

export function updatecaseorigin(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_CASE_ORIGIN_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_CASE_ORIGIN_SUCCESS:
      return {
        updatecaseorigin: action.updatecaseorigin,
      };
    case eventConstants.UPDATE_CASE_ORIGIN_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_CASE_ORIGIN_CLEAR:
        return {
          updatecaseorigin: undefined,
        };

    
    default:
      return state;
  }
}