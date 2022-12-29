import { eventConstants } from "../_constants";

export function deletecustomerrelation(state = {}, action) {
    switch (action.type) {
        case eventConstants.DELETE_CUSTOMER_RELATION_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.DELETE_CUSTOMER_RELATION_SUCCESS:
            return {
                deletecustomerrelation: action.deletecustomerrelation,
            };
        case eventConstants.DELETE_CUSTOMER_RELATION_FAILURE:
            return {
                error: action.error,
            };

        case eventConstants.DELETE_CUSTOMER_RELATION_CLEAR_TOAST:
            return {
                deletecustomerrelation: undefined
            }


        default:
            return state;
    }
}