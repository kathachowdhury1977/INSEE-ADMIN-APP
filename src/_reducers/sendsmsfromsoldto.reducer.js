import { eventConstants } from "../_constants";

export function sendsmsfromsoldto(state = {}, action) {
  switch (action.type) {
    case eventConstants.SEND_SMS_FROM_SOLDTO_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SEND_SMS_FROM_SOLDTO_SUCCESS:
      return {
        sendsmsfromsoldto: action.sendsmsfromsoldto,
      };
    case eventConstants.SEND_SMS_FROM_SOLDTO_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.SEND_SMS_FROM_SOLDTO_CLEAR_TOAST:
      return {
        sendsmsfromsoldto: '',  
        error: '',
      };

    
    default:
      return state;
  }
}