import { eventConstants } from "../_constants";

export function DownloadContactDetails(state = {}, action) {
    switch (action.type) {
        case eventConstants.DOWNLOAD_CONTACT_DETAILS_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.DOWNLOAD_CONTACT_DETAILS_SUCCESS:
            return {
                downloadedContactList: action.contactDetails,
            };
        case eventConstants.DOWNLOAD_CONTACT_DETAILS_FAILURE:
            return {
                error: action.error,
            };


        default:
            return state;
    }
}