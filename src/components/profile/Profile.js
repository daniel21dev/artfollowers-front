import React, { useEffect } from 'react'
import { Footer } from '../home/Footer'
import { Header } from '../home/Header'
import { ProfileContainer } from './ProfileContainer';
import { PostsContainers } from './../home/PostsContainers';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction, getCategoriesAction } from './../../actions/postsActions';
import { useParams } from 'react-router';

export const Profile = () => {
    
    const dispatch = useDispatch();
    const {posts}  = useSelector( state => state.posts );
    const {user}   = useSelector( state => state.auth );
    const {id}     = useParams();

    useEffect(()=>{
        dispatch( getPostsAction( id ) );
        dispatch( getCategoriesAction() );
    },[dispatch, user, id]);

    return (
        <>
            <Header />
                <ProfileContainer 
                    id={id}
                />
                <PostsContainers  
                    id={id}
                    posts={ posts }
                    user={ user }
                />
            <Footer />
        </>
    )
}
