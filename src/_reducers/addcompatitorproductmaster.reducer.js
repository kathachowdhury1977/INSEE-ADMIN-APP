import { eventConstants } from "../_constants";

export function addcompatitorproductmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_COMPATITOR_PRODUCT_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_COMPATITOR_PRODUCT_MASTER_SUCCESS:
      return {
        loading:false,
        addcompatitorproduct: action.addcompatitorproduct,
      };
    case eventConstants.ADD_COMPATITOR_PRODUCT_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_COMPATITOR_PRODUCT_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}