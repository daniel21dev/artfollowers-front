import {types} from '../types';
import axiosClient from './../config/axios';
import swal from 'sweetalert2';

export const getPostsAction = ( userID='', category='', option='', from='0') =>{
    return async( dispatch ) =>{
        dispatch( getPosts() );

        try {
            let query;
            if( userID.length >1 && option.length>1){
                query = '/posts?option='+option+'&user='+userID+'&from='+from;
            }else if( userID.length >1 && category.length >1){
                query = '/posts/'+category+'?user='+userID+'&from='+from;
            }else if( userID.length >1 ){
                query = '/posts?user='+userID+'&from='+from;
            }else if( category.length >1 ){
                query = '/posts/'+category+'?from='+from;;
            }else if( option.length>1 ){
                query = '/posts?option='+option+'?from='+from;;
            }else{
                query = '/posts'+'?from='+from;;
            }

            const resp = await axiosClient.get( query );
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
            dispatch( getPostsSuccess( resp.data.posts ) );
        } catch (error) {
            dispatch( getPostsError() );
        }
    }
}

export const getNextPosts = ( userID='', category='', option='', from='1') =>{
    return async( dispatch )=>{
              
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

const addPage = () =>({
    type: types.ADD_PAGE
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

export const deletePostAction = ( id ) =>{
    return async( dispatch ) =>{
        dispatch( deletePost() );
        try {
            await axiosClient.delete('/posts/'+id);
            dispatch( deletePostSuccess(id) );
        } catch (error) {
            swal.fire('there was an error');
            dispatch( deletePostError() );
        }
    }
}

const deletePost = () =>({
    type: types.DELETE_POST,
    payload: true
});

const deletePostSuccess = id =>({
    type: types.DELETE_POST_SUCCESS,
    payload: id
});

const deletePostError = () =>({
    type: types.DELETE_POST_ERROR,
    payload: true
});

export const savePostAction = ( post, token ) =>{
    return async( dispatch ) =>{
        dispatch( savePost() );
        try {
            const data = new FormData();
            data.append('media', post.media);
            data.append('title', post.title);
            data.append('desc', post.desc);
            data.append('category', post.category);
            data.append('private', post.priv);
            const resp = await axiosClient.post('/posts',data,{
                headers: { 
                    'x-token': token
                }
            });
            //console.log( resp.data.post );
            dispatch( savePostSuccess( resp.data.post ) );
            dispatch( getPostsAction( resp.data.post.userID ));
        } catch (error) {
            console.log( error.response );
            dispatch( savePostError() );
        }
    }
}

const savePost = () =>({
    type: types.SAVE_POST,
    payload: true
});

const savePostSuccess = post =>({
    type: types.SAVE_POST_SUCCESS,
    payload: post
});

const savePostError = () =>({
    type: types.SAVE_POST_ERROR,
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