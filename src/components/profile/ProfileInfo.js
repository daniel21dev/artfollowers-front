import React from 'react'
import { useForm } from './../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { ProfileButtons } from './ProfileButtons';
import { updateProfileAction, uploadPhotoAction } from '../../actions/profileActions';
import { ProfileDesc } from './ProfileDesc';

export const ProfileInfo = ({profile,user,edit,setEdit, photos}) => {

    const initialFormValues = {
        description: profile.description || ''
    }

    const dispatch = useDispatch();
    const [{description}, handleChange] = useForm( initialFormValues );

    if( !profile ){
        return <p>...loading</p>
    }

    const handleEdit = () =>{
        if( !edit ){
            return setEdit( true );
        }

        if( description !== profile.description ){
            description.trim();
            dispatch( updateProfileAction( user._id, description) );
        }

        if( photos.banner ){
            dispatch( uploadPhotoAction( photos.banner, 'banner') );
        }

        if( photos.user ){
            dispatch( uploadPhotoAction( photos.user, 'user') );
        }

        setEdit(false);
    }

    return (
        <>
            <ProfileButtons 
                profile={ profile } 
                user={ user } 
                edit={ edit }
                setEdit={ setEdit }
                handleEdit={ handleEdit }
                description={ description }
            />

            <ProfileDesc 
                profile={ profile }
                edit={ edit }
                handleChange={ handleChange }
                description={ description }
            />
        </>
    )
}
