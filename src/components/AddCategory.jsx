import { useState } from "react";
import PropType from 'prop-types';
export const Addcategory = ({ onNewCAtegory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ( event ) => {
    /* console.log(event.target.value); */
    setInputValue( event.target.value );
  };

  const onSubmit = ( event ) => {
    event.preventDefault();

    if( inputValue.trim().length <= 1 )return;
    
    onNewCAtegory( inputValue.trim() );
    setInputValue('');
    
  }

  return (
     <form onSubmit={ onSubmit } aria-label="form" >
      <input type="text" placeholder="Buscar Gif" value={ inputValue } onChange={ onInputChange } />
     </form>
  );
}

Addcategory.PropTypes = {
  onNewCAtegory: PropType.func.isRequired,
}