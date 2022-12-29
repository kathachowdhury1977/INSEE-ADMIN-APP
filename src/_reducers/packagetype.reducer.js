import { eventConstants } from "../_constants";

export function packagetype(state = {}, action) {
  switch (action.type) {
    case eventConstants.PACKAGE_TYPE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PACKAGE_TYPE_MASTER_LIST_SUCCESS:
      return {
        getpackagetype: action.getpackagetype,
      };
    case eventConstants.PACKAGE_TYPE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}