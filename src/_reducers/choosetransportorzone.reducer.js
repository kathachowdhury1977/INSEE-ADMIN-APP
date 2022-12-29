import { eventConstants } from "../_constants";

export function choosetransportorzone(state = {}, action) {
  switch (action.type) {
    case eventConstants.CHOOSE_TRANSPORTOR_ZONE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CHOOSE_TRANSPORTOR_ZONE_SUCCESS:
      return {
        choosetransportorzone: action.choosetransportorzone,
      };
    case eventConstants.CHOOSE_TRANSPORTOR_ZONE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}