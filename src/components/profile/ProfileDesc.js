import React from 'react'

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
                    ?<> <textarea 
                        name="description"
                        value={ description }
                        onChange={ handleChange }
                        />
                        <label htmlFor="creator"> Creator </label>
                        <input type="checkbox" name="creator" id="creator" />
                        </>
                    :<p className="profile_desc">
                    { profile.description }
                    </p>
                }
                
                <p className="profile_followers" >
                    <p ><span>{ profile.following }</span>  following</p>
                    <p ><span>{ profile.followers }</span>  followers</p>
                </p>
        </div>
    )
}
