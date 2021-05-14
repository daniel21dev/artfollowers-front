import React from 'react'
import { useForm } from './../../hooks/useForm';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../actions/authActions';

export const SignIn = () => {

    const dispatch = useDispatch();

    const [values, handleChange] = useForm({
        name: '',
        email: '',
        password: '',
        userName: ''
    });

    const {name,userName,email,password} = values;

    const handleSubmit = (e) =>{
        e.preventDefault();
        if( email.trim() === '' || password.trim() === '' || name.trim() === '' || userName.trim() === ''){
            console.log('esta vacio');
        }else{
            dispatch( registerAction(name,userName,email,password) );
        }
    }

    return (
        <div className="auth_container">
            <form className="auth_form" onSubmit={ handleSubmit }>
            <h1>Sing In</h1>

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
