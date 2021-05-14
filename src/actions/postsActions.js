import {types} from '../types';
import axiosClient from './../config/axios';

export const getPostsAction = () =>{
    return async( dispatch ) =>{
        dispatch( getPosts() );

        try {
            const resp = await axiosClient.get('/posts');
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
