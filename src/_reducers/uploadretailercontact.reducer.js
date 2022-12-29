import { eventConstants } from "../_constants";

export function uploadretailercontact(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPLOAD__RETAILER_CONTACT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPLOAD__RETAILER_CONTACT_SUCCESS:
      return {
        uploadretailercontact: action.uploadretailercontact,
      };
    case eventConstants.UPLOAD__RETAILER_CONTACT_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.UPLOAD__RETAILER_CONTACT_CLEAR_TOAST:
        return {
          uploadretailercontact : '', 
          error: '',
        };

    
    default:
      return state;
  }
}