import { eventConstants } from "../_constants";

export function updateconwoodcategory(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_CONWOOD_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_CONWOOD_CATEGORY_SUCCESS:
      return {
        updateconwoodcategory: action.updateconwoodcategory,
      };
    case eventConstants.UPDATE_CONWOOD_CATEGORY_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}