import React from 'react';
import { Post } from './Post';
import { PostsOptions } from './PostsOptions';
import { CategoriesPanel } from './CategoriesPanel';

export const PostsContainers = ({posts, user}) => {

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
                        userID={ user?._id }
                        post={ post }
                    />
                ))
            }
        </main>
    )
}
