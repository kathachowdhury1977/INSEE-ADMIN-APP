import { eventConstants } from "../_constants";

export function deletedescriptionmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_DESCRIPTION_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_DESCRIPTION_SUCCESS:
      return {
        loading:false,
        deletedescription: action.deletedescription,
      };
    case eventConstants.DELETE_DESCRIPTION_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.DELETE_DESCRIPTION_RESET:
        return {
        };

    
    default:
      return state;
  }
}