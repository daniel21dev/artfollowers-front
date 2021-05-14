import {types} from '../types';

const initialState = {
    posts:[],
    error: null,
    loading: false
}


export default function postsReducer( state = initialState, action ){

    switch( action.type ){

        case types.GET_POSTS:
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
        case types.GET_POSTS_ERROR:
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
                posts: state.posts.map( post => action.payload.id === action.payload 
                    ? post.liked === action.payload.liked
                    : post)
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