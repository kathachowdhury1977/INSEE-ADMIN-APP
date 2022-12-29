import { eventConstants } from "../_constants";

export function addtransportorzone(state = {}, action) {
  switch (action.type) {
    case eventConstants.TADD_TRANSPORTOR_ZONE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_TRANSPORTOR_ZONE_SUCCESS:
      return {
        addtransportorzone: action.addtransportorzone,
      };
    case eventConstants.ADD_TRANSPORTOR_ZONE_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_TRANSPORTOR_ZONE_RESET:
        return {
        };

    
    default:
      return state;
  }
}