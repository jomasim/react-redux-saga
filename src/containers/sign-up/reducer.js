import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from "./types";

const initialState = {
    user :{},
    errors: [],
    success:false,
    isRegistering:false

}

const registerReducer =(state=initialState,action) =>{
    switch (action.type) {
        case REGISTER_START:{
            return {...state,isRegistering: true,errors: []}
        }
        case REGISTER_SUCCESS:{
            return {...state,user:action.payload,success: true,isRegistering:false}
        }
        case REGISTER_ERROR:{
            return {...state,errors:action.payload,isRegistering:false}
        }
        default:
            return state;
    }

}

export default registerReducer;