import { eventConstants } from "../_constants";

export function soldtoallemail(state = {}, action) {
  switch (action.type) {
    case eventConstants.SOLD_TO_ALL_EMAIL_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SOLD_TO_ALL_EMAIL_SUCCESS:
      return {
        soldtoallemail: action.soldtoallemail,
      };
    case eventConstants.SOLD_TO_ALL_EMAIL_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.SOLD_TO_ALL_EMAIL_CLEAR_TOAST:
      return {
        soldtoallemail: '',
        error: ''
      }  

    
    default:
      return state;
  }
}