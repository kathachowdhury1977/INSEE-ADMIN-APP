import { eventConstants } from "../_constants";

export function pricetypemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRICE_TYPE_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRICE_TYPE_LIST_SUCCESS:
      return {
        getpricetype: action.getpricetype,
      };
    case eventConstants.PRICE_TYPE_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}