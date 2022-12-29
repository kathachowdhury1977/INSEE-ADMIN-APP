import { eventConstants } from "../_constants";

export function deletecustomerinactive(state = {}, action) {
    switch (action.type) {
        case eventConstants.DELETE_CUSTOMER_INACTIVE_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.DELETE_CUSTOMER_INACTIVE_SUCCESS:
            return {
                deletecustomerinactive: action.deletecustomerinactive,
            };
        case eventConstants.DELETE_CUSTOMER_INACTIVE_FAILURE:
            return {
                error: action.error,
            };

        case eventConstants.DELETE_CUSTOMER_INACTIVE_CLEAR_TOAST:
            return {
                deletecustomerinactive: undefined
            }


        default:
            return state;
    }
}