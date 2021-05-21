import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { likePostAction } from '../../actions/postsActions';

export const Post = ({post, userID}) => {

    const dispatch = useDispatch();
    const {_id, desc, media, userID:user ,title, likes}= post;

    const handleLike = ()=>{ 
        if( userID ){
            dispatch( likePostAction(_id, userID) );
        }
    }

    return (
        <div className="post">
            <div className="post_info">
                <img src={ user?.img } alt="user profile"/>
                <Link to={'/profile/'+user?._id} >{ user?.userName }</Link>
            </div>
            <div className="post_preview">
                <h3>{ title }</h3>
                <p>
                    {desc}
                </p>
            </div>
            <div className="post_media">
                <img src={media[0]} alt="post_img"/>
            </div>
            <div className="post_interactions">
                <p onClick={ handleLike }>
                    {
                        likes.includes( userID )
                        ?<i  className="fas fa-heart"></i>
                        :<i  className="far fa-heart"></i>
                    }
                    { likes.length } Likes
                </p>
                <p><i className="far fa-comments"></i> Comments</p>
            </div>
        </div>
    )
}
