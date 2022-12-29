import { eventConstants } from "../_constants";

export function soldtomanagmentitemid(state = {}, action) {
  switch (action.type) {
    case eventConstants.SOLD_MANAGEMENT_ITEM_ID_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SOLD_MANAGEMENT_ITEM_ID_SUCCESS:
      return {
        soldtomanagmentitemid: action.soldtomanagmentitemid,
      };
    case eventConstants.SOLD_MANAGEMENT_ITEM_ID_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}