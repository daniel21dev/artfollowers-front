import {types} from '../types';

const initialState = {
    profile: null,
    error: null,
    loading: false,
    followers: null,
    following: null
}


export default function profileReducer( state = initialState, action ){

    switch( action.type ){

        case types.GET_PROFILE:
        case types.UPDATE_PROFILE:
        case types.FOLLOW:
        case types.GET_FOLLOWERS:
        case types.UPLOAD_PHOTO:
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
                loading: false,
                error: null
            }
        case types.GET_FOLLOWERS_SUCCESS:
            return{
                ...state,
                followers: action.payload,
                loading: false,
                error: null
            }
        case types.GET_FOLLOWING_SUCCESS:
            return{
                ...state,
                following: action.payload,
                loading: false,
                error: null
            }
        case types.FOLLOW_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null
            }
        case types.UPLOAD_PHOTO_USER_SUCCESS:
        case types.UPLOAD_PHOTO_PROFILE_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                profile: state.profile
            }
        case types.GET_PROFILE_ERROR:
        case types.UPDATE_PROFILE_ERROR:
        case types.FOLLOW_ERROR:
        case types.GET_FOLLOWERS_ERROR:
        case types.GET_FOLLOWING_ERROR:
        case types.UPLOAD_PHOTO_ERROR:
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