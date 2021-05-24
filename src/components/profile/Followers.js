import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getFollowersAction } from '../../actions/profileActions';

export const Followers = () => {

    const {id:followed} = useParams();
    const dispatch = useDispatch();
    const {followers} = useSelector( state => state.profile );

    useEffect(()=>{
        dispatch( getFollowersAction(followed) );
    },[followed, dispatch]);

    if( !followers ){
        return <p>loading... </p>
    }

    return(
        <div>
            <ul>
                {
                    followers.map( follower =>(
                        <li>{ follower.name }</li>
                    ))
                }
            </ul>
        </div>
    )
}
