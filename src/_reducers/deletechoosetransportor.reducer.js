import { eventConstants } from "../_constants";

export function deletechoosetransportor(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_CHOOSE_TRANSPORTOR_ZONE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_CHOOSE_TRANSPORTOR_ZONE_SUCCESS:
      return {
        deletechoosetransportor: action.deletechoosetransportor,
      };
    case eventConstants.DELETE_CHOOSE_TRANSPORTOR_ZONE_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.DELETE_CHOOSE_TRANSPORTOR_ZONE_CLEAR_TOAST:
      return {
        deletechoosetransportor: '',
        error: '',
      };

    
    default:
      return state;
  }
}