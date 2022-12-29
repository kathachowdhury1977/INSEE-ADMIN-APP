import { eventConstants } from "../_constants";

export function soldtoselectwithdivision(state = {}, action) {
  switch (action.type) {
    case eventConstants.SOLDTO_SELECT_DIVISION_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SOLDTO_SELECT_DIVISION_SUCCESS:
      return {
        soldtoselectwithdivision: action.soldtoselectwithdivision,
      };
    case eventConstants.SOLDTO_SELECT_DIVISION_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}