import React from 'react'
import { Footer } from '../home/Footer'
import { Header } from '../home/Header'
import { ProfileContainer } from './ProfileContainer';
import { PostsContainers } from './../home/PostsContainers';

export const Profile = () => {

    console.log('profile render');
    return (
        <>
            <Header />
                <ProfileContainer />
                <PostsContainers  />
            <Footer />
        </>
    )
}
