import { eventConstants } from "../_constants";

export function preferredtrucktypesmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.PREFERRED_TRUCK_TYPES_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PREFERRED_TRUCK_TYPES_MASTER_LIST_SUCCESS:
      return {
        getpreferredtrucktypes: action.getpreferredtrucktypes,
      };
    case eventConstants.PREFERRED_TRUCK_TYPES_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}