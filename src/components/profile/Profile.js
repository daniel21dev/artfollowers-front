import React, { useEffect} from 'react'
import { useParams } from 'react-router';
import { Footer } from '../home/Footer'
import { Header } from '../home/Header'
import { ProfileContainer } from './ProfileContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from '../../actions/profileActions';
import { PostsContainers } from './../home/PostsContainers';

export const Profile = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {posts} = useSelector( state => state.posts );
    
    useEffect(()=>{
        dispatch( getProfileAction(id) );
    },[id,dispatch]);

    console.log('render x');
    return (
        <>
            <Header />
                <ProfileContainer id={ id }/>
                <PostsContainers posts={ posts } />
            <Footer />
        </>
    )
}
