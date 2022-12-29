import { eventConstants } from "../_constants";

export function addfunctionalrolemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_FUNCTIONAL_ROLE_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_FUNCTIONAL_ROLE_MASTER_SUCCESS:
      return {
        loading:false,
        addfunctionalrole: action.addfunctionalrole,
      };
    case eventConstants.ADD_FUNCTIONAL_ROLE_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_FUNCTIONAL_ROLE_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}