import { eventConstants } from "../_constants";

export function uploadexistingcustomer(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_EXISTING_CUSTOMER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_HOLIDAY_MASTER_SUCCESS:
      return {
        uploadexistingcustomer: action.uploadexistingcustomer,
      };
    case eventConstants.UPLOAD_EXISTING_CUSTOMER_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_EXISTING_CUSTOMER_CLEAR_STATE:
        return {
            uploadexistingcustomer: undefined,
        };

    
    default:
      return state;
  }
}
