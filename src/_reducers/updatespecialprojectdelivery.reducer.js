import { eventConstants } from "../_constants";

export function updatespecialprojectdelivery(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_SPECIAL_PROJECT_DELIVERY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_SPECIAL_PROJECT_DELIVERY_SUCCESS:
      return {
        updatespecialprojectdelivery: action.updatespecialprojectdelivery,
      };
    case eventConstants.UPDATE_SPECIAL_PROJECT_DELIVERY_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPDATE_SPECIAL_PROJECT_DELIVERY_CLEAR_TOAST:
      return {
        updatespecialprojectdelivery: '',
        error: '',
      };

    
    default:
      return state;
  }
}