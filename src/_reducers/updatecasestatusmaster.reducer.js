import { eventConstants } from "../_constants";

export function updatecasestatusmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_CASE_STATUS_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_CASE_STATUS_SUCCESS:
      return {
        loading:false,
        updatecasestatus: action.updatecasestatus,
      };
    case eventConstants.UPDATE_CASE_STATUS_FAILURE:
      return {
        error: action.error,
      }; 
    case eventConstants.UPDATE_CASE_STATUS_RESET:
        return {
        }; 

    default:
      return state;
  }
}
