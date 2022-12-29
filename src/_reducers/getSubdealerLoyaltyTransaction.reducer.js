import {
  GET_SUBDEALER_LOYALTY_TRANSACTION_FAILURE,
  GET_SUBDEALER_LOYALTY_TRANSACTION_SUCCESS,
  GET_SUBDEALER_LOYALTY_TRANSACTION_REQUEST,
  GET_SUBDEALER_LOYALTY_TRANSACTION_LOADING,
} from "../_constants/loyaltyPoint.constants";

const initialState = {
  error: null,
  errorMessage: "",
  getSubdealerLoyaltyTransactionList: null,
  addSubdealerLoyaltyTransaction: null,
  loading:false
};

export function getSubdealerLoyaltyTransaction(state = initialState, action) {
  switch (action.type) {
    case GET_SUBDEALER_LOYALTY_TRANSACTION_LOADING:
      return {
        ...state,
        loading: action.data,
      };
    case GET_SUBDEALER_LOYALTY_TRANSACTION_SUCCESS:
      return {
        ...state,
        getSubdealerLoyaltyTransactionList: action.data,
        error: false,
        errorMessage: "",
        loading: false,
      };
    case GET_SUBDEALER_LOYALTY_TRANSACTION_REQUEST:
      return {
        ...state,
        getSubdealerLoyaltyTransactionList: null,
        error: true,
        errorMessage: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
