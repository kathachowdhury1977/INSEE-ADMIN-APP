import {
  GET_LOYALTY_POINTS_MANUAL_ADJUST_REQUEST,
  GET_LOYALTY_POINTS_MANUAL_ADJUST_SUCCESS,
  GET_LOYALTY_POINTS_MANUAL_ADJUST_FAILURE,
  GET_LOYALTY_POINTS_MANUAL_ADJUST_LOADING,
} from "../_constants/loyaltyPoint.constants";

const initialState = {
  error: null,
  errorMessage: "",
  getLoyaltyPointsManualAdjustList: null,
  addLoyaltyPointsManualAdjust: null,
};

export function getLoyaltyPointsManualAdjust(state = initialState, action) {
  switch (action.type) {
    case GET_LOYALTY_POINTS_MANUAL_ADJUST_LOADING:
      return {
        ...state,
        loading: action.data,
      };
    case GET_LOYALTY_POINTS_MANUAL_ADJUST_SUCCESS:
      return {
        ...state,
        getLoyaltyPointsManualAdjustList: action.data,
        error: false,
        errorMessage: "",
        loading: false,
      };
    case GET_LOYALTY_POINTS_MANUAL_ADJUST_FAILURE:
      return {
        ...state,
        getLoyaltyPointsManualAdjustList: null,
        error: true,
        errorMessage: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
