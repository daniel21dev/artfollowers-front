import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../actions/authActions';


export const Header = () => {

    const {user} = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const handleLogout = ()=>{
        dispatch( logoutAction());
    }

    return (
        <header className="header">
            <Link to='/' className="brand"> <strong>Art</strong>Followers </Link>
            <div className="search">
                <input className="search-bar" type="text" placeholder="Buscar"/>
                <button type="submit" className="btn"> <i className="far fa-search"></i> </button>
            </div>

            <div className="header-profile">

                {
                    user
                    ?
                        <>
                            <Link to={`/profile/${user.id}`}>{ user.name }</Link>
                            <img className="user-photo" src={user.img} alt="user"/>
                            <button className="btn" onClick={ handleLogout }>Salir</button>
                        </>
                    :
                        <>
                            <Link to='/login' className="btn">Log In</Link>
                            {/* <img className="user-photo" src={user.img} alt="user"/> */}
                        </>
                }
                <>
                
                </>
            </div>
            
        </header>
    )
}
