import { eventConstants } from "../_constants";

export function retailermakeinseeplus(state = {}, action) {
  switch (action.type) {
    case eventConstants.RETAILER_MAKE_INSEE_PLUS_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.RETAILER_MAKE_INSEE_PLUS_SUCCESS:
      return {
        retailermakeinseeplus: action.retailermakeinseeplus,
      };
    case eventConstants.RETAILER_MAKE_INSEE_PLUS_FAILURE:
      return {
        error: action.error,
      };


      case eventConstants.RETAILER_MAKE_INSEE_PLUS_CLEAR_TOAST:
      return {
        retailermakeinseeplus: '',
        error: ''
      };

    
    default:
      return state;
  }
}