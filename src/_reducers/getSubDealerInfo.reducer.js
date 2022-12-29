import {
  GET_SUB_DEALER_INFO_REQUEST,
  GET_SUB_DEALER_INFO_SUCCESS,
  GET_SUB_DEALER_INFO_FAILURE,
} from "../_constants/dealer.constant";

const initialState = {
  error: null,
  errorMessage: "",
  SubDealerInfo: null,
  //   addSubDealerRelationUnderSoldTo: null,
};

export function getSubDealerInfo(state = initialState, action) {
  switch (action.type) {
    case GET_SUB_DEALER_INFO_SUCCESS:
      return {
        ...state,
        SubDealerInfo: action.data,
        error: false,
        errorMessage: "",
      };
    case GET_SUB_DEALER_INFO_FAILURE:
      return {
        ...state,
        SubDealerInfo: null,
        error: true,
        errorMessage: action.error,
      };

    default:
      return state;
  }
}
