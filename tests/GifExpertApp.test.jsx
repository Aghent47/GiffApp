import { fireEvent, render, screen  } from "@testing-library/react";
import { Addcategory } from "../src/components/AddCategory";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en el componente <GifExpertApp/>', () => { 
    const inputValue = 'Drago ball Gt';
    test('Debe de mostrarse correctamente al escribir en el input', () => {

        render(<GifExpertApp/>);
        expect(screen.getByText('One Punch')).toBeTruthy();
        //seleccionando la caja de texto y agregando el nuevo valor a de gif a buscar
        fireEvent.input( screen.getByRole('textbox'), { target: { value: inputValue } } );

    });

});