import { eventConstants } from "../_constants";

export function updateretailercontactlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_RETAILER_ACCOUNT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_RETAILER_ACCOUNT_LIST_SUCCESS:
      return {
        updateretailercontactlist: action.updateretailercontactlist,
      };
    case eventConstants.UPDATE_RETAILER_ACCOUNT_LIST_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_RETAILER_ACCOUNT_LIST_CLEAR:
        return {
          updateretailercontactlist: undefined,
        };

    
    default:
      return state;
  }
}