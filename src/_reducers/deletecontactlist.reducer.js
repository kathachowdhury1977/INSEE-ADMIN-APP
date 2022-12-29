import { eventConstants } from "../_constants";

export function deletecontactlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_CONTACT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_CONTACT_LIST_SUCCESS:
      return {
        deletecontactlist: action.deletecontactlist,
      };
    case eventConstants.DELETE_CONTACT_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}