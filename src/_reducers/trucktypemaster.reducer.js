import { eventConstants } from "../_constants";

export function trucktypemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.TRUCK_TYPE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.TRUCK_TYPE_MASTER_LIST_SUCCESS:
      return {
        gettrucktype: action.gettrucktype,
      };
    case eventConstants.TRUCK_TYPE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}