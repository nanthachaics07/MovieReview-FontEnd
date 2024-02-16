import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  useEffect(() => {
    let myMovie: MovieType = {
      id: 1,
      title: "The Godfather",
      release_date: "1972-03-24",
      runtime: 175,
      mpaa_rating: "R",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      imageUrl: "https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg",
    };
    setMovie(myMovie);
  }, [id]);

  // useEffect(() => {
  //   // Simulating fetching movie details from an API
  //   const fetchMovie = async () => {
  //     try {
  //       // Replace this with actual fetch call to your API
  //       const response = await fetch(`your-api-endpoint/movies/${id}`);
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch movie");
  //       }
  //       const data = await response.json();
  //       setMovie(data); // assuming data is in the correct format
  //     } catch (error) {
  //       console.error("Error fetching movie:", error);
  //     }
  //   };

  //   fetchMovie();
  // }, [id]);


  return (
    <>
      <div className="container mx-auto absolute inset-[6rem]">
        <div className="text-center mb-[5rem]">
          <h2 className="text-3xl font-bold mb-6 text-back">{movie.title}</h2>
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
            <div className="text-back mx-auto w-[500px] h-[300px]">
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
