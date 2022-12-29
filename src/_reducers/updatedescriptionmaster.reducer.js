import { eventConstants } from "../_constants";

export function updatedescriptionmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_DESCRIPTION_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_DESCRIPTION_SUCCESS:
      return {
        loading:false,
        updatedescription: action.updatedescription,
      };
    case eventConstants.UPDATE_DESCRIPTION_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.UPDATE_DESCRIPTION_RESET:
        return {
        };

    
    default:
      return state;
  }
}