import { eventConstants } from "../_constants";

export function addbannerimage(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_BANNER_IMAGE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_BANNER_IMAGE_SUCCESS:
      return {
        addbannerimage: action.addbannerimage,
      };
    case eventConstants.ADD_BANNER_IMAGE_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_BANNER_IMAGE_CLEAR_TOAST:
      return {
        addbannerimage: ''
      }

    default:
      return state;
  }
}
