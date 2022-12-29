import { eventConstants } from "../_constants";

export function deleteareatype(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_AREA_TYPE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_AREA_TYPE_SUCCESS:
      return {
        deleteareatype: action.deleteareatype,
      };
    case eventConstants.DELETE_AREA_TYPE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}