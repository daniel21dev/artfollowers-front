import React from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux';
import { followAction } from './../../actions/profileActions';
import { Link } from 'react-router-dom';

export const ProfileButtons = ({profile,handleEdit,user,edit,setEdit}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleFollow = ()=>{
        if( !user ){
            return history.push('/login');
        }

        dispatch( followAction( profile.user._id, user._id ) );
    }

    return (
        <div className="profile_btns">
            {
                user && (profile.user._id === user._id)
                ?   <>
                        <button className="btn profile_btn"
                            onClick={ handleEdit }
                        >
                            { edit ? 'Save' : 'Edit' }
                            <i className="fas fa-pen"></i>
                        </button>
                        {
                            edit && <button 
                                className="btn profile_btn text-red" 
                                onClick={()=>setEdit(false)}
                            >Cancel</button>
                        }
                    </>
                : <>
                    <Link 
                        to={ !profile.suscribed && `/suscribe/${ profile.user._id }`}
                        className="btn profile_btn"
                        disabled={ profile.suscribed }
                        >
                        { profile.suscribed ? 'Suscribed'
                        : 'Subscribe for 5$'}
                    </Link>
                    <button className="btn profile_btn"
                        onClick={ handleFollow }
                    >
                        { profile.imfollowing ? 'Unfollow': 'Follow'}
                    </button>
                </>
            }
        </div>
    )
}
