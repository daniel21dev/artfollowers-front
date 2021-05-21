import axiosClient from './../config/axios';
import { types } from './../types/index';

export const getProfileAction = ( userID ) =>{
    return async( dispatch ) =>{

        dispatch( getProfile() );
        
        try {
            //return console.log('dispatch');
            const resp = await axiosClient.get('/profiles/'+userID);
            dispatch( getProfileSuccess( resp.data.profile ) );
        } catch (error) {
            if( error.response?.data ){
                dispatch( getProfileError( error.response.data.msg ) );
            }else{
                dispatch( getProfileError( 'Hubo un error' ) );
            }
        }
    }
}

const getProfile = () =>({
    type: types.GET_PROFILE,
    payload: true
});

const getProfileSuccess = (profile) =>({
    type: types.GET_PROFILE_SUCCESS,
    payload: profile
});

const getProfileError = error =>({
    type: types.GET_PROFILE_ERROR,
    payload: error
});

export const updateProfileAction = ( userID, description) =>{
    return async( dispatch ) =>{

        dispatch( updateProfile() );
        
        try {
            //return console.log('dispatch');
            const resp = await axiosClient.put(`/profiles/${userID}`,{
                description
            });
            dispatch( updateProfileSuccess( resp.data.profile ) );
        } catch (error) {
            if( error.response?.data ){
                dispatch( updateProfileError( error.response.data.msg ) );
            }else{
                console.log( error.response );
                dispatch( updateProfileError( 'Hubo un error' ) );
            }
        }
    }
}

const updateProfile = () =>({
    type: types.UPDATE_PROFILE,
    payload: true
});

const updateProfileSuccess = (profile) =>({
    type: types.UPDATE_PROFILE_SUCCESS,
    payload: profile
});

const updateProfileError = error =>({
    type: types.UPDATE_PROFILE_ERROR,
    payload: error
});

export const followAction = ( followed ) =>{
    return async( dispatch ) =>{

        dispatch( follow() );
        
        try {
            const resp = await axiosClient.post(`/follows/${followed}`,{
                headers:{'x-token': localStorage.getItem('token')}
            });
            dispatch( followSuccess() );
            dispatch( getProfileAction( followed ) );
        } catch (error) {
            console.log( error.response );
            if( error.resp?.data ){
                dispatch( followError( error.response.data.msg ) );
            }else{
                dispatch( followError( 'Hubo un error' ) );
            }
        }
    }
}

const follow = () =>({
    type: types.FOLLOW
});

const followSuccess = () =>({
    type: types.FOLLOW_SUCCESS,
});

const followError = error =>({
    type: types.FOLLOW_ERROR,
    payload: error
});

export const resetProfileAction = () =>({
    type: types.RESET_PROFILE
})