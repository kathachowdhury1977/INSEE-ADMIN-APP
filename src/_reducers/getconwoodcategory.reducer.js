import { eventConstants } from "../_constants";

export function getconwoodcategory(state = {}, action) {
  switch (action.type) {
    case eventConstants.CONWOOD_CATEGORY_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CONWOOD_CATEGORY_LIST_SUCCESS:
      return {
        getconwoodcategory: action.getconwoodcategory,
      };
    case eventConstants.CONWOOD_CATEGORY_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}
