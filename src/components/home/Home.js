import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { PostsContainers } from './PostsContainers';


export const Home = () => {

    

    return (
        <>
            <Header />
                <PostsContainers />
            <Footer />
        </>
    )
}
