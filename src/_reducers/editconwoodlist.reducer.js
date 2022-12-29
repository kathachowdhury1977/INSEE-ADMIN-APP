import { eventConstants } from "../_constants";

export function editconwoodlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.EDIT_CONWOOD_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.EDIT_CONWOOD_LIST_SUCCESS:
      return {
        editconwoodlist: action.editconwoodlist,
      };
    case eventConstants.EDIT_CONWOOD_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}
