import { eventConstants } from "../_constants";

export function addstrategymatrix(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_STRATEGY_MATRIX_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_STRATEGY_MATRIX_SUCCESS:
      return {
        addstrategymatrix: action.addstrategymatrix,
      };
    case eventConstants.ADD_STRATEGY_MATRIX_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}