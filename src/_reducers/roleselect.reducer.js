import { eventConstants } from "../_constants";

export function roleselect(state = {}, action) {
  switch (action.type) {
    case eventConstants.ROLE_SELECT_VALUE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ROLE_SELECT_VALUE_SUCCESS:
      return {
        roleselect: action.roleselect,
      };
    case eventConstants.ROLE_SELECT_VALUE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}