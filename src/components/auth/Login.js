import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAction } from './../../actions/authActions';
import { useForm } from './../../hooks/useForm';

export const Login = ({history}) => {

    const dispatch = useDispatch();
    //const {user} = useSelector( state => state.auth);

    const [formValues, handleChange] = useForm({
        email: 'daniel21@mail.com',
        password: '123456'
    });

    const {email,password} = formValues;

    const handleSubmit = (e) =>{
        e.preventDefault();
        if( email.trim() === '' || password.trim() === ''){
            console.log('esta vacio');
        }else{
            dispatch( loginAction(email,password, history) );
        }
    }

    return (
        <div className="auth_container">
            <form className="auth_form" onSubmit={ handleSubmit }>
            <h1>Log in</h1>

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
            >Log In</button>

            <Link to='/signin'>Don't have an account? <strong>Sign In</strong> </Link>
        </form>
        </div>
    )
}
