import { eventConstants } from "../_constants";

export function addactionstatusmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_ACTION_STATUS_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_ACTION_STATUS_MASTER_SUCCESS:
      return {
        loading:false,
        addactionstatus: action.addactionstatus,
      };
    case eventConstants.ADD_ACTION_STATUS_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_ACTION_STATUS_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}