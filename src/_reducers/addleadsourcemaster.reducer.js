import { eventConstants } from "../_constants";

export function addleadsourcemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_LEAD_SOURCE_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_LEAD_SOURCE_MASTER_SUCCESS:
      return {
        loading:false,
        addleadsource: action.addleadsource,
      };
    case eventConstants.ADD_LEAD_SOURCE_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_LEAD_SOURCE_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}