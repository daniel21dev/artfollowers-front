import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
//import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { Login } from '../auth/Login';
import { SignIn } from '../auth/SignIn';
import { Home } from './../home/Home';
import { Profile } from './../profile/Profile';
import { useSelector } from 'react-redux';


export const AppRouter = () => {

    const isAuthenticated = useSelector(state => state.auth.loggedIn );
    
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

                    <Route exact path='/' component={ Home } />
                    <Route path='/profile/:id' component={ Profile }/>
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    )
}
