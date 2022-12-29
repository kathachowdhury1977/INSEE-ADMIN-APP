import { eventConstants } from "../_constants";

export function checkboxtoggle(state = {}, action) {
  switch (action.type) {
    case eventConstants.CHECKBOX_TOGGLE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CHECKBOX_TOGGLE_SUCCESS:
      return {
        checkboxtoggle: action.checkboxtoggle,
      };
    case eventConstants.CHECKBOX_TOGGLE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}