import { eventConstants } from "../_constants";

export function addrole(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_ROLE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_ROLE_SUCCESS:
      return {
        addrole: action.addrole,
      };
    case eventConstants.ADD_ROLE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}