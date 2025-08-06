import { GifItems } from "./GifItems.js";
import {useFetchGifs} from "../hooks/useFetchGifs.js"

interface GiftGridProps {
  category: string;
}

interface GifImage {
  id: string;
  title: string;
  url: string;
}

export const GiftGrid = ({ category }: GiftGridProps) => {

  const {images, isLoading} = useFetchGifs(category)
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2 >Cargando...</h2>
      }
      <div className="card-grid">
        {
            images.map((image: GifImage) =>(
                <GifItems key={image.id}
                {...image}
                />
            ))
        }
      </div>
    </>
  );
};
