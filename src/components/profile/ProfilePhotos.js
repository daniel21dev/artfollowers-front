import React from 'react'

export const ProfilePhotos = ({profile, edit}) => {
    return (
        <div>
            <div 
                className="profile_hero"
                style={ profile.img && {backgroundImage: `url(${profile.img})`}}
            ></div>
            <img 
                className="profile_photo" 
                src={ profile.user.img || 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'} 
                alt='profile'
            ></img>
        </div>
            
    )
}
