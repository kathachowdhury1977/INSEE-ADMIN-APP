import { eventConstants } from "../_constants";

export function addcaseorigin(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_CASE_ORIGIN_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_CASE_ORIGIN_MASTER_SUCCESS:
      return {
        loading:false,
        addcaseorigin: action.addcaseorigin,
      };
    case eventConstants.ADD_CASE_ORIGIN_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_CASE_ORIGIN_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}