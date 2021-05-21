import {types} from '../types';
import { tokenAuth } from './../config/tokenauth';

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
            tokenAuth( action.payload );
            return{
                ...state,
                token: action.payload,
                loading: false
            }
        case types.REGISTER_USER_SUCCCESS:
            localStorage.setItem('token', action.payload);
            tokenAuth( action.payload );
            return{
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                loading: false,
                loggedIn: true,
                error: null
            }
        case types.GET_USER_SUCCESS:
            return{
                ...state,
                user: action.payload,
                loading: false,
                loggedIn: true,
                error: null
            }
        case types.LOGIN_USER_ERROR:
        case types.REGISTER_USER_ERROR:
        case types.GET_USER_ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        case types.LOGOUT:
            localStorage.removeItem('token');
            return{
                ...initialState
            }
        default: 
            return state;
    }
}