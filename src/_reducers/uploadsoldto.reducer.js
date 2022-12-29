import { eventConstants } from "../_constants";

export function uploadsoldto(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_SOLDTO_MANAGEMENT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_SOLDTO_MANAGEMENT_SUCCESS:
      return {
        uploadsoldto: action.uploadsoldto,
      };
    case eventConstants.UPLOAD_SOLDTO_MANAGEMENT_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.UPLOAD_SOLDTO_MANAGEMENT_CLEAR_TOAST:
      return {
        uploadsoldto: ''
      }


    default:
      return state;
  }
}