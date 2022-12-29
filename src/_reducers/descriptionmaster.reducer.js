import { eventConstants } from "../_constants";

export function descriptionmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.DESCRIPTION_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DESCRIPTION_MASTER_LIST_SUCCESS:
      return {
        getdescription: action.getdescription,
      };
    case eventConstants.DESCRIPTION_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}