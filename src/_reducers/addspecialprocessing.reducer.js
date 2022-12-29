import { eventConstants } from "../_constants";

export function addspecialprocessing(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_SPECIAL_PROCESSING_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_SPECIAL_PROCESSING_SUCCESS:
      return {
        loading:false,
        addspecialprocessing: action.addspecialprocessing,
      };
    case eventConstants.ADD_SPECIAL_PROCESSING_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_SPECIAL_PROCESSING_RESET:
        return {
        };

    
    default:
      return state;
  }
}