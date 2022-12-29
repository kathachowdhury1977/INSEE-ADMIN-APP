import { eventConstants } from "../_constants";

export function downloadadjustloyaltyadmin(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_ADJUST_LOYALTY_ADMIN_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_ADJUST_LOYALTY_ADMIN_SUCCESS:
      return {
        downloadadjustloyaltyadmin: action.downloadadjustloyaltyadmin,
      };
    case eventConstants.DOWNLOAD_ADJUST_LOYALTY_ADMIN_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}