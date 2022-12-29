import { eventConstants } from "../_constants";

export function resendlogincredential(state = {}, action) {
  switch (action.type) {
    case eventConstants.RESEND_LOGIN_CREDENTIAL_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RESEND_LOGIN_CREDENTIAL_SUCCESS:
      return {
        resendlogincredential: action.resendlogincredential,
      };
    case eventConstants.RESEND_LOGIN_CREDENTIAL_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}