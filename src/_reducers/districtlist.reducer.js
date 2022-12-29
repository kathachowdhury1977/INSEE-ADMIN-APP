import { eventConstants } from "../_constants";

export function districtlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_DISTRICT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_DISTRICT_LIST_SUCCESS:
      return {
        districtlist: action.districtlist,
      };
    case eventConstants.GET_DISTRICT_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}