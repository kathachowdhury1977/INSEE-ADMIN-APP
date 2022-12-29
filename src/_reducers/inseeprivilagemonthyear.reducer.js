import { eventConstants } from "../_constants";

export function inseeprivilagemonthyear(state = {}, action) {
  switch (action.type) {
    case eventConstants.INSEE_PRIVILAGE_MONTH_YEAR_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.INSEE_PRIVILAGE_MONTH_YEAR_SUCCESS:
      return {
        inseeprivilagemonthyear: action.inseeprivilagemonthyear,
      };
    case eventConstants.INSEE_PRIVILAGE_MONTH_YEAR_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}