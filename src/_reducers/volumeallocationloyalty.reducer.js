import { eventConstants } from "../_constants";

export function volumeallocationloyalty(state = {}, action) {
  switch (action.type) {
    case eventConstants.VOLUME_ALLOCATION_LOYALTY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.VOLUME_ALLOCATION_LOYALTY_SUCCESS:
      return {
        volumeallocationloyalty: action.volumeallocationloyalty,
      };
    case eventConstants.VOLUME_ALLOCATION_LOYALTY_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}