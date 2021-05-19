import React, { useState } from 'react'
import { useForm } from './../../hooks/useForm';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../../actions/authActions';
import { Msg } from '../../hooks/Msg';

export const SignIn = () => {

    const dispatch = useDispatch();
    const { error } = useSelector( state => state.auth );
    const [fieldsError, setFieldsError] = useState({
        error: false,
        msg: ''
    });

    const [values, handleChange] = useForm({
        name: 'adolf',
        email: 'adolf@mail.com',
        password: '123456',
        userName: 'adolf'
    });

    const {name,userName,email,password} = values;

    const handleSubmit = (e) =>{
        e.preventDefault();
        if( email.trim() === '' || !email.includes('@') ){
            setFieldsError({ error: true, msg: 'The email is not valid'});
        }else if(password.trim() === '' || password.length <6 ){
            setFieldsError({ error: true, msg: 'The password is not valid (password must have at least 6 characters)'});
        }else if(name.trim() === ''){
            setFieldsError({ error: true, msg: 'The name is necessary'});
        }else if(userName.trim() === ''){
            setFieldsError({ error: true, msg: 'The userName is necessary'});
        }else{
            setFieldsError({ error: false, msg: ''});
            dispatch( registerAction(name,userName,email,password) );
        }
    }

    return (
        <div className="auth_container">
            <form className="auth_form" onSubmit={ handleSubmit }>
            <h1>Sing In</h1>
            { fieldsError.error && <Msg msg={ fieldsError.msg }  type={'error'} />}
            { error && <Msg msg={ error }  type={'error'} /> }
            <input 
                className="form_control"
                type="name" 
                placeholder="Your name"
                name="name"
                value={ name } 
                onChange={ handleChange }
            />
            <input 
                className="form_control"
                type="userName" 
                placeholder="Your user name (must be unique)"
                name="userName"
                value={ userName } 
                onChange={ handleChange }
            />
            <input 
                className="form_control"
                type="email" 
                placeholder="Email"
                name="email"
                value={ email } 
                onChange={ handleChange }
            />
            <input 
                className="form_control"
                type="password" 
                placeholder="Password" 
                name="password"
                value={ password } 
                onChange={ handleChange }
            />
            
            <button
                className="btn btn_form"
                type="submit"
            >Sign In</button>

            <Link to='/login'>Alreasy have an account? <strong>Log In</strong> </Link>
        </form>
        </div>
    )
}
