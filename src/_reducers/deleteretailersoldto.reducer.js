import { eventConstants } from "../_constants";

export function deleteretailersoldto(state = {}, action) {
    switch (action.type) {
        case eventConstants.DELETE_RETAILER_SOLDTO_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.DELETE_RETAILER_SOLDTO_SUCCESS:
            return {
                deleteretailersoldto: action.deleteretailersoldto,
            };
        case eventConstants.UPLOAD_CONTACT_FAILURE:
            return {
                error: action.error,
            };

        case eventConstants.DELETE_RETAILER_SOLDTO_CLEAR_TOAST:
            return {
                deleteretailersoldto: undefined
            }


        default:
            return state;
    }
}