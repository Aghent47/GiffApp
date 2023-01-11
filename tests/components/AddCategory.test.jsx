import { render, screen, fireEvent } from "@testing-library/react";
import { Addcategory } from "../../src/components/AddCategory";

describe('Pruebas en el componente <Addcategory/>', () => { 

  test('Debe cambiar el valor de la caja de texto', () => {
    const onNewCategory = jest.fn(); 
    render( <Addcategory onNewCategory = { onNewCategory} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.input( input, { target: { value: 'Saitama' } } );

    expect( input.value ).toBe('Saitama');
    
  });

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {
    
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn(); 
   // TODO:???

    render( <Addcategory onNewCategory = { onNewCategory } />);

    //tomando refencia a input y form
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    //cambiando el valor de la caja de texto
    fireEvent.input( input, { target: { value: inputValue} } );
    fireEvent.submit( form );
    /* screen.debug(); */

    expect(input.value).toBe('');

    expect( onNewCategory ).toHaveBeenCalled(); //verifica que la funcion haya sido llamada
    expect( onNewCategory ).toHaveBeenCalledTimes(1); //verifica que la funcion haya sido llamada una vez
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); //verifica que la funcion haya sido llamada con el argumento inputValue
  });

  test('No debe llamar el onNewCategory si el input esta vacio ', () => { 
    const onNewCategory = jest.fn(); 
    render( <Addcategory onNewCategory = { onNewCategory } />);
    const form = screen.getByRole('form');
    fireEvent.submit( form );
    expect( onNewCategory ).not.toHaveBeenCalled();
   });
});