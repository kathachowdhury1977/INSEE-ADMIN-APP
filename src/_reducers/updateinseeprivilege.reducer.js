import { eventConstants } from "../_constants";

export function updateinseeprivilege(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_INSEE_PRIVILEGE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_INSEE_PRIVILEGE_SUCCESS:
      return {
        updateinseeprivilege: action.updateinseeprivilege,
      };
    case eventConstants.UPDATE_INSEE_PRIVILEGE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}