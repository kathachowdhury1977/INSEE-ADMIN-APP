import { eventConstants } from "../_constants";

export function downloadrelationwith(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_RELATION_CUSTOMER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_RELATION_CUSTOMER_SUCCESS:
      return {
        downloadrelationwith: action.downloadrelationwith,
      };
    case eventConstants.DOWNLOAD_RELATION_CUSTOMER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}