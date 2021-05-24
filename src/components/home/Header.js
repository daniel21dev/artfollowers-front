import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../actions/authActions';
import { Search } from './Search';

export const Header = () => {

    const {user} = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const handleLogout = ()=>{
        dispatch( logoutAction());
    }

    return (
        <header className="header">
            <Link to='/' className="brand"> <strong>Art</strong>Followers </Link>
            <Search />

            <div className="header-profile">

                {
                    user
                    ?
                        <>
                            <Link to={`/profile/${user._id }`}>{ user.name }</Link>
                            <img className="user-photo" src={user.img || 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'} alt="user"/>
                            <button className="btn" onClick={ handleLogout }>Salir</button>
                        </>
                    :
                        <>
                            <Link to='/login' className="btn">Log In</Link>
                        </>
                }
                <>
                
                </>
            </div>
            
        </header>
    )
}
