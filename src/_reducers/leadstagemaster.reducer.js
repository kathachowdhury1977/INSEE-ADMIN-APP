import { eventConstants } from "../_constants";

export function leadstagemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.LEAD_STAGE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.LEAD_STAGE_MASTER_LIST_SUCCESS:
      return {
        getleadstage : action.getleadstage,
      };
    case eventConstants.LEAD_STAGE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}