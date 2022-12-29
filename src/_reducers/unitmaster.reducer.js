import { eventConstants } from "../_constants";

export function unitmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.UNIT_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UNIT_MASTER_LIST_SUCCESS:
      return {
        unitmaster: action.unitmaster,
      };
    case eventConstants.UNIT_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}