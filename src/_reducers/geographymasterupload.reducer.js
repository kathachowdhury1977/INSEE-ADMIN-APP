import { eventConstants } from "../_constants";

export function geographymasterupload(state = {}, action) {
  switch (action.type) {
    case eventConstants.GEOGRAPHY_MASTER_UPLOAD_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GEOGRAPHY_MASTER_UPLOAD_SUCCESS:
      return {
        geographymasterupload: action.geographymasterupload,
      };
    case eventConstants.GEOGRAPHY_MASTER_UPLOAD_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}