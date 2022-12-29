import { eventConstants } from "../_constants";

export function transportermaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.TRANSPORTER_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.TRANSPORTER_MASTER_LIST_SUCCESS:
      return {
        gettransporter: action.gettransporter,
      };
    case eventConstants.TRANSPORTER_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}