import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const { images,  isLoading } = useFetchGifs( category );
  
  return (
   <>
    <h3>{category}</h3>
    <div className="card-grid " >
      { 
        images.map( (image) => (
         <GifItem 
         key={ image.id  }
         { ...image } // expacir todas las propiedades que vengas de (image)
         /> 
        ))
      }
    </div>
   </>
  )
}
