import React from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux';
import { followAction } from './../../actions/profileActions';

export const ProfileButtons = ({profile,handleEdit,user,edit,setEdit}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleFollow = ()=>{
        if( !user ){
            return history.push('/login');
        }

        dispatch( followAction( profile.user.uid ) );
    }

    return (
        <div className="profile_btns">
            {
                user && (profile.user.uid === user.id)
                ?   <>
                        <button className="btn profile_btn"
                        onClick={ handleEdit }
                        >
                            { edit ? 'Save' : 'Edit' }
                            <i className="fas fa-pen"></i>
                        </button>
                        {edit && <button 
                            className="btn profile_btn text-red" 
                            onClick={()=>setEdit(false)}
                            >Cancel</button>}
                    </>
                : <>
                    <button className="btn profile_btn">
                        Subscribe for 1$
                    </button>
                    <button className="btn profile_btn"
                        onClick={ handleFollow }
                    >
                        { profile.following ? 'Unfollow': 'Follow'}
                    </button>
                </>
            }
        </div>
    )
}
