import { eventConstants } from "../_constants";

export function salessoldtoarealist(state = {}, action) {
  switch (action.type) {
    case eventConstants.SALES_SOLDTO_AREALIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SALES_SOLDTO_AREALIST_SUCCESS:
      return {
        salessoldtoarealist: action.salessoldtoarealist,
      };
    case eventConstants.SALES_SOLDTO_AREALIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}