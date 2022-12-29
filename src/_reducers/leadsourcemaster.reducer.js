import { eventConstants } from "../_constants";

export function leadsourcemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.LEAD_SOURCE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.LEAD_SOURCE_MASTER_LIST_SUCCESS:
      return {
        getleadsource : action.getleadsource,
      };
    case eventConstants.LEAD_SOURCE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}