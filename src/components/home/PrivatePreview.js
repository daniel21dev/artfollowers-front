import React from 'react'
import { Link } from 'react-router-dom';

export const PrivatePreview = ({ userID }) => {

    return (
        <div className="private_preview">
            <Link 
                className="btn profile_btn"
                
                to={`/profile/${ userID }`}>Suscribe</Link>
        </div>
    )
}
