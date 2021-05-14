import React from 'react'

export const ProfileButtons = ({profile,handleEdit,user,edit,setEdit}) => {

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
                    <button className="btn profile_btn">
                        Follow
                    </button>
                </>
            }
        </div>
    )
}
