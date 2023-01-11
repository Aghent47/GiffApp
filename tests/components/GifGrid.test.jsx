import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('pruebas en el componente <GifGrid/>', () => { 
  
  test('debe mostrar el loadinf inicialmente', () => { 

    const category = 'One Punch';
    render( <GifGrid category = { category } /> );
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
   });

   test('debe mostrar los Item cuando se cargan las imagenes useFechGifs ', () => { 
    
  });
});