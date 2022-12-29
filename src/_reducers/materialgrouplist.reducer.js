import { eventConstants } from "../_constants";

export function materialgrouplist(state = {}, action) {
  switch (action.type) {
    case eventConstants.MATERIAL_GROUP_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.MATERIAL_GROUP_LIST_SUCCESS:
      return {
        materialgrouplist: action.materialgrouplist,
      };
    case eventConstants.MATERIAL_GROUP_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}