import { eventConstants } from "../_constants";

export function uploadretailersubdealerexcel(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD_RETAILER_SUBDEALER_EXCEL_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_RETAILER_SUBDEALER_EXCEL_SUCCESS:
      return {
        uploadretailersubdealerexcel: action.uploadretailersubdealerexcel,
      };
    case eventConstants.UPLOAD_RETAILER_SUBDEALER_EXCEL_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}