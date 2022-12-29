import { eventConstants } from "../_constants";

export function retailervnlkcontactexcel(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_DOWNLOAD_CONTACT_VNLK_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_DOWNLOAD_CONTACT_VNLK_SUCCESS:
      return {
        retailervnlkcontactexcel: action.retailervnlkcontactexcel,
      };
    case eventConstants.RETAILER_DOWNLOAD_CONTACT_VNLK_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}