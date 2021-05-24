import React,{ useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchPostsAction } from '../../actions/postsActions';

export const Search = () => {

    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleClick = () =>{
        if( query.trim() === ''){
            return;
        }
        
        dispatch( searchPostsAction( query ) ); 
    } 
    
    return (
        <div className="search">
            <input 
                className="search-bar" 
                placeholder="Buscar"
                type="text"
                value={ query }
                onChange={ (e)=> setQuery( e.target.value ) } 
            />
            <button 
                className="btn"
                onClick={ handleClick }
            > 
                <i className="fas fa-search"></i> 
            </button>
        </div>
    )
}
