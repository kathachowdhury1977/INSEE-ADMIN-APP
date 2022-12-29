import { eventConstants } from "../_constants";

export function uploadContactvnandlk(state = {}, action) {
    switch (action.type) {
        case eventConstants.UPLOAD_CONTACT_VNLK_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.UPLOAD_CONTACT_VNLK_SUCCESS:
            return {
                uploadContactvnandlk: action.uploadContactvnandlk,
            };
        case eventConstants.UPLOAD_CONTACT_VNLK_FAILURE:
            return {
                error: action.error,
            };

        case eventConstants.UPLOAD_CONTACT_VNLK_CLEAR_TOAST:
            return {
                uploadContactvnandlk: ''
            }


        default:
            return state;
    }
}