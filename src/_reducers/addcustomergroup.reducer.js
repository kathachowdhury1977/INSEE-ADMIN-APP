import { eventConstants } from "../_constants";

export function addcustomergroup(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_CUSTOMER_GROUP_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_CUSTOMER_GROUP_SUCCESS:
      return {
        addcustomergroup: action.addcustomergroup,
      };
    case eventConstants.ADD_CUSTOMER_GROUP_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}