import { eventConstants } from "../_constants";

export function segmentlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_SEGMENT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_SEGMENT_LIST_SUCCESS:
      return {
        segmentlist: action.segmentlist,
      };
    case eventConstants.GET_SEGMENT_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}