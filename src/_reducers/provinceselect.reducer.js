import { eventConstants } from "../_constants";

export function provinceselect(state = {}, action) {
  switch (action.type) {
    case eventConstants.PROVINCE_SELECT_VALUE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PROVINCE_SELECT_VALUE_SUCCESS:
      return {
        provinceselect: action.provinceselect,
      };
    case eventConstants.PROVINCE_SELECT_VALUE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}