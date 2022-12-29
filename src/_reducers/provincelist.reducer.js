import { eventConstants } from "../_constants";

export function provincelist(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_PROVINCE_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_PROVINCE_LIST_SUCCESS:
      return {
        provincelist: action.provincelist,
      };
    case eventConstants.GET_PROVINCE_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}