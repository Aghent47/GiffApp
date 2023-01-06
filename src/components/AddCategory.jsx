import { useState } from "react"

export const Addcategory = () => {

  const [inputValue, setInputValue] = useState('One Punch');

  const onInputChange = ( target ) => {
    setInputValue( target.value );
  };

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log('Submit hecho');
  }

  return (
     <form onSubmit={ onSubmit }>
      <input type="text" placeholder="Buscar Gif" value={ inputValue } onChange={ onInputChange } />
     </form>
  );
}
