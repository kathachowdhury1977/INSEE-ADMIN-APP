import { eventConstants } from "../_constants";

export function regionlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_REGION_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_REGION_LIST_SUCCESS:
      return {
        regionlist: action.regionlist,
      };
    case eventConstants.GET_REGION_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}
