import { eventConstants } from "../_constants";

export function addproductclassification(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_PRODUCT_CLASSIFICATION_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_PRODUCT_CLASSIFICATION_SUCCESS:
      return {
        addproductclassification: action.addproductclassification,
      };
    case eventConstants.ADD_PRODUCT_CLASSIFICATION_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}
