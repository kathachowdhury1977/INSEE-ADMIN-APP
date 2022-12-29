import { eventConstants } from "../_constants";

export function addconwoodmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_CONWOOD_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_CONWOOD_MASTER_SUCCESS:
      return {
        addconwoodmaster: action.addconwoodmaster,
      };
    case eventConstants.ADD_CONWOOD_MASTER_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.ADD_CONWOOD_MASTER_CLEAR_STATE:
      return {
        addconwoodmaster: '',
      };

    
    default:
      return state;
  }
}