import { eventConstants } from "../_constants";

export function contactvnlkLink(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_VNLK_URL_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_VNLK_URL_SUCCESS:
      return {
        contactvnlkLink: action.contactvnlkLink,
      };
    case eventConstants.DOWNLOAD_VNLK_URL_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}