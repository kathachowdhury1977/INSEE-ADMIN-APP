import { eventConstants } from "../_constants";

export function addpricebookmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_PRICE_BOOK_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_PRICE_BOOK_MASTER_SUCCESS:
      return {
        loading:false,
        addpricebook: action.addpricebook,
      };
    case eventConstants.ADD_PRICE_BOOK_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_PRICE_BOOK_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}