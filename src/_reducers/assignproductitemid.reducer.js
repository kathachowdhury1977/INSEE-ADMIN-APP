import { eventConstants } from "../_constants";

export function assignproductitemid(state = {}, action) {
  switch (action.type) {
    case eventConstants.ASSIGN_PRODUCT_ITEM_ID_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ASSIGN_PRODUCT_ITEM_ID_SUCCESS:
      return {
        assignproductitemid: action.assignproductitemid,
      };
    case eventConstants.ASSIGN_PRODUCT_ITEM_ID_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.ASSIGN_PRODUCT_ITEM_ID_CLEAR_STATE:
      return {
        assignproductitemid: '',
      };

    
    default:
      return state;
  }
}