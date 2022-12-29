import { eventConstants } from "../_constants";

export function areatypemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.AREA_TYPE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.AREA_TYPE_MASTER_LIST_SUCCESS:
      return {
        getareatype: action.getareatype,
      };
    case eventConstants.AREA_TYPE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}