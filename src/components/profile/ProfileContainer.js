import React,{ useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProfileAction } from '../../actions/profileActions';
import { getPostsAction } from './../../actions/postsActions';
import { ProfilePhotos } from './ProfilePhotos';
import { ProfileInfo } from './ProfileInfo';
import { resetProfileAction } from './../../actions/profileActions';

export const ProfileContainer = ({id}) => {

    const {profile} = useSelector( state => state.profile );
    const {user} = useSelector( state => state.auth );
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch( resetProfileAction() );
        dispatch( getPostsAction() );
        dispatch( getProfileAction(id, user?._id) );
    },[id, dispatch]);

    if( profile?.loading || !profile?.user ){
        return (
            <div className="sipinner_container">
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }

    return (
        <div className="profile_container">
            <ProfilePhotos 
                profile={ profile } 
                edit={ edit }
                />
            <ProfileInfo 
                profile={ profile }
                user={ user }
                edit={ edit } 
                setEdit={setEdit}
                />
        </div>
    )
}
