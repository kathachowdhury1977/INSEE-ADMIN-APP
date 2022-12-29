import { eventConstants } from "../_constants";

export function SearchedContactList(state = {}, action) {
    switch (action.type) {
        case eventConstants.CONTACT_LIST_SEARCH_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.CONTACT_LIST_SEARCH_SUCCESS:
            return {
                contactList: action.contactList,
            };
        case eventConstants.CONTACT_LIST_SEARCH_FAILURE:
            return {
                error: action.error,
            };


        default:
            return state;
    }
}