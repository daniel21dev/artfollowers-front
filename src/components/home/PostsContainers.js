import React,{ useEffect } from 'react';
import { Post } from './Post';
import { PostsOptions } from './PostsOptions';
import { CategoriesPanel } from './CategoriesPanel';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAction, getPostsAction } from '../../actions/postsActions';

export const PostsContainers = () => {

    const dispatch = useDispatch();
    const {posts} = useSelector( state => state.posts );
    const {user} = useSelector( state => state.auth );

    useEffect(()=>{
        dispatch( getPostsAction() );
        dispatch( getCategoriesAction() );
    },[dispatch, user]);

    if( !posts ){
        return <p>loading...</p>
    }

    return (
        <main className="posts_container">
            <CategoriesPanel />
            <PostsOptions />
            {
                posts.map( post =>(
                    <Post key={ post._id } 
                        userID={ user?.id }
                        post={ post }
                    />
                ))
            }
        </main>
    )
}
