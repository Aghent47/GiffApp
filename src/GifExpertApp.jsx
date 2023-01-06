
import React from 'react'
import { useState } from 'react';
export const GifExpertApp = () => {

    /* Hooks */
    const [ categories, setCategories ] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    console.log(categories);
  return (
    <>
        {/* Title */}
        <h1>GifExpertApp</h1>
    
        {/* Input */}

        {/* Gif List */}
        <ol>
            { categories.map( category => {
                return <li key={category}>{category}</li>
            })}
            {/* <li> </li> */}

        </ol>

            {/* Gif Item */}
    </>
  )
}
