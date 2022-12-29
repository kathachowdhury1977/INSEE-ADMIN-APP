import { eventConstants } from "../_constants";

export function dropdownparent(state = {}, action) {
  switch (action.type) {
    case eventConstants.DROPDOWN_PARENT_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DROPDOWN_PARENT_CATEGORY_SUCCESS:
      return {
        dropdownparent: action.dropdownparent,
      };
    case eventConstants.DROPDOWN_PARENT_CATEGORY_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}