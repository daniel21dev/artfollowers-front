import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getPostsAction } from '../../actions/postsActions';

export const CategoriesPanel = () => {

    const {categories} = useSelector( state => state.posts);
    const dispatch = useDispatch();

    const handleClick = category =>{
        dispatch( getPostsAction( '', category) );
    }

    return (
        <div className="categories_panel">
            <ul className="categories_list">
                {
                    categories.map( category =>(
                        <li className="categorie"
                            key={ category._id }
                            onClick={ ()=> handleClick( category._id ) }
                        >{ category.name }</li>
                    ))
                }
            </ul>
        </div>
    )
}
