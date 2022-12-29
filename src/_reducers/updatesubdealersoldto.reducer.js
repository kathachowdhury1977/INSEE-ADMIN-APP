import { eventConstants } from "../_constants";

export function updatesubdealersoldto(state = {}, action) {
    switch (action.type) {
        case eventConstants.UPDATE_SUB_DEALER_SOLDTO_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.UPDATE_SUB_DEALER_SOLDTO_SUCCESS:
            return {
                updatesubdealersoldto: action.updatesubdealersoldto,
            };
        case eventConstants.UPLOAD_CONTACT_FAILURE:
            return {
                error: action.error,
            };

        case eventConstants.UPDATE_SUB_DEALER_SOLDTO_CLEAR_STATE:
            return {
                updatesubdealersoldto: ''
            }


        default:
            return state;
    }
}