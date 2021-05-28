import React, { useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { Login } from '../auth/Login';
import { SignIn } from '../auth/SignIn';
import { Home } from './../home/Home';
import { Profile } from './../profile/Profile';
import { useSelector } from 'react-redux';
import { SuscriptionScreen } from '../suscription/SuscriptionScreen';


export const AppRouter = () => {

    let isAuthenticated = useSelector(state => state.auth.loggedIn );
    
    useEffect(()=>{
        console.log( isAuthenticated );
    },[ isAuthenticated ]);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path='/login' 
                        component={ Login }
                        isAuthenticated={ isAuthenticated }
                    />
                    <PublicRoute path='/signin' 
                        component={ SignIn }
                        isAuthenticated={ isAuthenticated }    
                    />
                    <PrivateRoute path ='/suscribe/:id' 
                        component={ SuscriptionScreen }
                        isAuthenticated={ isAuthenticated }
                    />

                    <Route exact path='/' component={ Home } />
                    <Route path='/profile/:id' component={ Profile }/>
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    )
}
