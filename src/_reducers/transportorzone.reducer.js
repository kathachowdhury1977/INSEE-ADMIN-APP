import { eventConstants } from "../_constants";

export function transportorzone(state = {}, action) {
  switch (action.type) {
    case eventConstants.TRANSPORTOR_ZONE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.TRANSPORTOR_ZONE_SUCCESS:
      return {
        transportorzone: action.transportorzone,
      };
    case eventConstants.TRANSPORTOR_ZONE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}