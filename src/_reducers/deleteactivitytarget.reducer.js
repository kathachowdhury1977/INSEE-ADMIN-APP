import { eventConstants } from "../_constants";

export function deleteactivitytarget(state = {}, action) {
    switch (action.type) {
        case eventConstants.DELETE_ACTIVITY_TARGET_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.DELETE_ACTIVITY_TARGET_SUCCESS:
            return {
                deleteactivitytarget: action.deleteactivitytarget,
            };
        case eventConstants.DELETE_ACTIVITY_TARGET_FAILURE:
            return {
                error: action.error,
            };

        case eventConstants.DELETE_ACTIVITY_TARGET_CLEAR_TOAST:
            return {
                deleteactivitytarget: undefined
            }


        default:
            return state;
    }
}