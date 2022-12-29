import { eventConstants } from "../_constants";

export function assignsoldtoproductupdatedate(state = {}, action) {
  switch (action.type) {
    case eventConstants.ASSIGN_SOLDTO_PRODUCT_UPDATE_DATE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ASSIGN_SOLDTO_PRODUCT_UPDATE_DATE_SUCCESS:
      return {
        assignsoldtoproductupdatedate: action.assignsoldtoproductupdatedate,
      };
    case eventConstants.ASSIGN_SOLDTO_PRODUCT_UPDATE_DATE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}