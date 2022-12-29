import { eventConstants } from "../_constants";

export function strategytypemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.STRATEGY_TYPE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.STRATEGY_TYPE_MASTER_LIST_SUCCESS:
      return {
        getstrategytype : action.getstrategytype,
      };
    case eventConstants.STRATEGY_TYPE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}