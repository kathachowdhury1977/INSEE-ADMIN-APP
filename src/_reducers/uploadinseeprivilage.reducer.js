import { eventConstants } from "../_constants";

export function uploadinseeprivilage(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_INSEE_PRIVILAGE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_INSEE_PRIVILAGE_SUCCESS:
      return {
        uploadinseeprivilage: action.uploadinseeprivilage,
      };
    case eventConstants.UPLOAD_INSEE_PRIVILAGE_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_INSEE_PRIVILAGE_CLEAR_TOAST:
      return {
        uploadinseeprivilage: '',
        error: '',
      };

    
    default:
      return state;
  }
}