import {types} from '../types';

const initialState = {
    user: null,
    token: null,
    error: null,
    loading: false,
    loggedIn: false
}


export default function authReducer( state = initialState, action ){

    switch( action.type ){
        case types.LOGIN_USER:
        case types.GET_USER:
        case types.REGISTER_USER:
            return{
                ...state,
                loading: true
            }
        case types.LOGIN_USER_SUCCCESS:
            localStorage.setItem('token', action.payload);
            
            return{
                ...state,
                token: action.payload,
                loading: false
            }
        case types.REGISTER_USER_SUCCCESS:
        case types.GET_USER_SUCCESS:
            return{
                ...state,
                user: action.payload,
                loading: false,
                loggedIn: true,
                error: false
            }
        case types.LOGIN_USER_ERROR:
        case types.REGISTER_USER_ERROR:
        case types.GET_USER_ERROR:
            return{
                ...state,
                error: true,
                loading: false
            }
        case types.LOGOUT:
            return{
                ...state,
                loggedIn: false,
                user: null,
                token: null,
                profile: null,
                loading: false
            }
        default: 
            return state;
    }
}