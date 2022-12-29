import { eventConstants } from "../_constants";

export function uploadrelationcustomerlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_RELATION_CUSTOMER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_RELATION_CUSTOMER_SUCCESS:
      return {
        uploadrelationcustomerlist: action.uploadrelationcustomerlist,
      };
    case eventConstants.UPLOAD_RELATION_CUSTOMER_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_RELATION_CUSTOMER_CLEAR_STATE:
        return {
            uploadrelationcustomerlist: undefined,
        };

    
    default:
      return state;
  }
}
