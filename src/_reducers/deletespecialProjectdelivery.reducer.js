import { eventConstants } from "../_constants";

export function deletespecialProjectdelivery(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_SPECIAL_PROJECT_DELIVERY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_SPECIAL_PROJECT_DELIVERY_SUCCESS:
      return {
        deletespecialProjectdelivery: action.deletespecialProjectdelivery,
      };
    case eventConstants.DELETE_SPECIAL_PROJECT_DELIVERY_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.DELETE_SPECIAL_PROJECT_DELIVERY_CLEAR_TOAST:
        return {
            deletespecialProjectdelivery: '',  
          error: '',
        };

    
    default:
      return state;
  }
}