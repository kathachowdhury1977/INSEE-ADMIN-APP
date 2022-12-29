import { eventConstants } from "../_constants";

export function addleadstagemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_LEAD_STAGE_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_LEAD_STAGE_MASTER_SUCCESS:
      return {
        loading:false,
        addleadstage: action.addleadstage,
      };
    case eventConstants.ADD_LEAD_STAGE_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_LEAD_STAGE_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}