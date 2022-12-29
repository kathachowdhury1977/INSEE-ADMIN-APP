import { eventConstants } from "../_constants";

export function uploadguidelinematrix(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_GUIDELINE_MATRIX_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_GUIDELINE_MATRIX_SUCCESS:
      return {
        uploadguidelinematrix: action.uploadguidelinematrix,
      };
    case eventConstants.UPLOAD_GUIDELINE_MATRIX_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}