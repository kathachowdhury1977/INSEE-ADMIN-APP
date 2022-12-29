import { eventConstants } from "../_constants";

export function districtselect(state = {}, action) {
  switch (action.type) {
    case eventConstants.DISTRICT_SELECT_VALUE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DISTRICT_SELECT_VALUE_SUCCESS:
      return {
        districtselect: action.districtselect,
      };
    case eventConstants.DISTRICT_SELECT_VALUE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}