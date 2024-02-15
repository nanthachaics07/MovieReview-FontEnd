
// import React from 'react';
// import MovieWallpaper from './images/godzilla-x-kong-the-7680x4320-15018.jpg'

// function HomePage() {

//   return (
//     <>
//       <div className=" w-full h-screen">
//         <img 
//           src={MovieWallpaper}
//           className="absolute inset-0 w-full h-full object-cover" 
//           alt="movie" 
//         />
//         <div className="flex justify-center items-center h-screen">
//           <div className="flex flex-col items-center relative">

//             <div className='text-center bg-black/75 rounded-lg p-4 relative'>

//               <h1 className="text-3xl font-bold text-white mb-4">
//                 Welcome to movie
//               </h1>
//               <div className="flex items-center">
//                 <input 
//                   autoComplete=""
//                   type="search" 
//                   name="search" 
//                   style={{ width: '350px' }}
//                   className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
//                             focus:outline-none focus:border-sky-500 focus:ring-sky-500 block 
//                             rounded-l-md sm:text-sm focus:ring-1" 
//                   placeholder="Search Movie" 
//                 />
//                 <input 
//                   type="submit" 
//                   value="Search" 
//                   className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-md" 
//                 />
//               </div>

//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;


// import React from 'react';
// import MovieWallpaper from './images/godzilla-x-kong-the-7680x4320-15018.jpg';

// function HomePage() {
//   return (

//       <div className="flex justify-center items-center h-screen">
//         <img 
//           src={MovieWallpaper}
//           className="absolute inset-0 w-full h-full object-cover" 
//           alt="movie" 
//         />
//         <div className="flex flex-col items-center relative bg-black/75 rounded-lg p-4">
          // <h1 className="text-3xl font-bold text-white mb-4">
          //   Welcome to movie
          // </h1>
          // <div className="flex items-center">
          //   <input 
          //     autoComplete=""
          //     type="search" 
          //     name="search" 
          //     style={{ width: '350px' }}
          //     className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
          //               focus:outline-none focus:border-sky-500 focus:ring-sky-500 block 
          //               rounded-l-md sm:text-sm focus:ring-1" 
          //     placeholder="Search Movie" 
          //   />
          //   <input 
          //     type="submit" 
          //     value="Search" 
          //     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-md" 
          //   />
//           </div>
//         </div>
//       </div>

//   );
// }

// export default HomePage;



import React from 'react';
// import { Link } from "react-router-dom";
import MovieWallpaper from './images/godzilla-x-kong-the-7680x4320-15018.jpg';

const SearchPage = () => {



  return (
    <div className="w-full h-scree">
      <img src={MovieWallpaper}
            className="sm:block absolute w-full h-full object-cover" alt="movie" />
      <div className='fixed top-0 left-0 w-full h-screen'>
          <div className="flex justify-center items-center h-screen">
            <div className='fixed w-full px-4 py-24 z-50'>
              <div className='max-w-[700px] mx-auto bg-black/75 text-white rounded-md'>
                <div className='max-w-[550px] mx-auto py-16'>
                  <h1 className="text-3xl font-bold text-white mb-4 text-center">
                    Welcome to movie
                  </h1>
                  <div className="flex items-center">
                    <input 
                      
                      type="search" 
                      name="search" 
                      style={{ width: '450px',zIndex: 1, color: 'black' }}
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
                                focus:outline-none focus:border-sky-500 focus:ring-sky-500 block 
                                rounded-md sm:text-sm focus:ring-1" 
                      placeholder="Search Movie" 
                    />
                    <input 
                      type="submit" 
                      value="Search" 
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-md cursor-pointer" 
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;