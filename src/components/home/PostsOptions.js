import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsAction } from './../../actions/postsActions';

export const PostsOptions = () => {
    
    let {categories} = useSelector( state => state.posts );
    const dispatch = useDispatch();

    const handleClick = ( option ) =>{
        dispatch( getPostsAction(option) );
    }

    return (
        <div className="posts_options">
            <div className="option dropdown">
                Category
                {categories.map( (category,index) =>(
                    <div 
                        className="dropdown-content" 
                        key={ category._id }
                        style={{ bottom: `calc( -80% * ${index+1})` }}
                        onClick={ ()=> handleClick( category._id ) }
                    >
                        { category.name }
                    </div>
                ))}
                
            </div>
            <div className="option"
                onClick={ ()=> handleClick( 'likes' ) }
            >
                Likes
            </div>
            <div className="option"
                onClick={ ()=> handleClick( 'new' ) }
            >
                New
            </div>
            <div className="option"
                onClick={ ()=> handleClick( 'controversial' ) }
            >
                Controversial
            </div>
        </div>
    )
}
