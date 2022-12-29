import { eventConstants } from "../_constants";

export function contractdetaillist(state = {}, action) {
  switch (action.type) {
    case eventConstants.CONTRACT_DETAIL_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.CONTRACT_DETAIL_LIST_SUCCESS:
      return {
        contractdetaillist: action.contractdetaillist,
      };
    case eventConstants.CONTRACT_DETAIL_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}