import { eventConstants } from "../_constants";

export function actionstatusmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ACTION_STATUS_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ACTION_STATUS_MASTER_LIST_SUCCESS:
      return {
        getactionstatus : action.getactionstatus,
      };
    case eventConstants.ACTION_STATUS_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}