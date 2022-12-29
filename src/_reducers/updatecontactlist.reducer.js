import { eventConstants } from "../_constants";

export function updatecontactlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_ACCOUNT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_ACCOUNT_LIST_SUCCESS:
      return {
        updatecontactlist: action.updatecontactlist,
      };
    case eventConstants.UPDATE_ACCOUNT_LIST_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_ACCOUNT_LIST_CLEAR:
      return {
        updatecontactlist: undefined,
      };

    
    default:
      return state;
  }
}
