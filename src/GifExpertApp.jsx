import { useState } from 'react';
import { Addcategory as AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    /* Hooks */
    const [ categories, setCategories ] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) => {
        if(categories.includes(newCategory))return;
        /* console.log(newCategory); */
        setCategories([newCategory, ...categories]);
    };

  return (
    <>
        {/* Title */}
        <h1>GifExpertApp</h1>
    
        {/* Input */}
        <AddCategory 

            onNewCAtegory={ (value) => onAddCategory (value) }
        
        /* setCategories={ setCategories } */ />

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
