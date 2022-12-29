import {
  GET_SUB_DEALER_CONTACT_SUCCESS,
  GET_SUB_DEALER_CONTACT_FAIL,
  GET_SUB_DEALER_CONTACT_REQUEST
} from "../_constants/subDealer.constant";

const initialState = {
  error: null,
  errorMessage: "",
  subdealerContactList: null,
  addSubdealerContact: null,
  loading:false
};
export function subDealerContact(state = initialState, action) {
  switch (action.type) {
    case GET_SUB_DEALER_CONTACT_REQUEST:
            return {
                loading: true,
            };
    case GET_SUB_DEALER_CONTACT_SUCCESS:
      return {
        ...state,
        subdealerContactList: action.data,
        error: false,
        loading: false,
        errorMessage: "",
      };
    case GET_SUB_DEALER_CONTACT_FAIL:
      return {
        ...state,
        subdealerContactList: null,
        error: true,
        loading: false,
        errorMessage: action.error,
      };

    default:
      return state;
  }
}
