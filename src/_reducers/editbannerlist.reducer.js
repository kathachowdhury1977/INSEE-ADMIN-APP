import { eventConstants } from "../_constants";

export function editbannerlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.EDIT_BANNER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.EDIT_BANNER_LIST_SUCCESS:
      return {
        editbannerlist: action.editbannerlist,
      };
    case eventConstants.EDIT_BANNER_LIST_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.EDIT_BANNER_LIST_CLEAR_TOAST:
      return {
        editbannerlist: ''
      }

    default:
      return state;
  }
}
