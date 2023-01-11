import { render, screen, fireEvent } from "@testing-library/react";
import { Addcategory } from "../../src/components/AddCategory";

describe('Pruebas en el componente <Addcategory/>', () => { 

  test('Debe cambiar el valor de la caja de texto', () => {

    render( <Addcategory onNewCAtegory = { () => {} } />);
    
    const input = screen.getByRole('textbox');
    fireEvent.input( input, { target: { value: 'Saitama' } } );

    expect( input.value ).toBe('Saitama');
    
  });

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {
    
    const inputValue = 'Saitama';
   // TODO:???

    render( <Addcategory onNewCAtegory = { () => {} } />);

    //tomando refencia a input y form
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    //cambiando el valor de la caja de texto
    fireEvent.input( input, { target: { value: inputValue} } );
    fireEvent.submit( form );
    /* screen.debug(); */

    expect(input.value).toBe('');
  });

});