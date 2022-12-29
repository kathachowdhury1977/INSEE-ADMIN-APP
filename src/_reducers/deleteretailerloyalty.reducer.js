import { eventConstants } from "../_constants";

export function deleteretailerloyalty(state = {}, action) {
    switch (action.type) {
        case eventConstants.DELETE_RETAILER_LOYALTY_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.DELETE_RETAILER_LOYALTY_SUCCESS:
            return {
                deleteretailerloyalty: action.deleteretailerloyalty,
            };
        case eventConstants.DELETE_RETAILER_LOYALTY_FAILURE:
            return {
                error: action.error,
            };

        case eventConstants.DELETE_RETAILER_LOYALTY_CLEAR_TOAST:
            return {
                deleteretailerloyalty: undefined
            }


        default:
            return state;
    }
}