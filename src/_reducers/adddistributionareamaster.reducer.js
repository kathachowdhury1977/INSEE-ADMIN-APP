import { eventConstants } from "../_constants";

export function adddistributionareamaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_DISTRIBUTION_AREA_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_DISTRIBUTION_AREA_MASTER_SUCCESS:
      return {
        loading:false,
        adddistributionarea: action.adddistributionarea,
      };
    case eventConstants.ADD_DISTRIBUTION_AREA_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_DISTRIBUTION_AREA_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}