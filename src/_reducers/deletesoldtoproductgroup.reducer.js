import { eventConstants } from "../_constants";

export function deletesoldtoproductgroup(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_SOLDTO_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_SOLDTO_PRODUCT_SUCCESS:
      return {
        deletesoldtoproductgroup: action.deletesoldtoproductgroup,
      };
    case eventConstants.DELETE_SOLDTO_PRODUCT_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}