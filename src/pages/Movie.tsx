import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useColorScheme } from "../components/navbar/Darkmode";

interface MovieType {
  id: number;
  title: string;
  release_date: string;
  runtime: number;
  mpaa_rating: string;
  description: string;
  imageUrl: string;
}

const Movie: React.FC = () => {
  const { isChecked } = useColorScheme();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<MovieType>({
    id: 0,
    title: "",
    release_date: "",
    runtime: 0,
    mpaa_rating: "",
    description: "",
    imageUrl: "",
  });
  let { id } = useParams<{ id: string }>();

  // useEffect(() => {
  //   let movies: Record<string, MovieType> = {
  //     "1": {
  //       id: 1,
  //       title: "The Godfather",
  //       release_date: "1972-03-24",
  //       runtime: 175,
  //       mpaa_rating: "R",
  //       description:
  //         "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  //       imageUrl: "https://img.monomax.me/-XnASaiSaflF2FV3NDZwMvnRo4k=/monomax-obj.obs.ap-southeast-2.myhuaweicloud.com/assets/fileupload/picture/the-godfather-508d945641aed.jpg",
  //     },
  //     "2": {
  //       id: 2,
  //       title: "The Shawshank Redemption",
  //       release_date: "1994-10-14",
  //       runtime: 142,
  //       mpaa_rating: "R",
  //       description:
  //         "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  //       imageUrl: "https://via.placeholder.com/300x150?text=The+Shawshank+Redemption",
  //     },
  //     "3": {
  //       id: 3,
  //       title: "The Dark Knight",
  //       release_date: "2010-07-16",
  //       runtime: 148,
  //       mpaa_rating: "PG-13",
  //       description:
  //         "A thief who enters the dreams of others to steal their secrets from their subconscious.",
  //       imageUrl: "https://via.placeholder.com/300x150?text=Inception",
  //     },
  //   };

  //   if (id && id in movies) {
  //     setMovie(movies[id]);
  //   } else {
  //     // Handle movie not found or default behavior
  //     console.error("Movie not found");
  //     navigate("/notfoundpage");
  //   }
  // }, [id, navigate]);


  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8080/movies/${id}`);
        if (!response.ok) {
          throw new Error('Movie not found');
        }
        const movieData: MovieType = await response.json();
        setMovie(movieData);
      } catch (error) {
        console.error(error);
        navigate("/notfoundpage");
      }
    };

    fetchMovie();
  }, [id, navigate]);

  return (
    <>
      <div className="container mx-auto absolute inset-[6rem]">
        <div className="text-center mb-[5rem]">
          <h2 className={`text-3xl font-bold mb-6 ${isChecked ? 'whiteText' : ''}`}>{movie.title}</h2>
        </div>
        <div className="mb-6">
          <div className=" grid grid-cols-2 sm:grid-cols-2 items-center">
            <div className="w-[300px] h-[300px] rounded-sm shadow-md mx-auto">
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className={`mx-auto w-[500px] h-[300px] ${isChecked ? 'whiteText' : ''}`}>
              <div className="text-back mb-4 ">
                {movie.release_date}, {movie.runtime} minutes, Rated{" "}
                {movie.mpaa_rating}
              </div>
              <div className="text-back mb-8">{movie.description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default Movie;
