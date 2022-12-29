import { eventConstants } from "../_constants";

export function adduser(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_USER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_USER_SUCCESS:
      return {
        adduser: action.adduser,
      };
    case eventConstants.ADD_USER_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.ADD_USER_CLEAR_STATE:
        return {
          adduser: undefined,
        };

    
    default:
      return state;
  }
}
