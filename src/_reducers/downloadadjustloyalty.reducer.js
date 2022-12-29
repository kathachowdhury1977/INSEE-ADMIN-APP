import { eventConstants } from "../_constants";

export function downloadadjustloyalty(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_ADJUST_LOYALTY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_ADJUST_LOYALTY_SUCCESS:
      return {
        downloadadjustloyalty: action.downloadadjustloyalty,
      };
    case eventConstants.DOWNLOAD_ADJUST_LOYALTY_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}