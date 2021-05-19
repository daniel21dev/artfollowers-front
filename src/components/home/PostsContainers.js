import React from 'react';
import { Post } from './Post';
import { PostsOptions } from './PostsOptions';
import { CategoriesPanel } from './CategoriesPanel';

export const PostsContainers = ({posts=[]}) => {

    return (
        <main className="posts_container">
            <CategoriesPanel />
            <PostsOptions />
            {
                posts.map( post =>(
                    <Post key={ post._id } 
                        id={ post._id }
                        desc={post.desc}
                        media={post.media}
                        title={ post.title }
                        user={ post.userID}
                        likes={ post.likes }
                    />
                ))
            }
        </main>
    )
}
