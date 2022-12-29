import { eventConstants } from "../_constants";

export function userrolemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.USER_ROLE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.USER_ROLE_MASTER_LIST_SUCCESS:
      return {
        getuserrole: action.getuserrole,
      };
    case eventConstants.USER_ROLE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}