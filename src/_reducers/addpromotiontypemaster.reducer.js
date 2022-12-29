import { eventConstants } from "../_constants";

export function addpromotiontypemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_PROMOTION_TYPE_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_PROMOTION_TYPE_MASTER_SUCCESS:
      return {
        loading:false,
        addpromotiontype: action.addpromotiontype,
      };
    case eventConstants.ADD_PROMOTION_TYPE_MASTER_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_PROMOTION_TYPE_MASTER_RESET:
        return {
        };
       

    
    default:
      return state;
  }
}