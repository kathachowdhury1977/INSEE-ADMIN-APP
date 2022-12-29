import { eventConstants } from "../_constants";

export function getcustomergroup(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_CUSTOMER_GROUP_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_CUSTOMER_GROUP_LIST_SUCCESS:
      return {
        getcustomergroup: action.getcustomergroup,
      };
    case eventConstants.GET_CUSTOMER_GROUP_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}