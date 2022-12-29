import { eventConstants } from "../_constants";

export function getbannerimagelist(state = {}, action) {
  switch (action.type) {
    case eventConstants.BANNER_IMAGE_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.BANNER_IMAGE_LIST_SUCCESS:
      return {
        getbannerimagelist: action.getbannerimagelist,
      };
    case eventConstants.BANNER_IMAGE_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}
