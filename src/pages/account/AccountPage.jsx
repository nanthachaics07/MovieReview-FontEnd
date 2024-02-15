// import React from 'react'

// const Home = () => {
//   return (
//     <>
//       <div className="flex items-center justify-center ">
//         <h1>Home Page</h1>
//       </div>

//     </>
//   )
// }

// export default Home

import React from 'react';
// import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';

const movies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'The Godfather',
    description: 'An organized crime dynasty is aging patriarch transfers control of his clandestine empire to his reluctant son.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Add more movies as needed
];

const Movie = ({ title, description, imageUrl }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={imageUrl} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold text-center my-8">Welcome to Movie Time!</h1>
        <div className="grid grid-cols-3 gap-4">
          {movies.map(movie => (
            <Movie key={movie.id} title={movie.title} description={movie.description} imageUrl={movie.imageUrl} />
          ))}
        </div>
      </div>
    </>
    
  );
};

export default Home;
