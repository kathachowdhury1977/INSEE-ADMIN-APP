import { eventConstants } from "../_constants";

export function adddepartmentmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_DEPARTMENT_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_DEPARTMENT_MASTER_SUCCESS:
      return {
        loading:false,
        adddepartment: action.adddepartment,
      };
    case eventConstants.ADD_DEPARTMENT_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_DEPARTMENT_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}