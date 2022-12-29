import { eventConstants } from "../_constants";

export function uploadspecialprojectdelivery(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_SPECIAL_PROJECT_DELIVERY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_SPECIAL_PROJECT_DELIVERY_SUCCESS:
      return {
        uploadspecialprojectdelivery: action.uploadspecialprojectdelivery,
      };
    case eventConstants.UPLOAD_SPECIAL_PROJECT_DELIVERY_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_SPECIAL_PROJECT_DELIVERY_CLEAR_TOAST:
      return {
        uploadspecialprojectdelivery: '',  
        error: '',
      };

    
    default:
      return state;
  }
}