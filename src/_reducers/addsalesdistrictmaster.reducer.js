import { eventConstants } from "../_constants";

export function addsalesdistrictmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_SALES_DISTRICT_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_SALES_DISTRICT_MASTER_SUCCESS:
      return {
        loading:false,
        addsalesdistrict: action.addsalesdistrict,
      };
    case eventConstants.ADD_SALES_DISTRICT_MASTER_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_SALES_DISTRICT_MASTER_RESET:
        return {
        };
       

    
    default:
      return state;
  }
}