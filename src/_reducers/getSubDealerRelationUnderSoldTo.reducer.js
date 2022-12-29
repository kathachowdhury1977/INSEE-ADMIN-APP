import {
  SUBDEALER_RELATION_UNDER_SOLDTO_REQUEST,
  SUBDEALER_RELATION_UNDER_SOLDTO_SUCCESS,
  SUBDEALER_RELATION_UNDER_SOLDTO_FAILURE,
  SUBDEALER_RELATION_UNDER_SOLDTO_LOADING,
} from "../_constants/dealer.constant";
const initialState = {
  error: null,
  errorMessage: "",
  SubDealerRelationUnderSoldToList: null,
  addSubDealerRelationUnderSoldTo: null,
};

export function SubDealerRelationUnderSoldTo(state = initialState, action) {
  switch (action.type) {
    case SUBDEALER_RELATION_UNDER_SOLDTO_LOADING:
      return {
        ...state,
        loading: action.data,
      };
    case SUBDEALER_RELATION_UNDER_SOLDTO_SUCCESS:
      return {
        ...state,
        SubDealerRelationUnderSoldToList: action.data,
        error: false,
        errorMessage: "",
        loading: false,
      };
    case SUBDEALER_RELATION_UNDER_SOLDTO_FAILURE:
      return {
        ...state,
        SubDealerRelationUnderSoldToList: null,
        error: true,
        errorMessage: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
