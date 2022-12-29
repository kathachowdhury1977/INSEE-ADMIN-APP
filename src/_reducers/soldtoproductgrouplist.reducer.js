import { eventConstants } from "../_constants";

export function soldtoproductgrouplist(state = {}, action) {
  switch (action.type) {
    case eventConstants.SOLD_PRODUCTGROUP_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SOLD_PRODUCTGROUP_LIST_SUCCESS:
      return {
        soldtoproductgrouplist: action.soldtoproductgrouplist,
      };
    case eventConstants.SOLD_PRODUCTGROUP_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}