import {types} from '../types';

const initialState = {
    posts:[],
    error: null,
    loading: false,
    categories: []
}


export default function postsReducer( state = initialState, action ){

    switch( action.type ){

        case types.GET_POSTS:
        case types.GET_CATEGORIES:
            return{
                ...state,
                loading: true,
                error: false
            }
        case types.GET_POSTS_SUCCCESS:
            return{
                ...state,
                posts: action.payload,
                loading: false
            }
        case types.GET_CATEGORIES_SUCCCESS:
            return{
                ...state,
                categories: action.payload,
                loading: false
            }
        case types.GET_POSTS_ERROR:
        case types.GET_CATEGORIES_ERROR:
            return{
                ...state,
                loading: false,
                error: true
            }
        case types.LIKE_POST:
            return{
                ...state
            }
        case types.LIKE_POSTS_SUCCCESS:
            return{
                ...state,
                posts: evalLike( state.posts, action.payload )
            }
        case types.LIKE_POSTS_ERROR:
            return{
                ...state,
                error: true
            }
        default: 
            return state;
    }
}


const evalLike = (posts, payload) =>(
    posts.map( post =>{

        if( post._id !== payload.id ){
            return post;
        }

        if( post.likes.includes( payload.userID ) ){
            post.likes = post.likes.filter( like => like !== payload.userID );
            return post;
        }
        
        post.likes = [...post.likes, payload.userID];
        return post;
    })
)