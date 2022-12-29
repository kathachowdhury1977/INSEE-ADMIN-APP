import { eventConstants } from "../_constants";

export function addstrategytypemaster (state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_STRATEGY_TYPE_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_STRATEGY_TYPE_MASTER_SUCCESS:
      return {
        loading:false,
        addstrategytype: action.addstrategytype,
      };
    case eventConstants.ADD_STRATEGY_TYPE_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_STRATEGY_TYPE_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}