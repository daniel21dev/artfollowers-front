import {types} from '../types';
import axiosClient from './../config/axios';

export const getPostsAction = ( param='' ) =>{
    return async( dispatch ) =>{
        dispatch( getPosts() );

        try {
            let resp;
            if( param ){
                resp = await axiosClient.get('/posts/'+param);
            }else{
                resp = await axiosClient.get('/posts');
            }
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

export const likePostAction = ( id ) =>{
    return async( dispatch ) =>{
        dispatch( likePost() );

        try {
            const resp = await axiosClient.post('/likes/'+id);
            dispatch( likePostSuccess(id, resp.data.liked) );
        } catch (error) {
            dispatch( likePostError() );
        }
    }
}

const likePost = () =>({
    type: types.LIKE_POST,
    payload: true
});

const likePostSuccess = (id, liked) =>({
    type: types.LIKE_POSTS_SUCCCESS,
    payload: {id,liked}
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