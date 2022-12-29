import { eventConstants } from "../_constants";

export function addprojecttypemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_PROJECT_TYPE_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_PROJECT_TYPE_MASTER_SUCCESS:
      return {
        addprojecttype: action.addprojecttype,
      };
    case eventConstants.ADD_PROJECT_TYPE_MASTER_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_PROJECT_TYPE_MASTER_RESET:
        return {
        };
       

    
    default:
      return state;
  }
}