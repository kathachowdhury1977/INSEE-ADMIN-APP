import { eventConstants } from "../_constants";

export function uploadforcastinseevolume(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_FORCAST_INSEE_VOLUME_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_FORCAST_INSEE_VOLUME_SUCCESS:
      return {
        uploadforcastinseevolume: action.uploadforcastinseevolume,
      };
    case eventConstants.UPLOAD_FORCAST_INSEE_VOLUME_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_FORCAST_INSEE_VOLUME_CLEAR_TOAST:
      return {
        uploadforcastinseevolume: '',
        error: '',
      };

    
    default:
      return state;
  }
}