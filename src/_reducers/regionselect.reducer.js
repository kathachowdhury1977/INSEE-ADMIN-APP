import { eventConstants } from "../_constants";

export function regionselect(state = {}, action) {
  switch (action.type) {
    case eventConstants.REGION_SELECT_VALUE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.REGION_SELECT_VALUE_SUCCESS:
      return {
        regionselect: action.regionselect,
      };
    case eventConstants.REGION_SELECT_VALUE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}