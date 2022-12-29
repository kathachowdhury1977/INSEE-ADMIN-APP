import { eventConstants } from "../_constants";

export function updatebeatmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_BEAT_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_BEAT_MASTER_SUCCESS:
      return {
        updatebeatmaster: action.updatebeatmaster,
      };
    case eventConstants.UPDATE_BEAT_MASTER_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_BEAT_MASTER_CLEAR_TOAST:
        return {
            updatebeatmaster: undefined,
        };

    
    default:
      return state;
  }
}
