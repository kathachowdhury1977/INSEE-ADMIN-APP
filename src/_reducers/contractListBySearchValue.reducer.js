import { eventConstants } from "../_constants";

export function contractListBySearchValue(state = {}, action) {
    switch (action.type) {
        case eventConstants.CONTRACT_LIST_SEARCH_REQUEST:
            return {
                loading: true,
            };
        case eventConstants.CONTRACT_LIST_SEARCH_SUCCESS:
            return {
                contractList: action.contractList,
            };
        case eventConstants.CONTRACT_LIST_SEARCH_FAILURE:
            return {
                error: action.error,
            };


        default:
            return state;
    }
}