import { eventConstants } from "../_constants";

export function contacttoggle(state = {}, action) {
  switch (action.type) {
    case eventConstants.CONTACT_TOGGLE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CONTACT_TOGGLE_SUCCESS:
      return {
        contacttoggle: action.contacttoggle,
      };
    case eventConstants.CONTACT_TOGGLE_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.CONTACT_TOGGLE_CLEAR_TOAST:
      return {
        contacttoggle: '',
        error: '',
      };

    
    default:
      return state;
  }
}
