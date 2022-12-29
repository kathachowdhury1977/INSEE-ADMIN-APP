import { eventConstants } from "../_constants";

export function subDealerData(state = {}, action) {
  switch (action.type) {
    case eventConstants.SUB_DEALER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SUB_DEALER_LIST_SUCCESS:
      return {
        subDealerData: action.subDealerData,
      };
    case eventConstants.SUB_DEALER_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}