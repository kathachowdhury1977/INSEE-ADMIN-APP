import { eventConstants } from "../_constants";

export function deletebeatmaster(state = {}, action) {
    switch (action.type) {
        case eventConstants.DELETE_BEAT_MASTER_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.DELETE_BEAT_MASTER_SUCCESS:
            return {
                deletebeatmaster: action.deletebeatmaster,
            };
        case eventConstants.DELETE_BEAT_MASTER_FAILURE:
            return {
                error: action.error,
            };

        case eventConstants.DELETE_BEAT_MASTER_CLEAR_TOAST:
            return {
                deletebeatmaster: undefined
            }


        default:
            return state;
    }
}