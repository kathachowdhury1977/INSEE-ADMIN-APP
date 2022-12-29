import { eventConstants } from "../_constants";

export function getstrategy(state = {}, action) {
  switch (action.type) {
    case eventConstants.STRATEGY_MATRIX_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.STRATEGY_MATRIX_LIST_SUCCESS:
      return {
        getstrategy: action.getstrategy,
      };
    case eventConstants.STRATEGY_MATRIX_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}