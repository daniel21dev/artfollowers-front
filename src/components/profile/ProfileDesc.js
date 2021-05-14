import React from 'react'
import { Link } from 'react-router-dom';

export const ProfileDesc = ({profile,edit,description,handleChange}) => {
    return (
        <div className="profile_info">
                <h3 className="user_name">
                    { profile.user.name }
                    <br />
                    <span>@{ profile.user.userName }</span>
                </h3>

                {
                    edit
                    ? <textarea 
                        name="description"
                        value={ description }
                        onChange={ handleChange }
                        />
                    :<p className="profile_desc">
                    { profile.description }
                    </p>
                }
                
                <p className="profile_followers" >
                    <Link to='/'><span>{ profile.following }</span>  following</Link>
                    <Link to='/' ><span>{ profile.followers }</span>  followers</Link>
                </p>
        </div>
    )
}
