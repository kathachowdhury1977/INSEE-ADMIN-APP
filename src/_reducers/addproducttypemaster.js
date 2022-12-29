import { eventConstants } from "../_constants";

export function addproducttypemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_PRODUCT_TYPE_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_PRODUCT_TYPE_MASTER_SUCCESS:
      return {
        addproducttype: action.addproducttype,
      };
    case eventConstants.ADD_PRODUCT_TYPE_MASTER_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_PRODUCT_TYPE_MASTER_RESET:
        return {
        };
       

    
    default:
      return state;
  }
}