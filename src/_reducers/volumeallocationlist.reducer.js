import { eventConstants } from "../_constants";

export function volumeallocationlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.VOLUME_ALLOCATION_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.VOLUME_ALLOCATION_LIST_SUCCESS:
      return {
        volumeallocationlist: action.volumeallocationlist,
      };
    case eventConstants.VOLUME_ALLOCATION_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}