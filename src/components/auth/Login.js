import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAction } from './../../actions/authActions';
import { useForm } from './../../hooks/useForm';
import { Msg } from '../../hooks/Msg';

export const Login = ({history}) => {

    const dispatch = useDispatch();
    const { error } = useSelector( state => state.auth );

    const [fieldsError, setFieldsError] = useState({
        error: false,
        msg: ''
    });

    const [formValues, handleChange] = useForm({
        email: 'daniel21@mail.com',
        password: '123456'
    });

    const {email,password} = formValues;

    const handleSubmit = (e) =>{
        e.preventDefault();
        if( email.trim() === '' || !email.includes('@') ){
            setFieldsError({ error: true, msg: 'The email is not valid'});
        }else if(password.trim() === '' || password.length <6 ){
            setFieldsError({ error: true, msg: 'The password is not valid'});
        }else{
            setFieldsError({ error: false, msg: ''});
            dispatch( loginAction(email,password, history) );
        }
    }

    return (
        <div className="auth_container">
            <form className="auth_form" onSubmit={ handleSubmit }>
            <h1>Log in</h1>
            { fieldsError.error && <Msg msg={ fieldsError.msg }  type={'error'} />}
            { error && <Msg msg={ error }  type={'error'} /> }
            <input  
                className={`form_control`}
                type="email" 
                placeholder="Email"
                name="email"
                value={ email } 
                onChange={ handleChange }
            />
            <input 
                className={`form_control`}
                type="password" 
                placeholder="Password" 
                name="password"
                value={ password } 
                onChange={ handleChange }
            />
            
            <button
                className="btn btn_form"
                type="submit"
            >Log In</button>

            <Link to='/signin'>Don't have an account? <strong>Sign In</strong> </Link>
        </form>
        </div>
    )
}
