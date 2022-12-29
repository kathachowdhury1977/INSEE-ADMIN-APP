import { eventConstants } from "../_constants";

export function deleteretailercontactlist(state = {}, action) {
    switch (action.type) {
        case eventConstants.DELETE_RETAILER_CONTACT_LIST_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.DELETE_RETAILER_CONTACT_LIST_SUCCESS:
            return {
                deleteretailercontactlist: action.deleteretailercontactlist,
            };
        case eventConstants.DELETE_RETAILER_CONTACT_LIST_FAILURE:
            return {
                error: action.error,
            };

        case eventConstants.DELETE_RETAILER_CONTACT_LIST_CLEAR_TOAST:
            return {
                deleteretailercontactlist: undefined
            }


        default:
            return state;
    }
}