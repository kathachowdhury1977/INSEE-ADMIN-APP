import { eventConstants } from "../_constants";

export function addsalesorganizationmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_SALES_ORGANIZATION_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_SALES_ORGANIZATION_MASTER_SUCCESS:
      return {
        loading:false,
        addsalesorganization: action.addsalesorganization,
      };
    case eventConstants.ADD_SALES_ORGANIZATION_MASTER_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_SALES_ORGANIZATION_MASTER_RESET:
        return {
        };
       

    
    default:
      return state;
  }
}