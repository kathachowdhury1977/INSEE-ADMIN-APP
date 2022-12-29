import { eventConstants } from "../_constants";

export function addtruckmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_TRUCK_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_TRUCK_MASTER_SUCCESS:
      return {
        addtruckmaster: action.addtruckmaster,
      };
    case eventConstants.ADD_TRUCK_MASTER_FAILURE:
      return {
        error: action.error,
      };

    case eventConstants.ADD_TRUCK_MASTER_CLEAR_TOAST:
      return {
        addtruckmaster: ''
      }


    default:
      return state;
  }
}
