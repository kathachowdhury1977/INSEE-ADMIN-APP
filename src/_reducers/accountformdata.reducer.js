import { eventConstants } from "../_constants";

export function accountformdata(state = {}, action) {
  switch (action.type) {
    case eventConstants.ACCOUNT_FORM_DATA_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ACCOUNT_FORM_DATA_SUCCESS:
      return {
        accountformdata: action.accountformdata,
      };
    case eventConstants.ACCOUNT_FORM_DATA_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.ACCOUNT_FORM_DATA_CLEAR:
      return {
        accountformdata: undefined,
      };

    
    default:
      return state;
  }
}