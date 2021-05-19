import axiosClient from './axios';

export const tokenAuth = token =>{

    if( token ){
        axiosClient.defaults.headers.common['x-token'] = token;
    }else{
        delete axiosClient.defaults.headers.common['x-token'];
    }
}
