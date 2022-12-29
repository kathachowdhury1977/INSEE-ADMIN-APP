import { eventConstants } from "../_constants";

export function accountcontactlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.ACCOUNT_CONTACT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ACCOUNT_CONTACT_LIST_SUCCESS:
      return {
        accountcontactlist: action.accountcontactlist,
      };
    case eventConstants.ACCOUNT_CONTACT_LIST_FAILURE:
      return {
        error: action.error,
      };
      

    
    default:
      return state;
  }
}
