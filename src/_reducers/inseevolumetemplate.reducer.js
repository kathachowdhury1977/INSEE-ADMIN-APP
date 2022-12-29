import { eventConstants } from "../_constants";

export function inseevolumetemplate(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_INSEE_VOLUME_TEMPLATE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_INSEE_VOLUME_TEMPLATE_SUCCESS:
      return {
        inseevolumetemplate: action.inseevolumetemplate,
      };
    case eventConstants.DOWNLOAD_INSEE_VOLUME_TEMPLATE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}