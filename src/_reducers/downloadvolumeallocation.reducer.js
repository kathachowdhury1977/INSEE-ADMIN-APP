import { eventConstants } from "../_constants";

export function downloadvolumeallocation(state = {}, action) {
  switch (action.type) {
    case eventConstants.DOWNLOAD_VOLUME_ALLOCATION_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DOWNLOAD_VOLUME_ALLOCATION_SUCCESS:
      return {
        downloadvolumeallocation: action.downloadvolumeallocation,
      };
    case eventConstants.DOWNLOAD_VOLUME_ALLOCATION_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}