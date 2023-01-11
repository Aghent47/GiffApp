import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en el componente <GifGrid/>', () => { 
  
  test('debe mostrar el loadinf inicialmente', () => { 

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    const category = 'One Punch';
    render( <GifGrid category = { category } /> );
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
   });

   test('debe mostrar los Item cuando se cargan las imagenes useFechGifs ', () => { 
    const category = 'One Punch';
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/cualquier/SaitamaSensei.jpg',
      title: 'Saitama'
    },{
      id: 'AB22',
      url: 'https://localhost/cualquier/goku.jpg',
      title: 'goku'
    }
  ]
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render( <GifGrid category = { category } /> );
    /* screen.debug(); */

    expect(screen.getAllByRole('img').length).toBe(gifs.length);


  });
});