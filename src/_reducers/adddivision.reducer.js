import { eventConstants } from "../_constants";

export function adddivision(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_DIVISION_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_DIVISION_SUCCESS:
      return {
        loading:false,
        adddivision: action.adddivision,
      };
    case eventConstants.ADD_DIVISION_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_DIVISION_RESET:
        return {
        };

    
    default:
      return state;
  }
}