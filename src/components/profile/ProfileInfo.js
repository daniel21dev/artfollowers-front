import React from 'react'
import { useForm } from './../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { ProfileButtons } from './ProfileButtons';
import { updateProfileAction } from '../../actions/profileActions';
import { ProfileDesc } from './ProfileDesc';

export const ProfileInfo = ({profile,user,edit,setEdit}) => {

    const dispatch = useDispatch();
    const [{description}, handleChange] = useForm({ description: profile?.description || ''});

    const handleEdit = () =>{
        if( !edit ){
            return setEdit( true );
        }

        description.trim();

        if( description === ''){
            // TODO handle error
            return;
        }
        dispatch( updateProfileAction( user.id, description) );
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
