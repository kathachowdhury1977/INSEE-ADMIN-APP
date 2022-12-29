import { eventConstants } from "../_constants";

export function marketintelligencemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.MARKET_INTELLIGENCE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.MARKET_INTELLIGENCE_MASTER_LIST_SUCCESS:
      return {
        getmarketintelligence: action.getmarketintelligence,
      };
    case eventConstants.MARKET_INTELLIGENCE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}