import { eventConstants } from "../_constants";

export function downloadinsee(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_INSEE_PRIVILEGE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_INSEE_PRIVILEGE_SUCCESS:
      return {
        downloadinsee: action.downloadinsee,
      };
    case eventConstants.DOWNLOAD_INSEE_PRIVILEGE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}