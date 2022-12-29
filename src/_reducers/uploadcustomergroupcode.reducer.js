import { eventConstants } from "../_constants";

export function uploadcustomergroupcode(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_CUSTOMER_GROUP_CODE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_CUSTOMER_GROUP_CODE_SUCCESS:
      return {
        uploadcustomergroupcode: action.uploadcustomergroupcode,
      };
    case eventConstants.UPLOAD_CUSTOMER_GROUP_CODE_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_CUSTOMER_GROUP_CODE_CLEAR_TOAST:
      return {
        uploadcustomergroupcode: '',  
        error: '',
      };

    
    default:
      return state;
  }
}