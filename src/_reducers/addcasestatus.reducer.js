import { eventConstants } from "../_constants";

export function addcasestatus(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_CASE_STATUS_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_CASE_STATUS_SUCCESS:
      return {
        loading:false,
        addcasestatus: action.addcasestatus,
      };
    case eventConstants.ADD_CASE_STATUS_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_CASE_STATUS_RESET:
        return {
        };

        case eventConstants.ADD_CASE_STATUS_CLEAR_TOAST:
          return {
            addcasestatus : '',
            error : ''
          };

    
    default:
      return state;
  }
}