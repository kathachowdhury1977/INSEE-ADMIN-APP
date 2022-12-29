import { eventConstants } from "../_constants";

export function pricebookmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRICE_BOOK_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRICE_BOOK_MASTER_LIST_SUCCESS:
      return {
        getpricebook: action.getpricebook,
      };
    case eventConstants.PRICE_BOOK_MASTER_LIST_SUCCESS:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}