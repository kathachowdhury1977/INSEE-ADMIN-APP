import {
  GET_LOYALTY_POINTS_MANUAL_ADJUST_REQUEST,
  GET_LOYALTY_POINTS_MANUAL_ADJUST_SUCCESS,
  GET_LOYALTY_POINTS_MANUAL_ADJUST_FAILURE,
  GET_LOYALTY_POINTS_MANUAL_ADJUST_LOADING,
  GET_SUBDEALER_LOYALTY_TRANSACTION_REQUEST,
  GET_SUBDEALER_LOYALTY_TRANSACTION_SUCCESS,
  GET_SUBDEALER_LOYALTY_TRANSACTION_FAILURE,
  GET_SUBDEALER_LOYALTY_TRANSACTION_LOADING,
} from "../_constants/loyaltyPoint.constants";

import {
  getLoyaltyPointsManualAdjustService,
  getSubdealerLoyaltyTransactionService,
} from "../_services/loyaltyPoints.service";

export function getLoyaltyPointsManualAdjustAction(filterData) {
  return (dispatch) => {
    dispatch({
      type: GET_LOYALTY_POINTS_MANUAL_ADJUST_LOADING,
      data: true,
    });
    getLoyaltyPointsManualAdjustService(filterData)
      .then((res) => {
        dispatch({
          type: GET_LOYALTY_POINTS_MANUAL_ADJUST_LOADING,
          data: false,
        });
        if (res.status === 200 && res.data) {
          dispatch(success(res.data));
        } else {
          dispatch(failure(res));
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_LOYALTY_POINTS_MANUAL_ADJUST_LOADING,
          data: false,
        });
        dispatch(failure(error));
      });
  };

  function success(data) {
    return { type: GET_LOYALTY_POINTS_MANUAL_ADJUST_SUCCESS, data };
  }
  function failure(error) {
    return { type: GET_LOYALTY_POINTS_MANUAL_ADJUST_FAILURE, error };
  }
}

export function getSubdealerLoyaltyTransactionAction(
  filterData,
  dealerOrSubDealerNo,
  isDealer
) {
  return (dispatch) => {
    dispatch({
      type: GET_SUBDEALER_LOYALTY_TRANSACTION_LOADING,
      data: true,
    });
    getSubdealerLoyaltyTransactionService(
      filterData,
      dealerOrSubDealerNo,
      isDealer
    )
      .then((res) => {
        dispatch({
          type: GET_SUBDEALER_LOYALTY_TRANSACTION_LOADING,
          data: false,
        });
        if (res.status === 200 && res.data) {
          dispatch(success(res.data));
        } else {
          dispatch(failure(res));
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_SUBDEALER_LOYALTY_TRANSACTION_LOADING,
          data: false,
        });
        dispatch(failure(error));
      });
  };
  function request(data) {
    return { type: GET_SUBDEALER_LOYALTY_TRANSACTION_REQUEST, data };
  }

  function success(data) {
    return { type: GET_SUBDEALER_LOYALTY_TRANSACTION_SUCCESS, data };
  }
  function failure(error) {
    return { type: GET_SUBDEALER_LOYALTY_TRANSACTION_FAILURE, error };
  }
}
