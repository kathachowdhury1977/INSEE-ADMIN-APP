import { eventConstants } from "../_constants";

export function selectmulticheckbox(state = {}, action) {
  switch (action.type) {
    case eventConstants.MULTI_CHECK_BOX_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.MULTI_CHECK_BOX_SUCCESS:
      return {
        selectmulticheckbox: action.selectmulticheckbox,
      };
    case eventConstants.MULTI_CHECK_BOX_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}