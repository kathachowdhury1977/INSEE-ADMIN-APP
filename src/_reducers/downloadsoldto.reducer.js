import { eventConstants } from "../_constants";

export function downloadsoldto(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_SOLDTO_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_SOLDTO_SUCCESS:
      return {
        downloadsoldto: action.downloadsoldto,
      };
    case eventConstants.DOWNLOAD_SOLDTO_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}