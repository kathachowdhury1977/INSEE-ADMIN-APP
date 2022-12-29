import { eventConstants } from "../_constants";

export function updatecasetypemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_CASE_TYPE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_CASE_TYPE_SUCCESS:
      return {
        loading:false,
        updatecasetype: action.updatecasetype,
      };
    case eventConstants.UPDATE_CASE_TYPE_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.UPDATE_CASE_TYPE_RESET:
        return {
        };    
    default:
      return state;
  }
}
