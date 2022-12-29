import { eventConstants } from "../_constants";

export function activetruckmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ACTIVE_TRUCK_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ACTIVE_TRUCK_MASTER_SUCCESS:
      return {
        activetruckmaster: action.activetruckmaster,
      };
    case eventConstants.ACTIVE_TRUCK_MASTER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}