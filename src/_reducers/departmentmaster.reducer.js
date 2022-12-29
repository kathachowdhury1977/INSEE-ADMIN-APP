import { eventConstants } from "../_constants";

export function departmentmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.DEPARTMENT_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DEPARTMENT_MASTER_LIST_SUCCESS:
      return {
        getdepartment : action.getdepartment,
      };
    case eventConstants.DEPARTMENT_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}