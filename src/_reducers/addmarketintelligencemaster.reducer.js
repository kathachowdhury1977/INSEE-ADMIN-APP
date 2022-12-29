import { eventConstants } from "../_constants";

export function addmarketintelligencemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_MARKET_INTELLIGENCE_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_MARKET_INTELLIGENCE_MASTER_SUCCESS:
      return {
        loading:false,
        addmarketintelligence: action.addmarketintelligence,
      };
    case eventConstants.ADD_MARKET_INTELLIGENCE_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_MARKET_INTELLIGENCE_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}