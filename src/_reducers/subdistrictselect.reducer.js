import { eventConstants } from "../_constants";

export function subdistrictselect(state = {}, action) {
  switch (action.type) {
    case eventConstants.SUB_DISTRICT_SELECT_VALUE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SUB_DISTRICT_SELECT_VALUE_SUCCESS:
      return {
        subdistrictselect: action.subdistrictselect,
      };
    case eventConstants.SUB_DISTRICT_SELECT_VALUE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}