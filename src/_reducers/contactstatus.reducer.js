import { eventConstants } from "../_constants";

export function contactstatus(state = {}, action) {
  switch (action.type) {
    case eventConstants.CONTACT_STATUS_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CONTACT_STATUS_SUCCESS:
      return {
        contactstatus: action.contactstatus,
      };
    case eventConstants.CONTACT_STATUS_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}
