import { useState } from "react";
import PropType from 'prop-types';
export const Addcategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ( event ) => {
    /* console.log(event.target.value); */
    setInputValue( event.target.value );
  };

  const onSubmit = ( event ) => {
    event.preventDefault();

    if( inputValue.trim().length <= 1 )return;
    
    onNewCategory( inputValue.trim() );
    setInputValue('');
    
  }

  return (
     <form onSubmit={ onSubmit } aria-label="form" >
      <input type="text" placeholder="Buscar Gif" value={ inputValue } onChange={ onInputChange } />
     </form>
  );
}

Addcategory.PropType = {
  onNewCategory: PropType.func.isRequired,
}