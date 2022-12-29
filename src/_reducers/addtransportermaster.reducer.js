import { eventConstants } from "../_constants";

export function addtransportermaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_TRANSPORTER_MASTER_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_TRANSPORTER_MASTER_SUCCESS:
      return {
        loading:false,
        addtransporter: action.addtransporter,
      };
    case eventConstants.ADD_TRANSPORTER_MASTER_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.ADD_TRANSPORTER_MASTER_RESET:
        return {
        };

    
    default:
      return state;
  }
}