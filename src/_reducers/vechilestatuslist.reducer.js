import { eventConstants } from "../_constants";

export function vechilestatuslist(state = {}, action) {
  switch (action.type) {
    case eventConstants.VECHILE_STATUS_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.VECHILE_STATUS_LIST_SUCCESS:
      return {
        vechilestatuslist: action.vechilestatuslist,
      };
    case eventConstants.VECHILE_STATUS_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}