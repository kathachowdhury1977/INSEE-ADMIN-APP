import { eventConstants } from "../_constants";

export function updatetruckmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_TRUCK_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_TRUCK_MASTER_SUCCESS:
      return {
        updatetruckmaster: action.updatetruckmaster,
      };
    case eventConstants.UPDATE_TRUCK_MASTER_FAILURE:
      return {
        error: action.error,
      };

    case eventConstants.UPDATE_TRUCK_MASTER_CLEAR_TOAST:
      return {
        updatetruckmaster: '',
      };


    default:
      return state;
  }
}