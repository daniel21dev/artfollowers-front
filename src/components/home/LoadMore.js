import React from 'react'
import { useDispatch } from 'react-redux';

export const LoadMore = () => {

    const dispatch = useDispatch();
    
    const handleClick = ()=>{
        
    }
    return (
        <div className="load_more"
            onClick={ handleClick }
        >
            <i class="fas fa-chevron-circle-down"></i>
        </div>
    )
}
