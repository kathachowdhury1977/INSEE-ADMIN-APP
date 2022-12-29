import { eventConstants } from "../_constants";

export function DownloadContact(state = {}, action) {
    switch (action.type) {
        case eventConstants.DOWNLOAD_CONTACT_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.DOWNLOAD_CONTACT_SUCCESS:
            return {
                DownloadContact: action.DownloadContact,
            };
        case eventConstants.DOWNLOAD_CONTACT_FAILURE:
            return {
                error: action.error,
            };


        default:
            return state;
    }
}