import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en el componente <GifItem/>', () => { 

  const title = 'One piece';
  const url = 'http://localhost:3000/one-piece.gif';

  test('Debe mostrar el componente correctamente', () => {
    const { container } = render(<GifItem title={ title } url={ url } />)

    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar la imagen con el URL y el ALT indicado', () => { 
    render(<GifItem title={ title } url={ url } />)

    /* const img = container.querySelector('img');
    expect(img.src).toBe(url);
    expect(img.alt).toBe(title); */
    const {src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
   })

   test('debe mostrar el titulo en el componente', () => { 

    render(<GifItem title={ title } url={ url } />)

    expect(screen.getByText( title )).toBeTruthy();
    
  }); 

});