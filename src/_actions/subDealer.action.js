import {
  GET_SUB_DEALR_SUCESS,
  GET_SUB_DEALR_FAIL,
  GET_SUB_DEALER_CONTACT_SUCCESS,
  GET_SUB_DEALER_CONTACT_FAIL,
  GET_SUB_DEALR_LIST_REQUEST,
  GET_DEALER_RELATION_REQUEST,
  GET_DEALER_RELATION_FAIL,
  GET_DEALER_RELATION_SUCCESS,
  GET_POINT_CALCULATION_AUTO_REQUEST,
  GET_POINT_CALCULATION_AUTO_FAIL,
  GET_POINT_CALCULATION_AUTO_SUCCESS,
  GET_POINT_CALCULATION_MANUAL_REQUEST,
  GET_POINT_CALCULATION_MANUAL_SUCCESS,
  GET_POINT_CALCULATION_MANUAL_FAIL,
  GET_ALLOCATION_INVENTORY_REQUEST,
  GET_ALLOCATION_INVENTORY_FAIL,
  GET_ALLOCATION_INVENTORY_SUCCESS,
  GET_SUB_DEALER_CONTACT_REQUEST
} from "../_constants/subDealer.constant";
import {
  getSubDealerService,
  getSubDealerContactService,
  getDealerRetationShipList,
  getPointCalulationList,
  getAllocationInventoryList
} from "../_services/subDealer.service";

export function getSubDealerAction() {
  return (dispatch) => {
    dispatch(request());
    getSubDealerService()
      .then((res) => {
        if (res.status === 200 && res.data) {
          dispatch(success(res.data));
        } else {
          dispatch(failure(res));
        }
      })
      .catch((error) => dispatch(failure(error)));
  };
  function request() {
    return { type: GET_SUB_DEALR_LIST_REQUEST };
  }
  function success(data) {
    return { type: GET_SUB_DEALR_SUCESS, data };
  }
  function failure(error) {
    return { type: GET_SUB_DEALR_FAIL, error };
  }
}

export function getSubDealerContactAction(subdealerNumber) {
  return (dispatch) => {
    dispatch(request());
    getSubDealerContactService(subdealerNumber)
      .then((res) => {
        if (res.status === 200 && res.data) {
          dispatch(success(res.data));
        } else {
          dispatch(failure(res));
        }
      })
      .catch((error) => dispatch(failure(error)));
  };
  function request() {
    return { type: GET_SUB_DEALER_CONTACT_REQUEST };
  }
  function success(data) {
    return { type: GET_SUB_DEALER_CONTACT_SUCCESS, data };
  }
  function failure(error) {
    return { type: GET_SUB_DEALER_CONTACT_FAIL, error };
  }
}

export function getDealerRetationShipListAction(subdealerNumber) {
  return (dispatch) => {
    dispatch(request());
    getDealerRetationShipList(subdealerNumber)
      .then((res) => {
        if (res.status === 200 && res.data) {
          dispatch(success(res.data));
        } else {
          dispatch(failure(res));
        }
      })
      .catch((error) => dispatch(failure(error)));
  };

  function request() {
    return { type: GET_DEALER_RELATION_REQUEST };
  }
  function success(data) {
    return { type: GET_DEALER_RELATION_SUCCESS, data };
  }
  function failure(error) {
    return { type: GET_DEALER_RELATION_FAIL, error };
  }
}


export function getPointCalulationListAction(subdealerNumber) {
  return (dispatch) => {
    dispatch(request());
    getPointCalulationList(subdealerNumber)
      .then((res) => {
        if (res.status === 200 && res.data) {
          dispatch(success(res.data));
        } else {
          dispatch(failure(res));
        }
      })
      .catch((error) => dispatch(failure(error)));
  };

  function request() {
    return { type: GET_POINT_CALCULATION_AUTO_REQUEST };
  }
  function success(data) {
    return { type: GET_POINT_CALCULATION_AUTO_SUCCESS, data };
  }
  function failure(error) {
    return { type: GET_POINT_CALCULATION_AUTO_FAIL, error };
  }
}
export function getPointCalulationManualListAction(queryString) {
  return (dispatch) => {
    dispatch(request());
    getPointCalulationList(queryString)
      .then((res) => {
        if (res.status === 200 && res.data) {
          dispatch(success(res.data));
        } else {
          dispatch(failure(res));
        }
      })
      .catch((error) => dispatch(failure(error)));
  };

  function request() {
    return { type: GET_POINT_CALCULATION_MANUAL_REQUEST };
  }
  function success(data) {
    return { type: GET_POINT_CALCULATION_MANUAL_SUCCESS, data };
  }
  function failure(error) {
    return { type: GET_POINT_CALCULATION_MANUAL_FAIL, error };
  }
}
export function getAllocationInventoryListAction(queryString) {
  return (dispatch) => {
    dispatch(request());
    getAllocationInventoryList(queryString)
      .then((res) => {
        if (res.status === 200 && res.data) {
          dispatch(success(res.data));
        } else {
          dispatch(failure(res));
        }
      })
      .catch((error) => dispatch(failure(error)));
  };

  function request() {
    return { type: GET_ALLOCATION_INVENTORY_REQUEST };
  }
  function success(data) {
    return { type: GET_ALLOCATION_INVENTORY_SUCCESS, data };
  }
  function failure(error) {
    return { type: GET_ALLOCATION_INVENTORY_FAIL, error };
  }
}