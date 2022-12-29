import { eventConstants } from "../_constants";

export function getautoinseeprivilege(state = {}, action) {
  switch (action.type) {
    case eventConstants.INSEE_AUTO_PRIVILEGE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.INSEE_AUTO_PRIVILEGE_SUCCESS:
      return {
        getautoinseeprivilege: action.getautoinseeprivilege,
      };
    case eventConstants.INSEE_AUTO_PRIVILEGE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}