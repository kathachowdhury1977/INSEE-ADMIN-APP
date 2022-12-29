import { eventConstants } from "../_constants";

export function updatecontacttoggle(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_CONTACT_TOGGLE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_CONTACT_TOGGLE_SUCCESS:
      return {
        updatecontacttoggle: action.updatecontacttoggle,
      };
    case eventConstants.UPDATE_CONTACT_TOGGLE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}