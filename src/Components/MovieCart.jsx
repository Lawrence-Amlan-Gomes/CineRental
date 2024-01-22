import { useState } from "react";
import { getImgUrl } from "../cine-utility.js";
import Rating from "./Rating.jsx";
import MovieModal from "./MovieModal.jsx";
import { useContext } from "react";
import { MovieContext } from "../Context.jsx/index.js";

export default function MovieCart({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const {cartData, setCartData} = useContext(MovieContext);

  const handleColseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  const handelMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleAddToCart = (movie,e)=>{
    e.stopPropagation();
    
    const found = cartData.find(m => {
      return m.id === movie.id
    })
    if(!found){
      setCartData([...cartData, movie])
    }else{
      console.log(`The movie ${movie.tile} has been added already`)
    }
  }

  return (
    <>
      {showModal && (
        <MovieModal movie={selectedMovie} onClose={handleColseModal} onAddCart={handleAddToCart}/>
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a onClick={() => handelMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
        
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1 text-black dark:text-white">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating num={movie.rating} />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#" onClick={(e)=>handleAddToCart(movie,e)}
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
        </a>
      </figure>
    </>
  );
}
