import { render, screen, fireEvent } from "@testing-library/react";
import { Addcategory } from "../../src/components/AddCategory";

describe('Pruebas en el componente <Addcategory/>', () => { 

  test('Debe cambiar el valor de la caja de texto', () => {

    render( <Addcategory onNewCAtegory = { () => {} } />);
    
    const input = screen.getByRole('textbox');
    fireEvent.input( input, { target: { value: 'Saitama' } } );

    expect( input.value ).toBe('Saitama');
    /* screen.debug(); */
  });

});