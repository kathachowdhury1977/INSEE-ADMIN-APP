import { eventConstants } from "../_constants";

export function updateconstructionphase(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_CONSTRUCTION_PHASE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_CONSTRUCTION_PHASE_SUCCESS:
      return {
        updateconstructionphase: action.updateconstructionphase,
      };
    case eventConstants.UPDATE_CONSTRUCTION_PHASE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}