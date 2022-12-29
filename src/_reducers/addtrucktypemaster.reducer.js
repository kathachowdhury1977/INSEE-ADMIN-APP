import { eventConstants } from "../_constants";

export function addtrucktypemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_TRUCK_TYPE_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_TRUCK_TYPE_MASTER_SUCCESS:
      return {
        loading:false,
        addtrucktype: action.addtrucktype,
      };
    case eventConstants.ADD_TRUCK_TYPE_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_TRUCK_TYPE_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}