import { eventConstants } from "../_constants";

export function addpreferredtrucktypesmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_PREFERRED_TRUCK_TYPES_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_PREFERRED_TRUCK_TYPES_MASTER_SUCCESS:
      return {
        loading:false,
        addpreferredtrucktypes: action.addpreferredtrucktypes,
      };
    case eventConstants.ADD_PREFERRED_TRUCK_TYPES_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_PREFERRED_TRUCK_TYPES_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}