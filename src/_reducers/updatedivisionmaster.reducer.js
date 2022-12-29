import { eventConstants } from "../_constants";

export function updatedivisionmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.UPDATE_DIVISION_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.UPDATE_DIVISION_SUCCESS:
      return {
        loading:false,
        updatedivision: action.updatedivision,
      };
    case eventConstants.UPDATE_DIVISION_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.UPDATE_DIVISION_RESET:
        return {
        };

    
    default:
      return state;
  }
}