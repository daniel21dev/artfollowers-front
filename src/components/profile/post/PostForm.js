import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { savePostAction } from '../../../actions/postsActions';

export const PostForm = () => {

    const {categories, loading} = useSelector( state => state.posts);
    const { token } = useSelector( state => state.auth );
    const dispatch     = useDispatch();

    const [values, setValues] = useState({
        title: '',
        desc: '',
        category: categories[0]?._id,
        media: null,
        priv: false
    })

    const {title,desc,category,priv} = values;

    const handleInput = ({target}) =>{

        if( target.name === 'priv'){
            return setValues({...values, priv: target.checked});
        }
        if( target.name === 'category'){
            return setValues({...values, category: target.value });
        }
        if( target.name === 'media' ){
            if( !target.files[0].type.includes('image') || !target.files){
                console.log( target.files );
                return;
            }

            return setValues({...values, media: target.files[0] });
        }
        
        setValues({...values, [target.name]: target.value });
    }

    const hanldeSubmit = e =>{
        e.preventDefault();
        if( title.trim() === '' ){
            return;
        }
        if( desc.trim() === ''){
            return;
        }
        dispatch( savePostAction( {...values}, token ) );
    }

    return (
        <div className="post_form_container">
            {
                loading ? <p>uploading...</p>
                :
                <form>
                    <h3>Create a new post</h3>
                    <input 
                        type="text" 
                        className="from_control"
                        name="title" 
                        id="title" 
                        placeholder="Title"
                        value={ title }
                        onChange={ handleInput }
                    />
                    <textarea 
                        name="desc" 
                        id="desc"
                        placeholder="Description"
                        value={ desc }
                        onChange={ handleInput }
                    ></textarea>

                    <div>
                        <label htmlFor="media">Image: </label>
                        <input 
                            name="media" 
                            type="file" 
                            placeholder="imagen"
                            onChange={ handleInput }
                        />
                    </div>

                    <div className="post_form_options">
                        <div>
                            <label htmlFor="category">Category: 
                                <select 
                                    name="category" 
                                    id="category"
                                    value={ category }
                                    onChange={ handleInput }
                                >
                                    {
                                        categories.map( category =>(
                                            <option 
                                                key={ category._id }
                                                value={ category._id }
                                            >{ category.name }</option>
                                        ))
                                    }
                                    
                                </select>
                            </label>
                            <label htmlFor="private">Private:
                                <label className="switch">
                                    <input 
                                        type="checkbox"
                                        name="priv"
                                        value={ priv }
                                        onClick={ handleInput }
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </label>
                        </div>
                        <button 
                            className="btn bg-primary"
                            onClick={ hanldeSubmit }
                        >Post</button>
                    </div>
                </form>
            }
        </div>
    )
}
