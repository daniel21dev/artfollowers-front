import {types} from '../types';
import axiosClient from './../config/axios';


export const loginAction = (email,password, history) =>{
    return async( dispatch ) =>{
        dispatch( loginUser() );

        try {
            const resp = await axiosClient.post('/login',{
                email,
                password
            });
            dispatch( loginUserSuccess( resp.data.token ) );
            dispatch( getUserAction( resp.data.token ) );
            history.push('/');
        } catch (error) {
            //console.log( error.response.data.msg );
            if( error.response?.data ){
                dispatch( loginUserError( error.response.data.msg ) );
            }else{
                dispatch( registerUserError('there was an error') );
            }
        }
    }
}

const loginUser = () =>({
    type: types.LOGIN_USER,
    payload: true
});

const loginUserSuccess = token =>({
    type: types.LOGIN_USER_SUCCCESS,
    payload: token
});

const loginUserError = msgError =>({
    type: types.LOGIN_USER_ERROR,
    payload: msgError
});

export const getUserAction = ( token ) =>{

    return async( dispatch ) =>{

        if( !token ){
            return null;
        }

        dispatch( getUser() );

        try {
            const resp = await axiosClient.get('/users/me',{
                headers:{
                    'x-token': token
                }
            });
            dispatch( getUserSuccess( resp.data.user) );
        } catch (error) {
            if( error.response?.data ){
                dispatch( loginUserError( error.response.data.msg ) );
            }else{
                dispatch( registerUserError('there was an error') );
                dispatch( logoutAction() );
            }
        }
    }
}

const getUser = () =>({
    type: types.GET_USER,
    payload: true
});

const getUserSuccess = user =>({
    type: types.GET_USER_SUCCESS,
    payload: user
});

const getUserError = () =>({
    type: types.GET_USER_ERROR,
    payload: true
});

export const registerAction = (name,userName,email,password) =>{
    return async( dispatch ) =>{
        dispatch( registerUser() );

        try {
            const resp = await axiosClient.post('/users',{
                name,
                userName,
                email,
                password
            });
            //console.log( resp.data.user );
            dispatch( registerUserSuccess( resp.data.user ) );
            dispatch( loginAction({email,password}) );
        } catch (error) {
            // TODO manage errors
            if( error.response?.data ){
                dispatch( registerUserError(error.response.data?.errors[0].msg) );
            }else{
                dispatch( registerUserError('there was an error') );
            }
        }
    }
}

const registerUser = () =>({
    type: types.REGISTER_USER,
    payload: true
});

const registerUserSuccess = user =>({
    type: types.REGISTER_USER_SUCCCESS,
    payload: user
});

const registerUserError = error =>({
    type: types.REGISTER_USER_ERROR,
    payload: error
});

export const logoutAction = () =>{
    localStorage.removeItem('token');
    return ( dispatch ) =>{
        dispatch( logout() );
    }
}

const logout = () =>({
    type: types.LOGOUT
});

