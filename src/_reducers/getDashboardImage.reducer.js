import { eventConstants } from "../_constants";

export function getDashboardImage(state = {}, action) {
    switch (action.type) {
        case eventConstants.EDIT_DASHBOARD_IMAGE_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.EDIT_DASHBOARD_IMAGE_SUCCESS:
            return {
                getDashboardImage: action.dashboardImage,
            };
        case eventConstants.EDIT_DASHBOARD_IMAGE_FAILURE:
            return {
                error: action.error,
            };


        default:
            return state;
    }
}
