// import { release } from "os";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate, Outlet } from "react-router-dom";


interface Movie {
  id: number;
  title: string;
  release_date: string;
  mpaa_rating: string;
  description: string;
  imageUrl?: string; // Optional imageUrl property
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { id } = useParams<{ id: string }>(); // Get movie id from params
  const navigate = useNavigate();

  const [jwtToken, setJwtToken] = useState("");

  
  useEffect(() => {
    // Mock data for demonstration
    const moviesList = [
      {
        id: 1,
        title: "The Godfather",
        release_date: "1972-03-24",
        mpaa_rating: "R",
        description:
          "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        imageUrl: "https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg",
      },
      {
        id: 2,
        title: "The Shawshank Redemption",
        release_date: "1994-10-14",
        mpaa_rating: "R",
        description:
          "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        imageUrl: "https://via.placeholder.com/300x150?text=The+Shawshank+Redemption",
      },
      {
        id: 3,
        title: "The Dark Knight",
        release_date: "2008-07-18",
        mpaa_rating: "PG-13",
        description:
          "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        imageUrl: "https://via.placeholder.com/300x150?text=The+Dark+Knight",
      },
      {
        id: 4,
        title: "Schindler's List",
        release_date: "1993-12-15",
        mpaa_rating: "R",
        description:
          "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        imageUrl: "https://via.placeholder.com/300x150?text=Schindler's+List",
      },
      {
        id: 5,
        title: "The Lord of the Rings: The Return of the King",
        release_date: "2003-12-17",
        mpaa_rating: "PG-13",
        description:
          "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        imageUrl: "https://via.placeholder.com/300x150?text=The+Return+of+the+King",
      },
      {
        id: 6,
        title: "Pulp Fiction",
        release_date: "1994-10-14",
        mpaa_rating: "R",
        description:
          "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        imageUrl: "https://via.placeholder.com/300x150?text=Pulp+Fiction",
      },
      {
        id: 7,
        title: "Forrest Gump",
        release_date: "1994-07-06",
        mpaa_rating: "PG-13",
        description:
          "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        imageUrl: "https://via.placeholder.com/300x150?text=Forrest+Gump",
      },
      {
        id: 8,
        title: "Fight Club",
        release_date: "1999-10-15",
        mpaa_rating: "R",
        description:
          "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
        imageUrl: "https://via.placeholder.com/300x150?text=Fight+Club",
      },
      {
        id: 9,
        title: "Inception",
        release_date: "2010-07-16",
        mpaa_rating: "PG-13",
        description:
          "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        imageUrl: "https://via.placeholder.com/300x150?text=Inception",
      },
      {
        id: 10,
        title: "The Matrix",
        release_date: "1999-03-31",
        mpaa_rating: "R",
        description:
          "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        imageUrl: "https://via.placeholder.com/300x150?text=The+Matrix",
      },
      {
        id: 11,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        release_date: "2001-12-19",
        mpaa_rating: "PG-13",
        description:
          "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        imageUrl: "https://via.placeholder.com/300x150?text=The+Fellowship+of+the+Ring",
      },
      {
        id: 12,
        title: "The Lord of the Rings: The Two Towers",
        release_date: "2002-12-18",
        mpaa_rating: "PG-13",
        description:
          "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        imageUrl: "https://via.placeholder.com/300x150?text=The+Two+Towers",
      },
      {
        id: 13,
        title: "Star Wars: Episode IV - A New Hope",
        release_date: "1977-05-25",
        mpaa_rating: "PG",
        description:
          "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
        imageUrl: "https://via.placeholder.com/300x150?text=A+New+Hope",
      },
      {
        id: 14,
        title: "Goodfellas",
        release_date: "1990-09-19",
        mpaa_rating: "R",
        description:
          "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        imageUrl: "https://via.placeholder.com/300x150?text=Goodfellas",
      },
      {
        id: 15,
        title: "Saving Private Ryan",
        release_date: "1998-07-24",
        mpaa_rating: "R",
        description:
          "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        imageUrl: "https://via.placeholder.com/300x150?text=Saving+Private+Ryan",
      },
      {
        id: 16,
        title: "The Green Mile",
        release_date: "1999-12-10",
        mpaa_rating: "R",
        description:
          "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
        imageUrl: "https://via.placeholder.com/300x150?text=The+Green+Mile",
      },
      {
        id: 17,
        title: "The Silence of the Lambs",
        release_date: "1991-02-14",
        mpaa_rating: "R",
        description:
          "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        imageUrl: "https://via.placeholder.com/300x150?text=The+Silence+of+the+Lambs",
      },
      {
        id: 18,
        title: "The Departed",
        release_date: "2006-10-06",
        mpaa_rating: "R",
        description:
          "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        imageUrl: "https://via.placeholder.com/300x150?text=The+Departed",
      },
      {
        id: 19,
        title: "Gladiator",
        release_date: "2000-05-05",
        mpaa_rating: "R",
        description:
          "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        imageUrl: "https://via.placeholder.com/300x150?text=Gladiator",
      },
      {
        id: 20,
        title: "The Usual Suspects",
        release_date: "1995-09-15",
        mpaa_rating: "R",
        description:
          "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
        imageUrl: "https://via.placeholder.com/300x150?text=The+Usual+Suspects",
      },
      {
        id: 21,
        title: "Raiders of the Lost Ark",
        release_date: "1981-06-12",
        mpaa_rating: "PG",
        description:
          "In 1936, U.S. forces discover the Holy Ark, the nation'sTreasure, which must be deciphered and return to Arkham as the Ark of the Covenant.",
        imageUrl: "https://via.placeholder.com/300x150?text=Raiders+of+the+Lost+Ark",
      }
    ];
    setMovies(moviesList);
  }, [id]);



  const handleMovieClick = (movieId: number) => {
    console.log("jwtToken in handleMovieClick : = ", jwtToken);

    if (jwtToken !== "" ) {
      navigate(`/movies/${movieId}`);
    } else if (jwtToken === "" ) {
      navigate("/register");
    }
  }

  // const handleMovieClick = (movieId: number) => {
  //   if (localStorage.getItem('jwtToken')) {
  //     navigate(`/movies/${movieId}`);
  //   } else {
  //     navigate("/register");
  //   }
  // };

  return (
    <div className="container mx-auto absolute inset-[5.5rem]">
      <h2 className="text-3xl font-bold mb-6 text-back text-center text-white">
        Movie Review
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-[3rem]">
        {movies.map((movie) => (
          <div key={movie.id} className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200/80">
            <Link to={`/movies/${movie.id}`} onClick={() => handleMovieClick(movie.id)}>
              {movie.imageUrl && (
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="w-full h-64 object-cover mb-2 rounded-sm"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
              <p className="text-gray-700">{movie.release_date}</p>
              <p className="text-gray-700">{movie.mpaa_rating}</p>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Outlet 
          context={{jwtToken, setJwtToken}}
        />
      </div>
    </div>
  );
};

export default Movies;