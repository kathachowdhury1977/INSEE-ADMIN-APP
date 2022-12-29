import { eventConstants } from "../_constants";

export function autoretailercontact(state = {}, action) {
  switch (action.type) {
    case eventConstants.AUTOFILL_RETAILER_CONTACT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.AUTOFILL_RETAILER_CONTACT_SUCCESS:
      return {
        autoretailercontact: action.autoretailercontact,
      };
    case eventConstants.AUTOFILL_RETAILER_CONTACT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}