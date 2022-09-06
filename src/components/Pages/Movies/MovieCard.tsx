import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Movie } from "../../../interfaces";
import { useToggleFavouriteMutation } from "../../../store/apis/favourite.api";

interface MovieCardType {
  movie: Movie;
  isFav?: boolean;
  // eslint-disable-next-line no-unused-vars
}

export const MovieCard = ({ movie, isFav }: MovieCardType) => {
  const [fav, setFav] = useState<Boolean>(false);

  useEffect(() => {
    if (isFav !== undefined) {
      setFav(isFav);
    }
  }, [isFav]);

  const [toggleFavourite] = useToggleFavouriteMutation();
  const onClickFavourite = () => {
    setFav(!fav);
    toggleFavourite(movie._id);
  };

  return (
    <div className=" " key={movie._id}>
      <div className="flex items-center justify-between p-2">
        <p className="font-bold text-sm text-gray-300">
          {movie.name.substring(0, 20)}
          {movie.name.length > 20 && "..."}
        </p>
        {fav ? (
          <AiFillHeart className="cursor-pointer" color="red" onClick={onClickFavourite} />
        ) : (
          <AiOutlineHeart className="cursor-pointer" color="red" onClick={onClickFavourite} />
        )}
      </div>
      <img
        src={
          movie.cover ||
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-02263a86992462aa82d8f29846fb1760_screen.jpg?ts=1637037361"
        }
        alt="movie"
        onError={(e: any) =>
          (e.target.src =
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-02263a86992462aa82d8f29846fb1760_screen.jpg?ts=1637037361")
        }
        className="w-full"
      />
    </div>
  );
};
