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
            // TODO manage errors
            dispatch( getProfileError( error ) );
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
    payload: true
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
            // TODO manage errors
            dispatch( updateProfileError( error ) );
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
    payload: true
});
