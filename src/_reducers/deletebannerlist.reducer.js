import { eventConstants } from "../_constants";

export function deletebannerlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_BANNER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_BANNER_LIST_SUCCESS:
      return {
        deletebannerlist: action.deletebannerlist,
      };
    case eventConstants.DELETE_BANNER_LIST_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.DELETE_BANNER_CLEAN_TOAST:
      return {
        deletebannerlist: ''
      }


    default:
      return state;
  }
}