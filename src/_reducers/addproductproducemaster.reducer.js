import { eventConstants } from "../_constants";

export function addproductproducemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_PRODUCT_PRODUCE_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_PRODUCT_PRODUCE_MASTER_SUCCESS:
      return {
        addproductproduce: action.addproductproduce,
      };
    case eventConstants.ADD_PRODUCT_PRODUCE_MASTER_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_PRODUCT_PRODUCE_MASTER_RESET:
        return {
        };
       

    
    default:
      return state;
  }
}