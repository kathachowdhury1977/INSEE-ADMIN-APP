import { eventConstants } from "../_constants";

export function autosubdealerlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.AUTO_SUB_DEALER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.AUTO_SUB_DEALER_LIST_SUCCESS:
      return {
        autosubdealerlist: action.autosubdealerlist,
      };
    case eventConstants.AUTO_SUB_DEALER_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}