import { eventConstants } from "../_constants";

export function salesorganizationmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.SALES_ORGANIZATION_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SALES_ORGANIZATION_MASTER_LIST_SUCCESS:
      return {
        getsalesorganization : action.getsalesorganization,
      };
    case eventConstants.SALES_ORGANIZATION_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}