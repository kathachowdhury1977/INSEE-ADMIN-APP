import { eventConstants } from "../_constants";

export function deletevolumeallocation(state = {}, action) {
    switch (action.type) {
        case eventConstants.DELETE_VOLUME_ALLOCATION_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.DELETE_VOLUME_ALLOCATION_SUCCESS:
            return {
                deletevolumeallocation: action.deletevolumeallocation,
            };
        case eventConstants.DELETE_VOLUME_ALLOCATION_FAILURE:
            return {
                error: action.error,
            };

        case eventConstants.DELETE_VOLUME_ALLOCATION_CLEAR_STATE:
            return {
                deletevolumeallocation: ''
            }


        default:
            return state;
    }
}