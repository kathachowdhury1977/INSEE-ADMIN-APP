import { eventConstants } from "../_constants";

export function addunitmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_UNIT_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_UNIT_MASTER_SUCCESS:
      return {
        addunitmaster: action.addunitmaster,
      };
    case eventConstants.ADD_UNIT_MASTER_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_UNIT_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}