import { eventConstants } from "../_constants";

export function inssedesupdate(state = {}, action) {
  switch (action.type) {
    case eventConstants.INSEE_DESC_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.INSEE_DESC_UPDATE_SUCCESS:
      return {
        inssedesupdate: action.inssedesupdate,
      };
    case eventConstants.INSEE_DESC_UPDATE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}