import { eventConstants } from "../_constants";

export function constructionphasemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.CONSTRUCTION_PHASE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CONSTRUCTION_PHASE_MASTER_LIST_SUCCESS:
      return {
        getconstructionphase: action.getconstructionphase,
      };
    case eventConstants.CONSTRUCTION_PHASE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}