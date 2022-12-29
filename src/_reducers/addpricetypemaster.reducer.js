import { eventConstants } from "../_constants";

export function addpricetypemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_PRICE_TYPE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_PRICE_TYPE_SUCCESS:
      return {
        addpricetype: action.addpricetype,
      };
    case eventConstants.ADD_PRICE_TYPE_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_PRICE_TYPE_RESET:
        return {
        };

    
    default:
      return state;
  }
}