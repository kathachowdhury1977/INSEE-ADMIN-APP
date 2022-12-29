import { eventConstants } from "../_constants";

export function addproductgroup(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_PRODUCT_GROUP_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_PRODUCT_GROUP_SUCCESS:
      return {
        addproductgroup: action.addproductgroup,
      };
    case eventConstants.ADD_PRODUCT_GROUP_FAILURE:
      return {
        error: action.error,
      };

    case eventConstants.ADD_PRODUCT_GROUP_CLEAR_TOAST:
      return {
        addproductgroup: '',
        error: ''
      }


    default:
      return state;
  }
}