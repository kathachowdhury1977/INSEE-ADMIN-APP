import { eventConstants } from "../_constants";

export function soldtodropdowncountry(state = {}, action) {
  switch (action.type) {
    case eventConstants.SOLDTO_DROPDOWN_COUNTRY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SOLDTO_DROPDOWN_COUNTRY_SUCCESS:
      return {
        soldtodropdowncountry: action.soldtodropdowncountry,
      };
    case eventConstants.SOLDTO_DROPDOWN_COUNTRY_FAILURE:
      return {
        error: action.error,
      };

      case eventConstants.SOLDTO_DROPDOWN_COUNTRY_CLEAR_STATE:
        return {
          soldtodropdowncountry :undefined,
        };

    
    default:
      return state;
  }
}