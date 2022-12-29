import { eventConstants } from "../_constants";

export function uploadcustomertier(state = {}, action) {
  console.log("mytierstatus",action);
  switch (action.type) {
    case eventConstants.UPLOAD_CUSTOMER_TIER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD_CUSTOMER_TIER_SUCCESS:
      return {
        uploadcustomertier: action.uploadcustomertier,
      };
    case eventConstants.UPLOAD_CUSTOMER_TIER_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD_CUSTOMER_TIER_CLEAR_TOAST:
      return {
        uploadcustomertier: '',
        error:'',
      };

    
    default:
      return state;
  }
}