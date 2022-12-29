import { eventConstants } from "../_constants";

export function adddescriptionmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_DESCRIPTION_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_DESCRIPTION_MASTER_SUCCESS:
      return {
        loading:false,
        adddescription: action.adddescription,
      };
    case eventConstants.ADD_DESCRIPTION_MASTER_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_DESCRIPTION_MASTER_RESET:
        return {
        };
    default:
      return state;
  }
}