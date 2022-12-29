import { eventConstants } from "../_constants";

export function deletecasestatusmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_CASE_STATUS_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_CASE_STATUS_SUCCESS:
      return {
        loading:false,
        deletecasestatus: action.deletecasestatus,
      };
    case eventConstants.DELETE_CASE_STATUS_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.DELETE_CASE_STATUS_RESET:
        return {
        };

    default:
      return state;
  }
}