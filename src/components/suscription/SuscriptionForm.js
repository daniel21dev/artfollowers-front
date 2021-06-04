import React, { useState } from 'react'
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axiosClient from './../../config/axios';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux';


export const SuscriptionForm = ({ profile }) => {

    const [values, setValues] = useState({
        number: '',
        expiration: '',
        cvc: ''
    });

    const history = useHistory();
    const {token } = useSelector( state => state.auth );
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
        
        //history.goBack();
    }

    const handleChange = e =>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit2 = async (event) => {
        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
    
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);
    
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement
        });
    
        if (error) {
          Swal.fire('[error]', error);
          console.log( error );
        } else {
          console.log('[PaymentMethod]', paymentMethod);
          const {data} = await axiosClient.post('/suscriptions/'+profile.user._id,{
            headers:{
                'x-token': token
            }
        });
        console.log( data );
        Swal.fire('Listo');
        history.goBack();
        }
      };

    const elements = useElements();
    const stripe = useStripe();

    return (
        <form className="auth_form m-auto" onSubmit={ handleSubmit2 }>
                    <h1>payment</h1>
                    <p>pay 5$ for </p>

                    < CardElement />

                    {/*
                    <label htmlFor="number">card number:
                    <CardNumberElement
                        className={`form_control`}
                        type="number" 
                        placeholder="Card number"
                        name="number"
                        value={ number } 
                        onChange={ handleChange }   
                    />
                    </label>
                    
                    <label htmlFor="expiration">expiration:
                    <CardExpiryElement
                        className={`form_control`}
                        style={{ width: '48%'}}
                        type="text" 
                        placeholder="Expiration" 
                        name="expiration"
                        value={ expiration } 
                        onChange={ handleChange }
                    />
                    </label>
                    
                    <label htmlFor="expiration">cvc:
                    <CardCvcElement
                        className={`form_control`}
                        type="cvc" 
                        placeholder="Card cvc"
                        name="cvc"
                        value={ cvc } 
                        onChange={ handleChange }   
                    />
                    </label>*/}
                    <button
                        className="btn btn_form"
                        type="submit"
                        disabled={ !stripe }
                    >Pay</button>

                    <Link to='/home'> Return </Link>
                </form>
    )
}
