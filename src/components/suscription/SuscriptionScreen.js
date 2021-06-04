import React, { useState } from 'react'
import { Footer } from '../home/Footer'
import { Header } from '../home/Header'
import { useSelector } from 'react-redux';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { SuscriptionForm } from './SuscriptionForm';

export const SuscriptionScreen = () => {

    const { profile } = useSelector( state => state.profile );    

    const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

    if( !profile ){
        return <p>loading...</p>
    }

    return (
        <>
            <Header />
                <div className="payment_profile">
                    <div className="user_info">
                        <img src={ profile.user.img } alt="user" />
                        <div>
                            <p>{ profile.user.name }</p>
                            <span>@{ profile.user.userName }</span>
                            <p className="desc">{ profile.description }</p>
                        </div>
                    </div>
                    <div className="text">
                        Get access for exclusive content 
                        <span> Only for 5$</span>
                    </div>
                    
                </div>
                <div className="auth_container">

                <Elements stripe={stripePromise}>
                    <SuscriptionForm profile={ profile }/>
                </Elements>
                
            </div>
            <Footer />   
        </>
    )
}
