import { eventConstants } from "../_constants";

export function ordertypemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ORDER_TYPE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ORDER_TYPE_MASTER_LIST_SUCCESS:
      return {
        getordertype: action.getordertype,
      };
    case eventConstants.ORDER_TYPE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}