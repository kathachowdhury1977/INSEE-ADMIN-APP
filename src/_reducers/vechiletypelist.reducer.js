import { eventConstants } from "../_constants";

export function vechiletypelist(state = {}, action) {
  switch (action.type) {
    case eventConstants.VECHILE_TYPE_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.VECHILE_TYPE_LIST_SUCCESS:
      return {
        vechiletypelist: action.vechiletypelist,
      };
    case eventConstants.VECHILE_TYPE_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}