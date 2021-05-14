import React from 'react';
import { Post } from './Post';

export const PostsContainers = ({posts=[]}) => {

    return (
        <main className="posts_container">
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
