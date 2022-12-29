import { eventConstants } from "../_constants";

export function relationsearch(state = {}, action) {
  switch (action.type) {
    case eventConstants.RELATION_SEARCH_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RELATION_SEARCH_SUCCESS:
      return {
        relationsearch: action.relationsearch,
      };
    case eventConstants.RELATION_SEARCH_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}