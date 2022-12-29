import { eventConstants } from "../_constants";

export function updatechoosetransportorzone(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_CHOOSE_TRANSPORTOR_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_CHOOSE_TRANSPORTOR_SUCCESS:
      return {
        updatechoosetransportorzone: action.updatechoosetransportorzone,
      };
    case eventConstants.UPDATE_CHOOSE_TRANSPORTOR_FAILURE:
      return {
        error: action.error,
      };


      case eventConstants.UPDATE_CHOOSE_TRANSPORTOR_CLEAR_TOAST:
      return {
        updatechoosetransportorzone: '',  
        error: '',
      };

    
    default:
      return state;
  }
}