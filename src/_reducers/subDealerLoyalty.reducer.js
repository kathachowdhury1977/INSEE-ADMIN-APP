import { GET_SUB_DEALR_SUCESS,GET_SUB_DEALR_FAIL,GET_SUB_DEALR_LIST_REQUEST } from '../_constants/subDealer.constant';
const initialState={
    error:null,
    errorMessage:"",
    subdealerList:null,
    addSubdealer:null,
    loading:false
}
export function subDealerLoyalty(state = initialState, action) {
    switch (action.type) {       
        case GET_SUB_DEALR_LIST_REQUEST:
            return {
                loading: true,
            };
        case GET_SUB_DEALR_SUCESS:
            return {
                ...state,
                subdealerList: action.data,error:false,errorMessage:'',loading: false
            };   
        case GET_SUB_DEALR_FAIL:
            return {
                ...state,
                subdealerList: null,error:true,errorMessage:action.error,loading: false
            };    
        
        default:
            return state
    }
}