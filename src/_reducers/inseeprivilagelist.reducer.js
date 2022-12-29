import { eventConstants } from "../_constants";

export function inseeprivilagelist(state = {}, action) {
  switch (action.type) {
    case eventConstants.INSEE_PRIVILAGE_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.INSEE_PRIVILAGE_LIST_SUCCESS:
      return {
        inseeprivilagelist: action.inseeprivilagelist,
      };
    case eventConstants.INSEE_PRIVILAGE_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}