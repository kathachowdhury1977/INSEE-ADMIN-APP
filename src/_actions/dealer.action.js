import {
  SUBDEALER_RELATION_UNDER_SOLDTO_REQUEST,
  SUBDEALER_RELATION_UNDER_SOLDTO_SUCCESS,
  SUBDEALER_RELATION_UNDER_SOLDTO_FAILURE,
  GET_SUB_DEALER_INFO_REQUEST,
  GET_SUB_DEALER_INFO_SUCCESS,
  GET_SUB_DEALER_INFO_FAILURE,
  GET_SUB_DEALER_LOYALTY_TRANSACTION_LOADING,
  SUBDEALER_RELATION_UNDER_SOLDTO_LOADING,
} from "../_constants/dealer.constant";
import {
  getSubDealerRelationUnderSoldToService,
  getSubDealerInfoService,
} from "../_services/dealer.service";

export function getSubDealerRelationUnderSoldToAction(dealernumber) {
  return (dispatch) => {
    dispatch({
      type: SUBDEALER_RELATION_UNDER_SOLDTO_LOADING,
      data: true,
    });
    getSubDealerRelationUnderSoldToService(dealernumber)
      .then((res) => {
        dispatch({
          type: SUBDEALER_RELATION_UNDER_SOLDTO_LOADING,
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
          type: SUBDEALER_RELATION_UNDER_SOLDTO_LOADING,
          data: true,
        });
        dispatch(failure(error));
      });
  };

  function success(data) {
    return { type: SUBDEALER_RELATION_UNDER_SOLDTO_SUCCESS, data };
  }
  function failure(error) {
    return { type: SUBDEALER_RELATION_UNDER_SOLDTO_FAILURE, error };
  }
}

export function getSubDealerInfoAction(subdealerNumber) {
  return (dispatch) => {
    dispatch({
      type: GET_SUB_DEALER_LOYALTY_TRANSACTION_LOADING,
      data: true,
    });
    getSubDealerInfoService(subdealerNumber)
      .then((res) => {
        if (res.status === 200 && res.data) {
          dispatch(success(res.data));
          dispatch({
            type: GET_SUB_DEALER_LOYALTY_TRANSACTION_LOADING,
            data: false,
          });
        } else {
          dispatch(failure(res));
          dispatch({
            type: GET_SUB_DEALER_LOYALTY_TRANSACTION_LOADING,
            data: false,
          });
        }
      })
      .catch((error) => dispatch(failure(error)));
  };

  function success(data) {
    return { type: GET_SUB_DEALER_INFO_SUCCESS, data };
  }
  function failure(error) {
    return { type: GET_SUB_DEALER_INFO_FAILURE, error };
  }
}
