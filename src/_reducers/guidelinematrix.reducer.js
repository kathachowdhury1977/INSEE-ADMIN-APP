import { eventConstants } from "../_constants";

export function guidelinematrix(state = {}, action) {
  switch (action.type) {
    case eventConstants.GUIDELINE_MATRIX_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GUIDELINE_MATRIX_LIST_SUCCESS:
      return {
        guidelinematrix: action.guidelinematrix,
      };
    case eventConstants.GUIDELINE_MATRIX_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}