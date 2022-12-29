import { eventConstants } from "../_constants";

export function uploadcustomerinactive(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_CUSTOMER_INACTIVE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_CUSTOMER_INACTIVE_SUCCESS:
      return {
        uploadcustomerinactive: action.uploadcustomerinactive,
      };
    case eventConstants.UPLOAD_CUSTOMER_INACTIVE_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_CUSTOMER_INACTIVE_CLEAR_STATE:
        return {
            uploadcustomerinactive: undefined,
        };

    
    default:
      return state;
  }
}
