import { eventConstants } from "../_constants";

export function getassignsoldtobyid(state = {}, action) {
  switch (action.type) {
    case eventConstants.GET_ASSIGN_SOLD_TO_DATE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.GET_ASSIGN_SOLD_TO_DATE_SUCCESS:
      return {
        getassignsoldtobyid: action.getassignsoldtobyid,
      };
    case eventConstants.GET_ASSIGN_SOLD_TO_DATE_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}