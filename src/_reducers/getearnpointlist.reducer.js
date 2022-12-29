import { eventConstants } from "../_constants";

export function getearnpointlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_EARN_POINT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_EARN_POINT_LIST_SUCCESS:
      return {
        getearnpointlist: action.getearnpointlist,
      };
    case eventConstants.GET_EARN_POINT_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}