import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth/AuthContex";
import { useColorScheme } from "../components/navbar/Darkmode";

interface MovieType {
  id: number;
  title: string;
  release_date: string;
  runtime: string;
  mpaa_rating: string;
  description: string;
  imageUrl: string;
  rating: string;
  category: string;
  popularity: string;
  budget: number;
  revenue: number;
  Director: string;
  casting: string;
  Writers: string;
}

const Movie: React.FC = () => {
  const { isChecked } = useColorScheme();
  const navigate = useNavigate();
  const { jwtToken } = useAuth();

  const [movie, setMovie] = useState<MovieType>({
    id: 0,
    title: "",
    release_date: "",
    runtime: "",
    mpaa_rating: "",
    description: "",
    imageUrl: "",
    rating: "",
    category: "",
    popularity: "",
    budget: 0,
    revenue: 0,
    Director: "",
    casting: "",
    Writers: "",
  });
  let { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8080/movie/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          }
        });
        if (!response.ok) {
          throw new Error('Movie not found');
        }
        const movieData: MovieType = await response.json();
        console.log(movieData);
        setMovie(movieData);
      } catch (error) {
        console.error(error);
        navigate("/notfoundpage");
      }
    };

    fetchMovie();
  }, [id, navigate, jwtToken]);

  return (
    <>
      <div className="container mx-auto absolute inset-[6rem]">
        <div className="text-center mb-[5rem]">
          <h2 className={`text-3xl font-bold mb-6 ${isChecked ? 'whiteText' : ''}`}>{movie.title}</h2>
        </div>
        <div className="mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 items-center">
            <div className="w-[600px] h-[600px] rounded-sm shadow-md mx-auto">
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className={`mx-auto w-[500px] h-auto ${isChecked ? 'whiteText' : ''}`}>
              <div className="text-back mb-4">
                {movie.release_date}, {movie.runtime}, Rated {movie.mpaa_rating}
              </div>
              <div className="text-back mb-4">Rating: {movie.rating}</div>
              <div className="text-back mb-4">Category: {movie.category}</div>
              <div className="text-back mb-4">Popularity: {movie.popularity}</div>
              <div className="text-back mb-4">Budget: ${movie.budget.toLocaleString()}</div>
              <div className="text-back mb-4">Revenue: ${movie.revenue.toLocaleString()}</div>
              <div className="text-back mb-4">Director: {movie.Director}</div>
              <div className="text-back mb-4">Casting: {movie.casting}</div>
              <div className="text-back mb-8">Writers: {movie.Writers}</div>
              <div className="text-back">{movie.description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
