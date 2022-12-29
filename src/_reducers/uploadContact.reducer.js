import { eventConstants } from "../_constants";

export function uploadContact(state = {}, action) {
    switch (action.type) {
        case eventConstants.UPLOAD_CONTACT_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.UPLOAD_CONTACT_SUCCESS:
            return {
                uploadContact: action.uploadContact,
            };
        case eventConstants.UPLOAD_CONTACT_FAILURE:
            return {
                error: action.error,
            };

        case eventConstants.UPLOAD_CONTACT_CLEAR_TOAST:
            return {
                uploadContact: ''
            }


        default:
            return state;
    }
}