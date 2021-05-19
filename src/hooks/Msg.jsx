import React from 'react';

export const Msg = ({ msg, type}) => {

    const types ={
        'error': 'error bg-red text-back'
    };
    
    return (
        <p className={`msg ${ types[type] }`}>{ msg }</p>
    )
}

