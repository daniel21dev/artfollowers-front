import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { likePostAction } from '../../actions/postsActions';

export const Post = ({id,desc,media,user,title, likes}) => {

    const dispatch = useDispatch();

    const handleLike = ()=> dispatch( likePostAction(id) ); 

    return (
        <div className="post">
            <div className="post_info">
                <img src={ user.img } alt="user profile"/>
                <Link to={'/profile/'+user.uid} >{ user.userName }</Link>
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
                    <i  className="fas fa-heart"></i>{ likes } Likes
                </p>
                <p><i className="far fa-comments"></i> Comments</p>
            </div>
        </div>
    )
}
