import { eventConstants } from "../_constants";

export function downloadcustomergroupsoldto(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_CUSTOMER_GROUP_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_CUSTOMER_GROUP_SUCCESS:
      return {
        downloadcustomergroupsoldto: action.downloadcustomergroupsoldto,
      };
    case eventConstants.DOWNLOAD_CUSTOMER_GROUP_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}