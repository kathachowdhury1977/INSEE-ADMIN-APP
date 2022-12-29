import { eventConstants } from "../_constants";

export function deletecasetypemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_CASE_TYPE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_CASE_TYPE_SUCCESS:
      return {
        deletecasetype: action.deletecasetype,
      };
    case eventConstants.DELETE_CASE_TYPE_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.DELETE_CASE_TYPE_RESET:
        return {
        };

    
    default:
      return state;
  }
}