import { eventConstants } from "../_constants";

export function specialprocessing(state = {}, action) {
  switch (action.type) {
    case eventConstants.SPECIAL_PROCESSING_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SPECIAL_PROCESSING_SUCCESS:
      return {
        specialprocessing: action.specialprocessing,
      };
    case eventConstants.SPECIAL_PROCESSING_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}