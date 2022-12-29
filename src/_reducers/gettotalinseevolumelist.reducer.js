import { eventConstants } from "../_constants";

export function gettotalinseevolumelist(state = {}, action) {
  switch (action.type) {
    case eventConstants.TOTAL_INSEE_VOLUME_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.TOTAL_INSEE_VOLUME_LIST_SUCCESS:
      return {
        gettotalinseevolumelist: action.gettotalinseevolumelist,
      };
    case eventConstants.TOTAL_INSEE_VOLUME_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}