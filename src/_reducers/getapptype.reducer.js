import { eventConstants } from "../_constants";

export function getapptype(state = {}, action) {
  switch (action.type) {
    case eventConstants.APP_TYPE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.APP_TYPE_SUCCESS:
      return {
        getapptype: action.getapptype,
      };
    case eventConstants.APP_TYPE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}
