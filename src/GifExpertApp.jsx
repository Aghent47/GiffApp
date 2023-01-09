import { useState } from 'react';
import { Addcategory as AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    /* Hooks */
    const [ categories, setCategories ] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        if(categories.includes(newCategory))return;
        /* console.log(newCategory); */
        setCategories([newCategory, ...categories]);
    };

  return (
    <>
        {/* Title */}
        <h1>GifExpertApp</h1>
    
        {/* Input add Category */}
        <AddCategory 
            onNewCAtegory={ (value) => onAddCategory (value) }
        />

        {/* Gif List */}
            { categories.map( category => (
                <GifGrid key={category} category={ category } /> )
            )}

            {/* Gif Item */}
    </>
  )
}
