import { eventConstants } from "../_constants";

export function getassignproductlistforsoldto(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_ASSIGN_PRODUCT_FOR_SOLDTO_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_ASSIGN_PRODUCT_FOR_SOLDTO_SUCCESS:
      return {
        getassignproductlistforsoldto: action.getassignproductlistforsoldto,
      };
    case eventConstants.GET_ASSIGN_PRODUCT_FOR_SOLDTO_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}