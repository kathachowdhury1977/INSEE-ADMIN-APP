import { eventConstants } from "../_constants";

export function deleteholidaymaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_HOLIDAY_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_HOLIDAY_MASTER_SUCCESS:
      return {
        deleteholidaymaster: action.deleteholidaymaster,
      };
    case eventConstants.DELETE_HOLIDAY_MASTER_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.DELETE_HOLIDAY_MASTER_CLEAR_STATE:
        return {
            deleteholidaymaster: undefined,
        };

    
    default:
      return state;
  }
}
