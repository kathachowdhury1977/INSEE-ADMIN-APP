import { eventConstants } from "../_constants";

export function geographymasterlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_GEOGRAPHY_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_GEOGRAPHY_MASTER_LIST_SUCCESS:
      return {
        geographymasterlist: action.geographymasterlist,
      };
    case eventConstants.GET_GEOGRAPHY_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}