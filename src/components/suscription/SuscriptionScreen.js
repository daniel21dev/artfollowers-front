import React, { useState } from 'react'
import { Footer } from '../home/Footer'
import { Header } from '../home/Header'
import { Link, useHistory, useParams } from 'react-router-dom';
import axiosClient from './../../config/axios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'

export const SuscriptionScreen = () => {

    const [values, setValues] = useState({
        number: '',
        expiration: '',
        cvc: ''
    });

    const history = useHistory();
    const {token } = useSelector( state => state.auth );
    const { profile } = useSelector( state => state.profile );

    const {number, expiration, cvc } = values;

    const handleSubmit= async(e) =>{
        e.preventDefault();
        
        try {
            const {data} = await axiosClient.post('/suscriptions/'+profile.user._id,{
                headers:{
                    'x-token': token
                }
            });
            console.log( data );
            Swal.fire('Listo');
        } catch (error) {
            Swal.fire('something went wrong');
            return console.log( error.response.data );   
        }
        
        history.goBack();
    }

    const handleChange = e =>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
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
                <form className="auth_form" onSubmit={ handleSubmit }>
                <h1>payment</h1>
                <p>pay 10$ for </p>

                <input  
                    className={`form_control`}
                    type="number" 
                    placeholder="Card number"
                    name="number"
                    value={ number } 
                    onChange={ handleChange }   
                />
                <input 
                    className={`form_control`}
                    type="text" 
                    placeholder="Expiration" 
                    name="expiration"
                    value={ expiration } 
                    onChange={ handleChange }
                />

                <input  
                    className={`form_control`}
                    type="cvc" 
                    placeholder="Card cvc"
                    name="cvc"
                    value={ cvc } 
                    onChange={ handleChange }   
                />
                <button
                    className="btn btn_form"
                    type="submit"
                >Pay</button>

                <Link to='/home'> Return </Link>
            </form>
            </div>
            <Footer />   
        </>
    )
}
