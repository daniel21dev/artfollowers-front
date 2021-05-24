import {types} from '../types';
import axiosClient from './../config/axios';

export const getPostsAction = ( userID='', category='', option='') =>{
    return async( dispatch ) =>{
        dispatch( getPosts() );

        try {
            let query;
            if( userID.length >1 && option.length>1){
                query = '/posts?option='+option+'&user='+userID;
            }else if( userID.length >1 && category.length >1){
                query = '/posts/'+category+'?user='+userID;
            }else if( userID.length >1 ){
                query = '/posts?user='+userID;
            }else if( category.length >1 ){
                query = '/posts/'+category;
            }else if( option.length>1 ){
                query = '/posts?option='+option;
            }else{
                query = '/posts';
            }

            const resp = await axiosClient.get( query );
            console.log( resp );
            dispatch( getPostsSuccess( resp.data.posts ) );
        } catch (error) {
            dispatch( getPostsError() );
        }
    }
}

export const searchPostsAction = ( query ) =>{
    return async( dispatch ) =>{
        dispatch( getPosts() );
        try {
            const resp = await axiosClient.get('/search?q='+ query );
            console.log( resp );
            dispatch( getPostsSuccess( resp.data.posts ) );
        } catch (error) {
            dispatch( getPostsError() );
        }
    }
}

const getPosts = () =>({
    type: types.GET_POSTS,
    payload: true
});

const getPostsSuccess = posts =>({
    type: types.GET_POSTS_SUCCCESS,
    payload: posts
});

const getPostsError = () =>({
    type: types.GET_POSTS_ERROR,
    payload: true
});

export const likePostAction = ( id, userID ) =>{
    return async( dispatch ) =>{
        dispatch( likePost() );
        try {
            const resp = await axiosClient.post('/likes/'+id);
            dispatch( likePostSuccess(id, userID) );
        } catch (error) {
            dispatch( likePostError() );
        }
    }
}

const likePost = () =>({
    type: types.LIKE_POST,
    payload: true
});

const likePostSuccess = (id, userID) =>({
    type: types.LIKE_POSTS_SUCCCESS,
    payload: {id, userID}
});

const likePostError = () =>({
    type: types.LIKE_POSTS_ERROR,
    payload: true
});

export const getCategoriesAction = () =>{
    return async( dispatch ) =>{
        dispatch( getCategories() );

        try {
            const resp = await axiosClient.get('/categories');
            dispatch( getCategoriesSucces( resp.data.categories) );
        } catch (error) {
            dispatch( getCategoriesError() );
        }
    }
}

const getCategories = () =>({
    type: types.GET_CATEGORIES,
    payload: true
});

const getCategoriesSucces = ( categories ) =>({
    type: types.GET_CATEGORIES_SUCCCESS,
    payload: categories
});

const getCategoriesError = () =>({
    type: types.GET_CATEGORIES_ERROR,
    payload: true
});