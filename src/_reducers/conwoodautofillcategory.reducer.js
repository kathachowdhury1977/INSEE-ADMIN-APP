import { eventConstants } from "../_constants";

export function conwoodautofillcategory(state = {}, action) {
  switch (action.type) {
    case eventConstants.CONWOOD_AUTOFILL_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CONWOOD_AUTOFILL_CATEGORY_SUCCESS:
      return {
        conwoodautofillcategory: action.conwoodautofillcategory,
      };
    case eventConstants.CONWOOD_AUTOFILL_CATEGORY_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}