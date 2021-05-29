import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePostAction, likePostAction } from '../../actions/postsActions';
import swal from 'sweetalert2';

export const Post = ({post, userID, suscribed }) => {

    const dispatch = useDispatch();
    const {_id, desc, media, userID:user ,title, likes}= post;

    const handleLike = ()=>{ 
        if( !userID ){
            return swal.fire('Log in for like');
        }
        dispatch( likePostAction(_id, userID) );
    }

    const handleDelete = () =>{
        if( !userID ){
            return swal.fire('Log in');
        }
        swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            dispatch( deletePostAction(_id) );
            if (result.isConfirmed) {
              swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

    return (
        <div className="post">

            <div className="post_head">
                <div>
                    <div className="post_info">
                        <img src={user.img || 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'} alt="user profile"/>
                        <Link to={'/profile/'+user?._id} >{ user?.userName }</Link>
                    </div>
                    <div className="post_preview">
                        <h3>{ title }</h3>
                        <p>
                            {desc}
                        </p>
                    </div>
                </div>
                <button className="more btn">
                    <i class="fas fa-ellipsis-h"></i>
                    <div className="more_options">
                        <div>Share</div>
                        {
                            user._id === userID &&
                            <div onClick={ handleDelete }>Delete</div>
                        }
                    </div>
                </button>
            </div>

            <div className="post_media">
                {
                    (post.private && !suscribed) && (userID !== user._id)
                    ? <button> suscribe </button>
                    : <img src={media[0]} alt="post_img"/>
                }
            </div>
            <div className="post_interactions">
                <button className="btn" onClick={ handleLike }>
                    {
                        likes.includes( userID )
                        ?<i  className="fas fa-heart"></i>
                        :<i  className="far fa-heart"></i>
                    }
                    { likes.length } Likes
                </button>
                <button className="btn"><i className="far fa-comments"></i> Comments</button>
            </div>
        </div>
    )
}
