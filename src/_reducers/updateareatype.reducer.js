import { eventConstants } from "../_constants";

export function updateareatype(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_AREA_TYPE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_AREA_TYPE_SUCCESS:
      return {
        updateareatype: action.updateareatype,
      };
    case eventConstants.UPDATE_AREA_TYPE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}