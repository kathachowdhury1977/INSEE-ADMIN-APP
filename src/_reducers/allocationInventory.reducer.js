import { GET_ALLOCATION_INVENTORY_REQUEST,GET_ALLOCATION_INVENTORY_FAIL,GET_ALLOCATION_INVENTORY_SUCCESS } from '../_constants/subDealer.constant';
const initialState={
    error:null,
    errorMessage:"",
    allocatioInventoryList:null,
    loading:false
}
export function allocatioInventory(state = initialState, action) {
    switch (action.type) {       
        case GET_ALLOCATION_INVENTORY_REQUEST:
            return {
                loading: true,
            };
        case GET_ALLOCATION_INVENTORY_SUCCESS:
            return {
                ...state,
                allocatioInventoryList: action.data,error:false,errorMessage:'',loading:false
            };   
        case GET_ALLOCATION_INVENTORY_FAIL:
            return {
                ...state,
                allocatioInventoryList: null,error:true,errorMessage:action.error
            };    
        
        default:
            return state
    }
}