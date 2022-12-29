import { eventConstants } from "../_constants";

export function autofillcontactform(state = {}, action) {
  switch (action.type) {
    case eventConstants.AUTO_FILL_CONTACT_FORM_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.AUTO_FILL_CONTACT_FORM_SUCCESS:
      return {
        autofillcontactform: action.autofillcontactform,
      };
    case eventConstants.AUTO_FILL_CONTACT_FORM_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}
