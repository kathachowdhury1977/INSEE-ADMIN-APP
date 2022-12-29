import { GET_DEALER_RELATION_REQUEST,GET_DEALER_RELATION_SUCCESS,GET_DEALER_RELATION_FAIL } from '../_constants/subDealer.constant';
const initialState={
    error:null,
    errorMessage:"",
    dealerRelationList:null,
    addDealer:null,
    loading:false
}
export function dealerListWithRelationship(state = initialState, action) {
    switch (action.type) {       
        case GET_DEALER_RELATION_REQUEST:
            return {
                loading: true,
            };
        case GET_DEALER_RELATION_SUCCESS:
            return {
                ...state,
                dealerRelationList: action.data,error:false,errorMessage:'',loading:false
            };   
        case GET_DEALER_RELATION_FAIL:
            return {
                ...state,
                dealerRelationList: null,error:true,errorMessage:action.error,loading:false
            };    
        
        default:
            return state
    }
}