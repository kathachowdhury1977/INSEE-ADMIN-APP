import { eventConstants } from "../_constants";

export function distributionchannel(state = {}, action) {
  switch (action.type) {
    case eventConstants.DISTRIBUTION_CHANNEL_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DISTRIBUTION_CHANNEL_LIST_SUCCESS:
      return {
        distributionchannel: action.distributionchannel,
      };
    case eventConstants.DISTRIBUTION_CHANNEL_LIST_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}