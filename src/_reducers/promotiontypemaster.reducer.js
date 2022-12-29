import { eventConstants } from "../_constants";

export function promotiontypemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.PROMOTION_TYPE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PROMOTION_TYPE_MASTER_LIST_SUCCESS:
      return {
        getpromotiontype: action.getpromotiontype,
      };
    case eventConstants.PROMOTION_TYPE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}