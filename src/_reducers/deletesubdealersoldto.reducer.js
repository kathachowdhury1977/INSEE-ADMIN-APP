import { eventConstants } from "../_constants";

export function deletesubdealersoldto(state = {}, action) {
    switch (action.type) {
        case eventConstants.DELETE_SUB_DEALER_SOLDTO_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.DELETE_SUB_DEALER_SOLDTO_SUCCESS:
            return {
                deletesubdealersoldto: action.deletesubdealersoldto,
            };
        case eventConstants.UPLOAD_CONTACT_FAILURE:
            return {
                error: action.error,
            };

        case eventConstants.DELETE_SUB_DEALER_SOLDTO_CLEAR_STATE:
            return {
                deletesubdealersoldto: ''
            }


        default:
            return state;
    }
}