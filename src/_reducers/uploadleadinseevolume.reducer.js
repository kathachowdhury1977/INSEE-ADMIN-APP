import { eventConstants } from "../_constants";

export function uploadleadinseevolume(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_LEAD_INSEE_VOLUME_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_LEAD_INSEE_VOLUME_SUCCESS:
      return {
        uploadleadinseevolume: action.uploadleadinseevolume,
      };
    case eventConstants.UPLOAD_LEAD_INSEE_VOLUME_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_LEAD_INSEE_VOLUME_CLEAR_TOAST:
      return {
        uploadleadinseevolume:'',
        error: '',
      };

    
    default:
      return state;
  }
}