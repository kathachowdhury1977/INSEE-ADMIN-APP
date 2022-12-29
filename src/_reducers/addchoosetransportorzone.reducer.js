import { eventConstants } from "../_constants";

export function addchoosetransportorzone(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_CHOOSE_TRANSPORTOR_ZONE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_CHOOSE_TRANSPORTOR_ZONE_SUCCESS:
      return {
        addchoosetransportorzone: action.addchoosetransportorzone,
      };
    case eventConstants.ADD_CHOOSE_TRANSPORTOR_ZONE_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.ADD_CHOOSE_TRANSPORTOR_ZONE_CLEAR_TOAST:
      return {
        addchoosetransportorzone: '',
        error: '',
      };

    
    default:
      return state;
  }
}