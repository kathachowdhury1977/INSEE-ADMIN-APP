import { eventConstants } from "../_constants";

export function projecttypemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.PROJECT_TYPE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PROJECT_TYPE_MASTER_LIST_SUCCESS:
      return {
        getprojecttype: action.getprojecttype,
      };
    case eventConstants.PROJECT_TYPE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}