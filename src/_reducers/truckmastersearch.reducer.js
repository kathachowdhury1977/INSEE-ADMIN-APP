import { eventConstants } from "../_constants";

export function truckmastersearch(state = {}, action) {
  switch (action.type) {
    case eventConstants.TRUCK_MASTER_SEARCH_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.TRUCK_MASTER_SEARCH_SUCCESS:
      return {
        truckmastersearch: action.truckmastersearch,
      };
    case eventConstants.TRUCK_MASTER_SEARCH_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}