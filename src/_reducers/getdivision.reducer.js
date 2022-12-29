import { eventConstants } from "../_constants";

export function getdivision(state = {}, action) {
  switch (action.type) {
    case eventConstants.DIVISION_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DIVISION_LIST_SUCCESS:
      return {
        getdivision: action.getdivision,
      };
    case eventConstants.DIVISION_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}