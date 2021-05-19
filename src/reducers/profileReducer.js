import {types} from '../types';

const initialState = {
    profile: null,
    error: null,
    loading: false
}


export default function profileReducer( state = initialState, action ){

    switch( action.type ){

        case types.GET_PROFILE:
        case types.UPDATE_PROFILE:
        case types.FOLLOW:
            return{
                ...state,
                loading: true,
                error: false
            }
        case types.GET_PROFILE_SUCCESS:
        case types.UPDATE_PROFILE_SUCCESS:
            return{
                ...state,
                profile: action.payload,
                loading: false
            }
        case types.FOLLOW_SUCCESS:
            return{
                ...state,
                loading: false
            }
        case types.GET_PROFILE_ERROR:
        case types.UPDATE_PROFILE_ERROR:
        case types.FOLLOW_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case types.RESET_PROFILE:
            return{
                ...initialState
            }
        default: 
            return state;
    }
}