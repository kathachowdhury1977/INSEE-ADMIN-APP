import { eventConstants } from "../_constants";

export function addretailerpaymenttermmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_RETAILER_PAYMENT_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_RETAILER_PAYMENT_MASTER_SUCCESS:
      return {
        loading:false,
        addretailerpayment: action.retailerpaymenttermmaster,
      };
    case eventConstants.ADD_RETAILER_PAYMENT_MASTER_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_RETAILER_PAYMENT_MASTER_RESET:
        return {
        };
       

    
    default:
      return state;
  }
}