import { eventConstants } from "../_constants";

export function beatmastersearch(state = {}, action) {
  switch (action.type) {
    case eventConstants.BEAT_MASTER_SEARCH_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.BEAT_MASTER_SEARCH_SUCCESS:
      return {
        beatmastersearch: action.beatmastersearch,
      };
    case eventConstants.BEAT_MASTER_SEARCH_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}