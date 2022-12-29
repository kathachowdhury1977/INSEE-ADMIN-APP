import { eventConstants } from "../_constants";

export function allholidaymasterlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.HOLIDAY_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.HOLIDAY_MASTER_LIST_SUCCESS:
      return {
        allholidaymasterlist: action.allholidaymasterlist,
      };
    case eventConstants.HOLIDAY_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
}