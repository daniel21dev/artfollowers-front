import React from 'react'
import { useDispatch } from 'react-redux';
import { uploadPhotoAction } from './../../actions/profileActions';

export const ProfilePhotos = ({profile, edit}) => {

    const dispatch = useDispatch();

    const handleUploadImage = e =>{
        const img =  e.target.files[0];

        if( !img.type.includes('image') ){
           // todo alert 
           console.log( img.type );
           return;
        }
        
        dispatch( uploadPhotoAction(img, e.target.name) );
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
