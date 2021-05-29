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
        case types.SAVE_POST:
        case types.DELETE_POST:
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
        case types.DELETE_POST_SUCCESS:
            return{
                ...state,
                posts: state.posts.filter( post => post._id !== action.payload) ,
                loading: false
            }
        case types.SAVE_POST_SUCCESS:
            return{
                ...state,
                error: false,
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
        case types.SAVE_POST_ERROR:
        case types.DELETE_POST_ERROR:
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
                posts: evalLike( state.posts, action.payload ),
                loading: false
            }
        case types.LIKE_POSTS_ERROR:
            return{
                ...state,
                error: true,
                loading: false
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