import { eventConstants } from "../_constants";

export function adduserrolemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_USER_ROLE_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_USER_ROLE_MASTER_SUCCESS:
      return {
        adduserrole: action.adduserrole,
      };
    case eventConstants.ADD_USER_ROLE_MASTER_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_USER_ROLE_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}