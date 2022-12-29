import { eventConstants } from "../_constants";

export function uploadretailer(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_RETAILER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_RETAILER_SUCCESS:
      return {
        uploadretailer: action.uploadretailer,
      };
    case eventConstants.UPLOAD_RETAILER_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}