import React, { useEffect } from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { PostsContainers } from './PostsContainers';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction, getCategoriesAction } from './../../actions/postsActions';


export const Home = () => {

    const dispatch = useDispatch();
    const {posts}  = useSelector( state => state.posts );
    const {user}   = useSelector( state => state.auth );

    useEffect(()=>{
        dispatch( getPostsAction() );
        dispatch( getCategoriesAction() );
    },[dispatch, user]);

    return (
        <>
            <Header />
                <PostsContainers  
                    posts={ posts }
                    user={ user }
                />
            <Footer />
        </>
    )
}
