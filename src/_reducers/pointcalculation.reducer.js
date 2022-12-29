import { 
    GET_POINT_CALCULATION_AUTO_REQUEST,
    GET_POINT_CALCULATION_AUTO_FAIL,
    GET_POINT_CALCULATION_AUTO_SUCCESS,
    GET_POINT_CALCULATION_MANUAL_REQUEST,
    GET_POINT_CALCULATION_MANUAL_FAIL,
    GET_POINT_CALCULATION_MANUAL_SUCCESS
 } from '../_constants/subDealer.constant';
const initialState={
    auto:{
        error:null,
        errorMessage:"",
        autoRuleList:null,
        loading:false
    },
    manual:{
        error:null,
        errorMessage:"",
        manualRuleList:null,
        loading:false
    }
}
export function pointCalculation(state = initialState, action) {
    switch (action.type) {       
        case GET_POINT_CALCULATION_AUTO_REQUEST:
            return {
                ...state,
                auto:{...state.auto,loading:true},
            };
        case GET_POINT_CALCULATION_AUTO_SUCCESS:
            return {
                ...state,
                auto:{...state.auto,autoRuleList:action.data,loading:false},
            };  
        case GET_POINT_CALCULATION_AUTO_FAIL:
            return {
                ...state,
                auto:{...state.auto,autoRuleList:null,error:true,errorMessage:action.error,loading:false},
            };  
        case GET_POINT_CALCULATION_MANUAL_REQUEST:
            return {
                ...state,
                manual:{...state.manual,loading:true},
            };
        case GET_POINT_CALCULATION_MANUAL_SUCCESS:
            return {
                ...state,
                manual:{...state.manual,manualRuleList:action.data,loading:false},
            };  
        case GET_POINT_CALCULATION_MANUAL_FAIL:
            return {
                ...state,
                manual:{...state.manual,manualRuleList:null,error:true,errorMessage:action.error,loading:false},
            };                
        
        default:
            return state
    }
}