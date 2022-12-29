import { eventConstants } from "../_constants";

export function distributionareamaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.DISTRIBUTION_AREA_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DISTRIBUTION_AREA_MASTER_LIST_SUCCESS:
      return {
        getdistributionarea: action.getdistributionarea,
      };
    case eventConstants.DISTRIBUTION_AREA_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}