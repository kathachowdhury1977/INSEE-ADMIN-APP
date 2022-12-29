import { eventConstants } from "../_constants";

export function beatlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.BEAT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.BEAT_LIST_SUCCESS:
      return {
        beatlist: action.beatlist,
      };
    case eventConstants.BEAT_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}