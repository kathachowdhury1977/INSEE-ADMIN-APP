import { eventConstants } from "../_constants";

export function deleteexistingcustomer(state = {}, action) {
    switch (action.type) {
        case eventConstants.DELETE_EXISTING_CUSTOMER_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.DELETE_EXISTING_CUSTOMER_SUCCESS:
            return {
                deleteexistingcustomer: action.deleteexistingcustomer,
            };
        case eventConstants.DELETE_EXISTING_CUSTOMER_FAILURE:
            return {
                error: action.error,
            };

        case eventConstants.DELETE_EXISTING_CUSTOMER_CLEAR_TOAST:
            return {
                deleteexistingcustomer: undefined
            }


        default:
            return state;
    }
}