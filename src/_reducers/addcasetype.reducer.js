import { eventConstants } from "../_constants";

export function addcasetype(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_CASE_TYPE_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_CASE_TYPE_SUCCESS:
      return {
        loading:false,
        addcasetype: action.addcasetype,
      };
    case eventConstants.ADD_CASE_TYPE_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_CASE_TYPE_RESET:
        return {
        };
    default:
      return state;
  }
}