import { eventConstants } from "../_constants";

export function adddistributionchannel(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_DISTRIBUTION_CHANNEL_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_DISTRIBUTION_CHANNEL_SUCCESS:
      return {
        adddistributionchannel: action.adddistributionchannel,
      };
    case eventConstants.ADD_DISTRIBUTION_CHANNEL_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_DISTRIBUTION_CHANNEL_RESET:
        return {
        };

    
    default:
      return state;
  }
}