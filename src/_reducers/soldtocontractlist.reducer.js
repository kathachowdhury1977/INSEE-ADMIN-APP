import { eventConstants } from "../_constants";

export function soldtocontractlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.SOLD_CONTRACT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SOLD_CONTRACT_LIST_SUCCESS:
      return {
        soldtocontractlist: action.soldtocontractlist,
      };
    case eventConstants.SOLD_CONTRACT_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}