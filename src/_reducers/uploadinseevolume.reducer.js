import { eventConstants } from "../_constants";

export function uploadinseevolume(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_INSEE_VOLUME_EXCEL_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_INSEE_VOLUME_EXCEL_SUCCESS:
      return {
        uploadinseevolume: action.uploadinseevolume,
      };
    case eventConstants.UPLOAD_INSEE_VOLUME_EXCEL_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.UPLOAD_INSEE_VOLUME_EXCEL_CLEARTOAST:
      return {
        uploadinseevolume: '',
        error: '',
      };

    
    default:
      return state;
  }
}