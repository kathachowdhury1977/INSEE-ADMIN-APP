import { eventConstants } from "../_constants";

export function functionalrolemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.FUNCTIONAL_ROLE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.FUNCTIONAL_ROLE_MASTER_LIST_SUCCESS:
      return {
        getfunctionalrole : action.getfunctionalrole,
      };
    case eventConstants.FUNCTIONAL_ROLE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}