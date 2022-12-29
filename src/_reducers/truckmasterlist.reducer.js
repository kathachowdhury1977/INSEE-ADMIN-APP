import { eventConstants } from "../_constants";

export function truckmasterlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.TRUCK_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.TRUCK_MASTER_LIST_SUCCESS:
      return {
        truckmasterlist: action.truckmasterlist,
      };
    case eventConstants.TRUCK_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}