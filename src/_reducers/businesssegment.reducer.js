import { eventConstants } from "../_constants";

export function businesssegment(state = {}, action) {
  switch (action.type) {
    case eventConstants.BUSINESS_SEGMENT_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.BUSINESS_SEGMENT_LIST_SUCCESS:
      return {
        businesssegment: action.businesssegment,
      };
    case eventConstants.BUSINESS_SEGMENT_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}