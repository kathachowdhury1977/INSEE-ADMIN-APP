import { eventConstants } from "../_constants";

export function shiptolist(state = {}, action) {
  switch (action.type) {
    case eventConstants.SOLD_SHIP_TO_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SOLD_SHIP_TO_LIST_SUCCESS:
      return {
        shiptolist: action.shiptolist,
      };
    case eventConstants.SOLD_SHIP_TO_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}