import { eventConstants } from "../_constants";

export function subdistrictlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_SUB_DISTRICT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_SUB_DISTRICT_LIST_SUCCESS:
      return {
        subdistrictlist: action.subdistrictlist,
      };
    case eventConstants.GET_SUB_DISTRICT_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}