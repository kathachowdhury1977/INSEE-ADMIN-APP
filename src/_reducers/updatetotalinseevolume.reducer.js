import { eventConstants } from "../_constants";

export function updatetotalinseevolume(state = {}, action) {
  console.log("updateTotal",action);
  switch (action.type) {
    case eventConstants.UPDATE_TOTAL_INSEE_VOLUME_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_TOTAL_INSEE_VOLUME_SUCCESS:
      return {
        updatetotalinseevolume: action.updatetotalinseevolume,
      };
    case eventConstants.UPDATE_TOTAL_INSEE_VOLUME_FAILURE:
      return {
        error: action.error,
      };

    case eventConstants.UPDATE_TOTAL_INSEE_VOLUME_CLEAR_TOAST:
      return {
        updatetotalinseevolume: '',
        error: '',
      };

    
    default:
      return state;
  }
}