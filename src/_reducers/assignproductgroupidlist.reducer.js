import { eventConstants } from "../_constants";

export function assignproductgroupidlist(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_ASSIGN_PRODUCT_GROUP_DETAIL_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_ASSIGN_PRODUCT_GROUP_DETAIL_SUCCESS:
      return {
        assignproductgroupidlist: action.assignproductgroupidlist,
      };
    case eventConstants.GET_ASSIGN_PRODUCT_GROUP_DETAIL_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.GET_ASSIGN_PRODUCT_GROUP_DETAIL_CLEAR_STATE:
      return {
        assignproductgroupidlist: undefined,
      };

    
    default:
      return state;
  }
}