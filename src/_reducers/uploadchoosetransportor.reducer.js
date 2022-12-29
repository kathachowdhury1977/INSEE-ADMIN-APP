import { eventConstants } from "../_constants";

export function uploadchoosetransportor(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_CHOOSE_TRANSPORTOR_ZONE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_CHOOSE_TRANSPORTOR_ZONE_SUCCESS:
      return {
        uploadchoosetransportor: action.uploadchoosetransportor,
      };
    case eventConstants.UPLOAD_CHOOSE_TRANSPORTOR_ZONE_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_CHOOSE_TRANSPORTOR_ZONE_CLEAR_TOAST:
      return {
        uploadchoosetransportor: '',
        error: '',
      };

    
    default:
      return state;
  }
}