import React, { useEffect } from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { PostsContainers } from './PostsContainers';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from './../../actions/postsActions';

export const Home = () => {

    const dispatch = useDispatch();
    const {posts} = useSelector( state => state.posts);

    useEffect(()=>{
        dispatch( getPostsAction() );
    },[dispatch]);

    return (
        <>
            <Header />
                <PostsContainers posts={posts}/>
            <Footer />
        </>
    )
}
