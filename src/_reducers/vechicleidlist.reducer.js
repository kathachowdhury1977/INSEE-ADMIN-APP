import { eventConstants } from "../_constants";

export function vechicleidlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.VECHILE_ID_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.VECHILE_ID_LIST_SUCCESS:
      return {
        vechicleidlist: action.vechicleidlist,
      };
    case eventConstants.VECHILE_ID_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}