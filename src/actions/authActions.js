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
        } catch (error) {
            //console.log( error.response.data.msg );
            if( error.response?.data ){
                dispatch( loginUserError( error.response.data.msg ) );
            }else{
                dispatch( registerUserError('there was an error') );
            }
            setTimeout(()=>{
                dispatch( removeError() );
            }, 3000);
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

const loginUserError = error =>({
    type: types.LOGIN_USER_ERROR,
    payload: error
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
                dispatch( getUserError('there was an error') );
                dispatch( logoutAction() );
            }
            setTimeout(()=>{
                dispatch( removeError() );
            }, 3000);
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

const getUserError = error =>({
    type: types.GET_USER_ERROR,
    payload: error
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
            dispatch( registerUserSuccess( {user: resp.data.user, token: resp.data.token }) );
        } catch (error) {
            // TODO manage errors
            if( error.response?.data ){
                dispatch( registerUserError(error.response.data?.errors[0].msg) );
            }else{
                dispatch( registerUserError('there was an error') );
            }
            setTimeout(()=>{
                dispatch( removeError() );
            }, 3000);
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

export const setTokenAction = () =>{
    return ( dispatch ) =>{
        dispatch( setToken() );
    }
}

const setToken = () =>({
    type: types.SET_TOKEN
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

const removeError = () =>({
    type: types.REMOVE_ERROR
})
