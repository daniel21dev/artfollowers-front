import React, { useState } from 'react'
import '../../scss/auth/_css-form.scss';
import { Login } from './Login';
import { SignIn } from './SignIn';

export const Login2 = () => {

    const [overlay, setOverlay] = useState(true);

    return (
        <div className={`${ overlay && 'right-panel-active'} auth-container`} >
            
            <div className="form-container sign-up-container">
                <SignIn />
            </div>
            <div className="form-container sign-in-container">
                <Login />
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn"
                            onClick={ ()=> setOverlay(false) }
                        >Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signUp"
                            onClick={ ()=> setOverlay(true) }
                        >Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
