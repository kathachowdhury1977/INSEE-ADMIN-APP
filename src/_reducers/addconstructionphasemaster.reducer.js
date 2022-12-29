import { eventConstants } from "../_constants";

export function addconstructionphasemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_CONSTRUCTION_PHASE_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_CONSTRUCTION_PHASE_MASTER_SUCCESS:
      return {
        loading:false,
        addconstructionphase: action.addconstructionphase,
      };
    case eventConstants.ADD_CONSTRUCTION_PHASE_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_CONSTRUCTION_PHASE_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}