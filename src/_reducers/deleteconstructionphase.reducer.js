import { eventConstants } from "../_constants";

export function deleteconstructionphase(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_CONSTRUCTION_PHASE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_CONSTRUCTION_PHASE_SUCCESS:
      return {
        deleteconstructionphase: action.deleteconstructionphase,
      };
    case eventConstants.DELETE_CONSTRUCTION_PHASE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}