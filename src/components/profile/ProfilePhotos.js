import React from 'react'
import swal from 'sweetalert2';

export const ProfilePhotos = ({profile, edit, setPhotos}) => {

    const handleUploadImage = e =>{
        const img =  e.target.files[0];

        if( !img.type.includes('image') ){
           return swal.fire('Must be a file type image')
        }

        setPhotos( photos => ({...photos, [e.target.name]: img}));
    }

    return (
        <div>
            <div className="post_media">
                <div 
                    className="profile_hero"
                    style={ profile.img && {backgroundImage: `url(${profile.img})`}}
                >   
                </div>
                {
                    edit && <input 
                        className="edit_profile_photo" 
                        type="file" 
                        name="banner" 
                        id="banner"
                        onChange={ handleUploadImage }
                    />
                }
                
            </div>
            <div className="post_media">
                <img 
                    className={`profile_photo`} 
                    src={ profile.user.img || 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'} 
                    alt='profile'
                />
                {
                    edit && <input 
                        className="edit_user_photo" 
                        type="file" 
                        name="user" 
                        id="user"
                        onChange={ handleUploadImage }
                    />
                }
            </div>
        </div>
            
    )
}
